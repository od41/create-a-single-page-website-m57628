import React from 'react';

interface LiveMessageProps {
  className?: string;
}

export const LiveMessage: React.FC<LiveMessageProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-6 ${className}`}>
      {/* Main message with gradient and pulse animation */}
      <h1 
        className="text-6xl md:text-8xl font-bold text-center animate-pulse-slow"
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #10b981 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 40px rgba(16, 185, 129, 0.3)',
        }}
      >
        Youcode is live
      </h1>
      
      {/* Celebration emojis with fade-in animation */}
      <div className="flex gap-4 text-4xl animate-fade-in">
        <span className="animate-bounce" style={{ animationDelay: '0ms' }}>🎉</span>
        <span className="animate-bounce" style={{ animationDelay: '150ms' }}>🚀</span>
        <span className="animate-bounce" style={{ animationDelay: '300ms' }}>✨</span>
      </div>
      
      {/* Subtle subtitle */}
      <p className="text-xl text-gray-400 animate-fade-in" style={{ animationDelay: '500ms' }}>
        Your development environment is ready
      </p>
    </div>
  );
};

export default LiveMessage;