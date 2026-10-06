'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm an AI-native full-stack developer building end-to-end products that combine strong product thinking with real technical execution. My focus is on creating practical solutions that solve real problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With expertise spanning AI tooling, SaaS platforms, document intelligence, and automation workflows, I turn ambitious ideas into scalable, production-ready products.
              </p>
              <p className="text-gray-400 text-lg">
                Currently based in Bengaluru, India. Always interested in collaborating on innovative projects and intelligent systems.
              </p>
            </div>

            <div className="glass p-8 rounded-xl space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">Core Strengths</h3>
              <StrengthItem title="Full-Stack Development" />
              <StrengthItem title="AI & Automation Systems" />
              <StrengthItem title="SaaS Architecture & UX" />
              <StrengthItem title="Document Intelligence & RAG" />
              <StrengthItem title="Developer Tooling" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StrengthItem({ title }: { title: string }) {
  return (
    <motion.div
      className="flex items-center gap-3 pb-4 border-b border-primary/20"
      whileHover={{ x: 5 }}
    >
      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      <span className="text-gray-200">{title}</span>
    </motion.div>
  )
}

export default About
