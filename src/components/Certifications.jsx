import { useState } from 'react'
import styles from './Certifications.module.css'

const CERTIFICATIONS = [
  {
    title: 'AI Prompt Engineering Certificate',
    issuer: 'Microsoft',
    date: 'Sep 2025',
    category: 'AI & Data Science',
    image: '/certs/promptengineering.png',
    icon: '🎓',
  },
  {
    title: 'Prompt Engineering ',
    issuer: 'Infosys SpringBoard',
    date: 'Apr 2026',
    category: 'AI & Data Science',
    image: '/certs/PromptengineeringReliance.png',
    icon: '🎓',
  },
  {
    title: 'Data Science',
    issuer: 'Infosys SpringBoard',
    date: 'Apr 2026',
    category: 'AI & Data Science',
    image: '/certs/Datascience.png',
    icon: '🎓',
  },
  
]

const FILTERS = ['All', 'Frontend', 'Programming', 'Database', 'Tools']

const STATS = [
  { num: CERTIFICATIONS.length, label: 'Certifications Earned' },
  { num: [...new Set(CERTIFICATIONS.map(c => c.issuer))].length, label: 'Issuing Platforms' },
]

export default function Certifications() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? CERTIFICATIONS : CERTIFICATIONS.filter(c => c.category === active)

  return (
    <section id="certifications" className={styles.section}>
      <div className="section-container">

        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">Credentials</p>
          <h2 className="section-title">
            My <span>Certifications</span>
          </h2>
          <div className="section-divider" />
          <p className="section-desc">
            Verified credentials from industry-recognized platforms that back up my skills.
          </p>
        </div>

        {/* Stats row */}
        <div className={`${styles.stats} reveal`}>
          {STATS.map(s => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statNum}>{s.num}+</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className={`${styles.filters} reveal`}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {filtered.map((cert, i) => (
            <div
              key={cert.title}
              className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}
            >
              {/* Certificate Image */}
              <div className={styles.certImageWrapper}>
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className={styles.certImage}
                />
              </div>

              {/* Title & issuer */}
              <div className={styles.cardBody}>
                <span className={styles.categoryBadge}>{cert.category}</span>
                <h3 className={styles.cardTitle}>{cert.title}</h3>
                <div className={styles.issuerRow}>
                  <IssuedByIcon />
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.date}>{cert.date}</span>
                </div>

                {/* ✅ Download button */}
                <a
                  href={cert.image}
                  download={`${cert.title}.png`}
                  className={styles.verifyBtn}
                >
                  ⬇ Download Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.cta} reveal`}>
          <p className={styles.ctaText}>
            View all my verified credentials on LinkedIn
          </p>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View on LinkedIn →
          </a>
        </div>

      </div>
    </section>
  )
}

function IssuedByIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}>
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  )
}