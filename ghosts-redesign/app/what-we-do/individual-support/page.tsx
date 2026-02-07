import Link from 'next/link'

export default function IndividualSupport() {
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
          Individual Support
        </h1>
        
        <p style={{ 
          fontSize: '18px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          fontWeight: 300,
          marginBottom: 'var(--space-lg)',
        }}>
          We provide direct financial assistance to individuals experiencing career transition, 
          personal hardship, or structural disadvantage. This is not emergency relief. 
          Applications are reviewed quarterly.
        </p>

        <div style={{ 
          marginBottom: 'var(--space-lg)',
          padding: 'var(--space-md)',
          borderLeft: '2px solid var(--color-sky-blue)',
          background: 'rgba(163, 201, 226, 0.05)',
        }}>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
            <strong style={{ color: 'var(--color-deep-navy)' }}>Typical award range:</strong> $5,000–$25,000
          </p>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
            <strong style={{ color: 'var(--color-deep-navy)' }}>Annual budget allocation:</strong> 30% of distributable funds
          </p>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 0 }}>
            <strong style={{ color: 'var(--color-deep-navy)' }}>Review cycle:</strong> Quarterly
          </p>
        </div>
      </section>

      <section className="section section--narrow">
        <h2 style={{ 
          fontSize: '20px',
          marginBottom: 'var(--space-sm)',
          color: 'var(--color-deep-navy)',
        }}>
          Eligibility Criteria
        </h2>
        
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

      <section className="section section--narrow">
        <h2 style={{ 
          fontSize: '20px',
          marginBottom: 'var(--space-sm)',
          color: 'var(--color-deep-navy)',
        }}>
          Application Process
        </h2>
        
        <p style={{ marginBottom: 'var(--space-sm)' }}>
          Applications are accepted on a rolling basis and reviewed quarterly. The process is 
          intentionally straightforward and does not require extensive documentation.
        </p>
        
        <p style={{ 
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          padding: 'var(--space-sm)',
          background: 'rgba(163, 201, 226, 0.05)',
          border: '1px solid var(--color-border)',
        }}>
          Note: Applications will open once the foundation's 501(c)(3) status is confirmed. 
          Expected availability: Q2 2025.
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
          Individual Support grants acknowledge that structural transitions—career changes, 
          relocation, family care responsibilities, health challenges—often occur when traditional 
          safety nets are unavailable or inadequate. We do not attempt to solve these challenges 
          systemically. We provide capital to individuals navigating them personally.
        </p>
      </section>
    </>
  )
}
