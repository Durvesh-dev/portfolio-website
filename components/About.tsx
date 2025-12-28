'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: '9.67', label: 'Avg SGPI' },
    { number: '88.86%', label: 'Diploma Score' },
    { number: '3+', label: 'Major Projects' },
    { number: '7+', label: 'Achievements' },
  ]

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-400 font-mono text-xl">01. </span>
            <span className="gradient-text-blue">About Me</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-blue-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a software developer focused on building practical, scalable, and user-centric applications 
              across web, mobile, and IoT. Currently pursuing <span className="text-primary-400 font-semibold">Bachelor of Technology in Information Technology</span> at 
              <span className="text-primary-400 font-semibold"> Vidyalankar Institute of Technology, Mumbai</span> (Sept 2024 - Present) 
              with <span className="text-primary-400 font-semibold">SGPI: Sem3 - 10.0, Sem4 - 9.41, Sem5 - 9.6 (Avg: 9.67)</span>. Previously completed Diploma in Computer Engineering 
              with <span className="text-primary-400 font-semibold">88.86%</span> from Vidyalankar Polytechnic, Mumbai.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I have hands-on experience from my <span className="text-primary-400 font-semibold">Cyber Security Research Internship</span> at 
              Secure Cyber Future Ltd, where I conducted vulnerability assessments, performed security testing with 
              <span className="text-primary-400 font-semibold"> Burp Suite, SQLMap, and XSS mapping</span>. Proficient in 
              <span className="text-primary-400 font-semibold"> React.js, Node.js, Python, Java, and IoT</span> with experience in 
              building mobile applications, smart systems, and exploring blockchain fundamentals.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m passionate about solving real problems through innovation. Finalist at 
              <span className="text-primary-400 font-semibold"> Smart India Hackathon 2023</span>, participant at 
              <span className="text-primary-400 font-semibold"> Tantravihar State-Level Competition 2025</span>, and 
              <span className="text-primary-400 font-semibold"> Cisco Certified Network Associate (CCNA)</span>. 
              I enjoy learning by building, understanding blockchain basics, strengthening cybersecurity skills, and improving system architecture.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500/10 border-2 border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 group"
              >
                <span className="font-semibold">Download Resume</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center hover:border-primary-500/50 transition-all duration-300 group"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-4xl md:text-5xl font-bold gradient-text-blue mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 text-sm group-hover:text-primary-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
