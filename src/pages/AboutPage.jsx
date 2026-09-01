import Navbar from '../components/Navbar'
import About from '../sections/About'
import Footer from '../sections/Footer'

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}

export default AboutPage
