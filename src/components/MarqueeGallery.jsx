import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

function MarqueeGallery({ items }) {
  const [selected, setSelected] = useState(null)
  const loopItems = [...items, ...items]

  return (
    <div className="w-full overflow-hidden">
      <div className="animate-marquee flex w-max gap-6">
        {loopItems.map((item, index) => (
          <button
            key={`${item.label}-${index}`}
            type="button"
            onClick={() => setSelected(item)}
            className="flex h-52 w-80 shrink-0 cursor-pointer items-end overflow-hidden bg-placeholder p-5 transition-opacity hover:opacity-80 sm:h-64 sm:w-[28rem]"
          >
            {item.src ? (
              <img src={item.src} alt={item.label} className="h-full w-full object-cover" />
            ) : (
              <span className="text-xs tracking-widest text-muted uppercase">{item.label}</span>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 sm:p-10"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex h-[70vh] w-full max-w-3xl items-end overflow-hidden border border-line bg-placeholder p-8"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 cursor-pointer text-muted transition-colors hover:text-foreground"
              >
                <X size={22} strokeWidth={1.5} />
              </button>

              {selected.src ? (
                <img
                  src={selected.src}
                  alt={selected.label}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <span className="text-sm tracking-widest text-muted uppercase">
                  {selected.label}
                </span>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MarqueeGallery
