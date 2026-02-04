export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 'var(--space-xl) var(--space-lg)',
      }}>
        <h1 style={{ 
          marginBottom: 'var(--space-md)',
          maxWidth: '800px',
        }}>
          Ghosts Worth Chasing
        </h1>
        <p style={{ 
          fontSize: '20px',
          maxWidth: '680px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
        }}>
          An independent foundation supporting individuals in transition, mission-aligned organizations, and long-term institutional continuity.
        </p>
      </section>

      {/* Three Pillars Section */}
      <section className="section" style={{
        borderTop: '1px solid var(--color-border)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-lg)',
          marginBottom: 'var(--space-lg)',
        }}>
          <div>
            <h3 style={{ color: 'var(--color-primary)' }}>Direct Support</h3>
            <p>
              Financial assistance for individuals navigating career transitions or personal hardship. 
              Evaluated case-by-case with clear criteria.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--color-primary)' }}>Organizational Grants</h3>
            <p>
              Multi-year funding for aligned nonprofits addressing systemic challenges. 
              Focused on institutional capacity, not projects.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--color-primary)' }}>Endowment Stewardship</h3>
            <p>
              Capital preservation for perpetual impact. Governed independently with 
              transparent allocation and withdrawal policies.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Statement Section */}
      <section className="section section--narrow section--centered" style={{
        borderTop: '1px solid var(--color-border)',
      }}>
        <p style={{ 
          fontSize: '18px',
          lineHeight: 1.8,
        }}>
          Ghosts Worth Chasing operates as a private foundation established for indefinite operation. 
          Governance, investment strategy, and grantmaking are managed with fiduciary restraint. 
          This is not a fundraising campaign. It is an institutional commitment.
        </p>
      </section>
    </>
  )
}
