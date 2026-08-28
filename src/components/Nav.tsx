import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(11,15,20,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.2s ease, border-color 0.2s ease',
      }}
    >
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            color: 'var(--text)',
            textDecoration: 'none',
          }}
        >
          <span style={{ color: 'var(--teal)' }}>~/</span>
          {profile.name.toLowerCase().replace(/\s+/g, '-')}
        </a>
        <div style={{ display: 'flex', gap: 28 }}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13.5,
                color: 'var(--text-muted)',
                textDecoration: 'none',
              }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
      <style>{`
        .nav-link { transition: color 0.15s ease; }
        .nav-link:hover { color: var(--teal) !important; }
      `}</style>
    </header>
  )
}
