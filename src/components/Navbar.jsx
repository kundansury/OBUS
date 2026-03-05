import { useState } from 'react'

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'features', label: 'Features' },
    { id: 'technology', label: 'Technology' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'results', label: 'Results' },
    { id: 'team', label: 'Team' },
]

function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) {
        window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
    }
}

export default function Navbar({ activeSection, scrolled }) {
    const [open, setOpen] = useState(false)

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <div className="nav-container">
                <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('hero') }}>
                    <svg className="logo-icon" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="4" y="6" width="24" height="16" rx="4" />
                        <circle cx="10" cy="24" r="2" />
                        <circle cx="22" cy="24" r="2" />
                        <line x1="8" y1="12" x2="24" y2="12" />
                    </svg>
                    <span>OBUS</span>
                </a>
                <button className={`nav-toggle${open ? ' active' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle navigation">
                    <span></span><span></span><span></span>
                </button>
                <ul className={`nav-links${open ? ' open' : ''}`}>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={activeSection === item.id ? 'active' : ''}
                                onClick={e => { e.preventDefault(); scrollTo(item.id); setOpen(false) }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
