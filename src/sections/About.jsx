import { Cloud, Database } from 'lucide-react'
import { SiDocker, SiDotnet, SiGo, SiNodedotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si'
import GitHubRepos from '../components/GitHubRepos'

const SKILLS = [
  { name: 'React', Icon: SiReact },
  { name: 'C#', Icon: SiDotnet },
  { name: 'Go', Icon: SiGo },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Python', Icon: SiPython },
  { name: 'Oracle', Icon: Database },
  { name: 'Azure', Icon: Cloud },
  { name: 'Docker', Icon: SiDocker },
]

function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center border-b border-line px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:flex-row lg:items-start">
        <div className="flex items-start gap-6 lg:w-72 lg:shrink-0">
          <span className="text-sm text-muted">01</span>
          <h2 className="font-display text-3xl sm:text-4xl">About me</h2>
        </div>

        <div className="flex max-w-3xl flex-1 flex-col gap-6">
          <p className="text-lg text-foreground">Hi, I'm Mariana! Nice to meet you :)</p>
          <p className="text-muted">
            I'm pursuing a degree in Software Engineering at{' '}
            <span className="text-rose">@FIAP</span>, and previously, I studied Data Analysis and
            Development. Along the way, I've gained experience with several programming languages
            and technologies, such as SQL, JavaScript, C#, Python, and Golang, as well as a
            solid understanding of hardware.
          </p>

          <p className="text-muted">In addition to my technical background, I have familiarity with DevOps practices, UX/UI Design principles, and Agile Methodology, which help me contribute to modern, collaborative, and user-centered development environments.</p>
          <p className="text-muted">I also have an advanced level of English and basic knowledge of Spanish, continuously seeking to broaden my cultural and professional horizons.</p>


          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {SKILLS.map(({ name, Icon }) => (
              <span
                key={name}
                className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-rose"
              >
                <Icon size={12} />
                {name}
              </span>
            ))}
          </div>

          <GitHubRepos />
        </div>
      </div>
    </section>
  )
}

export default About
