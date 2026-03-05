import { useReveal } from '../hooks/useReveal'

const problems = [
    { title: 'Overcrowding', desc: 'Excessive passenger loads during peak hours create unsafe and uncomfortable conditions.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg> },
    { title: 'Inefficient Routes', desc: 'Static bus schedules that do not adapt to real-time demand cause delays and wasted resources.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
    { title: 'Fare Evasion', desc: 'Traditional ticketing systems are prone to revenue loss through unmonitored boarding.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg> },
    { title: 'No Real-Time Monitoring', desc: 'Lack of live passenger data prevents responsive management of transit operations.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /><line x1="1" y1="1" x2="23" y2="23" strokeWidth="2" /></svg> },
    { title: 'Static Scheduling', desc: 'Fixed timetables ignore fluctuating passenger demand, leading to service inefficiency.', icon: <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
]

export default function Problem() {
    const headerRef = useReveal()
    const gridRef = useReveal()
    const summaryRef = useReveal()

    return (
        <section id="problem" className="section section-dark">
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">Challenge</span>
                    <h2>Problem Statement</h2>
                    <p className="section-subtitle">Urban bus systems face critical operational challenges</p>
                </div>
                <div className="problem-grid reveal" ref={gridRef}>
                    {problems.map((p, i) => (
                        <div className="problem-card" key={i}>
                            <div className="problem-icon">{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="problem-summary reveal" ref={summaryRef}>
                    <p>These issues lead to delays, passenger discomfort, and inefficient utilization of transportation resources across urban bus networks.</p>
                </div>
            </div>
        </section>
    )
}
