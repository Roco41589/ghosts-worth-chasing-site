'use client'

export default function Resources() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1 style={{ color: 'var(--color-deep-navy)' }}>Resources</h1>
        <p style={{ 
          color: 'var(--color-text-secondary)',
          fontWeight: 300,
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Brand assets, governance documents, and institutional information for partners, 
          grantees, and the public.
        </p>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      {/* Brand Guidelines Section */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Brand Guidelines</h2>
          <p>
            Visual identity assets for use in publications, presentations, and communications 
            referencing Ghosts Worth Chasing.
          </p>

          <div style={{
            background: 'rgba(163, 201, 226, 0.05)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: 'var(--space-md)',
            marginTop: 'var(--space-md)',
          }}>
            <h3 style={{ 
              fontSize: '18px',
              marginBottom: 'var(--space-sm)',
              color: 'var(--color-deep-navy)',
            }}>
              Available Assets
            </h3>
            <ul style={{ 
              marginLeft: '24px',
              lineHeight: 2,
              color: 'var(--color-text)',
            }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📄</span>
                <a 
                  href="/brand/logo-package.zip"
                  style={{
                    color: 'var(--color-slate-ink)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-sky-blue)',
                  }}
                >
                  Logo Package (SVG, PNG, EPS)
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📄</span>
                <a 
                  href="/brand/visual-identity-guide.pdf"
                  style={{
                    color: 'var(--color-slate-ink)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-sky-blue)',
                  }}
                >
                  Visual Identity Guide (PDF)
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📄</span>
                <a 
                  href="/brand/typography-and-colors.pdf"
                  style={{
                    color: 'var(--color-slate-ink)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-sky-blue)',
                  }}
                >
                  Typography & Color Specifications (PDF)
                </a>
              </li>
            </ul>
            <p style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              marginTop: 'var(--space-sm)',
              marginBottom: 0,
            }}>
              Use of foundation branding requires prior written approval. Contact us for permissions.
            </p>
          </div>

          <div style={{
            marginTop: 'var(--space-md)',
            padding: 'var(--space-md)',
            background: 'rgba(163, 201, 226, 0.05)',
            borderLeft: '2px solid var(--color-sky-blue)',
          }}>
            <h3 style={{ 
              fontSize: '16px',
              marginBottom: '12px',
              color: 'var(--color-deep-navy)',
            }}>
              Brand Essentials
            </h3>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              fontSize: '14px',
            }}>
              <div>
                <p style={{ marginBottom: '8px' }}>
                  <strong style={{ color: 'var(--color-deep-navy)' }}>Primary Typefaces:</strong>
                </p>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                  Hanken Grotesk (body)<br/>
                  Regika (display)
                </p>
              </div>
              <div>
                <p style={{ marginBottom: '8px' }}>
                  <strong style={{ color: 'var(--color-deep-navy)' }}>Color Palette:</strong>
                </p>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: 0 }}>
                  Deep Navy #0B1D3A<br/>
                  Sky Blue #A3C9E2<br/>
                  Mist White #F6F9FC
                </p>
              </div>
            </div>
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

      {/* Governance Documents Section */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Governance Documents</h2>
          <p>
            Foundational documents governing foundation operations, board structure, and 
            institutional policies.
          </p>

          <div style={{
            background: 'rgba(163, 201, 226, 0.05)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: 'var(--space-md)',
            marginTop: 'var(--space-md)',
          }}>
            <h3 style={{ 
              fontSize: '18px',
              marginBottom: 'var(--space-sm)',
              color: 'var(--color-deep-navy)',
            }}>
              Available Documents
            </h3>
            <ul style={{ 
              marginLeft: '24px',
              lineHeight: 2,
              color: 'var(--color-text)',
            }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📄</span>
                <a 
                  href="/governance/articles-of-incorporation.pdf"
                  style={{
                    color: 'var(--color-slate-ink)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-sky-blue)',
                  }}
                >
                  Articles of Incorporation
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📄</span>
                <a 
                  href="/governance/bylaws.pdf"
                  style={{
                    color: 'var(--color-slate-ink)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-sky-blue)',
                  }}
                >
                  Bylaws
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📄</span>
                <a 
                  href="/governance/conflict-of-interest-policy.pdf"
                  style={{
                    color: 'var(--color-slate-ink)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-sky-blue)',
                  }}
                >
                  Conflict of Interest Policy
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>📄</span>
                <a 
                  href="/governance/irs-determination-letter.pdf"
                  style={{
                    color: 'var(--color-slate-ink)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-sky-blue)',
                  }}
                >
                  IRS 501(c)(3) Determination Letter
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

      {/* Financial Transparency Section */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Financial Transparency</h2>
          <p>
            Annual reports, audited financials, and Form 990 filings are available on our 
            dedicated transparency page.
          </p>

          <div style={{
            marginTop: 'var(--space-md)',
            padding: 'var(--space-md)',
            background: 'rgba(163, 201, 226, 0.05)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <p style={{ 
              fontSize: '15px',
              marginBottom: '16px',
              color: 'var(--color-text)',
            }}>
              View our complete financial history, audited statements, and IRS filings
            </p>
            <a 
              href="/financials"
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                background: 'var(--color-deep-navy)',
                color: 'var(--color-mist-white)',
                border: '2px solid var(--color-sky-blue)',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
            >
              View Financial Documents →
            </a>
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

      {/* Press & Media Section */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Press & Media</h2>
          <p>
            Media inquiries, press releases, and institutional information for journalists 
            and researchers.
          </p>

          <div style={{
            marginTop: 'var(--space-md)',
            padding: 'var(--space-md)',
            borderLeft: '2px solid var(--color-sky-blue)',
            background: 'rgba(163, 201, 226, 0.05)',
          }}>
            <p style={{ 
              fontSize: '15px',
              marginBottom: '12px',
              color: 'var(--color-text)',
            }}>
              <strong style={{ color: 'var(--color-deep-navy)' }}>Media Contact:</strong>
            </p>
            <p style={{ 
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              marginBottom: 0,
            }}>
              For press inquiries, interviews, or institutional information:<br/>
              <a 
                href="mailto:contact@ghostsworthchasing.org"
                style={{
                  color: 'var(--color-slate-ink)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--color-sky-blue)',
                  fontWeight: 500,
                }}
              >
                contact@ghostsworthchasing.org
              </a>
            </p>
          </div>

          <div style={{
            marginTop: 'var(--space-md)',
            padding: 'var(--space-md)',
            background: 'rgba(163, 201, 226, 0.05)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
          }}>
            <h3 style={{ 
              fontSize: '16px',
              marginBottom: '12px',
              color: 'var(--color-deep-navy)',
            }}>
              Key Information
            </h3>
            <p style={{ 
              fontSize: '14px',
              color: 'var(--color-text)',
              marginBottom: '8px',
            }}>
              <strong>Legal Name:</strong> Ghosts Worth Chasing Foundation
            </p>
            <p style={{ 
              fontSize: '14px',
              color: 'var(--color-text)',
              marginBottom: '8px',
            }}>
              <strong>Type:</strong> 501(c)(3) Private Foundation
            </p>
            <p style={{ 
              fontSize: '14px',
              color: 'var(--color-text)',
              marginBottom: '8px',
            }}>
              <strong>Founded:</strong> 2024
            </p>
            <p style={{ 
              fontSize: '14px',
              color: 'var(--color-text)',
              marginBottom: 0,
            }}>
              <strong>Mission:</strong> Supporting individuals in transition, mission-aligned organizations, 
              and building long-term endowment sustainability
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

      {/* Contact Section */}
      <section className="section section--narrow section--centered">
        <h2>Questions?</h2>
        <p style={{ marginBottom: '16px', fontWeight: 300 }}>
          For questions about brand usage, document access, or institutional inquiries:
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
