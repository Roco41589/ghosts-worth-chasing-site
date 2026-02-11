import Link from 'next/link'

export default function ReviewProcess() {
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
        Review & Process
      </h1>

      <h2>Structured Evaluation</h2>
      
      <p>Applications are reviewed through a formal, multi-step process:</p>

      <ol style={{ marginLeft: '24px', lineHeight: 1.8 }}>
        <li>Administrative screening.</li>
        <li>Independent director review.</li>
        <li>Blind scoring using a weighted framework.</li>
        <li>Conflict-of-interest verification.</li>
        <li>Board decision.</li>
      </ol>

      <p>
        Each stage exists to reduce bias and maintain consistency.
      </p>

      <h2>Evaluation Standards</h2>

      <p>Applications are evaluated against the organization's core principles:</p>

      <ul style={{ marginLeft: '24px', lineHeight: 1.8 }}>
        <li>Eternal Optimism</li>
        <li>Relentless Ingenuity</li>
        <li>Defiant Resolve</li>
        <li>Radical Pragmatism</li>
        <li>Devoted Stewardship</li>
      </ul>

      <p>
        Scoring reflects strength of alignment and durability of trajectory.
      </p>

      <h2>Discretion and Finality</h2>

      <p>
        Funding decisions are discretionary and final.
      </p>

      <p>
        The organization may decline to provide detailed scoring breakdowns.
      </p>

      <p>
        Not all qualified applicants will receive funding.
      </p>

      <h2>Communication</h2>

      <p>
        Applicants will be notified following board decision.
      </p>

      <p>
        Where appropriate, limited feedback may be provided. Deliberations remain confidential.
      </p>
    </section>
  )
}
