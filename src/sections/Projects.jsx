import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repudiandae laboriosam perferendis nulla earum. Sequi cumque odio quaerat incidunt cupiditate? Vero facilis sint sed obcaecati recusandae minima ad voluptates nihil!'

const projects = [
  {
    title: 'Orbital Academy - Global Solution',
    subtitle: 'A project about universe',
    summary:
      'Plataforma que pega o que a NASA e o INPE já enxergam lá de cima — risco em lavoura, foco de calor, déficit hídrico — e coloca na mão de quem precisa decidir o que fazer. Um modelo prevê, um otimizador aloca, você opera. O satélite finalmente chega em campo.',
    about: {
      heading: 'Sobre o Projeto',
      paragraphs: [
        'O dado espacial é abundante, gratuito e cada vez mais preciso. O que ainda é escasso é a capacidade de transformar esse dado em ação sob recurso limitado, em tempo real, por pessoas que não têm formação em sensoriamento remoto.',
        'O Orbital Academy não substitui o especialista técnico: ele torna a decisão com dado espacial acessível para qualquer operador, produtor rural ou equipe de campo que antes ficava de fora desse ciclo. A plataforma percorre o ciclo completo:',
      ],
      cycle: ['Ver', 'Prever', 'Validar', 'Decidir', 'Otimizar', 'Agir', 'Medir'],
    },
    cover: '/image/projects-banner/Image.webp',
    gallery: [
      {
        type: 'iframe',
        src: 'https://orbital-academy-omega.vercel.app/',
        label: 'Live preview',
      },
    ],
    repoUrl: 'https://github.com/NeugeMa/orbital-academy',
    docsUrl: '/projects/orbital-academy-documentacao.pdf',
  },
  { title: 'Project 2', role: 'Role', timeframe: 'Timeframe', description: LOREM },
  { title: 'Project 3', role: 'Role', timeframe: 'Timeframe', description: LOREM },
  { title: 'Project 4', role: 'Role', timeframe: 'Timeframe', description: LOREM },
  { title: 'Project 5', role: 'Role', timeframe: 'Timeframe', description: LOREM },
]

const INITIAL_COUNT = 3

function Projects() {
  const [expanded, setExpanded] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const visible = projects.slice(0, INITIAL_COUNT)
  const extra = projects.slice(INITIAL_COUNT)

  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center border-b border-line px-24 py-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 flex items-center gap-10">
          <span className="w-24 text-sm text-muted">03</span>
          <h2 className="flex-1 font-display text-4xl">Projects</h2>
        </div>

        <hr className="border-line" />

        <div className="mt-10 grid grid-cols-2 gap-6">
          {visible.map((project) => (
            <ProjectCard
              key={project.title}
              label={project.title}
              image={project.cover}
              onClick={() => setSelectedProject(project)}
            />
          ))}

          <AnimatePresence initial={false} mode="popLayout">
            {expanded &&
              extra.map((project) => (
                <ProjectCard
                  key={project.title}
                  label={project.title}
                  image={project.cover}
                  onClick={() => setSelectedProject(project)}
                  layout="position"
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              ))}
          </AnimatePresence>

          <motion.button
            layout="position"
            type="button"
            onClick={() => setExpanded((value) => !value)}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex aspect-[3/2] items-center justify-center border border-line bg-panel text-xs tracking-widest text-rose uppercase transition-colors hover:text-foreground"
          >
            {expanded ? 'Show less' : 'View all'}
          </motion.button>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
