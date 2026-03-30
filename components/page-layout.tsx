"use client"

import { useEffect, useState, type ReactNode } from "react"

import { Header } from "@/components/header"
import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: ReactNode
  email?: string
  className?: string
}

export function PageLayout({ children, email = "muhadsafdar26@gmail.com", className }: PageLayoutProps) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className={cn("min-h-screen bg-background text-foreground relative", className)}>
      <Header email={email} onThemeToggle={toggleTheme} isDark={isDark} />
      {children}
    </div>
  )
}


