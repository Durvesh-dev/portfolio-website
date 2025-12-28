'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  const [text, setText] = useState('')
  const roles = [
    'Full Stack Developer',
    'Mobile App Developer',
    'Cybersecurity Enthusiast',
    'IoT Developer'
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      } else if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1))
      } else {
        setText(currentRole.substring(0, text.length + 1))
      }
    }, isDeleting ? 50 : 150)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
              scale: 0,
            }}
            animate={{
              y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 text-lg mb-4 font-mono"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Durvesh Bhadgaonkar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl text-gray-400 mb-6 h-12"
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
            >
              Software developer building practical, scalable, and user-centric applications 
              across web, mobile, and IoT. Specialized in React Native, Node.js, and cybersecurity 
              with hands-on experience. Passionate about solving real problems through 
              thoughtful design, automation, and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/50 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>

              <a
                href="/resume.pdf"
                download="Durvesh_Bhadgaonkar_Resume.pdf"
                className="group px-8 py-4 border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30 text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:border-primary-500 hover:text-primary-400 font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-center backdrop-blur-sm"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 flex-wrap"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/Durvesh-dev', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/durvesh-bhadgaonkar', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://twitter.com/durvesh000', label: 'Twitter' },
                { icon: FaEnvelope, href: 'mailto:durveshbhadgaonkar19@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#0ea5e9' }}
                  className="text-2xl text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass rounded-2xl p-6 shadow-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm font-mono overflow-x-auto">
                <code className="text-gray-300">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = {'{\n'}
                  {'  '}<span className="text-cyan-400">name</span>:{' '}
                  <span className="text-green-400">&apos;Durvesh Bhadgaonkar&apos;</span>,{'\n'}
                  {'  '}<span className="text-cyan-400">location</span>:{' '}
                  <span className="text-green-400">&apos;Mumbai, India&apos;</span>,{'\n'}
                  {'  '}<span className="text-cyan-400">education</span>:{' '}
                  <span className="text-green-400">&apos;B.Tech IT @ VIT&apos;</span>,{'\n'}
                  {'  '}<span className="text-cyan-400">sgpi</span>:{' '}
                  <span className="text-orange-400">9.67</span>,{'\n'}
                  {'  '}<span className="text-cyan-400">skills</span>: [{'\n'}
                  {'    '}<span className="text-green-400">&apos;React Native&apos;</span>,{'\n'}
                  {'    '}<span className="text-green-400">&apos;Node.js&apos;</span>,{'\n'}
                  {'    '}<span className="text-green-400">&apos;Python&apos;</span>,{'\n'}
                  {'    '}<span className="text-green-400">&apos;IoT & ESP32&apos;</span>,{'\n'}
                  {'    '}<span className="text-green-400">&apos;Cybersecurity&apos;</span>,{'\n'}
                  {'  '}],{'\n'}
                  {'  '}<span className="text-cyan-400">certifications</span>: [{'\n'}
                  {'    '}<span className="text-green-400">&apos;CCNA&apos;</span>,{'\n'}
                  {'  '}],{'\n'}
                  {'  '}<span className="text-cyan-400">hireable</span>:{' '}
                  <span className="text-orange-400">true</span>,{'\n'}
                  {'  '}<span className="text-cyan-400">openToInternships</span>:{' '}
                  <span className="text-orange-400">true</span>,{'\n'}
                  {'};'}
                </code>
              </pre>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
