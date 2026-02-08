import Link from 'next/link'

export default function Application() {
  return (
    <section className="section section--narrow">
      <Link 
        href="/what-we-do/organizational-grants" 
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
        ← Back to Organizational Grants
      </Link>
      
      <h1 style={{ color: 'var(--color-deep-navy)', marginBottom: 'var(--space-md)' }}>
        Application Process
      </h1>
      
      <p style={{ marginBottom: 'var(--space-sm)' }}>
        Organizations may submit letters of inquiry at any time. The review process typically 
        takes 60-90 days from initial inquiry to funding decision.
      </p>
      
      <p style={{ 
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        fontStyle: 'italic',
        padding: 'var(--space-sm)',
        background: 'rgba(163, 201, 226, 0.05)',
        border: '1px solid var(--color-border)',
      }}>
        Note: Grantmaking will commence once the foundation's 501(c)(3) status is confirmed. 
        Expected availability: Q2 2025.
      </p>
    </section>
  )
}
