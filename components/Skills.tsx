'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      icon: FaCode,
      title: 'Languages & Core',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'C/C++',
        'Java',
        'Python',
        'JavaScript',
        'SQL',
        'HTML/CSS',
        'Solidity',
        'ESP32 (IoT)',
      ],
    },
    {
      icon: FaServer,
      title: 'Frameworks & Libraries',
      color: 'from-green-500 to-emerald-500',
      skills: [
        'ReactJS',
        'React Native',
        'NodeJS',
        'ExpressJS',
        'Flask',
        'TensorFlow',
        'OpenCV',
        'Android Development',
      ],
    },
    {
      icon: FaDatabase,
      title: 'Databases & Tools',
      color: 'from-purple-500 to-pink-500',
      skills: [
        'MongoDB',
        'MySQL',
        'Docker',
        'Postman',
        'Git / GitHub',
        'Burp Suite',
        'SQLMap',
        'VS Code',
      ],
    },
    {
      icon: FaTools,
      title: 'Soft Skills & Focus Areas',
      color: 'from-orange-500 to-red-500',
      skills: [
        'Leadership',
        'Collaboration',
        'Analytical Thinking',
        'Problem Solving',
        'Cybersecurity',
        'Blockchain Basics',
        'IoT Systems',
        'Mobile Development',
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 grid-background opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-400 font-mono text-xl">02. </span>
            <span className="gradient-text-blue">Skills & Technologies</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-blue-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + skillIndex * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    <svg className="w-2 h-2 text-primary-400" viewBox="0 0 6 6" fill="currentColor">
                      <circle cx="3" cy="3" r="3" />
                    </svg>
                    <span className="text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text-blue">
            Achievements & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Smart India Hackathon 2023 Finalist', icon: '🏆', desc: 'AICTE Online Meeting Platform' },
              { title: 'Tantravihar State-Level Competition 2025', icon: '🥇', desc: 'Decentralized Payment System using Blockchain' },
              { title: 'HackBuild Google Hackathon', icon: '🚀', desc: 'Decentralized Notes Marketplace - Top 20 nationwide' },
              { title: 'Cisco Certified Network Associate (CCNA)', icon: '🎓', desc: 'Networking certification' },
              { title: 'TechFiesta PICT International Hackathon', icon: '💻', desc: 'Participation' },
              { title: 'State-Level Final Year Project Competition', icon: '💡', desc: 'Participation' },
              { title: 'Internship at Secure Cyber Future Ltd', icon: '🔒', desc: 'Cybersecurity Research' },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-6 py-4 bg-gradient-to-r from-primary-500/20 to-blue-500/20 border border-primary-500/30 rounded-xl hover:from-primary-500/30 hover:to-blue-500/30 hover:border-primary-400 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div>
                    <h4 className="text-primary-300 font-semibold text-sm mb-1">{achievement.title}</h4>
                    <p className="text-gray-400 text-xs">{achievement.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
