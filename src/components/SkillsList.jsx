import { Star } from 'lucide-react'
import { SKILL_ICONS } from '../lib/skillIcons'

function SkillsList({ skills }) {
  return (
    <div className="mt-6 border-t border-line py-5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {skills.map((skill) => {
          const Icon = SKILL_ICONS[skill]
          return (
            <span
              key={skill}
              className="flex items-center gap-1.5 text-sm text-muted/60"
            >
              {Icon ? <Icon size={12} /> : <Star size={10} className="fill-rose text-rose" />}
              {skill}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsList
