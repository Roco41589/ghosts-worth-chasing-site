export default function About() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1 style={{ color: 'var(--color-deep-navy)' }}>About</h1>
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
          <h2>Founding Context</h2>
          <p>
            Ghosts Worth Chasing was established in 2024 as a private foundation with indefinite 
            operation. It was founded by Ryan O'Connor, who serves as Founder and Chair of the Board 
            and maintains fiduciary responsibility alongside an independent board.
          </p>
          <p>
            This is not a personal foundation. Governance is structured to outlast founding leadership. 
            Succession planning begins upon operational launch.
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
          <h2>Governance</h2>
          <p>
            The foundation is governed by a board of directors currently operating in formation mode. 
            Board expansion and formalization will occur upon 501(c)(3) determination.
          </p>
          <p>
            The foundation is recruiting experienced board members who can provide strategic guidance, 
            fiduciary oversight, and domain expertise as operations begin.
          </p>
          <p style={{ marginTop: 'var(--space-md)' }}>
            <strong style={{ color: 'var(--color-deep-navy)' }}>Sought expertise areas:</strong>
          </p>
          <ul style={{ 
            marginLeft: '24px', 
            marginBottom: 'var(--space-md)', 
            lineHeight: 1.8,
            color: 'var(--color-text)',
          }}>
            <li>Nonprofit governance and fiduciary responsibility</li>
            <li>Impact investing or endowment management</li>
            <li>Social services or direct assistance programs</li>
            <li>Organizational capacity building</li>
          </ul>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
            If you are interested in board service or wish to recommend candidates, contact us 
            at the email address below.
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
          <h2>Why This Exists</h2>
          <p>
            Most philanthropy operates on short time horizons, optimizes for measurable outcomes, 
            and rewards visibility over durability. This creates structural gaps in support for 
            individuals, organizations, and ideas that resist easy quantification.
          </p>
          <p>
            Ghosts Worth Chasing exists to fill some of those gaps. It does not claim to solve them. 
            It does not claim to scale. It claims only to operate with consistency, transparency, 
            and restraint.
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

      <section className="section section--narrow section--centered">
        <p style={{ marginBottom: '16px', fontWeight: 300 }}>
          For inquiries about board service, partnerships, or general questions:
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
