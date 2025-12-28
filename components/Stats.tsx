'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { FaCode, FaTrophy, FaCertificate, FaProjectDiagram } from 'react-icons/fa'

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: FaCode,
      number: '9.67',
      label: 'Average SGPI',
      color: 'from-blue-500 to-cyan-500',
      suffix: '',
    },
    {
      icon: FaProjectDiagram,
      number: '3',
      label: 'Major Projects',
      color: 'from-purple-500 to-pink-500',
      suffix: '+',
    },
    {
      icon: FaTrophy,
      number: '7',
      label: 'Achievements',
      color: 'from-orange-500 to-red-500',
      suffix: '+',
    },
    {
      icon: FaCertificate,
      number: 'CCNA',
      label: 'Cisco Certified',
      color: 'from-green-500 to-emerald-500',
      suffix: '',
      isText: true,
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="glass rounded-xl p-6 md:p-8 text-center group relative overflow-hidden border border-transparent hover:border-primary-500/30 shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              <motion.div 
                className={`inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-3 md:mb-4 shadow-lg relative z-10`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="text-xl md:text-2xl text-white" />
              </motion.div>
              
              <motion.h3 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 relative z-10"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3 }}
              >
                {stat.isText ? (
                  <span className="gradient-text-blue">{stat.number}</span>
                ) : (
                  <>
                    <CountUpAnimation 
                      value={parseFloat(stat.number)} 
                      inView={inView}
                      delay={index * 0.15}
                    />
                    {stat.suffix}
                  </>
                )}
              </motion.h3>
              
              <p className="text-gray-400 text-xs md:text-sm font-medium relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUpAnimation({ value, inView, delay }: { value: number; inView: boolean; delay: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        let startValue = 0
        const duration = 1500
        const increment = value / (duration / 16)
        
        const timer = setInterval(() => {
          startValue += increment
          if (startValue >= value) {
            setDisplayValue(value)
            clearInterval(timer)
          } else {
            setDisplayValue(startValue)
          }
        }, 16)
        
        return () => clearInterval(timer)
      }, delay * 1000)
      
      return () => clearTimeout(timeout)
    }
  }, [inView, value, delay])

  return <span>{displayValue.toFixed(value % 1 !== 0 ? 2 : 0)}</span>
}
