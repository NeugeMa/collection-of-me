import Navbar from './components/Navbar'
import Experiences from './sections/Experiences'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
