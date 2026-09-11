import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import type { Technology } from './types/technology'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load the technology data from the local JSON file.
  // Using useEffect here because fetching is a side effect that should
  // run once when the component mounts, not during render.
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch((err) => console.error('Failed to load technologies:', err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <ToastContainer position="top-right" autoClose={2500} />

      {/* Navbar placeholder */}
      <header className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-200 px-6">
        <div className="flex-1">
          <span className="text-xl font-bold text-gradient-brand">Dev Stack</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center">
          Build your <span className="text-gradient-brand">Dev Stack</span>
        </h1>
        <p className="text-center text-base-content/70 mt-3">
          Scaffold is ready — start building the hero, tech grid, and stack sidebar here.
        </p>

        {isLoading ? (
          <div className="flex justify-center mt-16">
            <span className="loading loading-spinner loading-lg text-primary" />
          </div>
        ) : (
          <p className="text-center mt-8 text-sm text-base-content/50">
            Loaded {technologies.length} technologies from technologies.json
          </p>
        )}
      </main>
    </div>
  )
}

export default App
