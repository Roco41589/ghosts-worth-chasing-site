import Link from 'next/link'

export default function Philosophy() {
  return (
    <section className="section section--narrow">
      <Link 
        href="/what-we-do/endowment" 
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
        ← Back to Endowment
      </Link>
      
      <h1 style={{ color: 'var(--color-deep-navy)', marginBottom: 'var(--space-md)' }}>
        Philosophy
      </h1>
      
      <p>
        The endowment is not a growth vehicle. It is institutional infrastructure. Its purpose 
        is to ensure the foundation can honor commitments, maintain independence, and operate 
        beyond the tenure of any individual board member or donor. We optimize for stability, 
        not returns.
      </p>
    </section>
  )
}
