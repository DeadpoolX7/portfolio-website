"use-client"
import type React from 'react';

import {Globe, Database, Smartphone, Code} from 'lucide-react';
import {motion } from 'framer-motion';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


function AboutSection() {
  const skills = [
    { name: "Languages", icon: Smartphone, items: ["JavaScript", "Java", "TypeScript", "C++", "C", "Python"] },
    { name: "Frontend", icon: Globe, items: ["React", "Next.js", "TypeScript", "Tailwind CSS","ShadCn", "DaisyUI"] },
    { name: "Backend", icon: Database, items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
    { name: "Tools", icon: Code, items: ["Linux", "Git", "Docker", "Podman",  "AWS", "Vercel", "Netlify"] },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and the skills I bring to every project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I started my journey in web development 2 years ago(in 2023), driven by a passion for creating digital
                experiences that make a difference. What began as curiosity about how websites work has evolved into a
                career focused on building scalable, user-friendly applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. When
                I'm not coding, you can find me contributing to open-source projects or exploring new frameworks and
                tools.😊
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Bachelor of Technology in Information Technology</h4>
                  <p className="text-sm text-muted-foreground">Calcutta Institute of Enginnering and Management (CIEM) • 2022-2026</p>
                </div>
                {/* <div>
                  <h4 className="font-medium">Full Stack Web Development Bootcamp</h4>
                  <p className="text-sm text-muted-foreground">Tech Academy • 2022</p>
                </div> */}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="grid gap-6">
              {skills.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <category.icon className="w-5 h-5 text-primary" />
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <Badge key={item} variant="outline">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;