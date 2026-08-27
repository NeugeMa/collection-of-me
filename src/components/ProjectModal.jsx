import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import LivePreview from './LivePreview'

function getSubtitle(project) {
  return project.subtitle ?? [project.role, project.timeframe].filter(Boolean).join(' · ')
}

function getGallery(project) {
  return project.gallery ?? [{ label: 'Gallery 1' }, { label: 'Gallery 2' }]
}

function ProjectModal({ project, onClose }) {
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
            className="w-full max-w-3xl border border-line bg-background"
          >
            <div className="h-64 overflow-hidden bg-placeholder">
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
              <motion.button
                type="button"
                onClick={onClose}
                aria-label="Close"
                whileTap={{ scale: 0.8 }}
                className="absolute top-8 right-8 cursor-pointer text-muted transition-colors hover:text-foreground"
              >
                <X size={20} strokeWidth={1.5} />
              </motion.button>

              <h3 className="font-display text-4xl">{project.title}</h3>
              {getSubtitle(project) && (
                <p className="mt-2 text-muted">{getSubtitle(project)}</p>
              )}

              {project.summary && <p className="mt-6 text-muted">{project.summary}</p>}
              {!project.summary && project.description && (
                <p className="mt-6 text-muted">{project.description}</p>
              )}

              {project.about && (
                <div className="mt-6">
                  <h4 className="text-xs tracking-widest text-rose uppercase">
                    {project.about.heading}
                  </h4>
                  <div className="mt-3 flex flex-col gap-4 text-muted">
                    {project.about.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {project.about.cycle && (
                    <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-center text-foreground">
                      {project.about.cycle.map((step, index) => (
                        <span key={step} className="flex items-center gap-2">
                          {index > 0 && <span className="text-rose">→</span>}
                          {step}
                        </span>
                      ))}
                    </p>
                  )}

                  {project.about.closing && (
                    <p className="mt-4 text-muted">{project.about.closing}</p>
                  )}
                </div>
              )}

              <div className="mt-6 grid grid-cols-2 gap-4">
                {getGallery(project).map((item) =>
                  item.type === 'iframe' ? (
                    <div
                      key={item.label}
                      className="col-span-2 border border-line"
                    >
                      <LivePreview src={item.src} title={item.label} />
                    </div>
                  ) : (
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
                  ),
                )}
              </div>

              <div className="mt-6 flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-line px-6 py-3 text-sm transition-colors hover:bg-soft"
                  >
                    Live link
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-line px-6 py-3 text-sm transition-colors hover:bg-soft"
                  >
                    Repository
                  </a>
                )}
                {project.docsUrl && (
                  <a
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-line px-6 py-3 text-sm transition-colors hover:bg-soft"
                  >
                    Docs
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
