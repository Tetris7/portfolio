import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="top"
      style={{ border: 'none', paddingTop: 'clamp(72px, 12vw, 120px)' }}
    >
      <div className="container" style={{ display: 'grid', gap: 40 }}>
        <div>
          <span className="tag" style={{ marginBottom: 20 }}>
            available for work
          </span>
          <h1
            style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              lineHeight: 1.05,
              marginTop: 18,
            }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--teal)',
              fontSize: 'clamp(15px, 2vw, 18px)',
              marginTop: 12,
            }}
          >
            {profile.role}
          </p>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: 'clamp(16px, 2vw, 19px)',
              maxWidth: 520,
              marginTop: 18,
            }}
          >
            {profile.headline}
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">
              View my projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact me
            </a>
          </div>
        </div>

        {/* Signature element: a code-editor window rendering the profile as a typed object */}
        <div className="code-window" aria-hidden="true">
          <div className="code-window-bar">
            <span className="dot" style={{ background: '#ff5f57' }} />
            <span className="dot" style={{ background: '#febc2e' }} />
            <span className="dot" style={{ background: '#28c840' }} />
            <span className="code-window-filename">profile.ts</span>
          </div>
          <pre className="code-window-body">
            <code>
              <span className="c-muted">01</span> <span className="c-kw">const</span>{' '}
              <span className="c-var">developer</span> = {'{'}
              {'\n'}
              <span className="c-muted">02</span> {'  '}
              <span className="c-prop">name</span>:{' '}
              <span className="c-str">'{profile.name}'</span>,{'\n'}
              <span className="c-muted">03</span> {'  '}
              <span className="c-prop">role</span>:{' '}
              <span className="c-str">'{profile.role}'</span>,{'\n'}
              <span className="c-muted">04</span> {'  '}
              <span className="c-prop">stack</span>: [
              <span className="c-str">'React'</span>,{' '}
              <span className="c-str">'TypeScript'</span>,{' '}
              <span className="c-str">'CSS'</span>],{'\n'}
              <span className="c-muted">05</span> {'  '}
              <span className="c-prop">shipsBugFreeCode</span>:{' '}
              <span className="c-kw">true</span>
              <span className="cursor">▍</span>
              {'\n'}
              <span className="c-muted">06</span> {'}'}
            </code>
          </pre>
        </div>
      </div>

      <style>{`
        .btn-primary, .btn-secondary {
          font-family: var(--font-mono);
          font-size: 14px;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 6px;
          display: inline-block;
        }
        .btn-primary {
          background: var(--teal);
          color: var(--bg);
          font-weight: 600;
        }
        .btn-secondary {
          border: 1px solid var(--border);
          color: var(--text);
        }
        .btn-primary:hover { background: #94efd4; }
        .btn-secondary:hover { border-color: var(--teal); color: var(--teal); }

        .code-window {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          max-width: 560px;
          box-shadow: 0 30px 60px -30px rgba(0,0,0,0.6);
        }
        .code-window-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 14px;
          border-bottom: 1px solid var(--border);
          background: var(--surface-2);
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
        .code-window-filename {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--text-faint);
          margin-left: 8px;
        }
        .code-window-body {
          margin: 0;
          padding: 22px 20px;
          font-family: var(--font-mono);
          font-size: 13.5px;
          line-height: 1.9;
          overflow-x: auto;
        }
        .c-muted { color: var(--text-faint); user-select: none; }
        .c-kw { color: #c792ea; }
        .c-var { color: var(--text); }
        .c-prop { color: #79b8ff; }
        .c-str { color: var(--amber); }
        .cursor {
          color: var(--teal);
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
