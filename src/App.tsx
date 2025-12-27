import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { AnnouncementBanner } from '@/components'

/**
 * Main App Component
 * 
 * Entry point for the Youcode announcement page featuring
 * a prominent banner and interactive demo section.
 */
function App() {
  const [message, setMessage] = useState("")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 gap-8 md:gap-12 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* Main announcement banner */}
      <AnnouncementBanner message="Youcode is live" />
      
      {/* Interactive demo section */}
      <div 
        className="flex flex-col items-center gap-4 animate-fade-in" 
        style={{ 
          animationDelay: '0.5s', 
          animationFillMode: 'backwards' 
        }}
      >
        <h2 className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
          Start building your project!
        </h2>
        
        <Button 
          onClick={() => setMessage("Hello, world!")} 
          className="transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
        >
          Show message
        </Button>
        
        {message && (
          <p className="text-base sm:text-lg text-gray-600 font-medium animate-fade-in">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
