"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Briefcase, Linkedin, MessageCircle, MessageSquare, Instagram, MonitorSmartphone, Brackets, Globe } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"
import { PageLayout } from "@/components/page-layout"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const [showSocialLinks, setShowSocialLinks] = useState(true)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    // Show social links until work section comes into view
    const handleScroll = () => {
      const workSection = document.getElementById("work")
      
      if (workSection) {
        const workRect = workSection.getBoundingClientRect()
        
        // Show links as long as work section hasn't entered the viewport
        // Hide when work section top reaches the top of viewport
        const shouldShow = workRect.top > 0
        
        setShowSocialLinks(shouldShow)
      } else {
        // If work section doesn't exist, always show
        setShowSocialLinks(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <PageLayout>
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "skills", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <header
          id="intro"
          ref={(el) => { sectionsRef.current[0] = el }}
          className="min-h-screen flex items-start pt-24 sm:pt-32 opacity-0 relative"
        >
          {/* Vertical Social Links on Right Edge - Only in Intro Section */}
          {showSocialLinks && (
            <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-16 z-10 transition-opacity duration-300">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 writing-vertical-rl text-lg uppercase tracking-wider"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              LINKEDIN
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 writing-vertical-rl text-lg uppercase tracking-wider"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              GITHUB
            </Link>
            <Link
              href="https://wa.me"
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

        <section
          id="work"
          ref={(el) => { sectionsRef.current[1] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">2019 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2023",
                  role: "Senior Frontend Engineer",
                  company: "Vercel",
                  description: "Leading frontend architecture for developer tools and AI-powered features.",
                  tech: ["React", "TypeScript", "Next.js"],
                },
                {
                  year: "2022",
                  role: "Frontend Engineer",
                  company: "Linear",
                  description: "Built performant interfaces for project management and team collaboration.",
                  tech: ["React", "GraphQL", "Framer Motion"],
                },
                {
                  year: "2021",
                  role: "Full Stack Developer",
                  company: "Stripe",
                  description: "Developed payment infrastructure and merchant-facing dashboard features.",
                  tech: ["Ruby", "React", "PostgreSQL"],
                },
                {
                  year: "2019",
                  role: "Software Engineer",
                  company: "Airbnb",
                  description: "Created booking flow optimizations and host management tools.",
                  tech: ["React", "Node.js", "MySQL"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section
          id="skills"
          ref={(el) => { sectionsRef.current[2] = el }}
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
                  Proficient in Python, C++, JavaScript, and web scraping technologies
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

        <section
          id="thoughts"
          ref={(el) => { sectionsRef.current[3] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {getFeaturedProjects(4).map((project, index) => (
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

        <section id="connect" ref={(el) => { sectionsRef.current[4] = el }} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:test@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">Email me</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-foreground" />
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        LinkedIn
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-foreground" />
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        WhatsApp
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-foreground" />
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        Discord
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4 text-foreground" />
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        Instagram
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="text-center space-y-2">
            <div className="text-sm text-muted-foreground">© 2024 Muhammad Muhad. All rights reserved.</div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </PageLayout>
  )
}
