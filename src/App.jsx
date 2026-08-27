import Navbar from './components/Navbar'
import About from './sections/About'
import Experiences from './sections/Experiences'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
    </div>
  )
}

export default App
