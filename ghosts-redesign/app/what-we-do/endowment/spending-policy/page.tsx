import Link from 'next/link'

export default function SpendingPolicy() {
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
        Spending Policy
      </h1>
      
      <p style={{ marginBottom: 'var(--space-md)' }}>
        Endowment distributions follow a conservative spending policy designed to maintain 
        real purchasing power over time. The current policy allows for annual distributions 
        of 3-5% of the trailing three-year average endowment value.
      </p>
      
      <p>
        Distributions are allocated to operating expenses and strategic reserves. In years 
        when investment returns significantly exceed the spending rate, excess returns may 
        be reinvested or directed to special initiatives at the board's discretion.
      </p>
    </section>
  )
}
