import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, FileText, Globe, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import LivePreview from './LivePreview'
import ProjectRepos from './ProjectRepos'

function localize(value, lang) {
  if (value == null) return value
  const isLocalizedWrapper =
    typeof value === 'object' && !Array.isArray(value) && ('pt' in value || 'en' in value)
  return isLocalizedWrapper ? (value[lang] ?? value.en ?? value.pt) : value
}

function TopicAccordion({ topic }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-4 border-t border-line pt-4 first:mt-6 first:border-t-0 first:pt-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
      >
        <span className="text-xs tracking-widest text-rose uppercase">{topic.label}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-muted"
        >
          <ChevronDown size={14} strokeWidth={1.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-4 flex max-w-xl flex-col gap-4 text-muted">
              {topic.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {topic.cycle && (
              <p className="mt-4 flex flex-wrap items-center gap-2 text-foreground">
                {topic.cycle.map((step, index) => (
                  <span key={step} className="flex items-center gap-2">
                    {index > 0 && <span className="text-rose">→</span>}
                    {step}
                  </span>
                ))}
              </p>
            )}

            {topic.details && (
              <div className="mt-4 flex max-w-xl flex-col gap-3 text-sm text-muted">
                {topic.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            )}

            {topic.closing && <p className="mt-4 max-w-xl text-muted">{topic.closing}</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  const [lang, setLang] = useState('pt')

  useEffect(() => {
    if (!project) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return <AnimatePresence />

  const summary = localize(project.summary, lang)
  const about = localize(project.about, lang)
  const gallery = project.gallery

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-background/90 p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-4xl border border-line bg-background"
          >
            <div className="h-48 overflow-hidden bg-placeholder">
              {project.cover ? (
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-end p-4">
                  <span className="text-xs tracking-widest text-muted uppercase">
                    Cover image
                  </span>
                </div>
              )}
            </div>

            <div className="relative p-10">
              <div className="absolute top-8 right-8 flex items-center gap-4">
                <div className="flex border border-line text-xs tracking-widest uppercase">
                  <button
                    type="button"
                    onClick={() => setLang('pt')}
                    className={`cursor-pointer px-3 py-1.5 transition-colors ${
                      lang === 'pt' ? 'bg-soft text-foreground' : 'text-muted hover:text-foreground'
                    }`}
                  >
                    PT
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`cursor-pointer border-l border-line px-3 py-1.5 transition-colors ${
                      lang === 'en' ? 'bg-soft text-foreground' : 'text-muted hover:text-foreground'
                    }`}
                  >
                    EN
                  </button>
                </div>

                <motion.button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  whileTap={{ scale: 0.8 }}
                  className="cursor-pointer text-muted transition-colors hover:text-foreground"
                >
                  <X size={20} strokeWidth={1.5} />
                </motion.button>
              </div>

              <h3 className="max-w-xl font-display text-4xl">{project.title}</h3>

              {summary && <p className="mt-6 max-w-xl text-muted">{summary}</p>}
              {!summary && project.description && (
                <p className="mt-6 max-w-xl text-muted">{project.description}</p>
              )}

              {about?.topics?.[0] && (
                <div className="mt-6">
                  <h4 className="text-xs tracking-widest text-rose uppercase">
                    {about.topics[0].label}
                  </h4>
                  <div className="mt-3 flex max-w-xl flex-col gap-4 text-muted">
                    {about.topics[0].paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {about?.topics?.slice(1).map((topic) => (
                <TopicAccordion key={topic.label} topic={topic} />
              ))}

              {project.repos && <ProjectRepos repos={project.repos} />}

              {project.livePreview && (
                <div className="mt-6 border border-line">
                  <div className="border-b border-line px-4 py-2">
                    <span className="text-xs tracking-widest text-muted uppercase">
                      Live preview
                    </span>
                  </div>
                  <LivePreview src={project.livePreview} title={`${project.title} live preview`} />
                </div>
              )}

              {gallery && gallery.length > 0 && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {gallery.map((item) => (
                    <div
                      key={item.label}
                      className="h-40 overflow-hidden border border-line bg-placeholder"
                    >
                      {item.type === 'image' && (
                        <img
                          src={item.src}
                          alt={item.label}
                          className="h-full w-full object-cover"
                        />
                      )}
                      {item.type === 'pdf' && (
                        <iframe
                          src={`${item.src}#toolbar=0`}
                          title={item.label}
                          className="h-full w-full"
                        />
                      )}
                      {!item.type && (
                        <div className="flex h-full items-end p-4">
                          <span className="text-xs tracking-widest text-muted uppercase">
                            {item.label}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex gap-3">
                {!project.repos && project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Repository"
                    className="flex h-11 w-11 items-center justify-center border border-line text-muted transition-colors hover:text-foreground"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.docsUrl && (
                  <a
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Docs"
                    className="flex h-11 w-11 items-center justify-center border border-line text-muted transition-colors hover:text-foreground"
                  >
                    <FileText size={18} strokeWidth={1.5} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="flex h-11 w-11 items-center justify-center border border-line text-muted transition-colors hover:text-foreground"
                  >
                    <Globe size={18} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
