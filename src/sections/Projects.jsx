import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Dots from '../components/Dots'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repudiandae laboriosam perferendis nulla earum. Sequi cumque odio quaerat incidunt cupiditate? Vero facilis sint sed obcaecati recusandae minima ad voluptates nihil!'

const projects = [
  {
    title: 'Orbital Academy - Global Solution',
    cardDescription: 'Turning open space data into real, on-the-ground decisions.',
    subtitle: {
      pt: 'Um projeto sobre o espaço',
      en: 'A project about universe',
    },
    about: {
      pt: {
        topics: [
          {
            label: '1. O que é a Orbital Academy?',
            paragraphs: [
              'Sendo uma plataforma que ensina qualquer pessoa a transformar dado espacial em decisão real, operando uma missão de verdade em vez de assistir a uma aula.',
              'A solução combina dado aberto de satélite (NASA Earthdata, NASA FIRMS, INPE, Copernicus), um modelo de machine learning tradicional que prevê risco e um motor de otimização próprio que decide como alocar recursos limitados.',
              'O Console de Missão é a interface onde a pessoa vive esse ciclo. A Espaçoteca é a aba complementar de conteúdo e exploração.',
            ],
          },
          {
            label: '2. Contexto e Problema',
            paragraphs: [
              'O tema da Global Solution 2026.1 da FIAP é tecnologia espacial aplicada a desafios reais. A live de abertura, com a Bizu Space, a Safe on Orbit e a Visiona, deixou três pontos consistentes: o mercado real está em downstream (aplicação dos dados), o dado relevante já é aberto (Landsat, Sentinel, INPE, NASA Earthdata), e a entrega que importa é virar dado em decisão. O Guilherme da Safe on Orbit foi específico ao dizer que o que eles fazem internamente não é IA generativa, é otimização clássica sobre cenários com variáveis aleatórias e recursos limitados.',
              'Dado espacial é abundante, é gratuito e é cada vez mais fácil de consumir. Mas saber o que fazer com ele continua sendo uma capacidade restrita a quem tem formação técnica específica. Para o pequeno produtor rural, para a equipe de Defesa Civil de um município pequeno, para um agente de saúde em campo, o satélite ainda parece distante. A pergunta não é mais "como vemos?". A pergunta é "quem decide?".',
              'Em paralelo, FIAP e o ecossistema brasileiro de tecnologia carregam a "síndrome do vira-lata" que o Arthur da Visiona citou na live: a ideia de que espaço é coisa de gênio da NASA. Isso afasta jovens da área e perpetua a dependência de capacidades estrangeiras justamente em um momento em que o downstream está crescendo.',
            ],
          },
          {
            label: '3. Solução',
            paragraphs: [
              'Decisão com dado espacial não acontece quando alguém vê um mapa colorido. Acontece quando alguém escolhe, sob recurso limitado, qual ação tomar primeiro, e mede o resultado. O Orbital Academy organiza essa transformação em sete movimentos:',
            ],
            cycle: ['Ver', 'Prever', 'Validar', 'Decidir', 'Otimizar', 'Agir', 'Medir'],
            details: [
              '1. Ver: o satélite acende uma área de risco no mapa, com dado aberto e real.',
              '2. Prever: o modelo de ML estima a probabilidade de perda e o motivo principal.',
              '3. Validar: a câmera na ponta confirma ou corrige a previsão do satélite, em campo.',
              '4. Decidir: o operador escolhe onde alocar o recurso escasso (água, equipe, tempo).',
              '5. Otimizar: o motor próprio recalcula a melhor alocação dada as restrições atuais.',
              '6. Agir: o app guia a execução, inclusive offline.',
              '7. Medir: o sistema registra impacto e realimenta o modelo e a próxima decisão.',
            ],
          },
        ],
      },
    },
    cover: '/image/projects-banner/Image.webp',
    repos: ['OrbitalAcademy/orbital-academy-service', 'OrbitalAcademy/orbital-academy-ml'],
    livePreview: 'https://orbital-academy-omega.vercel.app/',
    docsUrl: '/projects/orbital-academy-documentacao.pdf',
    liveUrl: 'https://orbital-academy-omega.vercel.app/',
  },
  { title: 'Project 2', role: 'Role', timeframe: 'Timeframe', description: LOREM },
  { title: 'Project 3', role: 'Role', timeframe: 'Timeframe', description: LOREM },
  { title: 'Project 4', role: 'Role', timeframe: 'Timeframe', description: LOREM },
  { title: 'Project 5', role: 'Role', timeframe: 'Timeframe', description: LOREM },
  { title: 'Project 6', role: 'Role', timeframe: 'Timeframe', description: LOREM },
]

const CARDS_PER_PAGE = 2

function Projects() {
  const [page, setPage] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const pageCount = Math.ceil(projects.length / CARDS_PER_PAGE)

  function goToPage(index) {
    setPage((index + pageCount) % pageCount)
  }

  return (
    <section
      id="projects"
      className="border-b border-line px-24 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex items-center gap-10">
          <span className="w-24 text-sm text-muted">03</span>
          <h2 className="flex-1 font-display text-4xl">Projects</h2>

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
                className="grid w-full shrink-0 grid-cols-2 gap-10"
              >
                {projects
                  .slice(pageIndex * CARDS_PER_PAGE, pageIndex * CARDS_PER_PAGE + CARDS_PER_PAGE)
                  .map((project) => (
                    <ProjectCard
                      key={project.title}
                      label={project.title}
                      description={project.cardDescription ?? project.description}
                      image={project.cover}
                      onClick={() => setSelectedProject(project)}
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

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
