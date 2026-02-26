export default function Impact() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1 style={{ color: 'var(--color-deep-navy)' }}>Impact</h1>
        <p style={{ 
          color: 'var(--color-text-secondary)',
          fontWeight: 300,
        }}>
          This organization is in its first operational year. What follows is a transparent account
          of organizational readiness, not claims of effectiveness.
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
          <h2>Current Status</h2>
          <p>
            Ghosts Worth Chasing received 501(c)(3) determination from the IRS in February 2026.
            The organization is now tax-exempt and authorized to receive tax-deductible contributions.
            In this first operational year, the organization is:
          </p>
          <ul style={{ 
            marginLeft: '24px',
            marginBottom: 'var(--space-sm)',
            color: 'var(--color-text)',
          }}>
            <li>Completing board composition</li>
            <li>Finalizing grantmaking criteria and processes</li>
            <li>Establishing financial management systems</li>
            <li>Preparing for first grant cycle</li>
          </ul>
          <p>
            No grants have been made to date. Donations are being accepted. First grants are
            expected in 2026.
          </p>
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
          <h2>Planned Approach</h2>
          <p>
            When fully operational, the organization will prioritize:
          </p>
          <ul style={{ 
            marginLeft: '24px',
            marginBottom: 'var(--space-sm)',
            color: 'var(--color-text)',
          }}>
            <li><strong>Transparency</strong> — All financial statements and grant lists will be published annually</li>
            <li><strong>Restraint</strong> — Growth will be limited to what can be managed with quality and attention</li>
            <li><strong>Humility</strong> — Impact claims will be modest and evidence-based, not aspirational</li>
            <li><strong>Continuity</strong> — Governance is structured for multi-decade operation, not founder dependency</li>
          </ul>
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
          Annual reports will be published each January covering the prior calendar year.
          Reports will include financial statements, grant lists, and operational reflections.
          They will not include storytelling or promotional content.
        </p>
      </section>
    </>
  )
}
