import CertificateItem from './CertificateItem'

function ExperienceItem({
  logoLabel,
  logoColor,
  company,
  role,
  period,
  current,
  description,
  certificate,
}) {
  return (
    <div className="flex gap-4">
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center text-lg font-semibold text-background"
        style={{ backgroundColor: logoColor }}
      >
        {logoLabel}
      </div>

      <div>
        <h3 className="font-semibold text-foreground">{company}</h3>
        <p className="text-muted">{role}</p>
        <p className="mt-1 text-xs tracking-widest uppercase">
          <span className="text-muted">{period}</span>
          {current && <span className="text-rose"> · Present</span>}
        </p>
        <p className="mt-3 max-w-sm text-sm text-muted">{description}</p>

        {certificate && <CertificateItem {...certificate} />}
      </div>
    </div>
  )
}

export default ExperienceItem
