import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Decorative background grid */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      <div className={styles.inner}>
        {/* Left: Text */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Open to Internship &amp; Full-time Roles
          </div>

          <h1 className={styles.title}>
            {/* ✏️ EDIT: Your name and tagline */}
            Hi, I'm <span>Keerthana S</span> —<br />
            CREATE | CODE | INNOVATE<br />
            
          </h1>

          <p className={styles.sub}>
            {/* ✏️ EDIT: Your one-liner */}
            Full-stack developer passionate about crafting clean, performant
            web applications. Currently pursuing my degree in Computer Science.
          </p>

          <div className={styles.stats}>
            {/* ✏️ EDIT: Your numbers */}
            <div className={styles.stat}>
              <span className={styles.statNum}>2+</span>
              <span className={styles.statLabel}>Projects Built</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>Languages</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>1</span>
              <span className={styles.statLabel}>Internship</span>
            </div>
          </div>

          <div className={styles.btns}>
            <a href="#projects" className="btn-primary">View My Work →</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>

          <div className={styles.socials}>
            {/* ✏️ EDIT: Your social links */}
            <a href="https://github.com/keerthanasuresh2525-alt" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <GithubIcon /> GitHub
            </a>
            <a href="https://linkedin.com/in/keerthana-s-2938b0399" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="mailto:keerthanasuresh2525@gmail.com" className={styles.socialLink}>
              <MailIcon /> Email
            </a>
          </div>
        </div>

        {/* Right: Avatar card */}
        <div className={styles.visual}>
          <div className={styles.card}>
            
            <div className={styles.cardName}>Keerthana.S</div>
            <div className={styles.cardRole}>Full-Stack Developer</div>
            <div className={styles.cardTags}>
              {/* ✏️ EDIT: Your top 3 skills */}
              {['React', 'Node.js', 'Javascript'].map(t => (
                <span key={t} className={styles.cardTag}>{t}</span>
              ))}
            </div>
            <div className={styles.cardLocation}>
              📍 {/* ✏️ Your city */} Bengaluru, India
            </div>
          </div>

          {/* Floating accent chips */}
          <div className={`${styles.chip} ${styles.chip1}`}>⚡ Fast Learner</div>
          <div className={`${styles.chip} ${styles.chip2}`}>🎯 Problem Solver</div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}
