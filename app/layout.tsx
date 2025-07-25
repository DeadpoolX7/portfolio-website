import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanju Shaw",
  description:
    "Passionate full stack developer with 5+ years of experience creating beautiful, functional web applications. Specializing in React, Next.js, Node.js, TypeScript, SpringBoot and modern web technologies. Available for freelance projects and full-time opportunities.",
    keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "SpringBoot",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Web Developer",
    "Software Engineer",
    "Freelance Developer",
    "Remote Developer",
    "San Francisco Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
    "REST API",
    "GraphQL",
    "Responsive Design",
    "UI/UX",
    "Agile",
    "Scrum",
  ],
  // App-specific
  applicationName: "Sanju Shaw Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
    generator: 'Sanju Shaw'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
