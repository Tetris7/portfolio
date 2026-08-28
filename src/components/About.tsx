import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="eyebrow">about</span>
        <h2 className="section-title">About Me</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 640 }}>
          {profile.about}
        </p>
      </div>
    </section>
  )
}
