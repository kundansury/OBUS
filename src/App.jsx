import { useState, useEffect, useRef, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Technology from './components/Technology'
import Architecture from './components/Architecture'
import HowItWorks from './components/HowItWorks'
import Implementation from './components/Implementation'
import Results from './components/Results'
import FutureScope from './components/FutureScope'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
    const [activeSection, setActiveSection] = useState('')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            const sections = document.querySelectorAll('section[id]')
            let current = ''
            sections.forEach(sec => {
                if (window.scrollY >= sec.offsetTop - 100) {
                    current = sec.id
                }
            })
            setActiveSection(current)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Navbar activeSection={activeSection} scrolled={scrolled} />
            <Hero />
            <About />
            <Problem />
            <Solution />
            <Features />
            <Technology />
            <Architecture />
            <HowItWorks />
            <Implementation />
            <Results />
            <FutureScope />
            <Team />
            <Footer />
        </>
    )
}

export default App
