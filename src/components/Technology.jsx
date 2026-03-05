import { useReveal } from '../hooks/useReveal'

const categories = [
    { title: 'Frontend', tags: ['React.js', 'HTML', 'CSS', 'JavaScript'], icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
    { title: 'Backend', tags: ['Python', 'Django', 'REST APIs'], icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" /></svg> },
    { title: 'Database', tags: ['PostgreSQL'], icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
    { title: 'Machine Learning', tags: ['Python', 'Scikit Learn', 'TensorFlow'], icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 014 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 014-4z" /><path d="M10 17h4M11 21h2" /></svg> },
    { title: 'Computer Vision', tags: ['YOLO', 'OpenCV'], icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg> },
    { title: 'Hardware', tags: ['RFID Reader Modules', 'RFID Cards'], icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></svg> },
    { title: 'Deployment', tags: ['Docker', 'AWS', 'Heroku'], icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg> },
    { title: 'Version Control', tags: ['Git'], icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 012 2v7" /><path d="M6 9v12" /></svg> },
]

export default function Technology() {
    const headerRef = useReveal()
    const gridRef = useReveal()

    return (
        <section id="technology" className="section">
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">Stack</span>
                    <h2>Technology Stack</h2>
                    <p className="section-subtitle">Built with modern, scalable technologies</p>
                </div>
                <div className="tech-grid reveal" ref={gridRef}>
                    {categories.map((c, i) => (
                        <div className="tech-category" key={i}>
                            <h3>{c.icon} {c.title}</h3>
                            <div className="tech-tags">
                                {c.tags.map((t, j) => <span key={j}>{t}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
