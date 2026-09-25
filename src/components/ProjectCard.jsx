import { motion } from 'framer-motion'
import { SKILL_ICONS } from '../lib/skillIcons'

function ProjectCard({ label, description, image, tags, onClick, ...motionProps }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
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
          <div className="h-full w-full transition-colors group-hover:bg-soft" />
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-foreground">{label}</h3>

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

          {description && <p className="mt-2 text-sm text-muted">{description}</p>}
        </div>
      </div>
    </motion.button>
  )
}

export default ProjectCard
