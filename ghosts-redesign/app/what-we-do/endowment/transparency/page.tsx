import Link from 'next/link'

export default function Transparency() {
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
        Transparency & Reporting
      </h1>
      
      <p style={{ marginBottom: 'var(--space-sm)' }}>
        The following information is published annually:
      </p>
      
      <ul style={{ 
        marginLeft: '24px', 
        marginBottom: 'var(--space-md)',
        color: 'var(--color-text)',
        lineHeight: 1.7,
      }}>
        <li>Total endowment value</li>
        <li>Asset allocation by category</li>
        <li>Investment returns (gross and net of fees)</li>
        <li>Annual distributions and spending rate</li>
      </ul>
      
      <p>
        These reports are available in the Resources section. Audited financial statements 
        are published following completion of the annual audit process.
      </p>
    </section>
  )
}
