import { cn } from "@/lib/utils";

interface AnnouncementBannerProps {
  message: string;
  className?: string;
}

export function AnnouncementBanner({ message, className }: AnnouncementBannerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-4xl mx-auto px-6 py-12 text-center",
        "bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10",
        "rounded-2xl border border-primary/20",
        "shadow-lg backdrop-blur-sm",
        className
      )}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
        {message}
      </h1>
      <div className="mt-6 h-1 w-24 mx-auto bg-primary rounded-full" />
    </div>
  );
}
