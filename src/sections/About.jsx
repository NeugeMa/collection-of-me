import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import GitHubRepos from '../components/GitHubRepos'

const HIGHLIGHT_LINKS = {
  '@Integration Consulting': 'https://integrationconsulting.com/en/',
  '@FIAP':
    'https://www.fiap.com.br/?utm_term=fiap&utm_campaign=PSQ+-+Institucional+-+FIAP+Institucional&utm_source=adwords&utm_medium=ppc&hsa_acc=5249877522&hsa_cam=283477471&hsa_grp=19962859231&hsa_ad=611807872041&hsa_src=g&hsa_tgt=kwd-452097382&hsa_kw=fiap&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=283477471&gclid=CjwKCAjwwL_UBhAjEiwAEhuT5FBjYLD2GlcqzIdmGhmYqXNH2pZ6AomZEb-yIl_78CsqLtBoIbgwSxoCIBcQAvD_BwE',
}

function renderHighlighted(text) {
  const pattern = /(@Integration Consulting|@FIAP)/
  return text.split(pattern).map((part, index) => {
    if (!(part in HIGHLIGHT_LINKS)) return part

    const href = HIGHLIGHT_LINKS[part]
    if (!href) {
      return (
        <span key={index} className="text-rose">
          {part}
        </span>
      )
    }

    return (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-rose underline-offset-4 hover:underline"
      >
        {part}
      </a>
    )
  })
}

const aboutSideA = {
  heading: 'Professional Side',
  paragraphs: [
    "Hi, I'm Mariana. Nice to meet you :)",
    "I'm pursuing a degree in Software Engineering at @FIAP, and previously, I studied Data Analysis and Development. Along the way, I've gained experience with several programming languages and technologies, such as SQL, JavaScript, C# and Golang, as well as a solid understanding of hardware.",
    'In addition to my technical background, I have familiarity with DevOps practices, UX/UI Design principles, and Agile Methodology, which help me contribute to modern, collaborative, and user-centered development environments.',
    'I also have an advanced level of English and basic knowledge of Spanish, continuously seeking to broaden my cultural and professional horizons.',
    "At the moment I'm working at @Integration Consulting with development full-stack.",
  ],
}

const aboutSideB = {
  heading: 'Personal Side',
}

function About() {
  const [side, setSide] = useState('a')

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center border-b border-line px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 flex flex-wrap items-center gap-6 sm:gap-10">
          <span className="w-12 text-sm text-muted sm:w-24">01</span>
          <h2 className="flex-1 font-display text-3xl sm:text-4xl">About me</h2>

          <div className="flex border border-line">
            <button
              type="button"
              onClick={() => setSide('a')}
              className={`cursor-pointer px-6 py-3 text-sm transition-colors ${
                side === 'a' ? 'bg-soft text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              Side A · Professional
            </button>
            <button
              type="button"
              onClick={() => setSide('b')}
              className={`cursor-pointer border-l border-line px-6 py-3 text-sm transition-colors ${
                side === 'b' ? 'bg-soft text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              Side B · Personal
            </button>
          </div>
        </div>

        <hr className="border-line" />

        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            {side === 'a' ? (
              <motion.div
                key="a"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <span className="text-xs tracking-widest text-rose uppercase">Side A</span>
                <h3 className="mt-4 mb-8 font-display text-4xl">{aboutSideA.heading}</h3>
                <div className="flex max-w-3xl flex-col gap-6 text-lg text-muted">
                  {aboutSideA.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{renderHighlighted(paragraph)}</p>
                  ))}
                </div>

                <GitHubRepos />
              </motion.div>
            ) : (
              <motion.div
                key="b"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <span className="text-xs tracking-widest text-rose uppercase">Side B</span>
                <h3 className="mt-4 mb-8 font-display text-4xl">{aboutSideB.heading}</h3>
                <p className="max-w-3xl text-lg text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repudiandae laboriosam perferendis nulla earum. Sequi cumque odio quaerat incidunt cupiditate? Vero facilis sint sed obcaecati recusandae minima ad voluptates nihil!</p>

                <div className="mt-8 flex gap-3">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center border border-line text-muted transition-colors hover:text-foreground"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="flex h-11 w-11 items-center justify-center border border-line text-muted transition-colors hover:text-foreground"
                  >
                    <FaYoutube size={18} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default About
