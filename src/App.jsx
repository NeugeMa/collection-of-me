function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="flex items-center justify-between px-6 py-6 md:px-16">
        <span className="font-semibold tracking-tight">seu nome</span>
        <nav className="flex gap-6 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white">Sobre</a>
          <a href="#projects" className="hover:text-white">Projetos</a>
          <a href="#contact" className="hover:text-white">Contato</a>
        </nav>
      </header>

      <section className="flex min-h-[70vh] flex-col items-start justify-center gap-4 px-6 md:px-16">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Olá, eu sou [seu nome]
        </h1>
        <p className="max-w-xl text-neutral-400">
          Breve descrição sobre quem você é e o que você faz.
        </p>
      </section>

      <section id="about" className="px-6 py-24 md:px-16">
        <h2 className="mb-6 text-2xl font-semibold">Sobre</h2>
        <p className="max-w-2xl text-neutral-400">Conteúdo em breve.</p>
      </section>

      <section id="projects" className="px-6 py-24 md:px-16">
        <h2 className="mb-6 text-2xl font-semibold">Projetos</h2>
        <p className="max-w-2xl text-neutral-400">Conteúdo em breve.</p>
      </section>

      <section id="contact" className="px-6 py-24 md:px-16">
        <h2 className="mb-6 text-2xl font-semibold">Contato</h2>
        <p className="max-w-2xl text-neutral-400">Conteúdo em breve.</p>
      </section>
    </div>
  )
}

export default App
