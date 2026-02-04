export default function HallOfGhosts() {
  return (
    <>
      <section className="section section--narrow section--centered">
        <h1>Hall of Ghosts</h1>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          The ghosts we chase are not famous. They are the people, ideas, and principles that 
          shaped us before we had the language to name them. This is a museum of invisible influence.
        </p>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: 'var(--space-xl)' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
              The Public Defender Who Stayed
            </h2>
            <p>
              A lawyer who chose a county public defender's office over federal clerkships, 
              corporate offers, and judicial ambitions. Thirty years in the same jurisdiction. 
              Thousands of clients. No profile in the Atlantic. No TED talk. Still there.
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
              The ghost: the idea that repetition can be a form of excellence, and that 
              invisibility can be a choice.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--color-border)' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
              The Nurse Practitioner in the Tent
            </h2>
            <p>
              A medical professional who ran a free clinic out of a tent in a city park for 
              unhoused patients. Operated without institutional backing, licensure conflicts, 
              or philanthropic recognition. Closed after eight years when the city finally 
              funded a permanent site.
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
              The ghost: the belief that you start before permission is granted, and stop 
              when the system catches up.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--narrow section--centered" style={{
        borderTop: '1px solid var(--color-border)',
      }}>
        <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)' }}>
          This hall is curated, not crowdsourced. If you know a ghost worth chasing, you may 
          submit a nomination. Inclusion is rare.
        </p>
      </section>
    </>
  )
}
