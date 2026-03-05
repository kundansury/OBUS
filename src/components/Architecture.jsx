import { useReveal } from '../hooks/useReveal'

const FlowArrow = () => (
    <div className="arch-flow-arrow">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--cyan)" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
        </svg>
    </div>
)

const layers = [
    {
        cls: 'arch-layer-input', title: 'Input Layer', nodes: [
            { label: 'RFID Module', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M12 4v16M2 12h20" /></svg> },
            { label: 'Camera Module', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg> },
            { label: 'Bus Device', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="6" width="16" height="12" rx="3" /><circle cx="9" cy="20" r="1.5" /><circle cx="15" cy="20" r="1.5" /><line x1="7" y1="10" x2="17" y2="10" /></svg> },
        ]
    },
    {
        cls: 'arch-layer-process', title: 'Processing Layer', nodes: [
            { label: 'Backend Server', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" /><circle cx="6" cy="18" r="1" /></svg> },
            { label: 'Database', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
            { label: 'ML Engine', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 014 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 014-4z" /><path d="M10 17h4M11 21h2" /><path d="M9 11l-5 3M15 11l5 3" /></svg> },
        ]
    },
    {
        cls: 'arch-layer-output', title: 'Output Layer', nodes: [
            { label: 'Transit Dashboard', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
            { label: 'Analytics Reports', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12h-4l-3 9L10 3 7 12H3" /></svg> },
            { label: 'Route Optimizer', icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
        ]
    },
]

export default function Architecture() {
    const headerRef = useReveal()
    const diagramRef = useReveal()

    return (
        <section id="architecture" className="section section-dark">
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">Design</span>
                    <h2>System Architecture</h2>
                    <p className="section-subtitle">End-to-end data flow architecture</p>
                </div>
                <div className="arch-diagram reveal" ref={diagramRef}>
                    {layers.map((layer, i) => (
                        <div key={i}>
                            {i > 0 && <FlowArrow />}
                            <div className={`arch-layer ${layer.cls}`}>
                                <h4>{layer.title}</h4>
                                <div className="arch-nodes">
                                    {layer.nodes.map((n, j) => (
                                        <div className="arch-node" key={j}>{n.icon}<span>{n.label}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
