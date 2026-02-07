import Link from 'next/link'

export default function OrganizationalGrants() {
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
          Organizational Grants
        </h1>
        
        <p style={{ 
          fontSize: '18px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          fontWeight: 300,
          marginBottom: 'var(--space-lg)',
        }}>
          We fund aligned nonprofits working on long-horizon challenges where traditional 
          philanthropy is poorly suited. Grants are multi-year and support institutional capacity, 
          not specific projects.
        </p>

        <div style={{ 
          marginBottom: 'var(--space-lg)',
          padding: 'var(--space-md)',
          borderLeft: '2px solid var(--color-sky-blue)',
          background: 'rgba(163, 201, 226, 0.05)',
        }}>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
            <strong style={{ color: 'var(--color-deep-navy)' }}>Typical award range:</strong> $50,000–$200,000 over 2–3 years
          </p>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
            <strong style={{ color: 'var(--color-deep-navy)' }}>Annual budget allocation:</strong> 40% of distributable funds
          </p>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 0 }}>
            <strong style={{ color: 'var(--color-deep-navy)' }}>Review process:</strong> Rolling basis with external advisory committee
          </p>
        </div>
      </section>

      <section className="section section--narrow">
        <h2 style={{ 
          fontSize: '20px',
          marginBottom: 'var(--space-sm)',
          color: 'var(--color-deep-navy)',
        }}>
          Selection Criteria
        </h2>
        
        <p style={{ marginBottom: 'var(--space-sm)' }}>
          We prioritize organizations that are:
        </p>
        
        <ul style={{ 
          marginLeft: '24px', 
          marginBottom: 'var(--space-md)',
          color: 'var(--color-text)',
          lineHeight: 1.7,
        }}>
          <li>Under-resourced relative to mission complexity</li>
          <li>Operating with intellectual honesty</li>
          <li>Building durable infrastructure, not chasing visibility</li>
        </ul>
        
        <p>
          Grants are made on a rolling basis. Applications are reviewed by an external 
          advisory committee comprised of practitioners with domain expertise.
        </p>
      </section>

      <section className="section section--narrow">
        <h2 style={{ 
          fontSize: '20px',
          marginBottom: 'var(--space-sm)',
          color: 'var(--color-deep-navy)',
        }}>
          Grant Structure
        </h2>
        
        <p style={{ marginBottom: 'var(--space-sm)' }}>
          Organizational grants are structured for maximum flexibility:
        </p>
        
        <ul style={{ 
          marginLeft: '24px', 
          marginBottom: 'var(--space-md)',
          color: 'var(--color-text)',
          lineHeight: 1.7,
        }}>
          <li>Multi-year commitments (typically 2-3 years)</li>
          <li>Unrestricted general operating support</li>
          <li>Minimal reporting requirements (annual narrative only)</li>
          <li>No overhead restrictions</li>
        </ul>
        
        <p>
          We do not fund specific projects, events, or capital campaigns. We fund institutions 
          doing work that requires patient capital and operational stability.
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
          Organizations may submit letters of inquiry at any time. The review process typically 
          takes 60-90 days from initial inquiry to funding decision.
        </p>
        
        <p style={{ 
          fontSize: '15px',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          padding: 'var(--space-sm)',
          background: 'rgba(163, 201, 226, 0.05)',
          border: '1px solid var(--color-border)',
        }}>
          Note: Grantmaking will commence once the foundation's 501(c)(3) status is confirmed. 
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
          Most philanthropy optimizes for measurable outcomes on short timelines. This creates 
          structural pressure toward visible, fundable work at the expense of foundational capacity. 
          Organizational grants exist to support institutions willing to do necessary work that 
          cannot be easily quantified or celebrated.
        </p>
      </section>
    </>
  )
}
