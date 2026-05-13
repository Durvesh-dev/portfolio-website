'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Experience() {
  const timeline = [
    {
      period: 'Jan 2026 — Apr 2026',
      title: 'Cyber Security Research Intern',
      company: 'Secure Cyber Future Ltd',
      points: [
        'Performed web application security testing using Burp Suite and SQLMap.',
        'Identified vulnerabilities including XSS, CORS issues, parameter tampering, and SQL injection.',
        'Used Google Dorking techniques for reconnaissance and identifying vulnerable targets.',
      ],
    },
    {
      period: 'Jun 2023 — Jul 2023',
      title: 'Cyber Security Research Intern',
      company: 'Secure Cyber Future Ltd',
      points: [
        'Conducted research on emerging cyber security threats and testing techniques.',
        'Assisted in cybersecurity tool testing, technical documentation, and vulnerability analysis.',
      ],
      link: 'https://drive.google.com/file/d/1Iy2CV0R9fL_ThLQ_yONN1LAIwAVuNuRH/view',
      linkLabel: 'View Certificate',
    },
    {
      period: '2024 — 2027',
      title: 'B.Tech in Information Technology',
      company: 'Vidyalankar Institute of Technology',
      points: [
        'CGPA: 9.6 — Consistently top-performing student.',
      ],
    },
    {
      period: '2021 — 2024',
      title: 'Diploma in Computer Engineering',
      company: 'Vidyalankar Polytechnic',
      points: [
        'Graduated with 88.86%.',
        'Built Solar Panel Optimization System as final year project.',
      ],
    },
  ]

  return (
    <section id="experience" className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-heading font-medium text-foreground mb-4">Experience</h2>
        <p className="text-muted-foreground text-base max-w-2xl text-balance">
          Professional journey and academic background.
        </p>
      </div>

      <div className="relative border-l border-border/50 ml-3 md:ml-0 md:border-none space-y-12">
        {timeline.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="relative pl-8 md:pl-0 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group"
          >
            {/* Mobile Timeline Dot */}
            <div className="md:hidden absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-accent transition-colors" />

            <div className="md:w-48 shrink-0 flex md:justify-end">
              <span className="text-sm font-mono text-muted-foreground">{item.period}</span>
            </div>
            
            {/* Desktop Timeline Node */}
            <div className="hidden md:flex flex-col items-center justify-start mt-1.5 relative">
              <div className="w-2.5 h-2.5 rounded-full bg-border group-hover:bg-accent transition-colors z-10" />
              {index !== timeline.length - 1 && (
                <div className="absolute top-2.5 w-[1px] h-32 bg-border/50" />
              )}
            </div>

            <div className="flex-1 space-y-3 pb-4">
              <div>
                <h3 className="text-xl font-heading font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-accent font-medium mt-1">{item.company}</p>
              </div>
              
              <ul className="space-y-2">
                {item.points.map((point, pi) => (
                  <li key={pi} className="text-sm text-muted-foreground leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>

              {item.link && (
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mt-2 p-2 -ml-2 rounded-md hover:bg-muted/50"
                >
                  {item.linkLabel} <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
