'use client'

import { motion } from 'framer-motion'
import { Award, ShieldCheck, ShieldAlert, Database, Activity, Send, GitBranch } from 'lucide-react'

export default function Skills() {
  const coreSkills = [
    { name: 'React', icon: 'react/react-original.svg' },
    { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'python/python-original.svg' },
    { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
    { name: 'Java', icon: 'java/java-original.svg' },
    { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Docker', icon: 'docker/docker-original.svg' },
    { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'mysql/mysql-original.svg' },
    { name: 'Flask', icon: 'flask/flask-original.svg' },
  ]

  const securityTools = [
    { name: 'Burp Suite', icon: ShieldAlert },
    { name: 'SQLMap', icon: Database },
    { name: 'Wireshark', icon: Activity },
    { name: 'Postman', icon: Send },
    { name: 'Git', icon: GitBranch }
  ]

  const achievements = [
    'Smart India Hackathon 2023 Finalist',
    'HackBuild Google Hackathon — Top 20',
    'Cisco Certified Network Associate (CCNA)',
    'Cyber Security Internship — SCF Ltd',
  ]

  return (
    <section id="skills" className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-heading font-medium text-foreground mb-4">Skills</h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Core Tech Stack (Icons) */}
        <div className="lg:col-span-7">
          <h3 className="text-lg font-heading font-medium text-foreground mb-6">Tech Stack</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-8">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-muted/30 hover:border-border/80 transition-all group hover:-translate-y-1"
              >
                <div className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                    alt={skill.name}
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Security & Tools (Chips) */}
          <h3 className="text-lg font-heading font-medium text-foreground mb-4">Security & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {securityTools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md border border-border hover:bg-muted transition-colors cursor-default"
              >
                <tool.icon className="w-3.5 h-3.5 text-muted-foreground" />
                {tool.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Achievements List */}
        <div className="lg:col-span-5">
          <h3 className="text-lg font-heading font-medium text-foreground mb-6">Achievements</h3>
          <div className="flex flex-col gap-4">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  {index < 2 ? (
                    <Award className="w-5 h-5 text-accent" />
                  ) : (
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  )}
                </div>
                <span className="text-sm font-medium text-foreground leading-snug">
                  {ach}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
