"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { getAllProjects } from "@/data/projects"

export default function ProjectsPage() {
  const allProjects = getAllProjects()

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-semibold">Projects</h1>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project, index) => (
            <Link key={index} href={`/projects/${project.slug}`}>
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
      </div>
    </PageLayout>
  )
}

