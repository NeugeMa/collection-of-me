import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Award } from 'lucide-react'

function CertificateItem({ label, file }) {
  const [open, setOpen] = useState(false)
  const isPdf = file?.toLowerCase().endsWith('.pdf')

  return (
    <div
      className="mt-6"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-3 text-left transition-colors hover:text-rose"
      >
        <Award size={18} strokeWidth={1.5} className="shrink-0 text-rose" />
        <span>{label}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-4 h-[480px] bg-placeholder">
              {!file && (
                <div className="flex h-full items-center justify-center">
                  <span className="text-xs tracking-widest text-muted uppercase">
                    Add the certificate file to public/ and pass its path
                  </span>
                </div>
              )}
              {file && isPdf && (
                <iframe
                  src={`${file}#toolbar=0`}
                  title={label}
                  className="h-full w-full"
                />
              )}
              {file && !isPdf && (
                <img src={file} alt={label} className="h-full w-full object-contain" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CertificateItem
