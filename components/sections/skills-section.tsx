"use client"

import { MonitorSmartphone, Brackets, Globe } from "lucide-react"

interface SkillsSectionProps {
  sectionRef: (el: HTMLElement | null) => void
}

export function SkillsSection({ sectionRef }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light">Skills & Experties</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-background border border-border rounded-lg">
            <div className="mb-4">
              <MonitorSmartphone className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-lg font-medium">Frontend Development</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Creating responsive web and mobile interfaces with React, Next.js, and Flutter
            </p>
          </div>
          <div className="p-6 bg-background border border-border rounded-lg">
            <div className="mb-4">
              <Brackets className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-lg font-medium">Programming</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Proficient in Python, C/C++, Java, JavaScript and more
            </p>
          </div>
          <div className="p-6 bg-background border border-border rounded-lg">
            <div className="mb-4">
              <Globe className="w-8 h-8 text-foreground mb-4" />
              <h3 className="text-lg font-medium">Web Scraping</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Web scraping using Python to extract and process data from websites efficiently
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

