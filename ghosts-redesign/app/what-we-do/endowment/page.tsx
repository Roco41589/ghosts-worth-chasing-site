import Link from 'next/link'

export default function Endowment() {
  return (
    <>
      <section className="section section--narrow">
        <Link 
          href="/what-we-do" 
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
          ← Back to What We Do
        </Link>
        
        <h1 style={{ color: 'var(--color-deep-navy)', marginBottom: 'var(--space-sm)' }}>
          Endowment
        </h1>
        
        <p style={{ 
          fontSize: '18px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          fontWeight: 300,
          marginBottom: 'var(--space-lg)',
        }}>
          A portion of contributed capital is reserved for perpetual operation. These funds 
          are invested conservatively and distributed according to a formal spending policy.
        </p>

        <div style={{ 
          marginBottom: 'var(--space-lg)',
          padding: 'var(--space-md)',
          borderLeft: '2px solid var(--color-sky-blue)',
          background: 'rgba(163, 201, 226, 0.05)',
        }}>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
            <strong style={{ color: 'var(--color-deep-navy)' }}>Current endowment size:</strong> Disclosed annually
          </p>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
            <strong style={{ color: 'var(--color-deep-navy)' }}>Target allocation:</strong> 30% of total capital
          </p>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 0 }}>
            <strong style={{ color: 'var(--color-deep-navy)' }}>Investment approach:</strong> Conservative, diversified portfolio
          </p>
        </div>
      </section>

      <section className="section section--narrow">
        <h2 style={{ 
          fontSize: '20px',
          marginBottom: 'var(--space-sm)',
          color: 'var(--color-deep-navy)',
        }}>
          Purpose
        </h2>
        
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

      <section className="section section--narrow">
        <h2 style={{ 
          fontSize: '20px',
          marginBottom: 'var(--space-sm)',
          color: 'var(--color-deep-navy)',
        }}>
          Investment Policy
        </h2>
        
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

      <section className="section section--narrow">
        <h2 style={{ 
          fontSize: '20px',
          marginBottom: 'var(--space-sm)',
          color: 'var(--color-deep-navy)',
        }}>
          Spending Policy
        </h2>
        
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

      <section className="section section--narrow">
        <h2 style={{ 
          fontSize: '20px',
          marginBottom: 'var(--space-sm)',
          color: 'var(--color-deep-navy)',
        }}>
          Transparency & Reporting
        </h2>
        
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

      <section className="section section--narrow">
        <h2 style={{ 
          fontSize: '20px',
          marginBottom: 'var(--space-sm)',
          color: 'var(--color-deep-navy)',
        }}>
          Philosophy
        </h2>
        
        <p>
          The endowment is not a growth vehicle. It is institutional infrastructure. Its purpose 
          is to ensure the foundation can honor commitments, maintain independence, and operate 
          beyond the tenure of any individual board member or donor. We optimize for stability, 
          not returns.
        </p>
      </section>
    </>
  )
}
