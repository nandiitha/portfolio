import SectionLabel from '../components/SectionLabel'
import styles from './Contact.module.css'

const links = [
  {
    label: 'GitHub',
    // TODO: replace with your GitHub URL
    href: 'https://github.com/nandiitha',
    display: 'github.com/nandiitha',
  },
  {
    label: 'LinkedIn',
    // TODO: replace with your LinkedIn URL
    href: 'https://linkedin.com/in/nandiitha-m',
    display: 'linkedin.com/in/nandiitha-m',
  },
  {
    label: 'Email',
    // TODO: replace with your email
    href: 'mailto:mnanditha71@gmail.com',
    display: 'mnanditha71@gmail.com',
  },
]

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <SectionLabel>Contact</SectionLabel>
      <div className={styles.strip}>
        <h2 className={styles.heading}>
          Open to remote roles<br />at product companies.
        </h2>
        <div className={styles.linkGroup}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkLabel}>{l.label}</span>
              <span className={styles.linkDisplay}>{l.display}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
