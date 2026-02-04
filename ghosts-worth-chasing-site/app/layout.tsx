import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ghosts Worth Chasing',
  description: 'An independent foundation supporting individuals in transition, mission-aligned organizations, and long-term institutional continuity.',
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
          padding: '24px 80px',
          position: 'sticky',
          top: 0,
          background: 'white',
          zIndex: 1000,
        }}>
          <nav style={{
            maxWidth: 'var(--max-content-width)',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Link href="/" style={{ 
              fontSize: '20px', 
              fontWeight: 500,
              border: 'none',
            }}>
              Ghosts Worth Chasing
            </Link>
            <div style={{
              display: 'flex',
              gap: '32px',
              fontSize: '16px',
            }}>
              <Link href="/what-we-do">What We Do</Link>
              <Link href="/impact">Impact</Link>
              <Link href="/hall-of-ghosts">Hall of Ghosts</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/about">About</Link>
              <Link href="/donate">Donate</Link>
            </div>
          </nav>
        </header>
        
        <main>{children}</main>
        
        <footer style={{
          borderTop: '1px solid var(--color-border)',
          padding: 'var(--space-lg)',
          marginTop: 'var(--space-xl)',
        }}>
          <div style={{
            maxWidth: 'var(--max-content-width)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-md)',
          }}>
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Ghosts Worth Chasing
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                Foundation in formation
              </p>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                501(c)(3) application pending
              </p>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Navigation
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                <Link href="/what-we-do">What We Do</Link>
                <Link href="/impact">Impact</Link>
                <Link href="/hall-of-ghosts">Hall of Ghosts</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/about">About</Link>
                <Link href="/donate">Donate</Link>
              </div>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Contact
              </h4>
              <p style={{ fontSize: '14px' }}>
                <a href="mailto:contact@ghostsworthchasing.org" style={{ border: 'none' }}>
                  contact@ghostsworthchasing.org
                </a>
              </p>
            </div>
          </div>
          
          <div style={{
            maxWidth: 'var(--max-content-width)',
            margin: '48px auto 0',
            paddingTop: '32px',
            borderTop: '1px solid var(--color-border)',
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
          }}>
            © {new Date().getFullYear()} Ghosts Worth Chasing. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
