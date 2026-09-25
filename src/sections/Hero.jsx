import { FaGithub, FaLinkedin } from 'react-icons/fa'
import GitHubContributions from '../components/GitHubContributions'
import ImageCarousel from '../components/ImageCarousel'

const PHOTOS = ['Photo 1', 'Photo 2', 'Photo 3', 'Photo 4']

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-96px)] flex-col justify-center gap-10 border-b border-line px-6 py-16 sm:px-12 lg:px-24">
      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="text-sm tracking-widest text-rose uppercase">
            Collection Of Me · 2026
          </span>

          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Mariana Neugebauer Dourado
          </h1>

          <p className="mt-4 text-lg">
            <span className="text-foreground">Software Engineer at </span>
            <a
              href="https://integrationconsulting.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              @IntegrationConsulting
            </a>
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://github.com/NeugeMa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <FaGithub size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/neugema/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>

        <ImageCarousel images={PHOTOS} height={440} />
      </div>

      <GitHubContributions />
    </section>
  )
}

export default Hero
