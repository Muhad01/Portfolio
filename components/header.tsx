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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left side - Email and Buttons */}
          <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <span className="text-xs sm:text-sm md:text-base">{email}</span>
            </a>
            
            <div className="flex items-center gap-2">
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



