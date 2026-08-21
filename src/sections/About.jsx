import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Dots from '../components/Dots'
import ImageCarousel from '../components/ImageCarousel'

const SIDES = ['a', 'b']

const aboutSideA = {
  heading: 'Professional Side',
  paragraphs: [
    "Hi, I'm Mariana. Nice to meet you :)",
    "I'm pursuing a degree in Software Engineering at FIAP, and previously, I studied Data Analysis and Development. Along the way, I've gained experience with several programming languages and technologies, such as SQL, JavaScript, C# and Golang, as well as a solid understanding of hardware.",
    'In addition to my technical background, I have familiarity with DevOps practices, UX/UI Design principles, and Agile Methodology, which help me contribute to modern, collaborative, and user-centered development environments.',
    'I also have an advanced level of English and basic knowledge of Spanish, continuously seeking to broaden my cultural and professional horizons.',
    "At the moment I'm working at @Integration Consulting with development.",
  ],
}

const aboutSideB = {
  heading: 'Personal Side',
  images: ['Photo 1', 'Photo 2', 'Photo 3', 'Photo 4'],
}

function About() {
  const [side, setSide] = useState('a')

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center border-b border-line px-24 py-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 flex items-center gap-10">
          <span className="w-24 text-sm text-muted">01</span>
          <h2 className="flex-1 font-display text-4xl">About me</h2>

          <div className="flex border border-line">
            <button
              type="button"
              onClick={() => setSide('a')}
              className={`px-6 py-3 text-sm transition-colors ${
                side === 'a' ? 'bg-soft text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              Side A · Professional
            </button>
            <button
              type="button"
              onClick={() => setSide('b')}
              className={`border-l border-line px-6 py-3 text-sm transition-colors ${
                side === 'b' ? 'bg-soft text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              Side B · Personal
            </button>
          </div>
        </div>

        <hr className="border-line" />

        <div className="relative mt-10 min-h-[520px]">
          <AnimatePresence mode="wait">
            {side === 'a' ? (
              <motion.div
                key="a"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid grid-cols-[280px_1fr] gap-[72px]"
              >
                <div className="flex h-[420px] items-end bg-placeholder p-4">
                  <span className="text-xs tracking-widest text-muted uppercase">
                    Image A
                  </span>
                </div>

                <div>
                  <span className="text-xs tracking-widest text-rose uppercase">
                    Side A
                  </span>
                  <h3 className="mt-3 mb-6 font-display text-3xl">
                    {aboutSideA.heading}
                  </h3>
                  <div className="flex flex-col gap-4 text-muted">
                    {aboutSideA.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex gap-3">
                    <a
                      href="https://github.com/NeugeMa"
                      aria-label="GitHub"
                      className="flex h-11 w-11 items-center justify-center border border-line text-muted transition-colors hover:text-foreground"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/neugema/"
                      aria-label="LinkedIn"
                      className="flex h-11 w-11 items-center justify-center border border-line text-muted transition-colors hover:text-foreground"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="b"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid grid-cols-[280px_1fr] gap-[72px]"
              >
                <ImageCarousel images={aboutSideB.images} />

                <div>
                  <span className="text-xs tracking-widest text-rose uppercase">
                    Side B
                  </span>
                  <h3 className="mt-3 mb-6 font-display text-3xl">
                    {aboutSideB.heading}
                  </h3>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repudiandae laboriosam perferendis nulla earum. Sequi cumque odio quaerat incidunt cupiditate? Vero facilis sint sed obcaecati recusandae minima ad voluptates nihil!</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10">
          <Dots count={2} active={SIDES.indexOf(side)} />
        </div>
      </div>
    </section>
  )
}

export default About
