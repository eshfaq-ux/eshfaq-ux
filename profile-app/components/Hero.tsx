'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowRight, Zap } from 'lucide-react'

const Hero = () => {
  const words = ['AI-Native', 'Full-Stack', 'Autonomous']
  const [displayWord, setDisplayWord] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDisplayWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00D9FF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        className="max-w-6xl text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Status badge with animation */}
        <motion.div
          className="mb-12 inline-block"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="glass px-6 py-3 rounded-full flex items-center gap-3">
            <span className="live-pulse"></span>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Available for premium projects
            </span>
          </div>
        </motion.div>

        {/* Dynamic headline */}
        <div className="mb-8 h-32 md:h-40 flex items-center justify-center">
          <motion.div
            key={displayWord}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="gradient-text inline-block">{words[displayWord]}</span>
              <br />
              <span className="text-white">Developer.</span>
            </h1>
          </motion.div>
        </div>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Building <span className="text-primary font-semibold">AI-powered SaaS</span>, autonomous agents, and{' '}
          <span className="text-secondary font-semibold">production-grade systems</span> that solve real problems.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-6 md:gap-12 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <StatCard number="10+" label="Projects" />
          <StatCard number="3y+" label="Experience" />
          <StatCard number="284" label="Contributions" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <button className="btn-neon flex items-center justify-center gap-2 text-lg">
            <Zap size={20} />
            View Featured Work
          </button>
          <Link
            href="#contact"
            className="glass px-8 py-4 rounded-lg font-semibold text-white hover:text-primary transition-all flex items-center justify-center gap-2 text-lg"
          >
            Start Collaboration
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <SocialLink href="https://github.com/eshfaq-ux" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/ashfaq-nabi-6882401b7" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:eshfaqnabi11@gmail.com" icon={<Mail size={20} />} label="Email" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <motion.div className="w-1 h-2 bg-primary rounded-full" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="glass p-6 rounded-lg text-center">
      <div className="text-3xl md:text-4xl font-black gradient-text mb-2">{number}</div>
      <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">{label}</div>
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass p-4 rounded-lg text-primary hover:text-secondary transition-all"
      whileHover={{ scale: 1.15, y: -8 }}
      whileTap={{ scale: 0.9 }}
      title={label}
    >
      {icon}
    </motion.a>
  )
}

import React from 'react'
export default Hero