import { useReveal } from '../hooks/useReveal'

const items = [
    { title: 'Real-Time GPS Tracking', desc: 'Live bus location tracking with predictive arrival times for passengers.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg> },
    { title: 'Passenger Mobile App', desc: 'Mobile application for passengers with live updates and digital ticketing.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg> },
    { title: 'AI Demand Prediction', desc: 'Advanced AI models for predictive demand forecasting and resource allocation.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 014 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 014-4z" /><path d="M10 17h4M11 21h2" /><path d="M9 11l-5 3M15 11l5 3" /></svg> },
    { title: 'Multi-Modal Integration', desc: 'Integration with metro, train, and ride-sharing ticketing systems.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="6" width="16" height="12" rx="3" /><circle cx="9" cy="20" r="1.5" /><circle cx="15" cy="20" r="1.5" /><line x1="7" y1="10" x2="17" y2="10" /></svg> },
    { title: 'City-Wide Smart Mobility', desc: 'Expanding into a complete city-wide intelligent transportation network.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg> },
]

export default function FutureScope() {
    const headerRef = useReveal()
    const gridRef = useReveal()

    return (
        <section id="future" className="section section-dark">
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">Vision</span>
                    <h2>Future Scope</h2>
                    <p className="section-subtitle">Planned system enhancements and expansions</p>
                </div>
                <div className="future-grid reveal" ref={gridRef}>
                    {items.map((item, i) => (
                        <div className="future-card" key={i}>
                            <div className="future-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
