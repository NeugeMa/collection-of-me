import Navbar from './components/Navbar'
import About from './sections/About'
import Experiences from './sections/Experiences'
import Hero from './sections/Hero'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
    </div>
  )
}

export default App
