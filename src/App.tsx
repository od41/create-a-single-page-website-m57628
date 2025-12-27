import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { LiveBanner } from '@/components/LiveBanner'

function App() {
  const [message, setMessage] = useState("")

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
        {/* LiveBanner component integrated */}
        <LiveBanner className="w-full max-w-2xl" />
        
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">
            Your canvas is ready
          </h1>
          <h2 className="text-lg text-gray-500">
            Start building your project!
          </h2>
          <Button onClick={() => setMessage("Hello, world!")}>Show message</Button>
          {message && <p className="text-lg text-gray-500">{message}</p>}
        </div>
      </div>
    </>
  )
}

export default App
