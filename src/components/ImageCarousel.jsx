import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Dots from './Dots'

const AUTOPLAY_DELAY = 4000

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, AUTOPLAY_DELAY)

    return () => clearInterval(timer)
  }, [images.length])

  const current = images[index]
  const isImage = current.startsWith('/')

  return (
    <div>
      <div className="relative h-[420px] overflow-hidden bg-placeholder">
        <AnimatePresence mode="wait">
          {isImage ? (
            <motion.img
              key={current}
              src={current}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-end p-4"
            >
              <span className="text-xs tracking-widest text-muted uppercase">
                {current}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4">
        <Dots count={images.length} active={index} onSelect={setIndex} />
      </div>
    </div>
  )
}

export default ImageCarousel
