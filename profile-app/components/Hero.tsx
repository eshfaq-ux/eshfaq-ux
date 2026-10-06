'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
      <motion.div
        className="max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm text-primary">Available for projects</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">AI-Native Builder</span>
          <br />
          <span className="text-white">Crafting SaaS & Automation</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer focused on practical AI products, workflow automation, and developer experiences. Turning ideas into scalable, production-ready solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <Link href="#projects" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
            View Projects
            <ExternalLink className="ml-2" size={18} />
          </Link>
          <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 glass rounded-lg font-semibold hover:bg-primary/10 transition-all">
            Get in Touch
            <Mail className="ml-2" size={18} />
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <SocialLink href="https://github.com/eshfaq-ux" icon={<Github size={24} />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/ashfaq-nabi-6882401b7" icon={<Linkedin size={24} />} label="LinkedIn" />
          <SocialLink href="mailto:eshfaqnabi11@gmail.com" icon={<Mail size={24} />} label="Email" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 glass rounded-lg text-primary hover:text-secondary hover:bg-primary/10 transition-all"
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      title={label}
    >
      {icon}
    </motion.a>
  )
}

export default Hero
