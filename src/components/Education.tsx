import { education } from '../data/portfolio'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <span className="eyebrow">education</span>
          <h2 className="section-title">Education</h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {education.map((item) => (
              <div key={item.degree + item.school} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 640 }}>
                <div>
                  <h3 style={{ fontSize: 18 }}>{item.degree}</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: 4 }}>{item.school}</p>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)' }}>
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
