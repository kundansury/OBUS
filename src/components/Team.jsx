import { useReveal } from '../hooks/useReveal'

const PersonIcon = () => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
)

const members = [
    { name: 'Uday Shah', role: 'Team Leader | Machine Learning and Data Analysis' },
    { name: 'Kundan Suryawanshi', role: 'System Architecture, Backend Development, IoT Integration' },
    { name: 'Anjas Vaidya', role: 'Data Processing, System Design' },
    { name: 'Sarthak Tisgaonkar', role: 'Frontend Interface and System Integration' },
]

export default function Team() {
    const headerRef = useReveal()
    const gridRef = useReveal()
    const instRef = useReveal()

    return (
        <section id="team" className="section">
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">People</span>
                    <h2>Project Team</h2>
                    <p className="section-subtitle">Development team behind OBUS</p>
                </div>
                <div className="team-grid reveal" ref={gridRef}>
                    {members.map((m, i) => (
                        <div className="team-card" key={i}>
                            <div className="team-avatar"><PersonIcon /></div>
                            <h3>{m.name}</h3>
                            <p className="team-role">{m.role}</p>
                        </div>
                    ))}
                </div>
                <div className="team-institution reveal" ref={instRef}>
                    <div className="inst-info">
                        <h3>K. K. Wagh Institute of Engineering Education and Research</h3>
                        <p>Department of Artificial Intelligence and Data Science</p>
                    </div>
                    <div className="inst-supervisor">
                        <h4>Academic Supervision</h4>
                        <p><strong>Project Instructor:</strong> Prof. Pranali K. Shinde</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
