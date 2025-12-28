'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      period: 'Sept 2024 - Present',
      title: 'Bachelor of Technology - Information Technology',
      company: 'Vidyalankar Institute of Technology',
      location: 'Mumbai, Maharashtra',
      achievements: [
        'Academic Performance: Sem3 - 10.0, Sem4 - 9.41, Sem5 - 9.6 (Avg SGPI: 9.67/10.0)',
        'Built blockchain-based mobile payment application with smart contracts on Polygon',
        'Created crop disease detection app using TensorFlow and deep learning models',
        'Active participant in hackathons and technical competitions',
        'Smart India Hackathon 2023 Finalist - AICTE Online Meeting Platform',
      ],
      technologies: ['IoT', 'Blockchain', 'React Native', 'TensorFlow', 'Node.js', 'Python'],
      color: 'blue',
    },
    {
      period: 'Jun 2023 - Jul 2023',
      title: 'Cyber Security Research Intern',
      company: 'Secure Cyber Future Ltd',
      location: 'Mumbai',
      achievements: [
        'Conducted vulnerability assessments and security analysis focusing on real-world threat identification',
        'Hands-on experience with Burp Suite, SQLMap, and XSS vulnerability mapping tools',
        'Collaborated with cybersecurity engineers to perform security testing and automate tools',
        'Generated detailed technical reports documenting security findings and recommendations',
        'Performed CORS misconfiguration testing and analyzed web application security',
      ],
      technologies: ['Burp Suite', 'SQLMap', 'XSS', 'Security Testing', 'Penetration Testing', 'CORS'],
      color: 'green',
    },
    {
      period: 'Oct 2021 - Jun 2024',
      title: 'Diploma in Computer Engineering',
      company: 'Vidyalankar Polytechnic',
      location: 'Mumbai, Maharashtra',
      achievements: [
        'Graduated with excellent academic performance of 88.86%',
        'Developed Solar Panel Optimization System as Final Year Project using ESP32 and IoT',
        'Built strong foundation in programming languages: C++, Java, Python, JavaScript',
        'Developed multiple web applications and mobile apps during coursework',
        'Learned database management, networking, and software engineering principles',
      ],
      technologies: ['ESP32', 'IoT', 'C++', 'Java', 'Python', 'Android', 'Web Development'],
      color: 'purple',
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        border: 'border-blue-500',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/50',
      },
      green: {
        bg: 'bg-green-500',
        border: 'border-green-500',
        text: 'text-green-400',
        glow: 'shadow-green-500/50',
      },
      purple: {
        bg: 'bg-purple-500',
        border: 'border-purple-500',
        text: 'text-purple-400',
        glow: 'shadow-purple-500/50',
      },
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section id="experience" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 grid-background opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-400 font-mono text-xl">04. </span>
            <span className="gradient-text-blue">Work Experience</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-blue-500"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 via-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => {
            const colorClasses = getColorClasses(exp.color)
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-16 md:mb-24 ${
                  isEven ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className={`hidden md:block absolute ${
                    isEven ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                  } top-8 w-6 h-6 ${colorClasses.bg} rounded-full border-4 border-black shadow-lg ${colorClasses.glow} z-10`}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl p-4 md:p-5 hover:border-primary-500/50 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary-500/10"
                >
                  {/* Period Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className={`inline-block px-3 py-1 ${colorClasses.bg} bg-opacity-20 border ${colorClasses.border} ${colorClasses.text} rounded-full text-xs font-mono mb-3`}
                  >
                    {exp.period}
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <h4 className={`text-lg ${colorClasses.text} font-semibold mb-2`}>
                    {exp.company}
                  </h4>
                  <p className="text-gray-400 text-xs mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.4 + achIndex * 0.05 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <svg className={`w-5 h-5 ${colorClasses.text} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.6 + techIndex * 0.03 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-2 py-0.5 text-[10px] font-mono ${colorClasses.bg} bg-opacity-10 border ${colorClasses.border} ${colorClasses.text} rounded-md`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
