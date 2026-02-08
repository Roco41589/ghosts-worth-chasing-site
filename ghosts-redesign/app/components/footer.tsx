import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-slate-ink)',
      background: 'var(--color-mist-white)',
      marginTop: 'var(--space-xl)',
    }}>
      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: 'var(--space-xl) var(--space-md)',
      }}>
        {/* Main Footer Content - Two Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-xl)',
          marginBottom: 'var(--space-xl)',
        }}>
          {/* Left Column - Newsletter Signup (Placeholder for now) */}
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: 'var(--space-sm)',
            }}>
              Stay Connected
            </h3>
            <p style={{
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-md)',
              lineHeight: 1.6,
            }}>
              Updates on foundation operations will be available once 501(c)(3) status is confirmed.
            </p>
          </div>

          {/* Right Column - Navigation Links */}
          <div>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'flex-end',
            }}>
              <Link 
                href="/what-we-do" 
                style={{ 
                  fontSize: '16px',
                  color: 'var(--color-slate-ink)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                What We Do
              </Link>
              <Link 
                href="/about" 
                style={{ 
                  fontSize: '16px',
                  color: 'var(--color-slate-ink)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                About
              </Link>
              <Link 
                href="/resources" 
                style={{ 
                  fontSize: '16px',
                  color: 'var(--color-slate-ink)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Resources
              </Link>
              <a 
                href="mailto:contact@ghostsworthchasing.org" 
                style={{ 
                  fontSize: '16px',
                  color: 'var(--color-slate-ink)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr style={{
          border: 'none',
          borderTop: '1px solid var(--color-border)',
          margin: 'var(--space-lg) 0',
        }} />

        {/* Bottom Row - Logo/Name and Copyright/Social */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          {/* Foundation Name */}
          <div>
            <h2 style={{
              fontFamily: 'Regika, serif',
              fontSize: '32px',
              color: 'var(--color-deep-navy)',
              margin: 0,
              lineHeight: 1,
            }}>
              Ghosts Worth Chasing
            </h2>
          </div>

          {/* Copyright and Social Links */}
          <div style={{
            textAlign: 'right',
          }}>
            <p style={{
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              marginBottom: '12px',
            }}>
              © {new Date().getFullYear()} Ghosts Worth Chasing
            </p>
            {/* Social icons placeholder - add when you have social accounts */}
            {/* <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'flex-end',
            }}>
              Social icons would go here
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer nav {
            align-items: flex-start !important;
          }
          footer > div > div:last-child {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          footer > div > div:last-child > div:last-child {
            text-align: left !important;
            margin-top: 16px;
          }
        }
      `}</style>
    </footer>
  )
}
