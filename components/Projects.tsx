'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Solar Panel Optimization System (Final Year)',
      description: 'Smart solar tracking system with 180° vertical and horizontal rotation for optimal sunlight capture. IoT-enabled with ESP32 microcontroller for real-time motor control, sensor data acquisition, and remote tracking.',
      tags: ['ESP32', 'Android', 'Java', 'IoT', 'C++'],
      features: [
        '180° rotation for optimal sun tracking',
        'Real-time sensor data monitoring',
        'Android app for remote control',
        'Automated solar panel adjustment',
      ],
      gradient: 'from-blue-600 to-cyan-600',
      links: { demo: '#', github: 'https://github.com/Durvesh-dev' },
    },
    {
      title: 'Blockchain-Based Mobile Payment Application',
      description: 'Mobile payment platform exploring blockchain fundamentals with smart contracts. Integrated Razorpay UPI payments with Firebase authentication. Built as a learning project to understand decentralized systems and Polygon network basics.',
      tags: ['React Native', 'Node.js', 'Solidity', 'Firebase', 'Razorpay'],
      features: [
        'Learning blockchain smart contract basics',
        'Secure Razorpay UPI payments',
        'Firebase authentication',
        'Explored Polygon network fundamentals',
      ],
      gradient: 'from-purple-600 to-pink-600',
      links: { demo: '#', github: 'https://github.com/Durvesh-dev/dPay' },
    },
    {
      title: 'Crop Disease Detection App',
      description: 'Mobile application using deep learning models to detect diseases from leaf images. Integrated medicine recommendation system with effective treatments and enabled farmers to diagnose issues early for improved crop health.',
      tags: ['React Native', 'Flask', 'TensorFlow', 'OpenCV', 'ML'],
      features: [
        'Deep learning disease detection',
        'Medicine recommendation system',
        'Real-time image analysis',
        'Farmer-friendly interface',
      ],
      gradient: 'from-green-600 to-emerald-600',
      links: { demo: '#', github: 'https://github.com/Durvesh-dev/Crop_Disease-Public' },
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-400 font-mono text-xl">03. </span>
            <span className="gradient-text-blue">Featured Projects</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-blue-500"></div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            A selection of projects demonstrating expertise in full-stack development, 
            system design, and delivering scalable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group relative"
            >
              <div className="glass rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-500 h-full flex flex-col card-hover shadow-md hover:shadow-xl hover:shadow-primary-500/20">
                {/* Project Header with Gradient - Fixed aspect ratio */}
                <div className={`relative overflow-hidden aspect-[4/3] bg-gradient-to-br ${project.gradient}`}>
                  {/* Animated pattern overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  {/* Icon placeholder - centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-white/20 group-hover:text-white/30 transition-colors"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </motion.div>
                  </div>
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.links.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-lg text-white" />
                      </motion.a>
                      <motion.a
                        href={project.links.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors"
                      >
                        <FaGithub className="text-lg text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + tagIndex * 0.05 }}
                        className="px-3 py-1 text-xs font-mono bg-primary-500/10 text-primary-300 rounded-full border border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/40 transition-all cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-gray-800 mt-auto">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + featureIndex * 0.08 }}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <FaCheckCircle className="text-primary-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500/10 border-2 border-primary-500 text-primary-400 rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 group"
          >
            <span className="font-semibold">View All Projects on GitHub</span>
            <FaGithub className="text-xl group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
