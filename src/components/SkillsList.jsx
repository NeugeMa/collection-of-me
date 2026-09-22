import { useState } from 'react'
import { Star } from 'lucide-react'
import { SKILL_ICONS } from '../lib/skillIcons'

const COLLAPSED_COUNT = 5

function SkillsList({ skills }) {
  const [expanded, setExpanded] = useState(false)
  const visibleSkills = expanded ? skills : skills.slice(0, COLLAPSED_COUNT)
  const remaining = skills.length - COLLAPSED_COUNT

  return (
    <div className="mt-6 border-t border-line pt-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs tracking-widest text-muted uppercase">
          <Star size={10} className="fill-rose text-rose" />
          Skills · {skills.length}
        </span>

        {skills.length > COLLAPSED_COUNT && (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="cursor-pointer text-xs tracking-widest text-muted uppercase transition-colors hover:text-foreground"
          >
            {expanded ? 'View less' : 'View all'}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {visibleSkills.map((skill) => {
          const Icon = SKILL_ICONS[skill]
          return (
            <span
              key={skill}
              className="flex items-center gap-1.5 border border-line px-3 py-1.5 text-sm text-muted"
            >
              {Icon && <Icon size={12} />}
              {skill}
            </span>
          )
        })}

        {!expanded && remaining > 0 && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="cursor-pointer border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            +{remaining}
          </button>
        )}
      </div>
    </div>
  )
}

export default SkillsList
