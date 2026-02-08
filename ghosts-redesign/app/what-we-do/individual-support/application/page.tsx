import Link from 'next/link'

export default function Application() {
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
        Application Process
      </h1>
      
      <p style={{ marginBottom: 'var(--space-sm)' }}>
        Applications are accepted on a rolling basis and reviewed quarterly. The process is 
        intentionally straightforward and does not require extensive documentation.
      </p>
      
      <p style={{ 
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        fontStyle: 'italic',
        padding: 'var(--space-sm)',
        background: 'rgba(163, 201, 226, 0.05)',
        border: '1px solid var(--color-border)',
      }}>
        Note: Applications will open once the foundation's 501(c)(3) status is confirmed. 
        Expected availability: Q2 2025.
      </p>
    </section>
  )
}
