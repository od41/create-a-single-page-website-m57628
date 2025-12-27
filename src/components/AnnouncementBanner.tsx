import { cn } from "@/lib/utils";
import { useEffect, useState, memo } from "react";

/**
 * Props for the AnnouncementBanner component
 */
export interface AnnouncementBannerProps {
  /** The main announcement message to display */
  message: string;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * AnnouncementBanner Component
 * 
 * A visually appealing banner component for displaying announcements
 * with smooth animations, gradients, and interactive effects.
 * 
 * @example
 * ```tsx
 * <AnnouncementBanner message="Youcode is live" />
 * ```
 */
export const AnnouncementBanner = memo(function AnnouncementBanner({ 
  message, 
  className 
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12",
        "py-8 sm:py-10 md:py-14 lg:py-16",
        "text-center",
        "bg-gradient-to-br from-primary/10 via-primary/5 to-primary/15",
        "rounded-xl sm:rounded-2xl md:rounded-3xl",
        "border border-primary/20",
        "shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.18)]",
        "backdrop-blur-sm",
        "transition-all duration-700 ease-out",
        "transform",
        "relative overflow-hidden",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      {/* Subtle gradient overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content container with relative positioning */}
      <div className="relative z-10">
        {/* Main heading with responsive typography */}
        <h1
          className={cn(
            "font-bold text-foreground leading-tight",
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            "tracking-tight",
            "transition-all duration-700 delay-100",
            "drop-shadow-sm",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          {message}
        </h1>

        {/* Subtitle or tagline */}
        <p
          className={cn(
            "mt-4 sm:mt-5 md:mt-6",
            "text-sm sm:text-base md:text-lg lg:text-xl",
            "text-muted-foreground/80",
            "font-medium",
            "transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
        >
          Your AI-powered development platform is ready
        </p>

        {/* Animated decorative line with shimmer effect */}
        <div
          className={cn(
            "mt-6 sm:mt-7 md:mt-8 lg:mt-10",
            "h-1 sm:h-1.5 md:h-2",
            "w-16 sm:w-20 md:w-24 lg:w-32",
            "mx-auto",
            "bg-gradient-to-r from-transparent via-primary to-transparent",
            "rounded-full",
            "relative overflow-hidden",
            "transition-all duration-700 delay-300",
            "shadow-lg shadow-primary/20",
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          )}
        >
          {/* Shimmer animation */}
          <div
            className={cn(
              "absolute inset-0 -translate-x-full",
              "bg-gradient-to-r from-transparent via-white/40 to-transparent",
              "animate-shimmer"
            )}
            style={{
              animation: isVisible ? "shimmer 2s infinite" : "none"
            }}
          />
        </div>

        {/* Pulsing dots animation */}
        <div
          className={cn(
            "mt-8 sm:mt-10 md:mt-12",
            "flex items-center justify-center gap-2",
            "transition-all duration-700 delay-400",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          role="presentation"
          aria-hidden="true"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full bg-primary/60",
                "animate-pulse",
                "shadow-sm shadow-primary/30"
              )}
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: "1.5s"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
