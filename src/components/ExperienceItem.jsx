import CertificateItem from './CertificateItem'
import SkillsList from './SkillsList'

function ExperienceItem({ title, company, type, period, length, skills, certificate }) {
  const isCurrent = period?.toLowerCase().includes('present')

  return (
    <div className="relative pb-16 last:pb-0">
      <span
        className={`absolute flex ${isCurrent ? 'top-0 -left-12 h-4 w-4' : 'top-1 -left-11 h-2 w-2'}`}
      >
        {isCurrent && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full bg-rose ${isCurrent ? 'h-4 w-4' : 'h-2 w-2'}`}
        />
      </span>

      <div className="flex items-center gap-3">
        <h3 className="font-display text-3xl">{title}</h3>
        {isCurrent && (
          <span className="rounded-full border border-line px-3 py-1 text-xs tracking-widest text-muted uppercase">
            Current
          </span>
        )}
      </div>
      <p className="mt-1">
        {company} · {type}
      </p>
      <p className="mt-1 text-sm text-muted">
        {period} · {length}
      </p>

      {certificate && <CertificateItem {...certificate} />}

      <SkillsList skills={skills} />
    </div>
  )
}

export default ExperienceItem
