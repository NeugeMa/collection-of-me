import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'lang'

const LanguageContext = createContext(null)

function getInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'pt' || stored === 'en' ? stored : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
