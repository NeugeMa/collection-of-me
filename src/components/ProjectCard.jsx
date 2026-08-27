import { motion } from 'framer-motion'

function ProjectCard({ label, image, onClick, ...motionProps }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      {...motionProps}
      className="group relative flex aspect-[3/2] cursor-pointer items-end overflow-hidden bg-placeholder p-4 text-left"
    >
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      {!image && (
        <div className="absolute inset-0 transition-colors group-hover:bg-soft" />
      )}
      <span className="relative z-10 bg-panel/70 px-2 py-1 text-xs tracking-widest text-muted uppercase">
        {label}
      </span>
    </motion.button>
  )
}

export default ProjectCard
