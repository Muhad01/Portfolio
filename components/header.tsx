"use client"

import { Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeaderProps {
  email?: string
  onThemeToggle?: () => void
  isDark?: boolean
}

export function Header({ email = "muhadsafdar26@gmail.com", onThemeToggle, isDark = false }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80 border-b border-border/50 sm:border-0">
      <div className="max-w-[1920px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-2 min-h-14 sm:min-h-16 py-2 sm:py-0">
          {/* Left side - Email and Buttons */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-6 sm:gap-y-0 md:gap-8 min-w-0 flex-1 sm:flex-initial">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors min-w-0 max-w-full sm:max-w-none"
            >
              <span className="text-[11px] sm:text-sm md:text-base truncate">{email}</span>
            </a>

            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="outline"
                className={cn(
                  "rounded-full border-border bg-background",
                  "text-foreground hover:bg-accent hover:text-accent-foreground",
                  "px-5 sm:px-6 py-1 sm:py-1.5 text-[10px] sm:text-xs uppercase font-normal",
                  "transition-colors duration-200"
                )}
              >
                CORE
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "rounded-full border-border bg-background",
                  "text-foreground hover:bg-accent hover:text-accent-foreground",
                  "px-5 sm:px-6 py-1 sm:py-1.5 text-[10px] sm:text-xs uppercase font-normal",
                  "transition-colors duration-200"
                )}
              >
                CV
              </Button>
            </div>
          </div>

          {/* Right side - Theme toggle */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={onThemeToggle}
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border",
                "bg-background",
                "flex items-center justify-center",
                "hover:bg-accent hover:text-accent-foreground",
                "transition-colors duration-200",
                "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
              aria-label="Toggle theme"
            >
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-foreground" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}



