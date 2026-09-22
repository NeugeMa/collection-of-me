import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx'
import SideB from './pages/SideB.jsx'

const PAGE_TRANSITION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}

function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...PAGE_TRANSITION}>
              <App />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div {...PAGE_TRANSITION}>
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/side-b"
          element={
            <motion.div {...PAGE_TRANSITION}>
              <SideB />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes
