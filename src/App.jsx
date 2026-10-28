import Navbar from './components/Navbar'
import About from './sections/About'
import Certificates from './sections/Certificates'
import Experiences from './sections/Experiences'
import Footer from './sections/Footer'
import Hero from './sections/Hero'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Experiences />
      <Footer />
    </div>
  )
}

export default App
