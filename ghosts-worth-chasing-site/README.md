# Ghosts Worth Chasing - Website

This is the official website for Ghosts Worth Chasing foundation.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Static export (no server required)

## Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import this repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Once deployed, go to Settings → Domains to add ghostsworthchasing.org

### Option 2: Deploy via GitHub

1. Create a new repository on GitHub
2. Upload all these files to the repository
3. Go to Vercel and click "Import Project"
4. Select your GitHub repository
5. Deploy

## Local Development (Optional)

If you want to preview locally before deploying:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Updating Content

All page content is in the `/app` directory:
- `/app/page.tsx` - Home page
- `/app/what-we-do/page.tsx` - What We Do page
- `/app/impact/page.tsx` - Impact page
- `/app/hall-of-ghosts/page.tsx` - Hall of Ghosts page
- `/app/resources/page.tsx` - Resources page
- `/app/about/page.tsx` - About page
- `/app/donate/page.tsx` - Donate page

Edit these files to update content. They're written in TypeScript/React but the text content is straightforward to edit.

## Questions?

Contact the developer through the Claude conversation where this was created.
