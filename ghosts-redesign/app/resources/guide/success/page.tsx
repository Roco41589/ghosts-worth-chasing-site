export default function SuccessPage() {
  return (
    <div
      style={{
        maxWidth: '640px',
        margin: '0 auto',
        padding: '56px 20px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          background: 'white',
          border: '1px solid rgba(124, 170, 176, 0.35)',
          borderRadius: '16px',
          padding: '40px 28px',
        }}
      >
        {/* Green Check */}
        <div
          style={{
            width: '64px',
            height: '64px',
            background: 'var(--color-neon-mint)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '28px',
            fontWeight: 600,
            color: 'var(--color-deep-navy)',
          }}
        >
          ✓
        </div>

        <h1
          style={{
            fontSize: '28px',
            fontWeight: 500,
            color: 'var(--color-deep-navy)',
            marginBottom: '16px',
          }}
        >
          Purchase Successful
        </h1>

        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
            marginBottom: '32px',
          }}
        >
          Your guide has been sent to your email.
        </p>

        {/* Download Card */}
        <div
          style={{
            background: 'var(--color-mist-white)',
            borderRadius: '12px',
            padding: '28px 24px',
            marginBottom: '32px',
          }}
        >
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 500,
              marginBottom: '20px',
              color: 'var(--color-deep-navy)',
            }}
          >
            Download Your Guide
          </h2>

          <a
            href="/transition-guide.pdf"
            download
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: 500,
              color: 'var(--color-mist-white)',
              background: 'var(--color-deep-navy)',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            Download PDF
          </a>

          <p
            style={{
              fontSize: '13px',
              color: 'var(--color-teal-grey)',
              marginTop: '16px',
            }}
          >
            Can't find the email? Check spam or contact
            {' '}roconnor@ghostsworthchasing.org
          </p>
        </div>

        {/* Next Step */}
        <div
          style={{
            borderTop: '1px solid rgba(124, 170, 176, 0.35)',
            paddingTop: '24px',
          }}
        >
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 500,
              marginBottom: '12px',
              color: 'var(--color-deep-navy)',
            }}
          >
            What’s Next?
          </h3>

          <p
            style={{
              fontSize: '14px',
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              marginBottom: '16px',
            }}
          >
            Apply for Individual Support if you're in the middle of a transition.
          </p>

          <a
            href="/apply"
            style={{
              display: 'inline-block',
              padding: '10px 22px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--color-deep-navy)',
              border: '1px solid var(--color-sky-blue)',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            View Application
          </a>
        </div>
      </div>
    </div>
  )
}
