import { FileText } from 'lucide-react'
import SkillsList from './SkillsList'

function ExperienceItem({
  logo,
  logoLabel,
  logoColor,
  company,
  role,
  period,
  current,
  skills,
  certificates,
}) {
  return (
    <div className="relative pb-16 last:pb-0">
      <span className={`absolute flex ${current ? 'top-0 -left-12 h-4 w-4' : 'top-1 -left-11 h-2 w-2'}`}>
        {current && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full bg-rose ${current ? 'h-4 w-4' : 'h-2 w-2'}`}
        />
      </span>

      <div className="flex items-center gap-4">
        {logo ? (
          <img
            src={logo}
            alt={company}
            className="h-16 w-16 shrink-0 object-cover"
          />
        ) : (
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center text-lg font-semibold text-background"
            style={{ backgroundColor: logoColor }}
          >
            {logoLabel}
          </div>
        )}

        <div>
          <p className="text-sm tracking-widest uppercase">
            <span className="text-rose">{company}</span>
            <span className="text-muted"> · {role}</span>
          </p>
          <p className="mt-1 text-xs tracking-widest uppercase">
            <span className="text-muted">{period}</span>
            {current && <span className="text-rose"> · Present</span>}
          </p>
        </div>
      </div>

      {skills && <SkillsList skills={skills} />}

      {certificates && certificates.length > 0 && (
        <div className="mt-4 flex flex-col gap-3">
          {certificates.map((certificate) => (
            <a
              key={certificate.label}
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-line p-3 transition-colors hover:border-foreground"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-soft text-[10px] tracking-widest text-muted uppercase">
                {certificate.file ? (
                  <img
                    src={certificate.file}
                    alt={certificate.label}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  'Cert'
                )}
              </div>
              <span className="flex items-center gap-2 text-sm text-muted">
                <FileText size={14} strokeWidth={1.5} />
                {certificate.label}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceItem
