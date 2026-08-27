import { Star } from 'lucide-react'

function SkillsList({ skills }) {
  return (
    <div className="mt-6 border-t border-line py-5">
      <div className="flex items-center gap-3">
        <Star size={14} className="fill-rose text-rose" />
        <span>{skills.join(' · ')}</span>
      </div>
    </div>
  )
}

export default SkillsList
