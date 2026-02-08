'use client'

import Link from 'next/link'

export default function OrganizationalGrants() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr !important;
            max-width: 400px !important;
          }
        }
      `}</style>

      <section style={{ 
        padding: 'var(--space-lg) var(--space-md) var(--space-md) var(--space-md)',
      }}>
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
        
        <h1 style={{ 
          color: 'var(--color-deep-navy)', 
          marginBottom: 'var(--space-sm)',
          textAlign: 'center',
        }}>
          Organizational Grants
        </h1>
        
        <p style={{ 
          fontSize: '18px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          fontWeight: 300,
          marginBottom: 'var(--space-md)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto var(--space-md) auto',
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
          maxWidth: '700px',
          margin: '0 auto var(--space-lg) auto',
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

      <section style={{ 
        padding: '0 var(--space-md) var(--space-xl) var(--space-md)',
      }}>
        <div 
          className="cards-grid"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
          }}
        >
          {/* Selection Criteria Card */}
          <Link 
            href="/what-we-do/organizational-grants/criteria"
            style={{
              border: '3px solid var(--color-sky-blue)',
              borderRadius: '12px',
              padding: '32px 24px',
              background: 'var(--color-deep-navy)',
              textDecoration: 'none',
              color: 'var(--color-mist-white)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              minHeight: '160px',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 29, 58, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <h2 style={{ 
              fontFamily: 'Regika, serif',
              fontSize: '28px',
              color: 'var(--color-mist-white)',
              margin: 0,
              lineHeight: 1.1,
            }}>
              Selection Criteria
            </h2>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
            }}>
              Learn more →
            </div>
          </Link>

          {/* Grant Structure Card */}
          <Link 
            href="/what-we-do/organizational-grants/structure"
            style={{
              border: '3px solid var(--color-sky-blue)',
              borderRadius: '12px',
              padding: '32px 24px',
              background: 'var(--color-deep-navy)',
              textDecoration: 'none',
              color: 'var(--color-mist-white)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              minHeight: '160px',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 29, 58, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <h2 style={{ 
              fontFamily: 'Regika, serif',
              fontSize: '28px',
              color: 'var(--color-mist-white)',
              margin: 0,
              lineHeight: 1.1,
            }}>
              Grant Structure
            </h2>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
            }}>
              Learn more →
            </div>
          </Link>

          {/* Application Process Card */}
          <Link 
            href="/what-we-do/organizational-grants/application"
            style={{
              border: '3px solid var(--color-sky-blue)',
              borderRadius: '12px',
              padding: '32px 24px',
              background: 'var(--color-deep-navy)',
              textDecoration: 'none',
              color: 'var(--color-mist-white)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              minHeight: '160px',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 29, 58, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <h2 style={{ 
              fontFamily: 'Regika, serif',
              fontSize: '28px',
              color: 'var(--color-mist-white)',
              margin: 0,
              lineHeight: 1.1,
            }}>
              Application Process
            </h2>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
            }}>
              Learn more →
            </div>
          </Link>

          {/* Philosophy Card */}
          <Link 
            href="/what-we-do/organizational-grants/philosophy"
            style={{
              border: '3px solid var(--color-sky-blue)',
              borderRadius: '12px',
              padding: '32px 24px',
              background: 'var(--color-deep-navy)',
              textDecoration: 'none',
              color: 'var(--color-mist-white)',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              minHeight: '160px',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(11, 29, 58, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <h2 style={{ 
              fontFamily: 'Regika, serif',
              fontSize: '28px',
              color: 'var(--color-mist-white)',
              margin: 0,
              lineHeight: 1.1,
            }}>
              Philosophy
            </h2>
            
            <div style={{
              fontSize: '14px',
              color: 'var(--color-sky-blue)',
              fontWeight: 500,
            }}>
              Learn more →
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
