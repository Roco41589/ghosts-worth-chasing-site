import DonationForm from '../components/DonationForm'

export default function Donate() {
  return (
    <>
      {/* Hero */}
      <section className="section section--narrow section--centered">
        <h1 style={{ color: 'var(--color-deep-navy)' }}>Support</h1>
        <p style={{
          color: 'var(--color-text-secondary)',
          fontWeight: 300,
          maxWidth: '580px',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Contributions to Ghosts Worth Chasing capitalize an institution, not a campaign.
          Capital is allocated according to a fixed model, invested for the long term, and
          deployed through a deliberate grantmaking process. There is no urgency here. If
          this work aligns with how you think about philanthropy, we welcome your support.
        </p>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      {/* Capital Allocation */}
      <section className="section">
        <div style={{ maxWidth: '800px' }}>
          <h2>How Capital Is Allocated</h2>
          <p style={{ fontWeight: 300, marginBottom: 'var(--space-md)' }}>
            Every contribution — regardless of amount — is allocated according to the same model.
            Contributions are unrestricted. The board retains full discretion over deployment.
            We do not accept gifts that direct, restrict, or condition how funds are used.
          </p>

          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '15px',
            marginBottom: 'var(--space-md)',
          }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-sky-blue)' }}>
                <th style={{
                  textAlign: 'left',
                  padding: '10px 16px 10px 0',
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--color-teal-grey)',
                }}>
                  Allocation
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '10px 0',
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--color-teal-grey)',
                }}>
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { pct: '70%', label: 'Endowment', desc: 'Invested in perpetuity — returns fund operations and grants' },
                { pct: '10%', label: 'Organizational Grants', desc: 'Multi-year capacity grants to mission-aligned organizations' },
                { pct: '10%', label: 'Individual Support', desc: 'Direct grants to individuals navigating transition' },
                { pct: '10%', label: 'Operating Expenses', desc: 'Administration, infrastructure, governance' },
              ].map((row, i) => (
                <tr
                  key={i}
                  style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                  <td style={{
                    padding: '14px 16px 14px 0',
                    verticalAlign: 'top',
                    whiteSpace: 'nowrap',
                  }}>
                    <span style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--color-deep-navy)',
                      marginRight: '10px',
                    }}>
                      {row.pct}
                    </span>
                    <span style={{
                      fontSize: '14px',
                      color: 'var(--color-slate-ink)',
                      fontWeight: 500,
                    }}>
                      {row.label}
                    </span>
                  </td>
                  <td style={{
                    padding: '14px 0',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}>
                    {row.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      {/* Donation Form */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-sm)' }}>Contribute</h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            fontWeight: 300,
            marginBottom: 'var(--space-md)',
            maxWidth: '500px',
            margin: '0 auto var(--space-md)',
          }}>
            All contributions are tax-deductible to the extent permitted by law.
            EIN 39-4369238.
          </p>
          <DonationForm />
        </div>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      {/* Other Ways to Give */}
      <section className="section">
        <div style={{ maxWidth: '800px' }}>
          <h2>Other Ways to Give</h2>

          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '6px',
            }}>
              Donor-Advised Fund
            </h3>
            <p style={{ fontWeight: 300, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Search EIN 39-4369238 on your DAF platform — Fidelity Charitable, Schwab Charitable,
              Vanguard Charitable, or others — to recommend a grant. No advance notice is required,
              though we welcome it.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-md)' }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '6px',
            }}>
              Planned Giving
            </h3>
            <p style={{ fontWeight: 300, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              If you are considering a bequest or other planned gift, we are glad to discuss.
              Contact us directly at the address below.
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              marginBottom: '6px',
            }}>
              Endowment-Designated Gifts
            </h3>
            <p style={{ fontWeight: 300, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              If you wish to express a preference that your contribution support the endowment
              specifically, note it when you reach out. The board will honor that preference
              where possible within its discretionary authority.
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

      {/* What We Will Not Offer */}
      <section className="section">
        <div style={{ maxWidth: '800px' }}>
          <h2>What We Will Not Offer</h2>
          <p style={{ fontWeight: 300, marginBottom: 'var(--space-sm)' }}>
            Ghosts Worth Chasing does not offer:
          </p>
          <ul style={{
            marginLeft: '24px',
            marginBottom: 'var(--space-md)',
            lineHeight: 1.8,
            color: 'var(--color-text)',
            fontWeight: 300,
          }}>
            <li>Named funds or programs</li>
            <li>Donor walls or public recognition</li>
            <li>Annual galas or fundraising events</li>
            <li>Restricted gifts that conflict with mission</li>
          </ul>
          <p style={{ fontWeight: 300, color: 'var(--color-text-secondary)' }}>
            We thank donors privately and operate with discretion.
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

      {/* Contact */}
      <section className="section section--narrow section--centered">
        <p style={{ marginBottom: '16px', fontWeight: 300 }}>
          For questions about contributing, planned giving, or DAF recommendations:
        </p>
        <p style={{ marginTop: 'var(--space-sm)' }}>
          <a
            href="mailto:roconnor@ghostsworthchasing.org"
            style={{
              fontSize: '18px',
              border: 'none',
              color: 'var(--color-deep-navy)',
              fontWeight: 500,
            }}
          >
            roconnor@ghostsworthchasing.org
          </a>
        </p>
      </section>
    </>
  )
}
