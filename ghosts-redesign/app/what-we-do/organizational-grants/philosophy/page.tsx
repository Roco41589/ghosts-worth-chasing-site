import Link from 'next/link'

export default function Philosophy() {
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
        Philosophy
      </h1>
      
      <p>
        Most philanthropy optimizes for measurable outcomes on short timelines. This creates 
        structural pressure toward visible, fundable work at the expense of foundational capacity. 
        Organizational grants exist to support institutions willing to do necessary work that 
        cannot be easily quantified or celebrated.
      </p>
    </section>
  )
}

