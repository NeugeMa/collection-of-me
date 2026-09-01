import EducationItem from '../components/EducationItem'

const education = [
  {
    institution: 'FIAP',
    program: 'Bachelor of Technology - BTech, Computer Software Engineering',
    period: 'Feb 2024 - Dec 2027',
    skills: ['React.js', 'Git and Version Control'],
    current: true,
  },
  {
    institution: 'Ada',
    program: 'Bootcamp, Data',
    period: 'Oct 2025 - Apr 2026',
    skills: ['Data Analysis', 'SQL'],
    certificate: {
      label: 'Bootcamp Certificate - Ada Tech',
    },
  },
  {
    institution: 'Wizard by Pearson',
    program: 'English Language and Literature/Letters',
    period: 'Jan 2021 - Dec 2025',
    skills: ['Leadership', 'English'],
  },
  {
    institution: 'Senac',
    program: 'Technical High School, Information Technology',
    period: 'Jan 2020 - Dec 2022',
    skills: ['Technical Support', 'Computer Hardware'],
  },
]

function Journey() {
  return (
    <section
      id="journey"
      className="flex min-h-screen flex-col justify-center border-b border-line px-24 py-20"
    >
      <div className="mx-auto flex w-full max-w-5xl items-start gap-[72px]">
        <span className="w-24 text-sm text-muted">04</span>
        <h2 className="w-60 shrink-0 font-display text-4xl">Journey</h2>

        <div className="min-w-0 flex-1 border-l border-line pl-10">
          {education.map((entry) => (
            <EducationItem key={entry.institution} {...entry} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey
