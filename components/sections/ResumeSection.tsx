"use-client"

import type React from 'react'

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Resume</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Download my complete resume to learn more about my experience, education, and achievements.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("https://drive.google.com/file/d/your-resume-id/view", "_blank")}
            className="text-lg px-8 py-6"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ResumeSection;