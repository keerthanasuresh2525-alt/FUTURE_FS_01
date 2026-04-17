import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

const CONTACT_INFO = [
  {
    icon: '📧',
    label: 'Email',
    value: 'keerthanasuresh2525@gmail.com',
    href: 'mailto:keerthanasuresh2525@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/keerthana-s-2938b0399',
    href: 'https://linkedin.com/in/keerthana-s-2938b0399',
  },
  {
    icon: '🐱',
    label: 'GitHub',
    value: 'https://github.com/keerthanasuresh2525-alt',
    href: 'https://github.com/keerthanasuresh2525-alt',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
  },
]

// ✏️ Replace these 3 values with yours from emailjs.com
const EMAILJS_SERVICE_ID  = 'service_o9v5uma'   // from Email Services
const EMAILJS_TEMPLATE_ID = 'template_zl892op'  // from Email Templates
const EMAILJS_PUBLIC_KEY  = '2QjNBEEWdRQzr3cJ5'       // from Account > General

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

try {
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      name:    form.name,      // matches {{name}} in template
      email:   form.email,     // matches {{email}} in Reply To
      title:   form.subject,   // matches {{title}} in Subject line
      message: form.message,   // matches {{message}} in template
    },
    EMAILJS_PUBLIC_KEY
  )

  setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="section-container">
        <div className={styles.header}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>
          <div className="section-divider" />
          <p className="section-desc">
            Whether you have an opportunity, a question, or just want to say hello —
            I'd love to hear from you.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Info */}
          <div className={`${styles.infoCol} reveal`}>
            <div className={styles.infoCards}>
              {CONTACT_INFO.map((item) => (
                item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.infoCard}>
                    <span className={styles.infoIcon}>{item.icon}</span>
                    <div>
                      <div className={styles.infoLabel}>{item.label}</div>
                      <div className={styles.infoValue}>{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={item.label} className={styles.infoCard}>
                    <span className={styles.infoIcon}>{item.icon}</span>
                    <div>
                      <div className={styles.infoLabel}>{item.label}</div>
                      <div className={styles.infoValue}>{item.value}</div>
                    </div>
                  </div>
                )
              ))}
            </div>

            <div className={styles.availability}>
              <div className={styles.availDot} />
              <div>
                <div className={styles.availTitle}>Currently Available</div>
                <div className={styles.availDesc}>Open to internship and full-time opportunities. Typically respond within 24 hours.</div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`${styles.formCol} reveal reveal-delay-2`}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Internship Opportunity / Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the opportunity or what you have in mind..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <><span className={styles.spinner} /> Sending...</>
                ) : (
                  <>Send Message →</>
                )}
              </button>

              {status === 'success' && (
                <div className={styles.successMsg}>
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className={styles.errorMsg}>
                  ✗ Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 