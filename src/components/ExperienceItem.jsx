import CertificateItem from './CertificateItem'
import SkillsList from './SkillsList'

function ExperienceItem({ title, company, type, period, length, skills, certificate }) {
  return (
    <div className="relative pb-16 last:pb-0">
      <span className="absolute top-1 -left-11 h-2 w-2 rounded-full bg-rose" />

      <h3 className="font-display text-3xl">{title}</h3>
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
