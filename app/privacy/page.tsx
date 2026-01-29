export default function PrivacyPage() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.updated}>Last updated: Jan 2026</p>

      <section>
        <h2 style={styles.subtitle}>1. Introduction</h2>
        <p style={styles.content}>
          Pace Calculator (“the App”) respects your privacy. This Privacy Policy
          explains how information is handled when you use the App on iOS,
          Android, Apple Watch, or the web.
        </p>
      </section>

      <section>
        <h2 style={styles.subtitle}>2. Information We Collect</h2>
        <p style={styles.content}>
          We do not collect, store, or share any personal data.
        </p>
        <ul style={styles.content}>
          <li>No names</li>
          <li>No email addresses</li>
          <li>No location data</li>
          <li>No health data</li>
          <li>No analytics or tracking identifiers</li>
        </ul>
        <p style={styles.content}>All calculations are performed locally on your device.</p>
      </section>

      <section>
        <h2 style={styles.subtitle}>3. Health & Fitness Data</h2>
        <p style={styles.content}>
          Pace Calculator does not access Apple Health, does not read or write
          fitness data, and does not store workout history.
        </p>
      </section>

      <section>
        <h2 style={styles.subtitle}>4. Third-Party Services</h2>
        <p style={styles.content}>
          The App does not use analytics services, advertising SDKs, tracking
          libraries, or third-party data processors.
        </p>
      </section>

      <section>
        <h2 style={styles.subtitle}>5. Data Storage</h2>
        <p style={styles.content}>
          All inputs exist temporarily in memory and are cleared when the app is
          closed.
        </p>
      </section>

      <section>
        <h2 style={styles.subtitle}>6. Children’s Privacy</h2>
        <p style={styles.content}>
          Pace Calculator does not knowingly collect data from children under 13.
        </p>
      </section>

      <section>
        <h2 style={styles.subtitle}>7. Changes to This Policy</h2>
        <p style={styles.content}>
          This Privacy Policy may be updated from time to time. Updates will be
          reflected on this page.
        </p>
      </section>

      <section>
        <h2 style={styles.subtitle}>8. Contact</h2>
        <p style={styles.content}>
          If you have questions about this Privacy Policy, contact:
          <br />
          <strong>Sachin Maharjan</strong>
        </p>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont"
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem"
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem"
  },
  updated: {
    color: "#666",
    marginBottom: "2rem"
  }, 
 content: {     
    fontSize: "1rem",
    marginBottom: "1rem",
    paddingLeft: "0.5rem"
  } 
};
