# Ghosts Worth Chasing - Redesigned Website

## Design System

**Typography:**
- Hanken Grotesk (primary - body text, structure)
- Editorial hierarchy with restrained sizing

**Color Palette - Midnight Clarity:**
- Deep Navy (#0B1D3A) - Primary background/anchor
- Mist White (#F6F9FC) - Body backgrounds/negative space
- Sky Blue (#A3C9E2) - Subtle accents, dividers
- Teal Grey (#7CAAB0) - Secondary text, borders
- Slate Ink (#1A2E3B) - Primary text

**Design Philosophy:**
- Editorial, institutional, restrained
- Structure over decoration
- Clarity over cleverness
- Mobile-responsive

## Deployment to Vercel

### If Starting Fresh:
1. Create new repository on GitHub
2. Upload all files
3. Import to Vercel
4. Set Root Directory to: `./` (if needed)
5. Deploy

### If Updating Existing:
1. Go to your GitHub repository
2. Delete old files
3. Upload all new files from this folder
4. Vercel will automatically redeploy
5. Wait 2-3 minutes

## Project Structure

- `/app` - All pages and layouts
- `/public` - Logo and static assets
- `/app/globals.css` - Design system styles
- `/app/layout.tsx` - Site-wide header and footer

## Pages

- Home (`/app/page.tsx`)
- What We Do (`/app/what-we-do/page.tsx`)
- Impact (`/app/impact/page.tsx`)
- Hall of Ghosts (`/app/hall-of-ghosts/page.tsx`)
- Resources (`/app/resources/page.tsx`)
- About (`/app/about/page.tsx`)
- Donate/Support (`/app/donate/page.tsx`)

## Local Development (Optional)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Updates

To update content:
1. Edit the relevant `.tsx` file
2. Commit to GitHub
3. Vercel auto-deploys

Or ask Claude to make changes and provide updated files.
