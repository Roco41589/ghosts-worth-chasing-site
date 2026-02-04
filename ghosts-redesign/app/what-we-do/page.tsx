export default function WhatWeDo() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1 style={{ color: 'var(--color-deep-navy)' }}>What We Do</h1>
        <p style={{ 
          color: 'var(--color-text-secondary)',
          fontWeight: 300,
        }}>
          Ghosts Worth Chasing operates in three distinct modes, each with separate accounting, 
          criteria, and oversight. Funds are not commingled. Each mode serves a different time 
          horizon and type of need.
        </p>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      <section className="section">
        <div style={{ maxWidth: '800px' }}>
          <h2>Individual Support</h2>
          <p>
            We provide direct financial assistance to individuals experiencing career transition, 
            personal hardship, or structural disadvantage. This is not emergency relief. 
            Applications are reviewed quarterly.
          </p>
          <p>
            Eligibility is determined case-by-case based on:
          </p>
          <ul style={{ 
            marginLeft: '24px', 
            marginBottom: 'var(--space-sm)',
            color: 'var(--color-text)',
          }}>
            <li>Demonstrated need</li>
            <li>Absence of alternative institutional support</li>
            <li>Clarity of intended use</li>
          </ul>
          <p>
            Funds are distributed as unrestricted grants. No repayment is required. 
            No ongoing reporting is required.
          </p>
          <div style={{ 
            marginTop: 'var(--space-md)',
            padding: 'var(--space-sm)',
            borderLeft: '2px solid var(--color-sky-blue)',
            paddingLeft: 'var(--space-sm)',
            background: 'rgba(163, 201, 226, 0.05)',
          }}>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--color-deep-navy)' }}>Typical award range:</strong> $5,000–$25,000
            </p>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 0 }}>
              <strong style={{ color: 'var(--color-deep-navy)' }}>Annual budget allocation:</strong> 30% of distributable funds
            </p>
          </div>
        </div>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      <section className="section">
        <div style={{ maxWidth: '800px' }}>
          <h2>Organizational Grants</h2>
          <p>
            We fund aligned nonprofits working on long-horizon challenges where traditional 
            philanthropy is poorly suited. Grants are multi-year and support institutional capacity, 
            not specific projects.
          </p>
          <p>
            We prioritize organizations that are:
          </p>
          <ul style={{ 
            marginLeft: '24px', 
            marginBottom: 'var(--space-sm)',
            color: 'var(--color-text)',
          }}>
            <li>Under-resourced relative to mission complexity</li>
            <li>Operating with intellectual honesty</li>
            <li>Building durable infrastructure, not chasing visibility</li>
          </ul>
          <p>
            Grants are made on a rolling basis. Applications are reviewed by an external 
            advisory committee.
          </p>
          <div style={{ 
            marginTop: 'var(--space-md)',
            padding: 'var(--space-sm)',
            borderLeft: '2px solid var(--color-sky-blue)',
            paddingLeft: 'var(--space-sm)',
            background: 'rgba(163, 201, 226, 0.05)',
          }}>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--color-deep-navy)' }}>Typical award range:</strong> $50,000–$200,000 over 2–3 years
            </p>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 0 }}>
              <strong style={{ color: 'var(--color-deep-navy)' }}>Annual budget allocation:</strong> 40% of distributable funds
            </p>
          </div>
        </div>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      <section className="section">
        <div style={{ maxWidth: '800px' }}>
          <h2>Endowment</h2>
          <p>
            A portion of contributed capital is reserved for perpetual operation. These funds 
            are invested conservatively and distributed according to a formal spending policy.
          </p>
          <p>
            The endowment exists to ensure:
          </p>
          <ul style={{ 
            marginLeft: '24px', 
            marginBottom: 'var(--space-sm)',
            color: 'var(--color-text)',
          }}>
            <li>Organizational continuity beyond founding leadership</li>
            <li>Independence from fundraising pressure</li>
            <li>Stable funding for long-term commitments</li>
          </ul>
          <p>
            Endowment funds are governed separately. Investment allocation and withdrawal rates 
            are published annually in the Resources section.
          </p>
          <div style={{ 
            marginTop: 'var(--space-md)',
            padding: 'var(--space-sm)',
            borderLeft: '2px solid var(--color-sky-blue)',
            paddingLeft: 'var(--space-sm)',
            background: 'rgba(163, 201, 226, 0.05)',
          }}>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--color-deep-navy)' }}>Current endowment size:</strong> Disclosed annually
            </p>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 0 }}>
              <strong style={{ color: 'var(--color-deep-navy)' }}>Target allocation:</strong> 30% of total capital
            </p>
          </div>
        </div>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      <section className="section section--narrow section--centered">
        <p style={{ fontWeight: 300 }}>
          All three modes operate under the same governance structure but maintain separate budgets. 
          This prevents mission drift and ensures each commitment can be honored independently.
        </p>
      </section>
    </>
  )
}
