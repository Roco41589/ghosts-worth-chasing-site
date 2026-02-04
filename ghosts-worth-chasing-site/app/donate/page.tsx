export default function Donate() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1>Support</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Ghosts Worth Chasing is not yet accepting public donations. Operations will begin 
          upon receipt of 501(c)(3) determination from the IRS.
        </p>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)' }}>Current Status</h2>
          <p>
            Initial funding will come from the founder. Long-term sustainability will depend on 
            contributed capital and investment returns.
          </p>
          <p>
            Once operational, the foundation will accept:
          </p>
          <ul style={{ marginLeft: '24px', marginBottom: 'var(--space-md)', lineHeight: 1.8 }}>
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

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)' }}>What We Will Not Offer</h2>
          <p>
            Ghosts Worth Chasing does not offer:
          </p>
          <ul style={{ marginLeft: '24px', marginBottom: 'var(--space-md)', lineHeight: 1.8 }}>
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

      <section className="section section--narrow section--centered" style={{
        borderTop: '1px solid var(--color-border)',
      }}>
        <p>
          If you wish to discuss future support or planned giving, contact:
        </p>
        <p style={{ marginTop: 'var(--space-sm)' }}>
          <a href="mailto:contact@ghostsworthchasing.org" style={{ 
            fontSize: '18px',
            border: 'none',
            color: 'var(--color-primary)',
          }}>
            contact@ghostsworthchasing.org
          </a>
        </p>
      </section>
    </>
  )
}
