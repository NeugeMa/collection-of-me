import { Download } from 'lucide-react'

function Navbar() {
  return (
    <header className="flex h-24 items-center justify-end border-b border-line px-6 sm:px-12 lg:px-24">
      <nav className="flex items-center gap-4 sm:gap-10">
        <a href="#certificates" className="text-muted transition-colors hover:text-foreground">
          Certificates
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
