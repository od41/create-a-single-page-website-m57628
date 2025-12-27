import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { AnnouncementBanner } from '@/components/AnnouncementBanner'

function App() {
  const [message, setMessage] = useState("")

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-8">
        <AnnouncementBanner message="Youcode is live" />
        
        <div className="flex flex-col items-center gap-4">
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
