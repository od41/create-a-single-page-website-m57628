import { Badge } from '@/components/ui/badge'
import { Radio } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LiveBannerProps {
  message?: string
  className?: string
}

export function LiveBanner({ 
  message = 'Youcode is live', 
  className 
}: LiveBannerProps) {
  return (
    <div 
      className={cn(
        'flex items-center gap-3 rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-emerald-900 dark:from-emerald-950 dark:to-gray-950',
        className
      )}
    >
      {/* Pulsing live indicator icon */}
      <div className="relative flex h-8 w-8 items-center justify-center">
        <Radio 
          className="h-6 w-6 text-emerald-600 dark:text-emerald-400 animate-pulse" 
          fill="currentColor"
        />
        {/* Ping animation ring */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
      </div>

      {/* Message text */}
      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 sm:text-xl md:text-2xl">
        {message}
      </span>

      {/* Badge with emerald styling */}
      <Badge 
        variant="emerald" 
        className="ml-auto text-xs font-bold uppercase tracking-wide sm:text-sm"
      >
        Live
      </Badge>
    </div>
  )
}
