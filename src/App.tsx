import './App.css'
import { LiveMessage } from '@/components/LiveMessage'

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4" role="main">
      <LiveMessage />
    </main>
  )
}

export default App