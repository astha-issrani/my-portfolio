import SmoothScroll from './components/SmoothScroll'
import LoadingScreen from './components/LoadingScreen'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Volunteering from './components/Volunteering'
import Blackboard from './components/Blackboard'
import Games from './components/Games'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app">
      <LoadingScreen />
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Volunteering />
        <Blackboard />
        <Games />
        <Contact />
      </main>
      <Marquee />
    </div>
  )
}
