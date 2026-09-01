import CertificateItem from './CertificateItem'
import SkillsList from './SkillsList'

function EducationItem({ institution, program, period, skills, certificate, current }) {
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

      <span className="text-xs tracking-widest text-rose uppercase">{institution}</span>
      <h3 className="mt-2 font-display text-3xl">{program}</h3>
      <p className="mt-1 text-sm text-muted">{period}</p>

      {certificate && <CertificateItem {...certificate} />}

      <SkillsList skills={skills} />
    </div>
  )
}

export default EducationItem
