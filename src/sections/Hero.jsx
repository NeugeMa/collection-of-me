import { motion } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'

function Hero() {
  function handleScrollDown(event) {
    event.preventDefault()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative flex h-[calc(100vh-96px)] flex-col items-center justify-center gap-6 border-b border-line px-24 text-center">
      <span className="text-sm tracking-widest text-rose uppercase">
        Collection Of Me · 2026
      </span>

      <h1 className="font-display text-6xl">
        Mariana Neugebauer Dourado
      </h1>

      <p className="text-lg">
        <span className="text-foreground">Software Engineer at </span>{' '}
        <a
          href="https://integrationconsulting.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          @IntegrationConsulting
        </a>
      </p>

      <p className="flex items-center gap-2 text-xs text-muted">
        <Star size={12} className="fill-rose text-rose" />
        Design thinking · SQL · C# · TypeScript
      </p>

      <motion.a
        href="#about"
        onClick={handleScrollDown}
        aria-label="Scroll down"
        whileTap={{ scale: 0.8, y: 6 }}
        className="absolute bottom-10 animate-bounce text-muted transition-colors hover:text-foreground"
      >
        <ChevronDown size={24} strokeWidth={1.5} />
      </motion.a>
    </section>
  )
}

export default Hero