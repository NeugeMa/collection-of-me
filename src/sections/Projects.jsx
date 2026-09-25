import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Dots from '../components/Dots'
import ProjectCard from '../components/ProjectCard'

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repudiandae laboriosam perferendis nulla earum. Sequi cumque odio quaerat incidunt cupiditate? Vero facilis sint sed obcaecati recusandae minima ad voluptates nihil!'

const projects = [
  {
    title: 'Orbital Academy',
    description:
      'A platform that takes what NASA and INPE already see from above. Crop risk, heat spots, water deficit and puts it in the hands of the people who need to decide what to do. A model predicts, an optimizer allocates, you operate. The satellite finally reaches the field.',
    tags: ['React', 'JavaScript', 'Expo'],
    cover: '/projects-img/orbital-academy.png',
    liveUrl: 'https://orbital-academy-omega.vercel.app/',
  },
  { title: 'Project 2', description: LOREM, tags: ['Python', 'FastAPI', 'Pandas'] },
  { title: 'Project 3', description: LOREM, tags: ['C#', 'SQL', 'Azure'] },
  { title: 'Project 4', description: LOREM, tags: ['Go', 'Docker'] },
  { title: 'Project 5', description: LOREM, tags: ['React', 'TailwindCSS'] },
  { title: 'Project 6', description: LOREM, tags: ['JavaScript', 'Node.js'] },
]

const CARDS_PER_PAGE = 3

function Projects() {
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
          <h2 className="flex-1 font-display text-3xl sm:text-4xl">Projects</h2>

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
                      description={project.cardDescription ?? project.description}
                      image={project.cover}
                      tags={project.tags}
                      onClick={() => {
                        if (project.liveUrl) {
                          window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
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
