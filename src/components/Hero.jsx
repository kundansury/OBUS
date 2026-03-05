import { useRef, useEffect } from 'react'

function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
}

export default function Hero() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animId

        function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
        resize()
        window.addEventListener('resize', resize)

        const routes = []
        for (let i = 0; i < 8; i++) {
            const pts = []
            const n = 4 + Math.floor(Math.random() * 4)
            for (let j = 0; j < n; j++) pts.push({ x: (j / (n - 1)) * canvas.width, y: Math.random() * canvas.height })
            routes.push({ points: pts, color: i % 3 === 0 ? 'rgba(0,212,255,0.12)' : i % 3 === 1 ? 'rgba(245,183,49,0.08)' : 'rgba(255,255,255,0.04)', width: 1 + Math.random() * 2 })
        }

        const buses = Array.from({ length: 12 }, (_, i) => ({
            routeIdx: Math.floor(Math.random() * routes.length),
            t: Math.random(), speed: 0.0005 + Math.random() * 0.001,
            size: 3 + Math.random() * 3, color: i % 2 === 0 ? 'rgba(0,212,255,0.7)' : 'rgba(245,183,49,0.6)'
        }))

        const spacing = 60
        const gridDots = []
        const cols = Math.ceil(canvas.width / spacing), rows = Math.ceil(canvas.height / spacing)
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) gridDots.push({ x: c * spacing + spacing / 2, y: r * spacing + spacing / 2, a: 0.03 + Math.random() * 0.04 })

        function getPt(route, t) {
            const pts = route.points, seg = Math.floor(t * (pts.length - 1)), lt = t * (pts.length - 1) - seg
            const p1 = pts[Math.min(seg, pts.length - 1)], p2 = pts[Math.min(seg + 1, pts.length - 1)]
            return { x: p1.x + (p2.x - p1.x) * lt, y: p1.y + (p2.y - p1.y) * lt }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (const d of gridDots) { ctx.beginPath(); ctx.arc(d.x, d.y, 1, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255,${d.a})`; ctx.fill() }
            for (const r of routes) {
                ctx.beginPath(); ctx.moveTo(r.points[0].x, r.points[0].y)
                for (let i = 1; i < r.points.length; i++) { const p = r.points[i - 1], c = r.points[i]; ctx.quadraticCurveTo(p.x, p.y, (p.x + c.x) / 2, (p.y + c.y) / 2) }
                ctx.lineTo(r.points[r.points.length - 1].x, r.points[r.points.length - 1].y); ctx.strokeStyle = r.color; ctx.lineWidth = r.width; ctx.stroke()
            }
            for (const b of buses) {
                b.t += b.speed; if (b.t > 1) b.t = 0
                const pos = getPt(routes[b.routeIdx], b.t)
                const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, b.size * 4)
                grd.addColorStop(0, b.color); grd.addColorStop(1, 'transparent')
                ctx.beginPath(); ctx.arc(pos.x, pos.y, b.size * 4, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill()
                ctx.beginPath(); ctx.arc(pos.x, pos.y, b.size, 0, Math.PI * 2); ctx.fillStyle = b.color; ctx.fill()
            }
            animId = requestAnimationFrame(draw)
        }
        draw()

        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
    }, [])

    return (
        <section id="hero">
            <canvas ref={canvasRef} id="heroCanvas" />
            <div className="hero-overlay" />
            <div className="hero-bus-image">
                <img src="/images/hero-bus.png" alt="Smart city bus on futuristic urban road" />
            </div>
            <div className="hero-content">
                <div className="hero-badge">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="12" rx="3" /><circle cx="7.5" cy="19" r="1.5" /><circle cx="16.5" cy="19" r="1.5" /><line x1="6" y1="9" x2="18" y2="9" /></svg>
                    Smart Transit Platform
                </div>
                <h1 className="hero-title"><span className="hero-accent">OBUS</span></h1>
                <p className="hero-subtitle-main">Optimized Bus Utilization System</p>
                <p className="hero-tagline">A Smart Transit Platform for Data Driven Urban Bus Management</p>
                <p className="hero-desc">OBUS is an intelligent public transportation system designed to optimize bus utilization using machine learning, RFID based ticketing, and real time passenger monitoring. The system enables adaptive route management, reduces overcrowding, and improves efficiency across urban bus networks.</p>
                <div className="hero-highlights">
                    <div className="hero-highlight-item">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="12" rx="3" /><circle cx="7" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /></svg>
                        <span>Smart Passenger Detection</span>
                    </div>
                    <div className="hero-highlight-item">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                        <span>Real Time Occupancy Monitoring</span>
                    </div>
                    <div className="hero-highlight-item">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        <span>Dynamic Route Optimization</span>
                    </div>
                    <div className="hero-highlight-item">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M12 4v16M2 12h20" /></svg>
                        <span>Contactless Ticketing</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <a href="#architecture" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('architecture') }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>
                        Explore System Architecture
                    </a>
                    <a href="#implementation" className="btn btn-secondary" onClick={e => { e.preventDefault(); scrollTo('implementation') }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                        View Project Implementation
                    </a>
                </div>
            </div>
            <div className="hero-scroll-indicator"><span>Scroll to explore</span><div className="scroll-arrow" /></div>
        </section>
    )
}
