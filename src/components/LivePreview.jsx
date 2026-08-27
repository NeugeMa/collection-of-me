import { useEffect, useRef, useState } from 'react'

const DESIGN_WIDTH = 1440
const DESIGN_HEIGHT = 900

function LivePreview({ src, title }) {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    function updateScale() {
      if (!containerRef.current) return
      setScale(containerRef.current.offsetWidth / DESIGN_WIDTH)
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-placeholder"
      style={{ height: DESIGN_HEIGHT * scale }}
    >
      {scale > 0 && (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          style={{
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            border: 0,
          }}
        />
      )}
    </div>
  )
}

export default LivePreview
