import Link from 'next/link'

export default function Philosophy() {
  return (
    <section className="section section--narrow">
      <Link 
        href="/what-we-do/individual-support" 
        style={{ 
          fontSize: '14px',
          color: 'var(--color-teal-grey)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: 'var(--space-md)',
        }}
      >
        ← Back to Individual Support
      </Link>
      
      <h1 style={{ color: 'var(--color-deep-navy)', marginBottom: 'var(--space-md)' }}>
        Philosophy
      </h1>
      
      <p>
        Individual Support grants acknowledge that structural transitions—career changes, 
        relocation, family care responsibilities, health challenges—often occur when traditional 
        safety nets are unavailable or inadequate. We do not attempt to solve these challenges 
        systemically. We provide capital to individuals navigating them personally.
      </p>
    </section>
  )
}
