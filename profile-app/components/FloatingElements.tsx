'use client'

import { useEffect, useState } from 'react'

const FloatingElements = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-float opacity-20" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-float animation-delay-2000 opacity-20" />
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-float animation-delay-4000 opacity-20" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, .05) 25%, rgba(0, 217, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .05) 75%, rgba(0, 217, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, .05) 25%, rgba(0, 217, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .05) 75%, rgba(0, 217, 255, .05) 76%, transparent 77%, transparent)`,
        backgroundSize: '50px 50px',
      }} />
    </div>
  )
}

export default FloatingElements
