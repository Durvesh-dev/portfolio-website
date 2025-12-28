'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPhone } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'durveshbhadgaonkar19@gmail.com',
      href: 'mailto:durveshbhadgaonkar19@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/durvesh-bhadgaonkar',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'github.com/Durvesh-dev',
      href: 'https://github.com/Durvesh-dev',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 80074 99567',
      href: 'tel:+918007499567',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-400 font-mono text-xl">05. </span>
            <span className="gradient-text-blue">Get In Touch</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I&apos;m currently seeking internship opportunities in software development. 
            Whether you have a question or just want to connect, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            I&apos;m currently <span className="text-primary-400 font-semibold">seeking internship opportunities</span> and 
            exciting projects. Whether you&apos;re looking for a motivated developer, want to collaborate, 
            or just want to say hi, I&apos;d love to hear from you!
          </p>
          <p className="text-gray-400 text-base md:text-lg">
            My inbox is always open, and I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-8 text-center hover:border-primary-500/50 transition-all duration-300 group card-hover flex flex-col items-center justify-center"
            >
              <motion.div 
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <method.icon className="text-4xl text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {method.title}
              </h3>
              <p className="text-gray-400 group-hover:text-primary-300 transition-colors text-sm break-all">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-12 border-2 border-primary-500/30 hover:border-primary-500/60 transition-all duration-300 glow-effect">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text-blue"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Let&apos;s Build Something Amazing Together
            </motion.h3>
            <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed">
              Have a project in mind? Let&apos;s discuss how we can work together 
              to bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:durveshbhadgaonkar19@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/60"
              >
                <FaEnvelope className="text-xl" />
                Send Me an Email
              </motion.a>
              
              <motion.a
                href="tel:+918007499567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-primary-500/30"
              >
                <FaPhone className="text-xl" />
                Schedule a Call
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Social Links Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-6 mt-16"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/Durvesh-dev' },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/durvesh-bhadgaonkar' },
            { icon: FaTwitter, href: 'https://twitter.com/durvesh000' },
            { icon: FaEnvelope, href: 'mailto:durveshbhadgaonkar19@gmail.com' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.2, y: -5 }}
              className="w-12 h-12 flex items-center justify-center rounded-full glass hover:border-primary-500 transition-all duration-300 text-gray-400 hover:text-primary-400"
            >
              <social.icon className="text-xl" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
