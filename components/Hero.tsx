'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [roleText, setRoleText] = useState('')
  const roles = [
    'Full Stack Developer.',
    'Frontend Engineer.',
    'Cybersecurity Researcher.',
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Smooth typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting && roleText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2500)
      } else if (isDeleting && roleText === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      } else if (isDeleting) {
        setRoleText(currentRole.substring(0, roleText.length - 1))
      } else {
        setRoleText(currentRole.substring(0, roleText.length + 1))
      }
    }, isDeleting ? 30 : 80)

    return () => clearTimeout(timeout)
  }, [roleText, isDeleting, roleIndex])

  return (
    <section id="home" className="pt-32 md:pt-48 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
      {/* Left Content */}
      <motion.div 
        className="flex-1 w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like ease
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card mb-8 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">Available for new opportunities</span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-semibold tracking-tight text-foreground mb-6 leading-[1.05]">
          Durvesh<br />Bhadgaonkar
        </h1>
        
        <div className="h-10 sm:h-12 flex items-center mb-6">
          <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
            {roleText}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.9 }}
              className="inline-block w-[2px] h-6 sm:h-7 bg-muted-foreground ml-1 align-middle"
            />
          </h2>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-10 text-balance">
          I build fast, responsive, and secure web experiences. Combining a keen eye for design with robust backend architecture.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="#projects"
            className="h-12 px-6 bg-foreground text-background font-medium rounded-lg flex items-center justify-center hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Explore Projects
          </a>
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-6 bg-card text-foreground font-medium rounded-lg flex items-center justify-center hover:bg-muted transition-all hover:scale-[1.02] active:scale-[0.98] text-sm border border-border"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Content - Elegant Code Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-5/12 flex justify-center lg:justify-end perspective-[1000px]"
      >
        <div className="w-full max-w-md rounded-2xl border border-border bg-[#111] shadow-2xl overflow-hidden rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#161616]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="mx-auto text-[10px] font-mono text-muted-foreground tracking-wider">app.tsx</div>
          </div>
          <div className="p-6 font-mono text-sm leading-loose text-muted-foreground/80 overflow-x-auto">
            <span className="text-purple-400">import</span> {'{'} Developer {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@durvesh/core'</span>
            <br/><br/>
            <span className="text-purple-400">const</span> profile = {'{'}
            <br/>&nbsp;&nbsp;name: <span className="text-green-400">'Durvesh Bhadgaonkar'</span>,
            <br/>&nbsp;&nbsp;skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'Security'</span>],
            <br/>&nbsp;&nbsp;passion: <span className="text-green-400">'Building scalable web apps'</span>
            <br/>{'}'}
            <br/><br/>
            <span className="text-purple-400">export default function</span> <span className="text-blue-400">App</span>() {'{'}
            <br/>&nbsp;&nbsp;<span className="text-purple-400">return</span> (
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-400">Developer</span> 
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">profile</span>={'{'}profile{'}'} 
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">available</span>={'{'}<span className="text-orange-400">true</span>{'}'} 
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br/>&nbsp;&nbsp;)
            <br/>{'}'}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
