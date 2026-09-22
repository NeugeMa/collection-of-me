import { Download, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import useTheme from '../hooks/useTheme'

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 flex h-24 items-center justify-end border-b border-line bg-background/90 px-6 backdrop-blur sm:px-12 lg:px-24">
      <nav className="flex items-center gap-4 sm:gap-10">
        <a
          href="#certificates"
          className="text-xs tracking-widest text-muted uppercase transition-colors hover:text-foreground"
        >
          Certificates
        </a>
        <Link
          to="/side-b"
          className="text-xs tracking-widest text-muted uppercase transition-colors hover:text-foreground"
        >
          Side B · Personal
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark/light mode"
          className="cursor-pointer text-muted transition-colors hover:text-foreground"
        >
          {theme === 'dark' ? (
            <Sun size={20} strokeWidth={1.75} />
          ) : (
            <Moon size={20} strokeWidth={1.75} />
          )}
        </button>
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
