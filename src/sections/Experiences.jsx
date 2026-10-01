import ExperienceItem from '../components/ExperienceItem'
import { useLanguage } from '../hooks/useLanguage.jsx'

const experiences = [
  {
    logo: '/logos/integration-consulting.png',
    company: 'Integration Consulting',
    role: { en: 'System Developer Intern', pt: 'Estagiária de Desenvolvimento de Sistemas' },
    period: 'Jan 2026 –',
    current: true,
    skills: ['React.js', 'C#', 'TypeScript', 'Azure', 'SQL'],
  },
  {
    logo: '/logos/fiap.png',
    company: 'FIAP',
    role: { en: 'Technical Support Intern', pt: 'Estagiária de Suporte Técnico' },
    period: 'Sep 2024 – Jan 2026',
    skills: ['CMD', 'Cloud', 'Hardware', 'Microsoft Excel'],
  },
]

function Experiences() {
  const { lang } = useLanguage()

  return (
    <section
      id="experiences"
      className="border-b border-line px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-14 flex items-center gap-6 sm:gap-10">
          <span className="w-12 text-sm text-muted sm:w-24">03</span>
          <h2 className="font-display text-3xl sm:text-4xl">
            {lang === 'pt' ? 'Experiências' : 'Experiences'}
          </h2>
        </div>

        <div className="border-l border-line pl-6 sm:pl-10">
          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.company}
              {...experience}
              role={experience.role[lang]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
