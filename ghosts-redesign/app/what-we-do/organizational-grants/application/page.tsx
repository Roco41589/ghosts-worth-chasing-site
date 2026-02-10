import Link from 'next/link'

export default function Criteria() {
  return (
    <section className="section section--narrow">
      <Link 
        href="/what-we-do/organizational-grants" 
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
        ← Our Funding Model
      </Link>
      
      <h1 style={{ color: 'var(--color-deep-navy)', marginBottom: 'var(--space-md)' }}>
        How Organizations Are Evaluated
      </h1>
      
      <p>
        Organizations must meet baseline criteria to be considered. Mission alignment matters. 
        Operational legitimacy matters. Ethical posture matters. Organizations must demonstrate 
        adequate financial and internal controls and an absence of material conflicts of interest.
      </p>

      <p>
        Failing any threshold disqualifies an organization regardless of popularity or visibility.
      </p>

      <p>
        Evaluation emphasizes stewardship capacity, not scale. The foundation looks for organizations 
        where incremental support matters and where capital can be deployed with confidence in 
        responsible use.
      </p>

      <p>
        Organizations are assessed for alignment with the foundation's mission, operational durability, 
        and commitment to work that resists easy quantification or short-term metrics.
      </p>
    </section>
  )
}
