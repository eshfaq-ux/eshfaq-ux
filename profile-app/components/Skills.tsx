'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'HTML/CSS'],
    },
    {
      category: 'Frontend',
      skills: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'FastAPI', 'Django'],
    },
    {
      category: 'AI & Data',
      skills: ['LLMs', 'RAG Pipelines', 'pgvector', 'Redis'],
    },
    {
      category: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector DBs'],
    },
    {
      category: 'DevOps',
      skills: ['Vercel', 'Docker', 'Railway', 'Render'],
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              className="glass p-6 rounded-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold text-primary mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-sm text-gray-200 rounded-full border border-primary/20 hover:border-primary/50 transition-all"
                  >
                    {skill}
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

export default Skills
