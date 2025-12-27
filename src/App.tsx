import './App.css'
import { LiveBanner } from '@/components/LiveBanner'

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-emerald-950 dark:via-gray-900 dark:to-gray-950">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 animate-fade-in">
          {/* LiveBanner component - the main feature */}
          <LiveBanner className="w-full" />
          
          {/* Subtle tagline */}
          <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building something amazing
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
