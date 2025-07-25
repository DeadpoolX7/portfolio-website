"use client"

import type React from "react"

import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"

import { Toaster } from "@/components/ui/toaster"


import Navigation from '@/components/sections/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import AboutSection from '@/components/sections/AboutSection'
import ResumeSection from '@/components/sections/ResumeSection'
import ContactSection from "@/components/sections/ContactSection"
import Footer from '@/components/sections/Footer'


// Progress Bar
function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" style={{ scaleX }} />
}

// Main App Component
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </main>
      <Toaster />
    </div>
  )
}
