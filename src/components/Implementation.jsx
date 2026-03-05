import { useReveal } from '../hooks/useReveal'

const items = [
    { title: 'Frontend Interface', desc: 'Built with React for responsive dashboards and real-time data visualization.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
    { title: 'Backend APIs', desc: 'Developed in Python using Django with RESTful API architecture.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
    { title: 'Data Storage', desc: 'Passenger data stored and managed in PostgreSQL database.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
    { title: 'Computer Vision', desc: 'Models implemented using YOLO and OpenCV for passenger detection and counting.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg> },
    { title: 'ML Pipeline', desc: 'Models trained to analyze passenger patterns and optimize routes dynamically.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 014 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 014-4z" /><path d="M10 17h4M11 21h2" /></svg> },
    { title: 'Cloud Deployment', desc: 'Deployed using containerized environments with Docker and cloud infrastructure.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg> },
]

export default function Implementation() {
    const headerRef = useReveal()
    const gridRef = useReveal()

    return (
        <section id="implementation" className="section section-dark">
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">Development</span>
                    <h2>Implementation Details</h2>
                    <p className="section-subtitle">Agile development methodology with modern tooling</p>
                </div>
                <div className="impl-grid reveal" ref={gridRef}>
                    {items.map((item, i) => (
                        <div className="impl-card" key={i}>
                            <div className="impl-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
