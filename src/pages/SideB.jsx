import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function SideB() {
  return (
    <div className="min-h-screen bg-[#F0EDEA] text-[#202020]">
      <header className="sticky top-0 z-50 flex h-24 items-center justify-between border-b border-[#E6E6E6] bg-[rgba(240,237,234,0.92)] px-6 backdrop-blur sm:px-12 lg:px-24">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-[#828282] transition-colors hover:text-[#202020]"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          Back to portfolio
        </Link>

        <span className="text-xs tracking-widest text-[#828282] uppercase">
          Side B · Personal
        </span>
      </header>

      <section className="flex flex-col items-center gap-6 px-6 py-24 text-center sm:px-12 sm:py-32">
        <span className="text-xs tracking-widest text-[#828282] uppercase">
          Off the clock
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl">
          The <em className="text-[#998182]">personal</em> side
        </h1>
      </section>
    </div>
  )
}

export default SideB
