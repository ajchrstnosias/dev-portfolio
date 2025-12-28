'use client'

import Link from 'next/link'
import { FaMapMarkerAlt, FaBriefcase, FaChevronRight } from 'react-icons/fa'
import { useTheme } from '@/contexts/ThemeContext'

export default function About() {
  const { theme } = useTheme()
  
  return (
    <section id="about" className={`${theme === 'dark' ? 'bg-gradient-to-br from-dark via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-200 via-gray-50 to-gray-300'} ${theme === 'dark' ? 'text-white' : 'text-dark'} py-12 md:py-24 transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-32">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 md:mb-10">
          <h2 className={`text-3xl md:text-[48px] font-extrabold ${theme === 'dark' ? 'text-white' : 'text-dark'} transition-colors duration-300`}>About</h2>
          <Link href="/assets/AJS-RESUME.pdf" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline text-base font-medium inline-flex items-center gap-2">
            Resume <span>&gt;</span>
          </Link>
        </div>
        
        <div className="flex justify-start md:justify-end mb-12 md:mb-20">
          <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} transition-colors duration-300`}>
            Welcome to my creative space! I&apos;m Aj, a passionate designer and entrepreneur crafting innovative products that blend style and functionality seamlessly. Dive into my <Link href="#portfolio" className="text-blue hover:underline">portfolio</Link> and let&apos;s bring your vision to life together.
          </p>
        </div>
        
        <div className="flex flex-col gap-6 md:gap-10 mb-12 md:mb-20">
          <div className="flex items-start gap-3 md:gap-4">
            <FaMapMarkerAlt className="text-blue text-lg md:text-xl mt-1 flex-shrink-0" />
            <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} transition-colors duration-300`}>
              Creating products from the <span className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold`}>Philippines</span> through remote design.
            </p>
          </div>
          
          <div className="flex items-start gap-3 md:gap-4">
            <FaBriefcase className="text-blue text-lg md:text-xl mt-1 flex-shrink-0" />
            <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} transition-colors duration-300`}>
              I am always open to new opportunities. <Link href="#contact" className="text-blue hover:underline">Let&apos;s talk</Link>
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          
          <div className="flex items-start gap-3 md:gap-4">
            <FaChevronRight className={`${theme === 'dark' ? 'text-white' : 'text-dark'} text-lg md:text-xl mt-1 flex-shrink-0 transition-colors duration-300`} />
            <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} transition-colors duration-300`}>Phone: <span className={`${theme === 'dark' ? 'text-white' : 'text-dark'}`}>0976 587 0956</span></p>
          </div>
          
          <div className="flex items-start gap-3 md:gap-4">
            <FaChevronRight className={`${theme === 'dark' ? 'text-white' : 'text-dark'} text-lg md:text-xl mt-1 flex-shrink-0 transition-colors duration-300`} />
            <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} transition-colors duration-300`}>City: <span className={`${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Villasis, Pangasinan</span></p>
          </div>
          
          <div className="flex items-start gap-3 md:gap-4">
            <FaChevronRight className={`${theme === 'dark' ? 'text-white' : 'text-dark'} text-lg md:text-xl mt-1 flex-shrink-0 transition-colors duration-300`} />
            <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} transition-colors duration-300`}>College Level: <span className={`${theme === 'dark' ? 'text-white' : 'text-dark'}`}>2nd year college</span></p>
          </div>
          
          <div className="flex items-start gap-3 md:gap-4">
            <FaChevronRight className={`${theme === 'dark' ? 'text-white' : 'text-dark'} text-lg md:text-xl mt-1 flex-shrink-0 transition-colors duration-300`} />
            <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} transition-colors duration-300`}>Email: <span className={`${theme === 'dark' ? 'text-white' : 'text-dark'}`}>imprentabyaj@gmail.com</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
