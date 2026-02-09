import DonationForm from '../components/DonationForm'
 
export default function Donate() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1 style={{ color: 'var(--color-deep-navy)' }}>Support</h1>
        <p style={{ 
          color: 'var(--color-text-secondary)',
          fontWeight: 300,
        }}>
          Ghosts Worth Chasing is not yet accepting public donations. Operations will begin 
          upon receipt of 501(c)(3) determination from the IRS.
        </p>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      <section className="section">
        <div style={{ maxWidth: '800px' }}>
          <h2>Current Status</h2>
          <p>
            Initial funding will come from the founder. Long-term sustainability will depend on 
            contributed capital and investment returns.
          </p>
          <p>
            Once operational, the foundation will accept:
          </p>
          <ul style={{ 
            marginLeft: '24px', 
            marginBottom: 'var(--space-md)', 
            lineHeight: 1.8,
            color: 'var(--color-text)',
          }}>
            <li>Online donations (credit card, ACH)</li>
            <li>Donor-advised fund (DAF) recommendations</li>
            <li>Endowment-designated gifts</li>
            <li>Planned giving (bequests, charitable trusts)</li>
          </ul>
          <p>
            All contributions will be tax-deductible to the extent permitted by law, following 
            501(c)(3) determination.
          </p>
        </div>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      <section className="section">
        <div style={{ maxWidth: '800px' }}>
          <h2>What We Will Not Offer</h2>
          <p>
            Ghosts Worth Chasing does not offer:
          </p>
          <ul style={{ 
            marginLeft: '24px', 
            marginBottom: 'var(--space-md)', 
            lineHeight: 1.8,
            color: 'var(--color-text)',
          }}>
            <li>Named funds or programs</li>
            <li>Donor walls or public recognition</li>
            <li>Annual galas or fundraising events</li>
            <li>Restricted gifts that conflict with mission</li>
          </ul>
          <p>
            We thank donors privately and operate with discretion.
          </p>
        </div>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center' }}>Contribute</h2>
          <p style={{ 
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-md)',
            fontWeight: 300,
          }}>
            While operational grantmaking will begin upon 501(c)(3) determination, early 
            contributions help establish the endowment and operational reserves. Payment 
            processing will be activated once tax-exempt status is confirmed.
          </p>
          
          <DonationForm />
        </div>
      </section>

      <div style={{
        maxWidth: 'var(--max-content-width)',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
      }}>
        <hr />
      </div>

      <section className="section section--narrow section--centered">
        <p style={{ marginBottom: '16px', fontWeight: 300 }}>
          For questions about contributing, planned giving, or DAF recommendations:
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
