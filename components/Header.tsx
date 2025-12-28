'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#portfolio', label: 'Portfolio', id: 'portfolio' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-auto">
      <div className={`${theme === 'dark' ? 'bg-dark/30 border-white/20' : 'bg-white/30 border-gray-200'} backdrop-blur-md rounded-full shadow-lg border transition-colors duration-300 relative`}>
        <nav className="px-4 md:px-6 py-2 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
          <Image 
            src={theme === 'dark' ? "/assets/logo-light.png" : "/assets/logo.png"} 
            alt="Aj Osias Logo" 
            width={28}
            height={28}
            className="object-contain transition-opacity duration-300"
            style={{ width: '28px', height: '28px', flexShrink: 0 }}
          />
          <span className={`text-sm md:text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} transition-colors duration-300`}>Aj Osias</span>
          <div className={`h-5 md:h-6 w-px ${theme === 'dark' ? 'bg-white/30' : 'bg-gray-300'} transition-colors duration-300 hidden md:block ml-2`}></div>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 ml-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link 
                href={link.href} 
                className={`text-base font-bold transition-colors relative ${
                  activeSection === link.id 
                    ? 'text-blue' 
                    : theme === 'dark'
                      ? 'text-light hover:text-blue' 
                      : 'text-dark hover:text-blue'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                theme === 'dark'
                  ? 'text-light hover:text-blue hover:bg-white/10' 
                  : 'text-dark hover:text-blue hover:bg-dark/5'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center gap-3 absolute right-3">
          {/* Theme Toggle Button - Mobile */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? 'text-light hover:text-blue' 
                : 'text-dark hover:text-blue'
            }`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          {/* Mobile Menu Button */}
          <button
            className={`${theme === 'dark' ? 'text-light' : 'text-dark'} transition-colors duration-300 flex-shrink-0`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-full right-0 mt-2 ${theme === 'dark' ? 'bg-dark/95' : 'bg-white/95'} backdrop-blur-md rounded-2xl shadow-lg border ${theme === 'dark' ? 'border-white/20' : 'border-gray-200'} transition-colors duration-300 min-w-[140px]`}>
            <ul className="py-2 px-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block py-2 px-3 text-sm font-bold transition-colors rounded-lg whitespace-nowrap ${
                    activeSection === link.id 
                      ? 'text-blue' 
                      : theme === 'dark'
                        ? 'text-light hover:text-blue hover:bg-white/10' 
                        : 'text-dark hover:text-blue hover:bg-dark/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

