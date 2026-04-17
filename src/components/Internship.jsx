import styles from './Internship.module.css'

const INTERNSHIPS = [
  {
    role: 'Full Stack Web Development Internship Program ',           // ✏️ your role
    company: 'Future Interns',                      // ✏️ company name
    duration: 'Apr 2026 – May 2026',             // ✏️ duration
    type: 'Remote',                               // ✏️ Remote / On-site / Hybrid
description: 'Full Stack Web Development Intern — building production-ready web applications using React.js, Node.js, and MySQL through hands-on industry projects',  // ✏️ your description
    skills: ['React', 'JavaScript', 'Node.js', 'MySQL','Git'],  // ✏️ your skills
    offerLetter: '/certs/Offerletter.pdf',  // ✏️ put PDF in public/internship/
    icon: '💼',
  },
  // ✏️ Add more internships if needed
]

export default function Internship() {
  return (
    <section id="internship" className={styles.section}>
      <div className="section-container">

        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            My <span>Internship</span>
          </h2>
          <div className="section-divider" />
          <p className="section-desc">
            Real-world experience that shaped my skills beyond the classroom.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {INTERNSHIPS.map((intern, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>

              {/* Top row */}
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>{intern.icon}</div>
                <span className={styles.typeBadge}>{intern.type}</span>
              </div>

              {/* Role & Company */}
              <h3 className={styles.role}>{intern.role}</h3>
              <div className={styles.companyRow}>
                <CompanyIcon />
                <span className={styles.company}>{intern.company}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.duration}>{intern.duration}</span>
              </div>

              {/* Description */}
              <p className={styles.description}>{intern.description}</p>

              {/* Skills */}
              <div className={styles.skills}>
                {intern.skills.map(s => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>

              {/* Offer Letter Download */}
              {intern.offerLetter && (
                <a
                  href={intern.offerLetter}
                  download
                  className={styles.downloadBtn}
                >
                  <DownloadIcon /> Download Offer Letter
                </a>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function CompanyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}