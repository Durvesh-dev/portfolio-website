'use client'

import { motion } from 'framer-motion'
import { FaHeart, FaCoffee, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary-400">&lt;</span>
              <span className="gradient-text-blue">Durvesh</span>
              <span className="text-primary-400">/&gt;</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {[
                { icon: FaGithub, href: 'https://github.com/Durvesh-dev' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/durvesh-bhadgaonkar' },
                { icon: FaTwitter, href: 'https://twitter.com/durvesh000' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full glass hover:border-primary-500 transition-all duration-300 text-gray-400 hover:text-primary-400"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm mb-2">
            Designed & Built by{' '}
            <span className="gradient-text-blue font-semibold">Durvesh Bhadgaonkar</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
