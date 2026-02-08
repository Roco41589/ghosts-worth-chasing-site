import Link from 'next/link'

export default function Purpose() {
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
        Purpose
      </h1>
      
      <p style={{ marginBottom: 'var(--space-sm)' }}>
        The endowment exists to ensure:
      </p>
      
      <ul style={{ 
        marginLeft: '24px', 
        marginBottom: 'var(--space-md)',
        color: 'var(--color-text)',
        lineHeight: 1.7,
      }}>
        <li>Organizational continuity beyond founding leadership</li>
        <li>Independence from fundraising pressure</li>
        <li>Stable funding for long-term commitments</li>
      </ul>
      
      <p>
        Endowment funds are governed separately from operating capital. Investment allocation 
        and withdrawal rates are published annually in the Resources section.
      </p>
    </section>
  )
}
