import Link from 'next/link'

export default function SelectionPhilosophy() {
  return (
    <section className="section section--narrow">
      <Link 
        href="/what-we-do/individual-support" 
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
        ← Back to Individual Support
      </Link>
      
      <h1 style={{ color: 'var(--color-deep-navy)', marginBottom: 'var(--space-xl)' }}>
        Selection Philosophy
      </h1>

      <h2>Why We Support Individuals</h2>
      
      <p>
        Ghosts Worth Chasing believes individual trajectory matters.
      </p>

      <p>
        Institutions endure and ideas compound, but individuals initiate motion.
      </p>

      <p>
        We support individuals when capital meaningfully alters direction, accelerates durable work, 
        or removes a structural constraint limiting long-term potential.
      </p>

      <p>
        Support is not charity. It is alignment.
      </p>

      <h2>Capital as Catalyst</h2>

      <p>
        Capital does not create legacy. It amplifies it.
      </p>

      <p>
        We fund individuals already in motion, not those waiting to begin.
      </p>

      <p>
        Support is extended where incremental capital creates leverage, not dependency.
      </p>

      <h2>Long-Horizon Orientation</h2>

      <p>
        We prioritize durability over urgency.
      </p>

      <p>
        Short-term relief, while important in many contexts, is not the focus of this program.
      </p>

      <p>
        We look for trajectories that extend beyond the immediate funding period.
      </p>

      <h2>Restraint as Stewardship</h2>

      <p>
        Not all worthy applicants will receive funding.
      </p>

      <p>
        Selectivity protects both the applicant and the institution.
      </p>

      <p>
        Capital must be paced responsibly to ensure continuity across generations.
      </p>

      <p>
        Restraint is stewardship.
      </p>
    </section>
  )
}
