import SkillsList from './SkillsList'

function ExperienceItem({ logo, logoLabel, logoColor, company, role, period, current, skills }) {
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
    </div>
  )
}

export default ExperienceItem
