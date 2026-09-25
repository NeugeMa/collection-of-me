import { ArrowLeft, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import MarqueeGallery from '../components/MarqueeGallery'
import useTheme from '../hooks/useTheme'
import Footer from '../sections/Footer'

const GALLERY_PHOTOS = [
  { label: 'Photo 1', src: '/image/side-b/Image.jpg' },
  { label: 'Photo 2', src: '/image/side-b/Image%20(1).jpg' },
  { label: 'Photo 3', src: '/image/side-b/Image%20(2).jpg' },
  { label: 'Photo 4', src: '/image/side-b/Image%20(3).jpg' },
  { label: 'Photo 5', src: '/image/side-b/Image%20(4).jpg' },
  { label: 'Photo 6', src: '/image/side-b/Image%20(5).jpg' },
  { label: 'Photo 7', src: '/image/side-b/Image%20(6).jpg' },
  { label: 'Photo 8', src: '/image/side-b/Image%20(7).jpg' },
  { label: 'Photo 9', src: '/image/side-b/Image%20(8).jpg' },
]

const SIDE_B_PARAGRAPHS = [
  'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Curabitur pretium tincidunt lacus ut malesuada velit convallis in cras ultricies mi eget mauris pharetra.',
]

function SideB() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 flex h-24 items-center justify-between border-b border-line bg-background/90 px-6 backdrop-blur sm:px-12 lg:px-24">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          Back to portfolio
        </Link>

        <div className="flex items-center gap-4 sm:gap-10">
          <span className="text-xs tracking-widest text-muted uppercase">
            Side B · Personal
          </span>

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
        </div>
      </header>

      <section className="flex flex-col items-center gap-6 px-6 py-24 text-center sm:px-12 sm:py-32">
        <span className="text-xs tracking-widest text-muted uppercase">
          What I do when I'm not using notebook
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl">
          The <em className="text-rose">personal</em> side
        </h1>
      </section>

      <MarqueeGallery items={GALLERY_PHOTOS} />

      <section className="flex min-h-screen flex-col justify-center border-t border-line px-6 py-16 sm:px-12 lg:px-24 lg:py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex items-start gap-6 lg:w-72 lg:shrink-0">
            <span className="text-sm text-muted">01</span>
            <h2 className="font-display text-3xl sm:text-4xl">About Me</h2>
          </div>

          <div className="flex max-w-3xl flex-1 flex-col gap-6">
            <p className="text-lg text-foreground">{SIDE_B_PARAGRAPHS[0]}</p>
            <p className="text-muted">{SIDE_B_PARAGRAPHS[1]}</p>
            <p className="text-muted">{SIDE_B_PARAGRAPHS[2]}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SideB
