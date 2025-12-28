'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaGithub, FaFacebook, FaChevronDown } from 'react-icons/fa'
import { useTheme } from '@/contexts/ThemeContext'

export default function Hero() {
  const { theme } = useTheme()
  
  return (
    <section id="home" className={`${theme === 'dark' ? 'bg-gradient-to-tr from-dark via-gray-800 to-gray-900' : 'bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300'} pt-24 md:pt-32 pb-12 md:pb-20 min-h-screen flex items-center relative transition-colors duration-300 overflow-hidden`}>
      {/* Gradient Lines Background */}
      <div 
        className={`absolute ${theme === 'dark' ? 'opacity-100' : 'opacity-50'} inset-0 pointer-events-none`}
        style={{
          backgroundImage: `url('/assets/${theme === 'dark' ? 'gradlines.jpg' : 'gradlines.jpg'}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'multiply',
        }}
      />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-32 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Side - Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative rotate-0 hover:rotate-[3.40deg] transition-transform duration-300">
              <Image 
                src="/assets/profile.png" 
                alt="Aj Christian Osias" 
                width={400} 
                height={500}
                className="object-cover w-full max-w-[220px] md:max-w-[280px]"
                style={{ height: 'auto' }}
              />
            </div>
          </div>
          
          {/* Right Side - Text & Socials */}
          <div className="flex-1 text-center md:text-left">
            <h1 className={`text-3xl md:text-[48px] font-extrabold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-10 md:mb-16 transition-colors duration-300`}>
              Aj Christian Osias
            </h1>
            <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} mb-10 md:mb-16 leading-relaxed transition-colors duration-300`}>
                Greetings!  and I'm delighted to welcome you to my digital haven. As a student hailing from Pangasinan State University-Urdaneta Campus, I'm embarking on a journey of discovery and growth in the realm of Website Development.
            </p>
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <a 
                href="https://www.instagram.com/ajchrstnosias/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme === 'dark' ? 'text-light' : 'text-dark'} hover:text-blue transition-colors`}
                aria-label="Instagram"
                style={{ fill: 'currentColor' }}
              >
                <FaInstagram size={24} className="md:w-7 md:h-7" style={{ fill: 'currentColor' }} />
              </a>
              <a 
                href="https://facebook.com/ajchrstnosias/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme === 'dark' ? 'text-light' : 'text-dark'} hover:text-blue transition-colors`}
                aria-label="Facebook"
              >
                <FaFacebook size={24} className="md:w-7 md:h-7" />
              </a>
              <a 
                href="https://github.com/ajchrstnosias"
                target="_blank" 
                rel="noopener noreferrer"
                className={`${theme === 'dark' ? 'text-light' : 'text-dark'} hover:text-blue transition-colors`}
                aria-label="GitHub"
              >
                <FaGithub size={24} className="md:w-7 md:h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Scroll Button */}
      <Link 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll to next section"
      >
        <div className={`${theme === 'dark' ? 'bg-white/10 border-white/20 text-light' : 'bg-dark/5 border-dark/20 text-dark'} backdrop-blur-md border rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}>
          <FaChevronDown size={20} />
        </div>
      </Link>
    </section>
  )
}
