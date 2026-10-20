import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage.jsx'

function Certificates() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 flex h-24 items-center justify-between border-b border-line bg-background/90 px-6 backdrop-blur sm:px-12 lg:px-24">
        <div className="flex items-center gap-4 sm:gap-10">
          <div className="flex border border-line text-xs tracking-widest uppercase">
            <button
              type="button"
              onClick={() => setLang('pt')}
              className={`cursor-pointer px-3 py-1.5 transition-colors ${
                lang === 'pt' ? 'bg-soft text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`cursor-pointer border-l border-line px-3 py-1.5 transition-colors ${
                lang === 'en' ? 'bg-soft text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            {lang === 'pt' ? 'Voltar ao portfólio' : 'Back to portfolio'}
          </Link>
        </div>

        <span className="text-xs tracking-widest text-muted uppercase">
          {lang === 'pt' ? 'Certificados' : 'Certificates'}
        </span>
      </header>

      <section className="flex min-h-[calc(100vh-96px)] flex-col items-center justify-center gap-6 px-6 text-center sm:px-12">
        <span className="text-xs tracking-widest text-rose uppercase">
          {lang === 'pt' ? 'Em produção' : 'In progress'}
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl">
          {lang === 'pt' ? (
            <>
              Em <em className="text-rose">breve</em>
            </>
          ) : (
            <>
              Coming <em className="text-rose">soon</em>
            </>
          )}
        </h1>
      </section>
    </div>
  )
}

export default Certificates
