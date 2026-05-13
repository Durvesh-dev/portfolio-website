'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPos = window.scrollY + 200
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-border py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-foreground text-background flex items-center justify-center font-heading font-bold text-sm tracking-tighter group-hover:bg-accent group-hover:text-foreground transition-colors duration-300">
            DB
          </div>
          <span className="text-sm font-heading font-medium text-foreground tracking-wide group-hover:opacity-80 transition-opacity hidden sm:block">
            Durvesh.
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className={`text-sm font-medium transition-colors ${
                activeSection === item.href.slice(1) 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex text-xs font-medium bg-foreground text-background px-4 py-2 rounded hover:bg-white/90 transition-colors"
        >
          Resume
        </a>

        {/* Minimal Mobile Menu Toggle - Just text for simplicity */}
        <a href="#contact" className="sm:hidden text-sm font-medium text-muted-foreground hover:text-foreground">
          Contact
        </a>
      </div>
    </header>
  )
}
