import CyberGrid from './components/CyberGrid'
import ColorOrbs from './components/ColorOrbs'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Blackboard from './components/Blackboard'
import Games from './components/Games'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app">
      <SmoothScroll />
      <ColorOrbs />
      <CyberGrid />
      <div className="scanlines" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Blackboard />
        <Games />
        <Contact />
      </main>
    </div>
  )
}
