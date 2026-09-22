import GitHubRepos from '../components/GitHubRepos'

const ABOUT_PARAGRAPHS = [
  'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Curabitur pretium tincidunt lacus ut malesuada velit convallis in cras ultricies mi eget mauris pharetra.',
]

function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center border-b border-line px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:flex-row lg:items-start">
        <div className="flex items-start gap-6 lg:w-72 lg:shrink-0">
          <span className="text-sm text-muted">01</span>
          <h2 className="font-display text-3xl sm:text-4xl">About me</h2>
        </div>

        <div className="flex max-w-3xl flex-1 flex-col gap-6">
          <p className="text-lg text-foreground">{ABOUT_PARAGRAPHS[0]}</p>
          <p className="text-muted">{ABOUT_PARAGRAPHS[1]}</p>
          <p className="text-muted">{ABOUT_PARAGRAPHS[2]}</p>

          <hr className="border-line" />

          <p className="text-muted">
            If any of this overlaps with yours,{' '}
            <a href="#" className="text-rose underline-offset-4 hover:underline">
              say hi
            </a>
            .
          </p>

          <GitHubRepos />
        </div>
      </div>
    </section>
  )
}

export default About
