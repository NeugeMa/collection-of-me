import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ExperienceItem from '../components/ExperienceItem'
import { useLanguage } from '../hooks/useLanguage.jsx'

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repudiandae laboriosam perferendis nulla earum. Sequi cumque odio quaerat incidunt cupiditate? Vero facilis sint sed obcaecati recusandae minima ad voluptates nihil!'

const experiences = [
  {
    logo: '/logos/fiap.png',
    company: 'FIAP',
    role: { en: 'Technical Support Intern', pt: 'Estagiária de Suporte Técnico' },
    period: 'Sep 2024 – Jan 2026',
    skills: ['CMD', 'Cloud', 'Hardware', 'Microsoft Excel'],
    description: { en: LOREM, pt: LOREM },
  },
  {
    logo: '/logos/integration-consulting.png',
    company: 'Integration Consulting',
    role: { en: 'System Developer Intern', pt: 'Estagiária de Desenvolvimento de Sistemas' },
    period: 'Jan 2026',
    current: true,
    skills: ['React.js', 'C#', 'TypeScript', 'Azure', 'SQL'],
    description: { en: LOREM, pt: LOREM },
  },
]

function Experiences() {
  const { lang } = useLanguage()
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const [dragLimit, setDragLimit] = useState(0)

  useEffect(() => {
    function measure() {
      if (!containerRef.current || !trackRef.current) return
      setDragLimit(Math.max(0, trackRef.current.scrollWidth - containerRef.current.clientWidth))
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section
      id="experiences"
      className="border-b border-line px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-10 flex items-center gap-6 sm:gap-10">
          <span className="w-12 text-sm text-muted sm:w-24">03</span>
          <h2 className="flex-1 font-display text-3xl sm:text-4xl">
            {lang === 'pt' ? 'Experiências' : 'Experiences'}
          </h2>
        </div>

        <div className="-mx-6 mt-12 overflow-hidden px-6 py-6">
          <div ref={containerRef}>
            <motion.div
              ref={trackRef}
              drag="x"
              dragConstraints={{ left: -dragLimit, right: 0 }}
              dragElastic={0.12}
              dragTransition={{ bounceStiffness: 220, bounceDamping: 26 }}
              className="flex cursor-grab gap-10 select-none active:cursor-grabbing"
            >
              {experiences.map((experience, index) => (
                <div key={experience.company} className="relative w-[90%] shrink-0">
                  <div
                    className={`absolute top-0 left-0 h-px bg-line ${
                      index === experiences.length - 1 ? 'right-0' : '-right-10'
                    }`}
                  />
                  <ExperienceItem
                    {...experience}
                    role={experience.role[lang]}
                    description={experience.description[lang]}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
