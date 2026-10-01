import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Dots from '../components/Dots'
import ProjectCard from '../components/ProjectCard'
import { useLanguage } from '../hooks/useLanguage.jsx'

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repudiandae laboriosam perferendis nulla earum. Sequi cumque odio quaerat incidunt cupiditate? Vero facilis sint sed obcaecati recusandae minima ad voluptates nihil!'

const projects = [
  {
    title: 'Orbital Academy',
    description: {
      en: 'A platform that takes what NASA and INPE already see from above. Crop risk, heat spots, water deficit and puts it in the hands of the people who need to decide what to do.\n\nA model predicts, an optimizer allocates, you operate. The satellite finally reaches the field.',
      pt: 'Uma plataforma que pega o que a NASA e o INPE já enxergam do espaço — risco de safra, pontos de calor, déficit hídrico — e coloca isso nas mãos de quem precisa decidir o que fazer.\n\nUm modelo prevê, um otimizador aloca, você opera. O satélite finalmente chega até o campo.',
    },
    tags: ['React', 'JavaScript', 'Expo'],
    cover: '/projects-img/orbital-academy.png',
    liveUrl: 'https://orbital-academy-omega.vercel.app/',
    repoUrl: 'https://github.com/NeugeMa/orbital-academy',
  },
  {
    title: 'Biblioteca-API',
    description: {
      en: "REST API built with ASP.NET Core (.NET 10) for managing a library's book collection. It supports creating, reading, updating, and deleting books through full CRUD operations.",
      pt: 'API REST desenvolvida em ASP.NET Core (.NET 10) para gerenciamento do acervo de livros de uma biblioteca. Permite cadastrar, consultar, atualizar e remover livros através de operações CRUD.',
    },
    tags: ['C#', 'SQL'],
    repoUrl: 'https://github.com/NeugeMa/biblioteca-api',
  },
  { title: 'Project 3', description: { en: LOREM, pt: LOREM }, tags: ['C#', 'SQL', 'Azure'] },
  { title: 'Project 4', description: { en: LOREM, pt: LOREM }, tags: ['Go', 'Docker'] },
  { title: 'Project 5', description: { en: LOREM, pt: LOREM }, tags: ['React', 'TailwindCSS'] },
  { title: 'Project 6', description: { en: LOREM, pt: LOREM }, tags: ['JavaScript', 'Node.js'] },
]

const CARDS_PER_PAGE = 3

function Projects() {
  const { lang } = useLanguage()
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(projects.length / CARDS_PER_PAGE)

  function goToPage(index) {
    setPage((index + pageCount) % pageCount)
  }

  return (
    <section
      id="projects"
      className="border-b border-line px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex items-center gap-6 sm:gap-10">
          <span className="w-12 text-sm text-muted sm:w-24">02</span>
          <h2 className="flex-1 font-display text-3xl sm:text-4xl">
            {lang === 'pt' ? 'Projetos' : 'Projects'}
          </h2>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              aria-label="Previous projects"
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-line text-muted transition-colors hover:text-foreground"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              aria-label="Next projects"
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-line text-muted transition-colors hover:text-foreground"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <hr className="border-line" />

        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${page * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid w-full shrink-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {projects
                  .slice(pageIndex * CARDS_PER_PAGE, pageIndex * CARDS_PER_PAGE + CARDS_PER_PAGE)
                  .map((project) => (
                    <ProjectCard
                      key={project.title}
                      label={project.title}
                      description={project.cardDescription ?? project.description[lang]}
                      image={project.cover}
                      tags={project.tags}
                      repoUrl={project.repoUrl}
                      onClick={() => {
                        const url = project.liveUrl ?? project.repoUrl
                        if (url) {
                          window.open(url, '_blank', 'noopener,noreferrer')
                        }
                      }}
                    />
                  ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10">
          <Dots count={pageCount} active={page} onSelect={goToPage} />
        </div>
      </div>
    </section>
  )
}

export default Projects
