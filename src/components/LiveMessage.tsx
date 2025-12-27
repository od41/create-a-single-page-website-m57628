import React, { useEffect, useState } from 'react';

interface LiveMessageProps {
  className?: string;
}

export const LiveMessage: React.FC<LiveMessageProps> = ({ className = '' }) => {
  const [mounted, setMounted] = useState(false);
  const messageText = 'Youcode is live';
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`relative flex flex-col items-center justify-center gap-8 px-4 ${className}`}>
      {/* Floating background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="floating-particle bg-gradient-to-br from-green-400/20 to-emerald-500/20 animate-float"
          style={{
            width: '150px',
            height: '150px',
            top: '10%',
            left: '15%',
            filter: 'blur(40px)'
          }}
        />
        <div 
          className="floating-particle bg-gradient-to-br from-emerald-400/20 to-green-500/20 animate-float-delayed"
          style={{
            width: '200px',
            height: '200px',
            top: '60%',
            right: '10%',
            filter: 'blur(50px)',
            animationDelay: '2s'
          }}
        />
        <div 
          className="floating-particle bg-gradient-to-br from-green-300/20 to-emerald-400/20 animate-float"
          style={{
            width: '120px',
            height: '120px',
            bottom: '20%',
            left: '60%',
            filter: 'blur(35px)',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Main message with enhanced gradient and staggered character animations */}
      <div className="relative z-10">
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center hover-lift interactive-glow"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            lineHeight: '1.1'
          }}
        >
          <span className="gradient-bg-animated inline-block animate-pulse-glow">
            {mounted ? (
              messageText.split('').map((char, index) => (
                <span
                  key={index}
                  className={`inline-block animate-char-appear stagger-${Math.min(index + 1, 8)}`}
                  style={{
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))
            ) : (
              messageText
            )}
          </span>
        </h1>
        
        {/* Shimmer overlay effect */}
        <div 
          className="absolute inset-0 animate-shimmer pointer-events-none"
          style={{
            mixBlendMode: 'overlay'
          }}
        />
      </div>
      
      {/* Celebration emojis with enhanced animations */}
      <div className="flex gap-4 sm:gap-6 text-3xl sm:text-4xl md:text-5xl z-10">
        <span 
          className="animate-bounce-elastic interactive-glow cursor-default smooth-transition hover:scale-125"
          style={{ animationDelay: '0ms' }}
          role="img"
          aria-label="party popper"
        >
          🎉
        </span>
        <span 
          className="animate-bounce-elastic interactive-glow cursor-default smooth-transition hover:scale-125"
          style={{ animationDelay: '200ms' }}
          role="img"
          aria-label="rocket"
        >
          🚀
        </span>
        <span 
          className="animate-bounce-elastic interactive-glow cursor-default smooth-transition hover:scale-125"
          style={{ animationDelay: '400ms' }}
          role="img"
          aria-label="sparkles"
        >
          ✨
        </span>
      </div>
      
      {/* Enhanced subtitle with fade-in animation */}
      <div className="relative z-10">
        <p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 animate-fade-in-up text-center smooth-transition hover:text-gray-300"
          style={{ 
            animationDelay: '800ms',
            fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)'
          }}
        >
          Your development environment is ready
        </p>
        
        {/* Decorative underline */}
        <div 
          className="mx-auto mt-3 h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-fade-in-up"
          style={{
            width: '60%',
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Status indicator with pulse */}
      <div 
        className="flex items-center gap-2 animate-fade-in-up z-10"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </div>
        <span className="text-sm text-gray-500 font-medium">System Online</span>
      </div>
    </div>
  );
};

export default LiveMessage;