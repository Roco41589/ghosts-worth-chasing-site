export default function HallOfGhosts() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1 style={{ color: 'var(--color-deep-navy)' }}>Hall of Ghosts</h1>
        <p style={{ 
          color: 'var(--color-text-secondary)',
          fontWeight: 300,
        }}>
          The ghosts we chase are not famous. They are the people, ideas, and principles that 
          shaped us before we had the language to name them. This is a museum of invisible influence.
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
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 style={{ 
              marginBottom: 'var(--space-sm)',
              fontSize: '24px',
            }}>
              The Public Defender Who Stayed
            </h2>
            <p style={{ lineHeight: 1.8 }}>
              A lawyer who chose a county public defender's office over federal clerkships, 
              corporate offers, and judicial ambitions. Thirty years in the same jurisdiction. 
              Thousands of clients. No profile in the Atlantic. No TED talk. Still there.
            </p>
            <p style={{ 
              fontStyle: 'italic', 
              color: 'var(--color-text-secondary)',
              fontSize: '16px',
              marginTop: '16px',
              paddingLeft: 'var(--space-sm)',
              borderLeft: '2px solid var(--color-sky-blue)',
            }}>
              The ghost: the idea that repetition can be a form of excellence, and that 
              invisibility can be a choice.
            </p>
          </div>

          <div style={{ 
            marginBottom: 'var(--space-xl)', 
            paddingTop: 'var(--space-lg)',
          }}>
            <hr style={{ marginBottom: 'var(--space-lg)' }} />
            <h2 style={{ 
              marginBottom: 'var(--space-sm)',
              fontSize: '24px',
            }}>
              The Nurse Practitioner in the Tent
            </h2>
            <p style={{ lineHeight: 1.8 }}>
              A medical professional who ran a free clinic out of a tent in a city park for 
              unhoused patients. Operated without institutional backing, licensure conflicts, 
              or philanthropic recognition. Closed after eight years when the city finally 
              funded a permanent site.
            </p>
            <p style={{ 
              fontStyle: 'italic', 
              color: 'var(--color-text-secondary)',
              fontSize: '16px',
              marginTop: '16px',
              paddingLeft: 'var(--space-sm)',
              borderLeft: '2px solid var(--color-sky-blue)',
            }}>
              The ghost: the belief that you start before permission is granted, and stop 
              when the system catches up.
            </p>
          </div>
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
        <p style={{ 
          fontSize: '15px', 
          color: 'var(--color-text-secondary)',
          fontWeight: 300,
        }}>
          This hall is curated, not crowdsourced. If you know a ghost worth chasing, you may 
          submit a nomination. Inclusion is rare.
        </p>
      </section>
    </>
  )
}
