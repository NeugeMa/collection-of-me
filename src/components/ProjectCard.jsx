import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SKILL_ICONS } from '../lib/skillIcons'

function ProjectCard({ label, description, image, tags, repoUrl, onClick, ...motionProps }) {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') onClick?.()
      }}
      whileTap={{ scale: 0.97 }}
      {...motionProps}
      className="group flex w-full cursor-pointer flex-col text-left"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-placeholder">
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center transition-colors group-hover:bg-soft">
            <span className="text-xs tracking-widest text-muted uppercase">No image</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground">{label}</h3>

        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            aria-label="Repository"
            className="shrink-0 text-muted transition-colors hover:text-foreground"
          >
            <FaGithub size={18} />
          </a>
        )}
      </div>

      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out group-hover:grid-rows-[1fr]">
        <div className="overflow-hidden">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
              {tags.map((tag) => {
                const Icon = SKILL_ICONS[tag]
                return (
                  <span key={tag} className="flex items-center gap-1.5 text-xs text-muted">
                    {Icon && <Icon size={12} />}
                    {tag}
                  </span>
                )
              })}
            </div>
          )}

          {description && (
            <p className="mt-2 text-sm whitespace-pre-line text-muted">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
