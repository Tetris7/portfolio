import { skills } from '../data/portfolio'
import Reveal from './Reveal'

const GROUPS: { label: string; items: string[] }[] = [
  { label: 'frontend', items: skills.frontend },
  { label: 'tools', items: skills.tools },
  { label: 'currently learning', items: skills.learning },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <span className="eyebrow">skills</span>
          <h2 className="section-title">What I work with</h2>
          <div style={{ display: 'grid', gap: 28 }}>
            {GROUPS.map((group) => (
              <div key={group.label} style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'baseline' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    color: 'var(--text-faint)',
                    width: 160,
                    flexShrink: 0,
                  }}
                >
                  {group.label}
                </span>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
