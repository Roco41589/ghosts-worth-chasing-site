import Link from 'next/link'

export default function InvestmentPolicy() {
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
        Investment Policy
      </h1>
      
      <p style={{ marginBottom: 'var(--space-sm)' }}>
        The endowment is managed with the following principles:
      </p>
      
      <ul style={{ 
        marginLeft: '24px', 
        marginBottom: 'var(--space-md)',
        color: 'var(--color-text)',
        lineHeight: 1.7,
      }}>
        <li>Capital preservation over growth maximization</li>
        <li>Diversification across asset classes and geographies</li>
        <li>Low-cost index funds and institutional-grade vehicles</li>
        <li>No speculative positions or concentrated bets</li>
      </ul>
      
      <p>
        The Investment Committee reviews asset allocation quarterly and rebalances as needed. 
        Full investment guidelines are available in the governance documents.
      </p>
    </section>
  )
}
