import { experience } from '../data/portfolio'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <span className="eyebrow">experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <div style={{ display: 'grid', gap: 32 }}>
            {experience.map((job) => (
              <div key={job.title + job.company} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 20 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)' }}>
                  {job.period}
                </span>
                <div>
                  <h3 style={{ fontSize: 19 }}>{job.title}</h3>
                  <p style={{ color: 'var(--teal)', fontFamily: 'var(--font-mono)', fontSize: 13.5, marginTop: 4 }}>
                    {job.company}
                  </p>
                  <ul style={{ marginTop: 12, paddingLeft: 18, color: 'var(--text-muted)', display: 'grid', gap: 6 }}>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
