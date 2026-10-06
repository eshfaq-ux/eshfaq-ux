'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Build Something
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Open to AI product engineering, SaaS projects, and full-stack development. Let's create something exceptional together.
          </p>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ContactCard
              icon={<Mail size={24} />}
              label="Email"
              value="eshfaqnabi11@gmail.com"
              href="mailto:eshfaqnabi11@gmail.com"
            />
            <ContactCard
              icon={<Github size={24} />}
              label="GitHub"
              value="@eshfaq-ux"
              href="https://github.com/eshfaq-ux"
            />
            <ContactCard
              icon={<Linkedin size={24} />}
              label="LinkedIn"
              value="ashfaq-nabi"
              href="https://linkedin.com/in/ashfaq-nabi-6882401b7"
            />
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="mailto:eshfaqnabi11@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass p-6 rounded-xl group"
      whileHover={{ y: -5 }}
    >
      <div className="text-primary mb-3 group-hover:text-secondary transition-colors">
        {icon}
      </div>
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className="text-white font-semibold text-sm group-hover:text-primary transition-colors">
        {value}
      </p>
    </motion.a>
  )
}

export default Contact
