import ExperienceItem from '../components/ExperienceItem'

const experiences = [
  {
    logo: '/logos/integration-consulting.png',
    company: 'Integration Consulting',
    role: 'System Developer Intern',
    period: 'Jan 2026 –',
    current: true,
    skills: ['React.js', 'C#', 'TypeScript', 'Azure', 'SQL'],
  },
  {
    logo: '/logos/fiap.png',
    company: 'FIAP',
    role: 'Technical Support Intern',
    period: 'Sep 2024 – Jan 2026',
    skills: ['CMD', 'Cloud', 'Hardware', 'Microsoft Excel'],
    certificates: [
      {
        label: 'Windows Prompt - utilizando o CMD.png',
        file: '/certificates/windows-prompt-cmd.png',
      },
    ],
  },
]

function Experiences() {
  return (
    <section
      id="experiences"
      className="border-b border-line px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-14 flex items-center gap-6 sm:gap-10">
          <span className="w-12 text-sm text-muted sm:w-24">03</span>
          <h2 className="font-display text-3xl sm:text-4xl">Experiences</h2>
        </div>

        <div className="border-l border-line pl-6 sm:pl-10">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.company} {...experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
