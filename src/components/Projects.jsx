import { useState } from 'react'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    title: 'Library Management System',
    desc: 'A full-stack Library Management System built using React (frontend), Firebase (backend & database), and HTML/CSS/JavaScript for managing books, users, and transactions efficiently..',
    emoji: '📚',
    tags: ['React', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
    category: 'Full-Stack',
    github: 'https://github.com/keerthanasuresh2525-alt/LIBRARY-MANAGEMENT.git',
    live: 'https://your-project.vercel.app',
    featured: true,
  },
  {
    title: 'Angular Bakery App',
    desc: 'A full-stack Cake Ordering Web Application built with Angular and Firebase, enabling product browsing, cart management, and real-time order processing with seamless user experience..',
    emoji: '📋',
    tags: ['Angular', 'Firebase', 'HTML', 'CSS', 'TypeScript'],
    category: 'Full-Stack',
    github: 'https://github.com/keerthanasuresh2525-alt/AngBakeryApp.git',
    live: 'https://tasks.vercel.app',
    featured: true,
  },
  {
    title: 'Student Registration System',
    desc: 'A full-stack Student Registration Module built with HTML and Firebase Cloud Firestore, enabling real-time data storage, student record management, and administrative actions like deleting entries.',
    emoji: '🎓',
    tags: ['HTML', 'CSS', 'Firestore', 'Firebase'],
    category: 'Full-Stack', // ✅ fixed: was 'Full Stack' (no hyphen)
    github: 'https://github.com/keerthanasuresh2525-alt/Student-Management-System.git',
    live: 'https://weather.netlify.app',
    featured: false,
  },
]

const FILTERS = ['All', 'Full-Stack']; // ✅ removed duplicate 'Full Stack'

export default function Projects() {
  const [active, setActive] = useState('Full-Stack');

  const filtered = PROJECTS.filter(project =>
    active === 'All' ? true : project.category === active
  );

  return (
    <section id="projects" className={styles.projects}>
      <div className="section-container">
        <div className={styles.header}>
          <p className="section-label">My Work</p>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="section-desc">
            A selection of things I've built — from full-stack apps to frontend experiments.
          </p>
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

        {/* Projects grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`${styles.card} ${project.featured ? styles.featured : ''} reveal reveal-delay-${(i % 3) + 1}`}
            >
              {project.featured && <div className={styles.featuredBadge}>★ Featured</div>}

              <div className={styles.cardTop}>
                <div className={styles.emoji}>{project.emoji}</div>
                <div className={styles.cardLinks}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="GitHub">
                      <GithubIcon />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="Live Demo">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.desc}</p>

              <div className={styles.tags}>
                {project.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ moreLink is now INSIDE the return, before </div></section> */}
        <div className={`${styles.moreLink} reveal`}>
          <a href="https://github.com/keerthanasuresh2525-alt" target="_blank" rel="noopener noreferrer" className="btn-outline">
            View All on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}