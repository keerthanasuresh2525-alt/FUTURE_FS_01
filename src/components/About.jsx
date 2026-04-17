import styles from './About.module.css'

// ✏️ EDIT: Your skill categories
const SKILLS = [
  {
    category: 'Frontend',
    icon: '🖥️',
    items: ['HTML5', 'CSS', 'JavaScript ', 'React.js', 'TypeScript'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['Firebase', 'MySQL',  'SQL basics'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    items: ['Git & GitHub', 'VS Code',  'Vercel', 'Netlify'],
  },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="section-container">
        <div className={styles.header}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Who Am <span>I</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className={styles.grid}>
          {/* Bio column */}
          <div className={`${styles.bio} reveal`}>
            <div className={styles.bioCard}>

              <div className={styles.bioText}>
                {/* ✏️ EDIT: Your personal bio — 2-3 paragraphs */}
                <p>
                  I'm a Computer Science student with a deep passion for building
                  full-stack web applications. I love turning complex problems into
                  simple, elegant solutions that make a real difference. I am also a Fresher.
                </p>
                <p>
                  During my internship and personal projects, I’ve gained full-stack experience by developing responsive user interfaces with React.js and Angular, implementing application logic using JavaScript and Node.js, and handling backend services, authentication, and database management with Firebase, along with building structured web pages using HTML and CSS
                </p>
                <p>
                  I'm always learning — whether it's a new framework, a design pattern,
                  or a better way to structure my code.
                </p>
              </div>

              {/* Quick facts */}
              <div className={styles.facts}>
                {/* ✏️ EDIT: Your personal quick facts */}
                <div className={styles.fact}><span>🎓</span> BCA Computer Science</div>
                <div className={styles.fact}><span>📍</span> Bengaluru, India</div>
                <div className={styles.fact}><span>💼</span> Open to Internships</div>
                
              </div>
            </div>
          </div>

          {/* Skills column */}
          <div className={styles.skillsCol}>
            {SKILLS.map((group, i) => (
              <div
                key={group.category}
                className={`${styles.skillGroup} reveal reveal-delay-${i % 3 + 1}`}
              >
                <div className={styles.skillGroupHeader}>
                  <span className={styles.skillIcon}>{group.icon}</span>
                  <span className={styles.skillCategory}>{group.category}</span>
                </div>
                <div className={styles.pills}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.pill}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
