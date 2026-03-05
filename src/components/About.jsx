import { useReveal } from '../hooks/useReveal'

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--cyan)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
)

const objectives = [
    'Improve passenger experience',
    'Reduce bus overcrowding',
    'Enable adaptive route scheduling',
    'Enhance security and monitoring',
    'Create a scalable smart transit ecosystem',
]

const infoCards = [
    { label: 'Project Type', value: 'IoT Based Smart Transportation System' },
    { label: 'Domain', value: 'Intelligent Transportation Systems' },
    { label: 'Institution', value: 'K. K. Wagh Institute of Engineering Education and Research' },
    { label: 'Department', value: 'Artificial Intelligence and Data Science' },
]

const snapshots = [
    { label: 'RFID Technology', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M12 4v16M2 12h20" /></svg> },
    { label: 'Computer Vision', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg> },
    { label: 'Machine Learning', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 014 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 014-4z" /><path d="M10 17h4M11 21h2" /><path d="M9 11l-5 3M15 11l5 3" /></svg> },
    { label: 'IoT Sensors', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /><path d="M10 7h4M10 17h4M7 10v4M17 10v4" /></svg> },
    { label: 'Cloud Processing', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg> },
    { label: 'Real Time Analytics', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12h-4l-3 9L10 3 7 12H3" /></svg> },
]

export default function About() {
    const headerRef = useReveal()
    const gridRef = useReveal()
    const snapRef = useReveal()

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">Overview</span>
                    <h2>About OBUS</h2>
                    <p className="section-subtitle">An Autonomous Transit System for India</p>
                </div>
                <div className="about-grid reveal" ref={gridRef}>
                    <div className="about-text">
                        <p>OBUS (Optimized Bus Utilization System) is a smart public transportation solution designed to improve the efficiency of urban bus networks using real-time data, machine learning, RFID based ticketing, and computer vision. The system automatically monitors passenger flow, optimizes bus routes, and reduces overcrowding by adapting transit schedules based on demand. It enables faster boarding, better resource allocation, and a more reliable commuting experience for passengers.</p>
                        <p>The system integrates multiple technologies including machine learning, computer vision, RFID based ticketing, and cloud data infrastructure to improve operational efficiency and passenger experience.</p>
                        <div className="about-objectives">
                            <h3>Key Objectives</h3>
                            <ul>
                                {objectives.map((obj, i) => (
                                    <li key={i}><CheckIcon />{obj}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="about-info-grid">
                        {infoCards.map((card, i) => (
                            <div className="info-card" key={i}>
                                <span className="info-label">{card.label}</span>
                                <span className="info-value">{card.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="tech-snapshot reveal" ref={snapRef}>
                    <h3>Technology Snapshot</h3>
                    <div className="snapshot-grid">
                        {snapshots.map((s, i) => (
                            <div className="snapshot-item" key={i}>{s.icon}<span>{s.label}</span></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
