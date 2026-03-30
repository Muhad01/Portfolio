"use client"

export const SECTION_IDS = ["intro", "work", "skills", "projects", "connect"] as const

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
] as const

interface NavigationProps {
  activeSection: string
}

export function Navigation({ activeSection }: NavigationProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav className="fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block" aria-label="Section navigation">
        <div className="flex flex-col gap-4">
          {SECTIONS.map(({ id }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === id ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${id}`}
            />
          ))}
        </div>
      </nav>

      {/* Mobile / tablet: bottom section bar — active section shows as a light pill (matches scroll position) */}
      <nav
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-border/80 bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5 px-3 shadow-[0_-8px_32px_rgba(0,0,0,0.35)] dark:shadow-[0_-8px_32px_rgba(0,0,0,0.6)]"
        aria-label="Section navigation"
      >
        <div className="flex max-w-6xl mx-auto justify-center items-center gap-1 sm:gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-0.5">
          {SECTIONS.map(({ id, label }) => {
            const isActive = activeSection === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className={`shrink-0 min-h-[44px] sm:min-h-0 px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-tight transition-all duration-300 ease-out touch-manipulation ${
                  isActive
                    ? "bg-foreground text-background shadow-md scale-[1.02] ring-1 ring-foreground/20"
                    : "text-muted-foreground hover:text-foreground active:bg-muted/60"
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}

