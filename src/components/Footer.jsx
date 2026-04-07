import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© {new Date().getFullYear()} Nanditha M</p>
      <div className={styles.status}>
        <span className={styles.dot} />
        Available for remote work
      </div>
    </footer>
  )
}
