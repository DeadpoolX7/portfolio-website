"use-client"

import type React from 'react';

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {  Github, ExternalLink } from 'lucide-react'

function ProjectsSection() {
  const projects = [
    {
      title: "VScode Screenshotify",
      description:
        "VS Code Extension to create elegant, minimalistic social sharing code snippet screenshot directly from IDE.",
      tech: ["JavaScript", "Node.js", "html2canvas", "CSS", "VS Code API","pnpm"],
      github: "https://github.com/DeadpoolX7/vscode-screenshotify",
      demo: "https://marketplace.visualstudio.com/items?itemName=deadpoolx7.screenshotify",
      image: "https://github.com/DeadpoolX7/vscode-screenshotify/raw/main/images/html-output.png",
    },
    {
      title: "greet-dev CLI",
      description:
        "An npm pacakage for simple yet elegant CLI tool to greet developers with motivational quotes. Built with Node.js and pnpm.",
      tech: ["JavaScript", "Nodejs", "npm registry", "Github Actions", "pnpm"],
      github: "https://github.com/DeadpoolX7/greet-dev",
      demo: "https://www.npmjs.com/package/greet-dev",
      image: "https://github.com/DeadpoolX7/greet-dev/raw/main/assets/greet-dev-v1.0.6.png",
    },
    {
      title: "Eco-Rewards",
      description: "A revolutionary smart city solution that incentivizes citizens to adopt eco-friendly practices through a reward-based system.",
      tech: ["React","Vite", "Firebase", "Firebase Auth", "Firebase DB", "Gemini","Tailwind","Daisy UI", "Vercel"],
      github: "https://github.com/BitByte_AMUHACKS4.0/",
      demo: "https://bit-byte-amuhacks-4-0.vercel.app/",
      image: "assets/eco-rewards-hero.png?height=200&width=300",
    },
    
    /* {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
      tech: ["React", "D3.js", "Express", "MySQL"],
      github: "https://github.com/yourusername/analytics",
      demo: "https://your-analytics-demo.com",
      image: "/placeholder.svg?height=200&width=300",
    }, */
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="ghost" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;