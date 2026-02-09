export default function Financials() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1 style={{ 
          color: 'var(--color-deep-navy)',
          marginBottom: 'var(--space-sm)',
        }}>
          As Transparent as the Ghosts We Chase
        </h1>
        <p style={{ 
          color: 'var(--color-text-secondary)',
          fontWeight: 300,
          fontSize: '18px',
          lineHeight: 1.6,
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          We operate with the clarity we seek in the work we support.
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
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ul style={{ 
            marginLeft: '24px', 
            marginBottom: 'var(--space-lg)', 
            lineHeight: 1.8,
            color: 'var(--color-text)',
            fontSize: '16px',
          }}>
            <li>Full financial disclosure: audited statements, Form 990, and grant decisions published annually</li>
            <li>Honest reporting on outcomes, including what fails and why</li>
            <li>Public governance documents and transparent decision-making processes</li>
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

      {/* Annual Reports Section */}
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center',
            marginBottom: 'var(--space-md)',
          }}>
            Annual Reports
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-md)',
          }}>
            Comprehensive reports on grantmaking, operations, and institutional development.
          </p>

          <div style={{
            background: 'rgba(163, 201, 226, 0.05)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: 'var(--space-md)',
          }}>
            <h3 style={{ 
              fontSize: '18px',
              marginBottom: '16px',
              color: 'var(--color-deep-navy)',
            }}>
              Download PDFs:
            </h3>
            <ul style={{ 
              marginLeft: '24px',
              lineHeight: 2,
              color: 'var(--color-text)',
            }}>
              <li>
                <a 
                  href="/financials/fy2026-annual-report.pdf"
                  style={{
                    color: 'var(--color-slate-ink)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-sky-blue)',
                  }}
                >
                  FY2026 Annual Report
                </a>
              </li>
            </ul>
            <p style={{
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              marginTop: 'var(--space-sm)',
              fontStyle: 'italic',
            }}>
              Prior year financial statements are available upon request.
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

      {/* Audited Financials Section */}
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center',
            marginBottom: 'var(--space-md)',
          }}>
            Audited Financials
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-md)',
          }}>
            Independent audit of financial statements and internal controls.
          </p>

          <div style={{
            background: 'rgba(163, 201, 226, 0.05)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: 'var(--space-md)',
          }}>
            <h3 style={{ 
              fontSize: '18px',
              marginBottom: '16px',
              color: 'var(--color-deep-navy)',
            }}>
              Download PDFs:
            </h3>
            <ul style={{ 
              marginLeft: '24px',
              lineHeight: 2,
              color: 'var(--color-text)',
            }}>
              <li>
                <a 
                  href="/financials/fy2026-audited-financials.pdf"
                  style={{
                    color: 'var(--color-slate-ink)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-sky-blue)',
                  }}
                >
                  FY2026 Audited Financial Statements
                </a>
              </li>
            </ul>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text)',
              marginTop: 'var(--space-sm)',
            }}>
              Our annual financials are audited by independent auditors.
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

      {/* Form 990 Section */}
      <section className="section">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center',
            marginBottom: 'var(--space-md)',
          }}>
            Form 990
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-md)',
          }}>
            IRS Form 990 providing detailed financial and operational information.
          </p>

          <div style={{
            background: 'rgba(163, 201, 226, 0.05)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: 'var(--space-md)',
          }}>
            <h3 style={{ 
              fontSize: '18px',
              marginBottom: '16px',
              color: 'var(--color-deep-navy)',
            }}>
              Download PDFs:
            </h3>
            <ul style={{ 
              marginLeft: '24px',
              lineHeight: 2,
              color: 'var(--color-text)',
            }}>
              <li>
                <a 
                  href="/financials/fy2026-form-990.pdf"
                  style={{
                    color: 'var(--color-slate-ink)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-sky-blue)',
                  }}
                >
                  FY2026 Form 990
                </a>
              </li>
            </ul>
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

      {/* Contact Section */}
      <section className="section section--narrow section--centered">
        <h2>Questions?</h2>
        <p style={{ marginBottom: '16px', fontWeight: 300 }}>
          For questions about our financials, governance, or grantmaking:
        </p>
        <p style={{ marginTop: 'var(--space-sm)' }}>
          <a 
            href="mailto:contact@ghostsworthchasing.org" 
            style={{ 
              fontSize: '18px',
              border: 'none',
              color: 'var(--color-deep-navy)',
              fontWeight: 500,
            }}
          >
            contact@ghostsworthchasing.org
          </a>
        </p>
      </section>
    </>
  )
}
