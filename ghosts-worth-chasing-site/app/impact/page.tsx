export default function Impact() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1>Impact</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This organization is in formation. Operations will begin upon 501(c)(3) determination. 
          What follows is a transparent account of organizational readiness, not claims of effectiveness.
        </p>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)' }}>Current Status</h2>
          <p>
            Ghosts Worth Chasing has applied for 501(c)(3) status with the IRS. While awaiting 
            determination, the foundation is:
          </p>
          <ul style={{ marginLeft: '24px', marginBottom: 'var(--space-sm)' }}>
            <li>Finalizing governance infrastructure</li>
            <li>Developing grantmaking criteria and processes</li>
            <li>Building board composition</li>
            <li>Establishing financial management systems</li>
          </ul>
          <p>
            No grants have been made. No donations have been accepted. Operations are scheduled 
            to begin upon federal determination.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)' }}>Planned Approach</h2>
          <p>
            When operational, the foundation will prioritize:
          </p>
          <ul style={{ marginLeft: '24px', marginBottom: 'var(--space-sm)' }}>
            <li><strong>Transparency</strong> — All financial statements and grant lists will be published annually</li>
            <li><strong>Restraint</strong> — Growth will be limited to what can be managed with quality and attention</li>
            <li><strong>Humility</strong> — Impact claims will be modest and evidence-based, not aspirational</li>
            <li><strong>Continuity</strong> — Governance is structured for multi-decade operation, not founder dependency</li>
          </ul>
        </div>
      </section>

      <section className="section section--narrow section--centered" style={{
        borderTop: '1px solid var(--color-border)',
      }}>
        <p>
          Annual reports will be published each January covering the prior calendar year. 
          Reports will include financial statements, grant lists, and operational reflections. 
          They will not include storytelling or promotional content.
        </p>
      </section>
    </>
  )
}
