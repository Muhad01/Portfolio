"use client"

import Link from "next/link"
import { useCallback } from "react"
import { useParams, useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { getProjectBySlug } from "@/data/projects"

export default function ProjectDetailPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const slug = params.slug as string
  const project = getProjectBySlug(slug)
  
  // Read the 'from' parameter from URL to determine back navigation
  const from = searchParams.get('from')
  const backUrl = from === 'home' ? '/' : '/projects'
  const backText = from === 'home' ? 'Back to Home' : 'Back to Projects'

  const scrollToContent = useCallback(() => {
    const contentSection = document.getElementById("project-content")
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  if (!project) {
    return (
      <PageLayout>
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Project Not Found</h1>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {/* Full Screen Hero Section with Logo */}
      <section className="h-screen flex items-center justify-center relative">
        {/* Back Link - Absolute positioned */}
        <Link
          href={backUrl}
          className="absolute top-24 left-6 sm:left-8 lg:left-20 z-20 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">{backText}</span>
        </Link>

        {/* Logo Section - Full Screen Center */}
        <div className="flex items-center justify-center w-full">
          <div className="w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-96 flex items-center justify-center">
            <svg
              viewBox="0 0 60 100"
              className="w-full h-full text-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Two parallel wavy vertical lines connected at top and bottom */}
              <path d="M15 10 Q20 30, 15 50 Q20 70, 15 90" />
              <path d="M45 10 Q40 30, 45 50 Q40 70, 45 90" />
              {/* Top connection */}
              <path d="M15 10 L45 10" strokeWidth="4" />
              {/* Bottom connection */}
              <path d="M15 90 L45 90" strokeWidth="4" />
            </svg>
          </div>
        </div>

        {/* Scroll Down Mouse Icon */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-300 animate-bounce"
          aria-label="Scroll to content"
        >
          <div className="relative w-8 h-12 border-2 border-current rounded-[20px] flex flex-col items-center pt-2.5">
            {/* Mouse scroll wheel indicator - animated scroll lines */}
            <div className="flex flex-col gap-0.5 items-center mt-1 overflow-hidden h-5 relative w-full">
              <div className="w-4 h-0.5 bg-current rounded-full opacity-40 absolute top-0 animate-mouse-scroll"></div>
              <div className="w-4 h-0.5 bg-current rounded-full opacity-60 absolute top-1.5 animate-mouse-scroll" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-4 h-0.5 bg-current rounded-full opacity-80 absolute top-3 animate-mouse-scroll" style={{ animationDelay: '0.4s' }}></div>
              <div className="w-4 h-0.5 bg-current rounded-full absolute top-4.5 animate-mouse-scroll" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </button>
      </section>

      {/* Project Content Section */}
      <section id="project-content" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 pt-12 sm:pt-16 pb-12 sm:pb-16">
        {/* Separator Line - Between Logo and Project Name */}
        <div className="border-t border-border mb-8"></div>

        {/* Project Overview */}
        <div className="mb-8">
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-4">
            {project.category}
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">{project.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg lg:mt-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* Separator Line - Between Project Name and About Section */}
        <div className="border-t border-border mb-8"></div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - About the Project */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">About the Project</h2>
            <div className="space-y-6">
              {project.about.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div className="lg:col-span-1 relative">
            {/* Separator Line - Between About and Project Details */}
            <div className="lg:hidden border-t border-border mb-8"></div>
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border -ml-8"></div>
            <div className="sticky top-24 space-y-8 lg:pl-8">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Project Details</h2>
              
              <div className="space-y-6">
                {/* Client */}
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-2">
                    CLIENT
                  </div>
                  <div className="text-foreground">{project.client}</div>
                </div>

                {/* Year */}
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-2">
                    YEAR
                  </div>
                  <div className="text-foreground">{project.year}</div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono mb-4">
                    TECHNOLOGIES
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm border border-border rounded-full bg-background text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}


