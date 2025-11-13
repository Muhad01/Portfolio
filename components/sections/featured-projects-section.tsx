"use client"

import Link from "next/link"
import { getFeaturedProjects } from "@/data/projects"

interface FeaturedProjectsSectionProps {
  sectionRef: (el: HTMLElement | null) => void
}

export function FeaturedProjectsSection({ sectionRef }: FeaturedProjectsSectionProps) {
  const featuredProjects = getFeaturedProjects(4)

  return (
    <section
      id="thoughts"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Link key={index} href={`/projects/${project.slug}?from=home`}>
              <article className="group p-6 sm:p-8 bg-background border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 cursor-pointer">
                <div className="space-y-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                    {project.category}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs border border-border rounded-full bg-background text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors duration-300"
          >
            <span className="text-sm sm:text-base">View All Projects</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

