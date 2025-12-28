'use client'

import { FaFacebook, FaInstagram, FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa'
import { useTheme } from '@/contexts/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  
  return (
    <footer className={`${theme === 'dark' ? 'bg-gradient-to-tr from-dark via-gray-800 to-gray-900' : 'bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300'} transition-colors duration-300`}>
      {/* Contact Info and Social Media Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-32 pt-20">
        <div className={`border-b ${theme === 'dark' ? 'border-light/20' : 'border-gray-300'} pb-6 transition-colors duration-300`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue text-base md:text-lg" />
              <span className={`${theme === 'dark' ? 'text-light' : 'text-gray-700'} text-sm md:text-base transition-colors duration-300`}>0976 587 0956</span>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue text-base md:text-lg" />
              <span className={`${theme === 'dark' ? 'text-light' : 'text-gray-700'} text-sm md:text-base transition-colors duration-300`}>imprentabyaj@gmail.com</span>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center gap-5">
              <span className={`${theme === 'dark' ? 'text-light' : 'text-gray-700'} text-base transition-colors duration-300`}>Follow me:</span>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com/ajchrstnosias/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue hover:text-blue/80 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} className="md:w-6 md:h-6" />
                </a>
                <a 
                  href="https://instagram.com/ajchrstnosias/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue hover:text-blue/80 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} className="md:w-6 md:h-6" style={{ fill: 'currentColor' }} />
                </a>
                <a 
                  href="https://github.com/ajchrstnosias" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue hover:text-blue/80 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} className="md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       {/* Copyright */}
        <div className="container mx-auto px-6 md:px-12 lg:px-32 py-6">
         <div className="flex justify-center items-center">
           {/* Copyright */}
           <div>
             <p className={`${theme === 'dark' ? 'text-light' : 'text-gray-700'} text-sm md:text-base transition-colors duration-300`}>Osias Aj Christian © 2025</p>
           </div>
         </div>
        </div>
    </footer>
  )
}
