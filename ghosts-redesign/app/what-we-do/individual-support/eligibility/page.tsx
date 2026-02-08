import Link from 'next/link'

export default function Eligibility() {
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
        Eligibility Criteria
      </h1>
      
      <p style={{ marginBottom: 'var(--space-sm)' }}>
        Eligibility is determined case-by-case based on:
      </p>
      
      <ul style={{ 
        marginLeft: '24px', 
        marginBottom: 'var(--space-md)',
        color: 'var(--color-text)',
        lineHeight: 1.7,
      }}>
        <li>Demonstrated need</li>
        <li>Absence of alternative institutional support</li>
        <li>Clarity of intended use</li>
      </ul>
      
      <p>
        Funds are distributed as unrestricted grants. No repayment is required. 
        No ongoing reporting is required.
      </p>
    </section>
  )
}
