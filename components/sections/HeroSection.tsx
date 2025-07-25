"use-client"

import type React from 'react'

import Image from 'next/image'
import { useMultipleTypingAnimation } from '@/hooks/use-typingAnimation'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Mail, Download } from 'lucide-react'

function HeroSection() {
  const typingTexts = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Web Developer", "Programmer"]
  const typedText = useMultipleTypingAnimation(typingTexts, 80, 1200)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary"
          >
            <Image
              src="/IMG_20231130_222742.jpg?height=200&width=200"
              alt="Profile"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Sanju Shaw
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-primary font-medium h-8"
          >
            {typedText}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating beautiful, functional web applications that solve real-world problems.
            <br />I love turning complex ideas into simple, elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(process.env.NEXT_PUBLIC_GOOGLE_DRIVE_RESUME_LINK!, "_blank")}
              className="w-full sm:w-auto"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection;