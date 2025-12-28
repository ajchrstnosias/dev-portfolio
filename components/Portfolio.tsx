'use client'

import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

const projects = [
  {
    id: 1,
    title: 'Responsive Personal Website',
    description: 'An inaugural responsive website for a school activity, showcasing modern web design principles and mobile-first approach.',
    image: '/assets/projects/portfolio.png',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Recycling Mobile Application',
    description: 'A pioneering initiative in sustainability, connecting users with recycling opportunities and rewards.',
    image: '/assets/projects/recylingMobileApp.png',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'UX/UI Students Portal',
    description: 'A comprehensive portal designed to enhance student experience with intuitive navigation and modern design.',
    image: '/assets/projects/studentPortal.png',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'GYM AND FITNESS APP',
    description: 'A sports and fitness application helping users track their workouts and achieve their fitness goals.',
    image: '/assets/projects/gymFitnessApp.png',
    codeLink: '#',
  },
  {
    id: 5,
    title: 'UX/UI MUSIC STREAMING APP',
    description: 'A modern music streaming app with beautiful UI and seamless user experience for music lovers.',
    image: '/assets/projects/musicStreaming.png',
    codeLink: '#',
  },
]

export default function Portfolio() {
  const { theme } = useTheme()
  
  return (
    <section id="portfolio" className={`${theme === 'dark' ? 'bg-gradient-to-tr from-dark via-gray-800 to-gray-900' : 'bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300'} py-12 md:py-24 transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-32">
        <div className="flex justify-between items-center gap-4 mb-10 md:mb-14">
          <h2 className={`text-3xl md:text-[48px] font-extrabold ${theme === 'dark' ? 'text-white' : 'text-dark'} transition-colors duration-300`}>Portfolio</h2>
          <a href="#portfolio" className="text-base text-blue hover:underline font-semibold whitespace-nowrap">View all &gt;</a>
        </div>
        
        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
            >
              {/* Image */}
              <div className="flex-1 w-full max-w-md">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400} 
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 w-full">
                <h3 className={`text-xl md:text-[30px] font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 md:mb-4 transition-colors duration-300`}>{project.title}</h3>
                <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} mb-4 md:mb-6 leading-relaxed transition-colors duration-300`}>{project.description}</p>
                <a 
                  href={project.codeLink}
                  className="inline-flex items-center gap-2 bg-blue text-white px-5 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue/90 transition-colors font-semibold text-sm md:text-base"
                >
                  <span>&lt;/&gt;</span> View code
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <button className={`${theme === 'dark' ? 'bg-dark text-white' : 'bg-dark text-white'} px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-dark/90 transition-colors font-semibold text-sm md:text-base`}>
            View all
          </button>
        </div>
      </div>
    </section>
  )
}
