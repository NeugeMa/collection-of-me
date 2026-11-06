import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.jsx'
import { SKILL_ICONS } from '../lib/skillIcons'

const MIN_THUMBNAILS = 2

function ExperienceItem({
  logo,
  logoLabel,
  logoColor,
  company,
  role,
  period,
  current,
  skills,
  description,
  images = [],
}) {
  const { lang } = useLanguage()
  const [activeImage, setActiveImage] = useState(0)
  const thumbnailCount = Math.max(images.length, MIN_THUMBNAILS)
  const noImageLabel = lang === 'pt' ? 'Sem imagem' : 'No image'

  return (
    <div className="relative pt-10">
      <span
        className={`absolute top-0 left-0 flex -translate-y-1/2 ${current ? 'h-4 w-4' : 'h-3 w-3'}`}
      >
        {current && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose opacity-75" />
        )}
        <span className="relative inline-flex h-full w-full rounded-full bg-rose" />
      </span>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12 lg:items-start">
        <div>
          <p className="text-xs tracking-widest uppercase">
            <span className="text-muted">{period}</span>
            {current && (
              <span className="text-rose"> · {lang === 'pt' ? 'Atual' : 'Present'}</span>
            )}
          </p>

          <div className="mt-4 flex items-center gap-4">
            {logo ? (
              <img src={logo} alt="" className="h-12 w-12 shrink-0 object-cover" />
            ) : (
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center font-semibold text-background"
                style={{ backgroundColor: logoColor }}
              >
                {logoLabel}
              </div>
            )}
            <h3 className="font-display text-3xl text-rose sm:text-4xl">{company}</h3>
          </div>

          <p className="mt-3 text-xs tracking-widest text-muted uppercase">{role}</p>

          {description && <p className="mt-6 text-muted">{description}</p>}

          {skills && skills.length > 0 && (
            <div className="mt-6 border-t border-line pt-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {skills.map((skill) => {
                  const Icon = SKILL_ICONS[skill]
                  return (
                    <span key={skill} className="flex items-center gap-1.5 text-xs text-muted">
                      {Icon && <Icon size={12} />}
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="aspect-[4/3] overflow-hidden bg-placeholder">
            {images[activeImage] ? (
              <img src={images[activeImage]} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-[10px] tracking-widest text-muted uppercase">
                  {noImageLabel}
                </span>
              </div>
            )}
          </div>

          <div className="mt-3 flex gap-3">
            {Array.from({ length: thumbnailCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Image ${index + 1}`}
                className={`h-14 w-16 cursor-pointer overflow-hidden border bg-placeholder transition-colors ${
                  index === activeImage ? 'border-rose' : 'border-line hover:border-muted'
                }`}
              >
                {images[index] && (
                  <img src={images[index]} alt="" className="h-full w-full object-cover" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
