import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { placeholderPaths } from './data/navigation'
import Home from './pages/Home'
import Placeholder from './pages/Placeholder'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-one" element={<Home />} />
        {placeholderPaths.map((path) => (
          <Route key={path} path={path} element={<Placeholder />} />
        ))}
        <Route path="*" element={<Placeholder />} />
      </Routes>
    </>
  )
}
