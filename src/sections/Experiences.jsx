import ExperienceItem from '../components/ExperienceItem'

const experiences = [
  {
    logoLabel: 'IC',
    logoColor: '#4F6DF5',
    company: 'Integration Consulting',
    role: 'System Developer Intern',
    period: 'Jan 2026 –',
    current: true,
    description:
      'At Integration Consulting, I work on data analysis, software architecture, and building features in JavaScript, React.js and SQL as part of the development team.',
  },
  {
    logoLabel: 'FI',
    logoColor: '#E8862E',
    company: 'FIAP',
    role: 'Technical Support Intern',
    period: 'Sep 2024 – Jan 2026',
    description:
      'Provided technical support with a focus on Microsoft Excel, task automation, computer hardware, and computer networking troubleshooting.',
    certificate: {
      label: 'Windows Prompt - utilizando o CMD (Alura)',
      file: '/certificates/windows-prompt-cmd-alura.pdf',
    },
  },
]

function Experiences() {
  return (
    <section
      id="experiences"
      className="flex min-h-screen flex-col justify-center border-b border-line px-24 py-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-14 flex items-center gap-10">
          <span className="w-24 text-sm text-muted">02</span>
          <h2 className="font-display text-4xl">Experiences</h2>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-14">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.company} {...experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
