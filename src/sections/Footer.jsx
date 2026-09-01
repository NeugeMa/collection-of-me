import { ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiReact, SiTailwindcss, SiVercel } from 'react-icons/si'

const STACK = [
  { name: 'React', Icon: SiReact },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Vercel', Icon: SiVercel },
]

function scrollToTop(event) {
  event.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="flex flex-col gap-10 px-24 py-20 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-4xl">
            Let's <em className="text-rose">talk</em>
          </h2>
          <p className="mt-2 text-muted">Copyright ©NeugeMa All Rights Reserved</p>
          <a
            href="mailto:mariana.n.dourado@gmail.com"
            className="mt-1 block text-sm text-rose transition-colors hover:text-foreground"
          >
            mariana.n.dourado@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-6">
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

      <div className="flex flex-col gap-6 border-t border-line px-24 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
          <span>Built with:</span>
          {STACK.map(({ name, Icon }) => (
            <span key={name} className="flex items-center gap-2">
              <Icon size={16} />
              {name}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex cursor-pointer items-center gap-2 text-xs tracking-widest text-muted uppercase transition-colors hover:text-foreground"
        >
          <ArrowUp size={14} strokeWidth={1.5} />
          Back to top
        </button>
      </div>
    </footer>
  )
}

export default Footer
