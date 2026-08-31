import ExperienceItem from '../components/ExperienceItem'

const experiences = [
  {
    title: 'System Developer Intern',
    company: 'Integration Consulting',
    type: 'Internship',
    period: 'Jan 2026 - Present',
    skills: [
      'Data Analysis',
      'Software Architecture',
      'JavaScript',
      'React.js',
      'English',
      'SQL',
      'C#',
    ],
  },
  {
    title: 'Technical Support Intern',
    company: 'FIAP',
    type: 'Internship',
    period: 'Sep 2024 - Jan 2026',
    length: '1 yr 5 mos',
    skills: [
      'Microsoft Excel',
      'Task Automation',
      'English',
      'Computer Hardware',
      'Computer Networking',
      'Problem Solving',
    ],
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
      <div className="mx-auto flex w-full max-w-5xl items-start gap-[72px]">
        <span className="w-24 text-sm text-muted">02</span>
        <h2 className="w-60 shrink-0 font-display text-4xl">Experiences</h2>

        <div className="min-w-0 flex-1 border-l border-line pl-10">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
