import Link from 'next/link'

export default function Eligibility() {
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
        Eligibility
      </h1>

      <h2>Baseline Requirements</h2>
      
      <p>Applicants must:</p>

      <ul style={{ marginLeft: '24px', lineHeight: 1.8 }}>
        <li>Be legally eligible to receive grant funds.</li>
        <li>Demonstrate alignment with the mission and core principles.</li>
        <li>Clearly articulate intended use of funds.</li>
        <li>Provide accurate information.</li>
        <li>Agree to proportional reporting if selected.</li>
      </ul>

      <p>
        Failure to meet baseline requirements results in disqualification prior to review.
      </p>

      <h2>Structural Consideration</h2>

      <p>
        This program is intended for individuals facing a defined structural constraint that capital can address.
      </p>

      <p>
        Applicants must demonstrate that requested funds remove a meaningful barrier rather than support 
        discretionary preference.
      </p>

      <h2>What Is Not Eligible</h2>

      <p>The program does not support:</p>

      <ul style={{ marginLeft: '24px', lineHeight: 1.8 }}>
        <li>Undefined or discretionary spending.</li>
        <li>Ongoing deficits without a sustainability plan.</li>
        <li>Activities inconsistent with the organization's principles.</li>
        <li>Requests based solely on urgency without long-term alignment.</li>
      </ul>

      <p>
        Eligibility establishes fit. It does not guarantee selection.
      </p>
    </section>
  )
}
