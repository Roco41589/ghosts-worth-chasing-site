// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    console.log('Payment successful:', {
      sessionId: session.id,
      customerEmail: session.customer_details?.email,
      amount: session.amount_total,
    })

    // TODO: Send email with PDF link
    // You can integrate with Resend or SendGrid here
    // Example:
    // await sendEbookEmail({
    //   to: session.customer_details?.email,
    //   pdfUrl: process.env.EBOOK_PDF_URL
    // })
  }

  return NextResponse.json({ received: true })
}
