'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import FloatingElements from '@/components/FloatingElements'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, []
)

  if (isLoading) {
    return (
      <div className="animated-bg" />
    )
  }

  return (
    <>
      <div className="animated-bg" />
      <FloatingElements />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function Footer() {
  return (
    <footer className="border-t border-primary/10 py-8 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-sm text-gray-400">
          <p>Built with passion by Ashfaq Nabi • Crafted for the modern web</p>
          <p className="mt-2">© 2024 AI-Native Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
