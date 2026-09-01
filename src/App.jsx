import Navbar from './components/Navbar'
import Contributions from './sections/Contributions'
import Experiences from './sections/Experiences'
import Hero from './sections/Hero'
import Journey from './sections/Journey'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Contributions />
      <Experiences />
      <Journey />
    </div>
  )
}

export default App
