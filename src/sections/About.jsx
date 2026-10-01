import { Cloud, Database } from 'lucide-react'
import { SiDocker, SiDotnet, SiGo, SiNodedotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si'
import GitHubRepos from '../components/GitHubRepos'
import { useLanguage } from '../hooks/useLanguage.jsx'

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

const COPY = {
  en: {
    heading: 'About me',
    greeting: "Hi, I'm Mariana! Nice to meet you :)",
    bioStart: "I'm pursuing a degree in Software Engineering at ",
    bioEnd:
      ", and previously, I studied Data Analysis and Development. Along the way, I've gained experience with several programming languages and technologies, such as SQL, JavaScript, C#, Python, and Golang, as well as a solid understanding of hardware.",
    devops:
      'In addition to my technical background, I have familiarity with DevOps practices, UX/UI Design principles, and Agile Methodology, which help me contribute to modern, collaborative, and user-centered development environments.',
    languages:
      'I also have an advanced level of English and basic knowledge of Spanish, continuously seeking to broaden my cultural and professional horizons.',
  },
  pt: {
    heading: 'Sobre mim',
    greeting: 'Oie, sou a Mariana! Muito prazer :)',
    bioStart: 'Estou cursando Engenharia de Software na ',
    bioEnd:
      ' e, anteriormente, estudei Análise e Desenvolvimento de Dados. Ao longo do caminho, ganhei experiência com diversas linguagens de programação e tecnologias, como SQL, JavaScript, C#, Python e Golang, além de um bom entendimento de hardware.',
    devops:
      'Além da minha formação técnica, tenho familiaridade com práticas de DevOps, princípios de UX/UI Design e Metodologia Ágil, o que me ajuda a contribuir com ambientes de desenvolvimento modernos, colaborativos e centrados no usuário.',
    languages:
      'Também tenho nível avançado de inglês e conhecimento básico de espanhol, sempre buscando ampliar meus horizontes culturais e profissionais.',
  },
}

function About() {
  const { lang } = useLanguage()
  const copy = COPY[lang]

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center border-b border-line px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:flex-row lg:items-start">
        <div className="flex items-start gap-6 lg:w-72 lg:shrink-0">
          <span className="text-sm text-muted">01</span>
          <h2 className="font-display text-3xl sm:text-4xl">{copy.heading}</h2>
        </div>

        <div className="flex max-w-3xl flex-1 flex-col gap-6">
          <p className="text-lg text-foreground">{copy.greeting}</p>
          <p className="text-muted">
            {copy.bioStart}
            <span className="text-rose">@FIAP</span>
            {copy.bioEnd}
          </p>

          <p className="text-muted">{copy.devops}</p>
          <p className="text-muted">{copy.languages}</p>


          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {SKILLS.map(({ name, Icon }) => (
              <span
                key={name}
                className="flex items-center gap-1.5 text-xs text-rose"
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
