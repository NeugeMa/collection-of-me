import { Star } from 'lucide-react'

const LANGUAGE_COLORS = {
  TypeScript: 'bg-blue-400',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-blue-300',
  Java: 'bg-orange-400',
  Go: 'bg-cyan-400',
  'C#': 'bg-green-400',
  HTML: 'bg-red-400',
  CSS: 'bg-purple-400',
}

function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-line p-5 transition-colors hover:bg-soft"
    >
      <h4 className="font-semibold text-foreground">{repo.name}</h4>
      <p className="mt-2 text-sm text-muted">
        {repo.description || 'No description provided.'}
      </p>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted">
        {repo.language && (
          <span className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${LANGUAGE_COLORS[repo.language] ?? 'bg-muted'}`}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={12} />
          {repo.stargazers_count}
        </span>
      </div>
    </a>
  )
}

export default RepoCard
