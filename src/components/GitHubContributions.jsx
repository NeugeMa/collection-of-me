import { useEffect, useState } from 'react'

const USERNAME = 'NeugeMa'
const YEARS = [2026, 2025, 2024, 2023, 2022]
const LEVEL_COLORS = ['#242222', '#0e4429', '#006d32', '#26a641', '#39d353']
const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

function buildWeeks(contributions, year) {
  const byDate = new Map(contributions.map((day) => [day.date, day]))
  const start = new Date(Date.UTC(year, 0, 1))
  const end = new Date(Date.UTC(year, 11, 31))

  const gridStart = new Date(start)
  gridStart.setUTCDate(gridStart.getUTCDate() - gridStart.getUTCDay())

  const weeks = []
  const cursor = new Date(gridStart)

  while (cursor <= end) {
    const week = []
    for (let i = 0; i < 7; i++) {
      const iso = cursor.toISOString().slice(0, 10)
      const inYear = cursor.getUTCFullYear() === year
      const entry = byDate.get(iso)
      week.push(
        inYear ? { date: iso, level: entry?.level ?? 0, count: entry?.count ?? 0 } : null,
      )
      cursor.setUTCDate(cursor.getUTCDate() + 1)
    }
    weeks.push(week)
  }

  return weeks
}

function ContributionGrid({ year, contributions }) {
  const weeks = buildWeeks(contributions, year)

  const monthLabels = []
  let lastMonth = -1
  weeks.forEach((week, weekIndex) => {
    const firstDay = week.find(Boolean)
    if (!firstDay) return
    const month = new Date(firstDay.date).getUTCMonth()
    if (month !== lastMonth) {
      monthLabels.push({ weekIndex, label: MONTHS[month] })
      lastMonth = month
    }
  })

  return (
    <div>
      <div className="mb-1 flex gap-[3px]">
        {weeks.map((_, weekIndex) => {
          const found = monthLabels.find((entry) => entry.weekIndex === weekIndex)
          return (
            <div key={weekIndex} className="w-[11px] shrink-0 text-xs whitespace-nowrap text-muted">
              {found?.label}
            </div>
          )
        })}
      </div>

      <div className="flex gap-[3px]">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[3px]">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="h-[11px] w-[11px]"
                style={{ backgroundColor: day ? LEVEL_COLORS[day.level] : 'transparent' }}
                title={day ? `${day.count} contributions on ${day.date}` : undefined}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function GitHubContributions() {
  const [year, setYear] = useState(YEARS[0])
  const [dataByYear, setDataByYear] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    if (dataByYear[year]) return
    const controller = new AbortController()

    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=${year}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error('Contributions request failed')
        return response.json()
      })
      .then((data) => {
        setDataByYear((current) => ({ ...current, [year]: data }))
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(true)
      })

    return () => controller.abort()
  }, [year, dataByYear])

  if (error) return null

  const yearData = dataByYear[year]

  return (
    <div>
      <h4 className="font-display text-2xl">Contribution Graph</h4>

      <div className="mt-6 flex items-start gap-4">
        <div className="w-fit overflow-x-auto border border-line p-6">
          {!yearData ? (
            <p className="text-sm text-muted">Loading contributions…</p>
          ) : (
            <>
              <ContributionGrid year={year} contributions={yearData.contributions} />
              <div className="mt-4 flex items-center justify-between text-xs text-muted">
                <span>{yearData.total?.[year] ?? 0} contributions in {year}</span>
                <span className="flex items-center gap-1">
                  Less
                  {LEVEL_COLORS.map((color) => (
                    <span key={color} className="h-2.5 w-2.5" style={{ backgroundColor: color }} />
                  ))}
                  More
                </span>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => setYear(y)}
              className={`cursor-pointer border px-4 py-2 text-sm transition-colors ${
                y === year
                  ? 'border-rose bg-rose text-background'
                  : 'border-line text-muted hover:text-foreground'
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GitHubContributions
