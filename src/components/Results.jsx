import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const stats = [
    { target: 20, unit: '%', label: 'Reduction in Overcrowding', fill: '80%' },
    { target: 90, unit: '%', label: 'Passenger Satisfaction', fill: '90%' },
    { target: 15, unit: '%', label: 'Operational Cost Reduction', fill: '70%' },
    { target: 98, unit: '%', label: 'Monitoring Accuracy', fill: '98%' },
]

function AnimatedCounter({ target, started }) {
    const [val, setVal] = useState(0)

    useEffect(() => {
        if (!started) return
        const duration = 1500
        const start = performance.now()
        function update(now) {
            const p = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            setVal(Math.round(target * ease))
            if (p < 1) requestAnimationFrame(update)
        }
        requestAnimationFrame(update)
    }, [started, target])

    return <>{val}</>
}

export default function Results() {
    const headerRef = useReveal()
    const gridRef = useReveal()
    const sectionRef = useRef(null)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setStarted(true); obs.disconnect() }
        }, { threshold: 0.3 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <section id="results" className="section" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal" ref={headerRef}>
                    <span className="section-tag">Impact</span>
                    <h2>Results and Performance</h2>
                    <p className="section-subtitle">Measurable improvements in transit operations</p>
                </div>
                <div className="stats-grid reveal" ref={gridRef}>
                    {stats.map((s, i) => (
                        <div className="stat-card" key={i}>
                            <div className="stat-value"><AnimatedCounter target={s.target} started={started} /></div>
                            <div className="stat-unit">{s.unit}</div>
                            <div className="stat-label">{s.label}</div>
                            <div className="stat-bar">
                                <div className={`stat-bar-fill${started ? ' animated' : ''}`} style={{ '--fill-width': s.fill }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
