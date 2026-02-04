export default function Resources() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1>Resources</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          This section contains governing documents, financial disclosures, and operational policies. 
          These are not marketing materials. They are the organizational record.
        </p>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
            Governance Documents
          </h2>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            The following documents govern foundation operations and are available upon request:
          </p>
          <ul style={{ marginLeft: '24px', marginBottom: 'var(--space-md)', lineHeight: 1.8 }}>
            <li>Articles of Incorporation</li>
            <li>Bylaws</li>
            <li>Conflict of Interest Policy</li>
            <li>Board Composition and Selection Criteria</li>
            <li>Investment Policy Statement</li>
            <li>Spending Policy</li>
          </ul>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
            Documents will be published on this page following 501(c)(3) determination.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
            Financial Documents
          </h2>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Financial transparency is a core commitment. When available, the following will be published annually:
          </p>
          <ul style={{ marginLeft: '24px', marginBottom: 'var(--space-md)', lineHeight: 1.8 }}>
            <li>IRS Form 990 (most recent year)</li>
            <li>Audited Financial Statements</li>
            <li>Annual Report (including grant lists and operational reflections)</li>
            <li>Endowment Performance Summary</li>
          </ul>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
            First annual report will be published in January following the first full year of operation.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
            Grantmaking Resources
          </h2>
          <p style={{ marginBottom: 'var(--space-sm)' }}>
            Application guidelines and criteria will be published here once operations begin:
          </p>
          <ul style={{ marginLeft: '24px', marginBottom: 'var(--space-md)', lineHeight: 1.8 }}>
            <li>Individual Support Application Guidelines</li>
            <li>Organizational Grant Criteria and Process</li>
            <li>Review Timeline and Decision Process</li>
          </ul>
        </div>
      </section>

      <section className="section section--narrow section--centered" style={{
        borderTop: '1px solid var(--color-border)',
      }}>
        <p>
          All governance documents are public. All financial filings are published upon availability. 
          All policies are reviewed annually and updated as needed.
        </p>
        <p style={{ marginTop: 'var(--space-md)' }}>
          This organization does not operate under NDAs with donors. This organization does not 
          accept restricted gifts that conflict with mission or governance. This organization does 
          not participate in donor recognition programs.
        </p>
      </section>
    </>
  )
}
