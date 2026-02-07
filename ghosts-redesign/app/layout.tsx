import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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
        
        <footer style={{
          borderTop: '1px solid var(--color-border)',
          background: 'var(--color-deep-navy)',
          color: 'var(--color-mist-white)',
          padding: 'var(--space-lg) var(--space-md)',
          marginTop: 'var(--space-xl)',
        }}>
          <div style={{
            maxWidth: 'var(--max-content-width)',
            margin: '0 auto',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-md)',
              marginBottom: 'var(--space-lg)',
            }}>
              <div>
                <h4 style={{ 
                  marginBottom: '16px', 
                  fontSize: '14px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  color: 'var(--color-sky-blue)',
                  fontWeight: 500,
                }}>
                  Ghosts Worth Chasing
                </h4>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'var(--color-teal-grey)',
                  lineHeight: 1.6,
                  marginBottom: '8px',
                }}>
                  An independent foundation supporting individuals, organizations, and long-term institutional continuity.
                </p>
                <p style={{ 
                  fontSize: '13px', 
                  color: 'var(--color-teal-grey)',
                  marginBottom: '4px',
                }}>
                  Foundation in formation
                </p>
                <p style={{ 
                  fontSize: '13px', 
                  color: 'var(--color-teal-grey)',
                }}>
                  501(c)(3) application pending
                </p>
              </div>
              
              <div>
                <h4 style={{ 
                  marginBottom: '16px', 
                  fontSize: '14px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  color: 'var(--color-sky-blue)',
                  fontWeight: 500,
                }}>
                  Navigation
                </h4>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '8px', 
                  fontSize: '14px',
                }}>
                  <Link href="/" style={{ color: 'var(--color-mist-white)', border: 'none' }}>Home</Link>
                  <Link href="/what-we-do" style={{ color: 'var(--color-mist-white)', border: 'none' }}>What We Do</Link>
                  <Link href="/impact" style={{ color: 'var(--color-mist-white)', border: 'none' }}>Impact</Link>
                  <Link href="/hall-of-ghosts" style={{ color: 'var(--color-mist-white)', border: 'none' }}>Hall of Ghosts</Link>
                  <Link href="/resources" style={{ color: 'var(--color-mist-white)', border: 'none' }}>Resources</Link>
                  <Link href="/about" style={{ color: 'var(--color-mist-white)', border: 'none' }}>About</Link>
                  <Link href="/donate" style={{ color: 'var(--color-mist-white)', border: 'none' }}>Donate</Link>
                </div>
              </div>
              
              <div>
                <h4 style={{ 
                  marginBottom: '16px', 
                  fontSize: '14px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  color: 'var(--color-sky-blue)',
                  fontWeight: 500,
                }}>
                  Contact
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  <a 
                    href="mailto:contact@ghostsworthchasing.org" 
                    style={{ 
                      border: 'none',
                      color: 'var(--color-mist-white)',
                    }}
                  >
                    contact@ghostsworthchasing.org
                  </a>
                </p>
              </div>
            </div>
            
            <div style={{
              paddingTop: 'var(--space-md)',
              borderTop: '1px solid var(--color-teal-grey)',
              fontSize: '13px',
              color: 'var(--color-teal-grey)',
              opacity: 0.8,
            }}>
              © {new Date().getFullYear()} Ghosts Worth Chasing. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
