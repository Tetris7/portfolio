import { projects } from '../data/portfolio'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <span className="eyebrow">projects</span>
          <h2 className="section-title">Featured work</h2>
        </Reveal>
        <div style={{ display: 'grid', gap: 20 }}>
          {projects.map((project, i) => (
            <Reveal key={project.name}>
              <article className="project-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 12.5,
                        color: 'var(--text-faint)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{ fontSize: 22, marginTop: 6 }}>{project.name}</h3>
                  </div>
                  <div style={{ display: 'flex', gap: 14, fontFamily: 'var(--font-mono)', fontSize: 13 }}>
                    {project.liveUrl && (
                      <a href={project.liveUrl} style={{ color: 'var(--teal)', textDecoration: 'none' }}>
                        Live demo ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', marginTop: 12, maxWidth: 600 }}>
                  {project.description}
                </p>
                <ul style={{ display: 'flex', gap: 8, flexWrap: 'wrap', listStyle: 'none', padding: 0, marginTop: 16 }}>
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        fontSize: 13,
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border)',
                        borderRadius: 4,
                        padding: '4px 10px',
                      }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--amber)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 26px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .project-card:hover {
          border-color: var(--teal);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}
