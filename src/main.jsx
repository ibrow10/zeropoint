import React, { useEffect, useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Programmes from './pages/Programme.jsx'
import Events from './pages/Events.jsx'
import Capital from './pages/Capital.jsx'
import FAQ from './pages/FAQ.jsx'
import './index.css'

function Router() {
  const [hash, setHash] = useState(() => window.location.hash || '#/')

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', onHashChange)
    if (!window.location.hash) {
      window.location.hash = '#/'
    }
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const route = useMemo(() => (hash.replace('#', '') || '/'), [hash])

  // Ensure we jump to the top on route changes
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch {
      window.scrollTo(0, 0)
    }
  }, [route])

  if (route === '/programmes') return <Programmes />
  if (route === '/events') return <Events />
  if (route === '/capital') return <Capital />
  if (route === '/faq') return <FAQ />
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
