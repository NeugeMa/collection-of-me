import { motion } from 'framer-motion'

function ProjectCard({ label, description, image, onClick, ...motionProps }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      {...motionProps}
      className="group flex cursor-pointer flex-col text-left"
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
      {description && (
        <p className="mt-1 line-clamp-2 text-sm text-muted">{description}</p>
      )}
    </motion.button>
  )
}

export default ProjectCard
