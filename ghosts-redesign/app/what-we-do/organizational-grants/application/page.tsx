import Link from 'next/link'

export default function Structure() {
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
        How Grants Are Structured
      </h1>
      
      <p>
        Grants are modest, intentional, and repeatable. The foundation provides multi-year support 
        to build institutional capacity, not to fund specific projects or deliverables.
      </p>

      <p>
        Funding is unrestricted. Organizations use capital as they determine appropriate. The foundation 
        does not impose reporting burdens disproportionate to grant size.
      </p>

      <p>
        Grants are structured to support work that cannot be easily quantified or celebrated. Preference 
        is given to organizations willing to do necessary work that traditional philanthropy avoids.
      </p>

      <p>
        Responsible stewardship influences future funding consideration. The foundation operates on 
        long timelines and maintains relationships with grantees beyond individual funding cycles.
      </p>
    </section>
  )
}
