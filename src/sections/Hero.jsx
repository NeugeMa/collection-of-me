import { Cloud, Database } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  SiDotnet,
  SiGo,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import GitHubContributions from '../components/GitHubContributions'
import ImageCarousel from '../components/ImageCarousel'

const PHOTOS = ['Photo 1', 'Photo 2', 'Photo 3', 'Photo 4']

const SKILLS = [
  { name: 'React', Icon: SiReact },
  { name: 'C#', Icon: SiDotnet },
  { name: 'Go', Icon: SiGo },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Python', Icon: SiPython },
  { name: 'Oracle', Icon: Database },
  { name: 'Azure', Icon: Cloud },
]

function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-96px)] flex-col justify-center gap-10 border-b border-line px-24 py-10">
      <div className="grid w-full grid-cols-2 items-center gap-20">
        <div>
          <span className="text-sm tracking-widest text-rose uppercase">
            Collection Of Me · 2026
          </span>

          <h1 className="mt-4 font-display text-6xl">
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

          <p className="mt-6 max-w-md text-muted">
            Nice to meet you :)
            <br />
            At the moment I'm working at{' '}
            <span className="font-semibold text-foreground">@Integration Consulting</span>{' '}
            with development full stack.
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

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            {SKILLS.map(({ name, Icon }) => (
              <span
                key={name}
                className="flex items-center gap-1.5 text-xs text-muted"
              >
                <Icon size={12} />
                {name}
              </span>
            ))}
          </div>
        </div>

        <ImageCarousel images={PHOTOS} height={440} />
      </div>

      <GitHubContributions />
    </section>
  )
}

export default Hero
