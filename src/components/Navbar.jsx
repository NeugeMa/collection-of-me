import { Download } from 'lucide-react'

function Navbar() {
  return (
    <header className="flex h-24 items-center justify-end border-b border-line px-24">
      <nav className="flex items-center gap-10">
        <a href="#projects" className="text-muted transition-colors hover:text-foreground">
          Projects
        </a>
        <a href="#experiences" className="text-muted transition-colors hover:text-foreground">
          Experiences
        </a>
        <a
          href="/CV - Mariana.pdf"
          download
          className="flex items-center justify-center bg-rose p-3 text-background transition-opacity hover:opacity-80">
          <Download size={20} strokeWidth={1.75} />
        </a>
      </nav>
    </header>
  )
}

export default Navbar