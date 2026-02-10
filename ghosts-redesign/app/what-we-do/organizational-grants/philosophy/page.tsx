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
        ← Our Funding Model
      </Link>
      
      <h1 style={{ color: 'var(--color-deep-navy)', marginBottom: 'var(--space-md)' }}>
        Grantmaking Philosophy
      </h1>
      
      <p>
        Most philanthropy optimizes for measurable outcomes on short timelines. This creates 
        structural pressure toward visible, fundable work at the expense of foundational capacity. 
        Organizational grants exist to support institutions willing to do necessary work that 
        cannot be easily quantified or celebrated.
      </p>

      <p>
        The foundation operates on long horizons. Capital is deployed deliberately. Decisions 
        prioritize alignment and durability over urgency or visibility.
      </p>

      <p>
        Grants support institutional capacity, not specific projects. The foundation does not 
        impose donor-directed mandates or require alignment with narrow programmatic goals.
      </p>

      <p>
        Organizational grants function as near-term mission support. The endowment functions as 
        a long-term sustainability engine. The endowment remains structurally prioritized over time.
      </p>
    </section>
  )
}
