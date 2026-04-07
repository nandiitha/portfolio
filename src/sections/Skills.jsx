import SectionLabel from '../components/SectionLabel'
import styles from './Skills.module.css'

const skills = [
  {
    label: 'Languages',
    tags: ['TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks',
    tags: ['React.js', 'Next.js', 'Redux', 'Ant Design', 'CoreUI'],
  },
  {
    label: 'Engineering',
    tags: ['Component systems', 'Accessibility (a11y)', 'Performance', 'REST APIs', 'Responsive design'],
  },
  {
    label: 'Tooling',
    tags: ['Vite', 'Webpack', 'Jest', 'Git', 'Postman', 'CI/CD', 'NPM'],
  },
]

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <SectionLabel>Skills</SectionLabel>
      <div className={styles.grid}>
        {skills.map(s => (
          <div key={s.label} className={styles.cell}>
            <p className={styles.cellLabel}>{s.label}</p>
            <div className={styles.tags}>
              {s.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
