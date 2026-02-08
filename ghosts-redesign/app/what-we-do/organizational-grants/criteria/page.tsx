import Link from 'next/link'

export default function Criteria() {
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
        Selection Criteria
      </h1>
      
      <p style={{ marginBottom: 'var(--space-sm)' }}>
        We prioritize organizations that are:
      </p>
      
      <ul style={{ 
        marginLeft: '24px', 
        marginBottom: 'var(--space-md)',
        color: 'var(--color-text)',
        lineHeight: 1.7,
      }}>
        <li>Under-resourced relative to mission complexity</li>
        <li>Operating with intellectual honesty</li>
        <li>Building durable infrastructure, not chasing visibility</li>
      </ul>
      
      <p>
        Grants are made on a rolling basis. Applications are reviewed by an external 
        advisory committee comprised of practitioners with domain expertise.
      </p>
    </section>
  )
}
