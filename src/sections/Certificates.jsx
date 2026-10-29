import { useLanguage } from '../hooks/useLanguage.jsx'

const placeholders = [
  { issuer: 'Issuer', date: { en: 'Month 2026', pt: 'Mês 2026' } },
  { issuer: 'Issuer', date: { en: 'Month 2026', pt: 'Mês 2026' } },
  { issuer: 'Issuer', date: { en: 'Month 2025', pt: 'Mês 2025' } },
  { issuer: 'Issuer', date: { en: 'Month 2025', pt: 'Mês 2025' } },
  { issuer: 'Issuer', date: { en: 'Month 2025', pt: 'Mês 2025' } },
].map((certificate, index) => ({
  ...certificate,
  id: index + 1,
  title: { en: `Certificate title ${index + 2}`, pt: `Título do certificado ${index + 2}` },
}))

const certificates = [
  {
    id: 0,
    issuer: 'Ada',
    date: { en: 'Oct – May 2026', pt: 'out – maio 2026' },
    title: { en: 'Bootcamp Ada', pt: 'Bootcamp Ada' },
    file: encodeURI('/certificates/Certificado  Bootcamp - Ada.pdf'),
  },
  ...placeholders,
]

function Certificates() {
  const { lang } = useLanguage()

  return (
    <section
      id="certificates"
      className="border-b border-line px-6 py-16 sm:px-12 lg:px-24 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex items-center gap-6 sm:gap-10">
          <span className="w-12 text-sm text-muted sm:w-24">02</span>
          <h2 className="flex-1 font-display text-3xl sm:text-4xl">
            {lang === 'pt' ? 'Certificados' : 'Certificates'}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => {
            const Card = certificate.file ? 'a' : 'div'
            const linkProps = certificate.file
              ? { href: certificate.file, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <Card
                key={certificate.id}
                {...linkProps}
                className="flex min-h-44 flex-col gap-3 border border-line bg-panel p-6 transition-colors hover:border-rose"
              >
                <p className="text-[11px] tracking-widest text-muted uppercase">
                  {certificate.issuer} · {certificate.date[lang]}
                </p>
                <h3 className="text-base font-semibold text-foreground">
                  {certificate.title[lang]}
                </h3>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certificates
