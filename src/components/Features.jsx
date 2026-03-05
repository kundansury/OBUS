import { useReveal } from '../hooks/useReveal'

const features = [
    { title: 'Tapless RFID Ticketing', desc: 'Passengers are automatically detected when boarding using RFID cards. The system logs entries even when cards are inside bags or wallets.', icon: <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M12 4v16M2 12h20" /></svg> },
    { title: 'Real Time Passenger Counting', desc: 'Computer vision powered by object detection counts passengers entering and leaving the bus with high accuracy.', icon: <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg> },
    { title: 'Dynamic Route Optimization', desc: 'Machine learning models analyze traffic and passenger demand to dynamically adjust routes and schedules.', icon: <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg> },
    { title: 'Transit Data Analytics', desc: 'Data insights help transit authorities understand commuter patterns and improve operational efficiency.', icon: <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12h-4l-3 9L10 3 7 12H3" /></svg> },
    { title: 'Security and Fare Protection', desc: 'Automated passenger detection reduces fare evasion and improves system transparency and accountability.', icon: <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg> },
]

export default function Features() {
    const headerRef = useReveal()
    const gridRef = useReveal()

    return (
        <section id="features" className="section section-dark">
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">Capabilities</span>
                    <h2>Key Features</h2>
                    <p className="section-subtitle">Comprehensive smart transit capabilities</p>
                </div>
                <div className="features-grid reveal" ref={gridRef}>
                    {features.map((f, i) => (
                        <div className="feature-card" key={i}>
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
