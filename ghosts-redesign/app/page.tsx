export default function Home() {
  return (
    <>
      {/* Hero Section - Restrained, editorial */}
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 'var(--space-xl) var(--space-lg)',
        background: 'var(--color-mist-white)',
      }}>
        <h1 style={{ 
          marginBottom: 'var(--space-md)',
          maxWidth: '800px',
          color: 'var(--color-deep-navy)',
        }}>
          Ghosts Worth Chasing
        </h1>
        <p style={{ 
          fontSize: '19px',
          fontWeight: 300,
          maxWidth: '680px',
          color: 'var(--color-slate-ink)',
          lineHeight: 1.7,
        }}>
          An independent foundation supporting individuals in transition, mission-aligned organizations, and long-term institutional continuity.
        </p>
      </section>

      {/* Divider */}
      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr style={{ opacity: 0.2 }} />
      </div>

      {/* Three Pillars Section */}
      <section className="section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-lg)',
        }}>
          <div>
            <h3 style={{ 
              color: 'var(--color-deep-navy)',
              marginBottom: '16px',
            }}>
              Direct Support
            </h3>
            <p style={{
              color: 'var(--color-text)',
              fontSize: '16px',
              lineHeight: 1.7,
            }}>
              Financial assistance for individuals navigating career transitions or personal hardship. 
              Evaluated case-by-case with clear criteria.
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              color: 'var(--color-deep-navy)',
              marginBottom: '16px',
            }}>
              Organizational Grants
            </h3>
            <p style={{
              color: 'var(--color-text)',
              fontSize: '16px',
              lineHeight: 1.7,
            }}>
              Multi-year funding for aligned nonprofits addressing systemic challenges. 
              Focused on institutional capacity, not projects.
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              color: 'var(--color-deep-navy)',
              marginBottom: '16px',
            }}>
              Endowment Stewardship
            </h3>
            <p style={{
              color: 'var(--color-text)',
              fontSize: '16px',
              lineHeight: 1.7,
            }}>
              Capital preservation for perpetual impact. Governed independently with 
              transparent allocation and withdrawal policies.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr style={{ opacity: 0.2 }} />
      </div>

      {/* Institutional Statement Section */}
      <section className="section section--narrow section--centered">
        <p style={{ 
          fontSize: '17px',
          lineHeight: 1.8,
          fontWeight: 300,
          color: 'var(--color-slate-ink)',
        }}>
          Ghosts Worth Chasing operates as a private foundation established for indefinite operation. 
          Governance, investment strategy, and grantmaking are managed with fiduciary restraint. 
          This is not a fundraising campaign. It is an institutional commitment.
        </p>
      </section>
    </>
  )
}
