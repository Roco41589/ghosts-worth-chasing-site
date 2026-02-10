import Link from 'next/link'

export default function DecisionProcess() {
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
        How Decisions Are Made
      </h1>
      
      <p>
        Organizations may be proposed by the Founder or Board members. Proposals are evaluated using 
        a weighted scoring framework that measures mission alignment, operational capacity, and 
        stewardship quality.
      </p>

      <p>
        Directors score independently and blindly. Scores are aggregated to inform funding decisions. 
        The Founder retains limited veto authority as a safeguard, exercised sparingly.
      </p>

      <p>
        The foundation does not operate an open application process. Organizations are identified 
        through deliberate sourcing, board review, and sector expertise.
      </p>

      <p>
        Decisions are made on a timeline that prioritizes thoroughness over speed. The foundation 
        is not required to deploy capital annually. Restraint is considered a feature of good stewardship.
      </p>
    </section>
  )
}
