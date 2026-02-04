export default function About() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1>About</h1>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)' }}>Founding Context</h2>
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

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)' }}>Governance</h2>
          <p>
            The foundation is governed by a board of directors currently operating in formation mode. 
            Board expansion and formalization will occur upon 501(c)(3) determination.
          </p>
          <p>
            The foundation is recruiting experienced board members who can provide strategic guidance, 
            fiduciary oversight, and domain expertise as operations begin.
          </p>
          <p style={{ marginTop: 'var(--space-md)' }}>
            <strong>Sought expertise areas:</strong>
          </p>
          <ul style={{ marginLeft: '24px', marginBottom: 'var(--space-md)', lineHeight: 1.8 }}>
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

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-primary)' }}>Why This Exists</h2>
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

      <section className="section section--narrow section--centered" style={{
        borderTop: '1px solid var(--color-border)',
      }}>
        <p>
          For inquiries about board service, partnerships, or general questions:
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
