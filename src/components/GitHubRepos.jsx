import { useEffect, useState } from 'react'
import RepoCard from './RepoCard'

const GITHUB_USERNAME = 'NeugeMa'
const REPO_COUNT = 4

function GitHubRepos() {
  const [repos, setRepos] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPO_COUNT}`,
      { signal: controller.signal },
    )
      .then((response) => {
        if (!response.ok) throw new Error('GitHub request failed')
        return response.json()
      })
      .then(setRepos)
      .catch((err) => {
        if (err.name !== 'AbortError') setError(true)
      })

    return () => controller.abort()
  }, [])

  if (error) return null
  if (!repos) {
    return <p className="mt-8 text-sm text-muted">Loading recent repositories…</p>
  }

  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default GitHubRepos
