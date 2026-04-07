import SectionLabel from '../components/SectionLabel'
import styles from './Experience.module.css'

const experience = [
  {
    date: '2025 — Present',
    location: 'Remote',
    role: 'Freelance Web / UI Developer',
    company: 'Remote',
    points: [
      'Building responsive, accessible React interfaces and reusable UI component systems for clients.',
      'Integrating frontend features with REST APIs, handling async patterns, loading states, and edge cases.',
      'Resolving production issues and maintaining code quality across distributed projects.',
    ],
  },
  {
    date: 'Oct 2021 — Oct 2023',
    location: 'Kozhikode, India',
    role: 'Web / UI Engineer',
    company: 'Dataspot Technologies',
    points: [
      'Designed and implemented well-tested React and TypeScript interfaces for enterprise web applications.',
      'Improved user experience scores by 20% by redesigning key application workflows.',
      'Reduced average page load times by 40% through frontend performance tuning and bundle optimisation.',
      'Optimised Redux state management and rendering pipelines, improving responsiveness by 25%.',
      'Built reusable component systems and presentation patterns used consistently across multiple products.',
      'Integrated frontend components with REST APIs, handling loading, error, and empty states robustly.',
      'Participated in code reviews and contributed to internal technical documentation.',
    ],
  },
]

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <SectionLabel>Experience</SectionLabel>
      <div className={styles.list}>
        {experience.map(e => (
          <div key={e.role} className={styles.item}>
            <div className={styles.meta}>
              <p className={styles.date}>{e.date}</p>
              <p className={styles.location}>{e.location}</p>
            </div>
            <div className={styles.body}>
              <p className={styles.role}>{e.role}</p>
              <p className={styles.company}>{e.company}</p>
              <ul className={styles.points}>
                {e.points.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
