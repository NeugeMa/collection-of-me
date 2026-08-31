import { useEffect, useState } from 'react'
import RepoCard from './RepoCard'

function ProjectRepos({ repos: repoNames }) {
  const [repos, setRepos] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    Promise.all(
      repoNames.map((name) =>
        fetch(`https://api.github.com/repos/${name}`, { signal: controller.signal }).then(
          (response) => {
            if (!response.ok) throw new Error('GitHub request failed')
            return response.json()
          },
        ),
      ),
    )
      .then(setRepos)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(true)
      })

    return () => controller.abort()
  }, [repoNames])

  if (error) return null
  if (!repos) {
    return <p className="mt-6 text-sm text-muted">Loading repositories…</p>
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default ProjectRepos
