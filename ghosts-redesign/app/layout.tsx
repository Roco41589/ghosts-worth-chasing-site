import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Ghosts Worth Chasing',
  description: 'An independent foundation supporting individuals in transition, mission-aligned organizations, and long-term institutional continuity.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          borderBottom: '1px solid var(--color-border)',
          padding: '16px 24px',
          background: 'var(--color-mist-white)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}>
          <nav style={{
            maxWidth: 'var(--max-content-width)',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}>
            <Link href="/" style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              border: 'none',
              flexShrink: 0,
            }}>
              <Image 
                src="/logo.svg" 
                alt="Ghosts Worth Chasing" 
                width={40}
                height={40}
                style={{
                  width: '40px',
                  height: 'auto',
                }}
              />
              <span style={{
                fontSize: '18px',
                fontWeight: 500,
                color: 'var(--color-deep-navy)',
                whiteSpace: 'nowrap',
              }}>
                Ghosts Worth Chasing
              </span>
            </Link>
            <div style={{
              display: 'flex',
              gap: '24px',
              fontSize: '15px',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}>
              <Link href="/what-we-do" style={{ whiteSpace: 'nowrap' }}>What We Do</Link>
              <Link href="/impact" style={{ whiteSpace: 'nowrap' }}>Impact</Link>
              <Link href="/hall-of-ghosts" style={{ whiteSpace: 'nowrap' }}>Hall of Ghosts</Link>
              <Link href="/resources" style={{ whiteSpace: 'nowrap' }}>Resources</Link>
              <Link href="/about" style={{ whiteSpace: 'nowrap' }}>About</Link>
              <Link href="/donate" style={{ whiteSpace: 'nowrap' }}>Donate</Link>
            </div>
          </nav>
        </header>
        
        <main>{children}</main>

<Footer />
   
      </body>
    </html>
  )
}
