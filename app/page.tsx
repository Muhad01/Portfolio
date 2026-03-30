"use client"

import { useEffect, useRef, useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Navigation, SECTION_IDS } from "@/components/navigation"
import { IntroSection } from "@/components/sections/intro-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section"
import { ConnectSection } from "@/components/sections/connect-section"
import { FooterSection } from "@/components/sections/footer-section"

function getActiveSectionFromScroll(): string {
  const { scrollY, innerHeight } = window
  const doc = document.documentElement
  if (innerHeight + scrollY >= doc.scrollHeight - 8) {
    return SECTION_IDS[SECTION_IDS.length - 1]
  }

  // Last section whose top has passed this line wins (classic scroll-spy)
  const markerY = innerHeight * 0.32
  let active = SECTION_IDS[0]
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= markerY) {
      active = id
    }
  }
  return active
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0])
  const [showSocialLinks, setShowSocialLinks] = useState(true)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: [0, 0.05, 0.1, 0.2], rootMargin: "0px 0px -8% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    let ticking = false
    const syncNavAndSocial = () => {
      setActiveSection(getActiveSectionFromScroll())

      const workSection = document.getElementById("work")
      if (workSection) {
        setShowSocialLinks(workSection.getBoundingClientRect().top > 0)
      } else {
        setShowSocialLinks(true)
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(syncNavAndSocial)
      }
    }

    syncNavAndSocial()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", syncNavAndSocial, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", syncNavAndSocial)
    }
  }, [])

  return (
    <PageLayout>
      <Navigation activeSection={activeSection} />

      <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-28 lg:pb-16">
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

      <div className="fixed bottom-0 left-0 right-0 h-24 lg:h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none max-lg:bottom-14"></div>
    </PageLayout>
  )
}
