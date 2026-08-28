import { profile } from '../data/portfolio'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" style={{ borderBottom: 'none' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <Reveal>
          <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
            contact
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', maxWidth: 560, margin: '0 auto' }}>
            Have a project or opportunity in mind? I'd love to hear from you.
          </h2>
          <div
            style={{
              display: 'flex',
              gap: 24,
              justifyContent: 'center',
              marginTop: 32,
              flexWrap: 'wrap',
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
            }}
          >
            <a href={`mailto:${profile.email}`} style={{ color: 'var(--teal)', textDecoration: 'none' }}>
              {profile.email}
            </a>
            <a href={profile.github} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
              GitHub ↗
            </a>
            <a href={profile.linkedin} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
              LinkedIn ↗
            </a>
          </div>
          <p style={{ marginTop: 60, color: 'var(--text-faint)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} {profile.name}. Built with React + TypeScript.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
