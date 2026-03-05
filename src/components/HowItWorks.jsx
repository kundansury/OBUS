import { useReveal } from '../hooks/useReveal'

const steps = [
    { num: '01', title: 'Passenger Boards Bus', desc: 'Passengers enter the bus through designated entry points equipped with sensors.' },
    { num: '02', title: 'RFID System Logs Entry', desc: 'RFID reader detects passenger card automatically, logging the boarding event.' },
    { num: '03', title: 'Camera Counts Passengers', desc: 'YOLO-based computer vision system counts passengers entering and exiting in real time.' },
    { num: '04', title: 'Data Transmitted to Server', desc: 'Passenger flow data is securely transmitted to the backend server for processing.' },
    { num: '05', title: 'ML Model Analyzes Patterns', desc: 'Machine learning algorithms analyze passenger flow data and identify demand patterns.' },
    { num: '06', title: 'System Adjusts Routes', desc: 'Based on predictions, the system dynamically adjusts routes and schedules.' },
    { num: '07', title: 'Dashboard Displays Insights', desc: 'Transit authorities receive real-time analytics and operational insights on the dashboard.' },
]

export default function HowItWorks() {
    const headerRef = useReveal()
    const timelineRef = useReveal()

    return (
        <section id="how-it-works" className="section">
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">Process</span>
                    <h2>How The System Works</h2>
                    <p className="section-subtitle">Step-by-step system operation flow</p>
                </div>
                <div className="steps-timeline reveal" ref={timelineRef}>
                    {steps.map((s, i) => (
                        <div className="step-item" key={i}>
                            <div className="step-number">{s.num}</div>
                            <div className="step-content">
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
