'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid md:grid-cols-12 gap-8 lg:gap-16"
      >
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-3xl font-heading font-medium text-foreground">About</h2>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed text-balance">
            <p>
              I am a software engineer focused on building robust full-stack applications and securing systems against modern threats. 
              Currently pursuing my B.Tech in Information Technology at Vidyalankar Institute of Technology.
            </p>
            <p>
              My approach combines a deep understanding of core computer science fundamentals with hands-on experience in vulnerability analysis and agile development. I enjoy the intersection of designing seamless user experiences and hardening backend architectures.
            </p>
            <p>
              Whether I'm writing React components, architecting an AWS backend, or hunting for XSS vulnerabilities, I aim for clean, maintainable, and secure solutions.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-5 bg-card border border-border rounded-2xl p-8 flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-heading font-semibold text-foreground">9.6</span>
            <span className="text-sm font-medium text-muted-foreground">B.Tech CGPA at Vidyalankar Institute</span>
          </div>
          
          <div className="w-full h-[1px] bg-border" />
          
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-heading font-semibold text-foreground">88.8%</span>
            <span className="text-sm font-medium text-muted-foreground">Diploma in Computer Engineering</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
