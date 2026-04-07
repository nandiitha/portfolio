import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const h1Ref = useRef(null)

  useEffect(() => {
    const el = h1Ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(18px)'
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>
        Available for remote · Based in Kozhikode, India
      </p>
      <h1 ref={h1Ref} className={styles.h1}>
        React &amp; TypeScript<br />
        <em>UI Engineer</em>
      </h1>
      <p className={styles.desc}>
        3+ years building data-rich, accessible web applications for product teams.
        Focused on component systems, frontend performance, and clean, maintainable code.
      </p>
      <div className={styles.actions}>
        <a href="#projects" className={styles.btnPrimary}>View projects ↓</a>
        <a href="#contact" className={styles.btnSecondary}>Get in touch</a>
      </div>
    </section>
  )
}
