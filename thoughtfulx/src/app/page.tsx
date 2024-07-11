import styles from './page.module.css'; // Ensure you are importing your styles

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Welcome to ThoughtfulX</h1>
        <a href="https://x.com/messages/compose" className={styles.button}>
          Send Message
        </a>
        <a href="https://x.com/compose/post" className={styles.button}>
          Write a Post
        </a>
        <a href="https://x.com/messages" className={styles.button}>
          Check Inbox
        </a>
        <div>
          Missing something? <a href="https://www.google.com">request a new action</a>
        </div>
      </div>
    </main>
  );
}
