import { useReveal } from '../hooks/useReveal'

const solutions = [
    { num: '01', title: 'Tapless RFID Ticketing', desc: 'Passengers are automatically detected when boarding using RFID cards, even when inside bags or wallets.' },
    { num: '02', title: 'Computer Vision Counting', desc: 'Object detection powered by YOLO counts passengers entering and leaving the bus in real time.' },
    { num: '03', title: 'ML Demand Prediction', desc: 'Machine learning models analyze traffic and passenger demand to forecast peak periods.' },
    { num: '04', title: 'Dynamic Routing', desc: 'System dynamically adjusts bus routes and schedules based on real-time commuter patterns.' },
    { num: '05', title: 'Occupancy Monitoring', desc: 'Real-time passenger occupancy data transmitted continuously for live transit management.' },
]

export default function Solution() {
    const headerRef = useReveal()
    const gridRef = useReveal()

    return (
        <section id="solution" className="section">
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">Approach</span>
                    <h2>Proposed Solution</h2>
                    <p className="section-subtitle">A data driven approach to public transport management</p>
                </div>
                <div className="solution-grid reveal" ref={gridRef}>
                    {solutions.map((s, i) => (
                        <div className="solution-card" key={i}>
                            <div className="solution-number">{s.num}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
