"use client"

import Link from "next/link"
import { Briefcase } from "lucide-react"

interface IntroSectionProps {
  sectionRef: (el: HTMLElement | null) => void
  showSocialLinks: boolean
}

export function IntroSection({ sectionRef, showSocialLinks }: IntroSectionProps) {
  return (
    <header
      id="intro"
      ref={sectionRef}
      className="min-h-screen flex items-start pt-24 sm:pt-32 opacity-0 relative"
    >
      {/* Vertical Social Links on Right Edge - Only in Intro Section */}
      {showSocialLinks && (
        <div className="fixed right-8 top-24 sm:top-32 hidden lg:flex flex-col gap-16 z-10 transition-opacity duration-300">
          <Link
            href="https://www.linkedin.com/in/muhammad-muhad-8b1662303/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 writing-vertical-rl text-lg uppercase tracking-wider"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            LINKEDIN
          </Link>
          <Link
            href="https://github.com/Muhad01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 writing-vertical-rl text-lg uppercase tracking-wider"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            GITHUB
          </Link>
          <Link
            href="https://wa.me/923210044414"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 writing-vertical-rl text-lg uppercase tracking-wider"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            WHATSAPP
          </Link>
        </div>
      )}
      
      <div className="w-full">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-xl sm:text-2xl text-muted-foreground font-mono tracking-wider">Hello there</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              I'm
              <br />
              <span className="text-muted-foreground">Muhad</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Frontend Developer crafting digital experiences at the intersection of
              <span className="text-foreground"> design</span>,<span className="text-foreground"> technology</span>,
              and
              <span className="text-foreground"> user experience</span>.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>
            </div>

            <div className="flex justify-end pt-4 -mr-64 sm:-mr-72 lg:-mr-80">
              <Link
                href="/projects"
                className="group flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <Briefcase className="w-4 h-4" />
                <span className="text-sm sm:text-base">View My Work</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

