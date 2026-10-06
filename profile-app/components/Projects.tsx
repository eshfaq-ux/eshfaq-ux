'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'devagent',
      description: 'Autonomous AI agent that reads GitHub issues, writes fixes, runs tests in a sandbox, and opens Pull Requests.',
      tags: ['TypeScript', 'AI', 'GitHub API', 'LLMs'],
      github: 'https://github.com/eshfaq-ux/devagent',
      category: 'AI & Agents',
    },
    {
      title: 'docmind',
      description: 'Multi-tenant RAG document Q&A SaaS. Upload PDFs, get streaming answers with citations and confidence scoring.',
      tags: ['Python', 'FastAPI', 'Next.js', 'RAG', 'pgvector'],
      github: 'https://github.com/eshfaq-ux/docmind',
      category: 'AI & Agents',
    },
    {
      title: 'Stackspend',
      description: 'AI spend optimization platform that audits SaaS and AI tooling costs, identifies savings opportunities.',
      tags: ['TypeScript', 'Next.js', 'SaaS', 'AI'],
      github: 'https://github.com/eshfaq-ux/Stackspend',
      category: 'SaaS',
    },
    {
      title: 'socialautoagent',
      description: 'Full-stack SaaS for social media automation. Scheduling, posting, and AI-generated replies.',
      tags: ['TypeScript', 'FastAPI', 'Next.js', 'Automation'],
      github: 'https://github.com/eshfaq-ux/socialautoagent',
      category: 'Automation',
    },
    {
      title: 'taskflow',
      description: 'Lightweight project and task management tool for team workflows and productivity.',
      tags: ['Next.js', 'React', 'Productivity'],
      github: 'https://github.com/eshfaq-ux/taskflow',
      category: 'Productivity',
    },
    {
      title: 'ToolHive',
      description: 'Browser-first utility platform with image, math, SEO, and finance tools.',
      tags: ['Next.js', 'TypeScript', 'Utilities'],
      github: 'https://github.com/eshfaq-ux/ToolHive',
      category: 'Utilities',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="glass p-8 rounded-xl group hover:border-primary/50 transition-all"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 217, 255, 0.1)' }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary/60 mt-1">{project.category}</p>
                </div>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors p-2"
                >
                  <Github size={20} />
                </Link>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
