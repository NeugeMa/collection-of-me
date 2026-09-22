import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

function HobbyModal({ hobby, onClose }) {
  useEffect(() => {
    if (!hobby) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [hobby, onClose])

  if (!hobby) return <AnimatePresence />

  return (
    <AnimatePresence>
      {hobby && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-background/90 p-4 sm:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-line bg-background"
          >
            {hobby.image && (
              <div className="aspect-[16/9] w-full overflow-hidden bg-placeholder">
                <img src={hobby.image} alt="" className="h-full w-full object-cover" />
              </div>
            )}

            <div className="p-6 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <h3 className="font-display text-2xl sm:text-4xl">{hobby.title}</h3>

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

              {hobby.description && <p className="mt-6 max-w-xl text-muted">{hobby.description}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default HobbyModal
