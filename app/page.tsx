"use client"

import { useEffect, useRef, useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Navigation } from "@/components/navigation"
import { IntroSection } from "@/components/sections/intro-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section"
import { ConnectSection } from "@/components/sections/connect-section"
import { FooterSection } from "@/components/sections/footer-section"

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
      <Navigation activeSection={activeSection} />

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <IntroSection
          sectionRef={(el) => { sectionsRef.current[0] = el }}
          showSocialLinks={showSocialLinks}
        />

        <ExperienceSection
          sectionRef={(el) => { sectionsRef.current[1] = el }}
        />

        <SkillsSection
          sectionRef={(el) => { sectionsRef.current[2] = el }}
        />

        <FeaturedProjectsSection
          sectionRef={(el) => { sectionsRef.current[3] = el }}
        />

        <ConnectSection
          sectionRef={(el) => { sectionsRef.current[4] = el }}
        />

        <FooterSection />
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </PageLayout>
  )
}
