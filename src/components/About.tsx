import { profile } from '../data/portfolio'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <span className="eyebrow">about</span>
          <h2 className="section-title">A little context</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 640 }}>
            {profile.about}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
