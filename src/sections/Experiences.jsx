import ExperienceItem from '../components/ExperienceItem'

const experiences = [
  {
    logo: '/logos/integration-consulting.png',
    company: 'Integration Consulting',
    role: 'System Developer Intern',
    period: 'Jan 2026 –',
    current: true,
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
    logo: '/logos/fiap.png',
    company: 'FIAP',
    role: 'Technical Support Intern',
    period: 'Sep 2024 – Jan 2026',
    skills: [
      'Microsoft Excel',
      'Task Automation',
      'English',
      'Computer Hardware',
      'Computer Networking',
      'Problem Solving',
    ],
  },
]

function Experiences() {
  return (
    <section
      id="experiences"
      className="border-b border-line px-24 py-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-14 flex items-center gap-10">
          <span className="w-24 text-sm text-muted">02</span>
          <h2 className="font-display text-4xl">Experiences</h2>
        </div>

        <div className="border-l border-line pl-10">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.company} {...experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences
