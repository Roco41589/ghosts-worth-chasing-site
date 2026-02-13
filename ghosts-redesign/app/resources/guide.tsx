# Stripe eBook Integration - Setup Guide

## Overview
This integration allows you to sell your eBook directly from ghostsworthchasing.org with automatic PDF delivery.

## Files Created
1. `.env.local.example` - Environment variables template
2. `app/api/checkout/route.ts` - Creates Stripe checkout sessions
3. `app/api/webhook/route.ts` - Handles payment confirmations
4. `app/resources/guide/page.tsx` - eBook sales page
5. `app/resources/guide/success/page.tsx` - Post-purchase page

---

## Setup Steps

### 1. Install Stripe Dependencies

```bash
npm install stripe @stripe/stripe-js
```

### 2. Create Stripe Account

1. Go to https://stripe.com
2. Sign up for an account
3. Complete business verification (can use test mode first)

### 3. Get Your API Keys

**Test Keys (for development):**
1. Go to https://dashboard.stripe.com/test/apikeys
2. Copy "Publishable key" (starts with `pk_test_`)
3. Copy "Secret key" (starts with `sk_test_`)

**Live Keys (for production - after testing):**
1. Go to https://dashboard.stripe.com/apikeys
2. Copy "Publishable key" (starts with `pk_live_`)
3. Copy "Secret key" (starts with `sk_live_`)

### 4. Create a Product in Stripe

1. Go to https://dashboard.stripe.com/products
2. Click "Add product"
3. Fill in:
   - **Name:** "The Transition Guide"
   - **Description:** "A practical handbook for navigating life transitions"
   - **Pricing:** One-time payment, $10
4. Save the product
5. Copy the **Price ID** (starts with `price_`)

### 5. Set Up Environment Variables

Create `.env.local` in your project root:

```bash
# Stripe API Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE

# Product Settings
NEXT_PUBLIC_EBOOK_PRICE_ID=price_YOUR_PRICE_ID_HERE
NEXT_PUBLIC_EBOOK_PDF_URL=/path-to-your-ebook.pdf
```

**Important:** Add `.env.local` to your `.gitignore` (should already be there)

### 6. Upload Your PDF

Option A: Store in `/public/ebooks/`
```
/public/ebooks/transition-guide.pdf
NEXT_PUBLIC_EBOOK_PDF_URL=/ebooks/transition-guide.pdf
```

Option B: Use cloud storage (Vercel Blob, S3, etc.)
```
NEXT_PUBLIC_EBOOK_PDF_URL=https://your-storage.com/ebook.pdf
```

### 7. Set Up Webhook (For Production)

1. Go to https://dashboard.stripe.com/webhooks
2. Click "Add endpoint"
3. Enter: `https://ghostsworthchasing.org/api/webhook`
4. Select events: `checkout.session.completed`
5. Copy the **Signing secret** (starts with `whsec_`)
6. Add to your environment variables

### 8. Add to Vercel (Production)

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add each variable:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_EBOOK_PRICE_ID`
   - `NEXT_PUBLIC_EBOOK_PDF_URL`

---

## File Structure

Place files in your project:

```
your-project/
├── app/
│   ├── api/
│   │   ├── checkout/
│   │   │   └── route.ts          (from create-checkout-route.ts)
│   │   └── webhook/
│   │       └── route.ts          (from webhook-route.ts)
│   └── resources/
│       └── guide/
│           ├── page.tsx          (from ebook-page.tsx)
│           └── success/
│               └── page.tsx      (from success-page.tsx)
├── public/
│   └── ebooks/
│       └── transition-guide.pdf  (your PDF)
└── .env.local                    (your secrets)
```

---

## Testing

### Test Mode (Using Test Keys):

1. Use test credit card: `4242 4242 4242 4242`
2. Any future expiration date
3. Any 3-digit CVC
4. Any ZIP code

### What to Test:

- [ ] Sales page loads correctly
- [ ] "Purchase Guide" button works
- [ ] Stripe checkout opens
- [ ] Test payment processes
- [ ] Redirects to success page
- [ ] Download button works
- [ ] PDF downloads correctly

---

## Going Live

1. **Switch to Live Keys:**
   - Replace test keys with live keys in Vercel
   - Update webhook endpoint to use live mode

2. **Verify Webhook:**
   - Send a test event from Stripe dashboard
   - Check Vercel logs to confirm receipt

3. **Test One Real Purchase:**
   - Use a real card (yours)
   - Verify entire flow works
   - Refund the test purchase if needed

4. **Enable Stripe Tax (Optional):**
   - Go to Stripe Tax settings
   - Enable automatic tax calculation
   - Stripe handles sales tax for you

---

## Nonprofit Discount

Once you have 501(c)(3) status:

1. Go to https://stripe.com/nonprofits
2. Apply for nonprofit pricing
3. Get reduced rate: 2.2% + $0.30 (instead of 2.9% + $0.30)
4. Saves you ~$70 per $10,000 in sales

---

## Email Delivery (Future Enhancement)

Currently: Users download from success page
Future: Automatic email with PDF attachment

Options to add later:
- Resend (free tier: 100 emails/day)
- SendGrid (free tier: 100 emails/day)
- AWS SES (very cheap)

Add to webhook handler when ready.

---

## Troubleshooting

**"No such price" error:**
- Check NEXT_PUBLIC_EBOOK_PRICE_ID is correct
- Verify price exists in Stripe dashboard

**Webhook not receiving events:**
- Check webhook URL matches exactly
- Verify STRIPE_WEBHOOK_SECRET is correct
- Check Vercel logs for errors

**PDF not downloading:**
- Verify NEXT_PUBLIC_EBOOK_PDF_URL is accessible
- Check file exists in /public/ebooks/

**Environment variables not working:**
- Redeploy on Vercel after adding variables
- Check they're set in correct environment (Production/Preview)

---

## Support

Questions? Email roconnor@ghostsworthchasing.org
