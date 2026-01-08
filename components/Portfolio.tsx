'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

const projects = [
  {
    id: 6,
    systemTitle: 'Fix-it-now',
    systemDescription: 'Video Recommendations about your note',
    systemUrl: '',
    year: '2024',
    image: '/assets/projects/fix-it-now.png',
  },
  {
    id: 7,
    systemTitle: 'GamePlan',
    systemDescription: 'Game Planning System',
    systemUrl: null,
    year: '2023',
    image: '/assets/projects/gameplan.png',
  },
  {
    id: 8,
    systemTitle: 'PerFit',
    systemDescription: 'A modern multi-sport coaching and performance analysis platform',
    systemUrl: null,
    year: '2023',
    image: '/assets/projects/studyroom.png',
  },
  {
    id: 9,
    systemTitle: 'Voluntary Hand',
    systemDescription: 'Donation System',
    systemUrl: null,
    year: '2023',
    image: '/assets/projects/voluntaryhand.png',
  },
  {
    id: 10,
    systemTitle: 'Study Room',
    systemDescription: '',
    systemUrl: null,
    year: '2023',
    image: '/assets/projects/studyroom.png',
  },
  {
    id: 6,
    systemTitle: 'EchoCoach',
    systemDescription: 'AI Language Fluency Coach',
    systemUrl: 'https://echocoachsite.vercel.app/',
    year: '2025',
    image: '/assets/projects/echocoach.png',
  },
  {
    id: 7,
    systemTitle: 'PathTern',
    systemDescription: 'AI OJT Match Finder',
    systemUrl: 'https://echocoachsite.vercel.app/',
    year: '2025',
    image: '/assets/projects/PathTern.png',
  },
  {
    id: 2,
    systemTitle: 'RePocket',
    systemDescription: 'Recycling Mobile Application',
    systemUrl: null,
    year: '2024',
    image: '/assets/projects/recylingMobileApp.png',
  },
  {
    id: 1,
    systemTitle: 'Portfolio Website | Osias',
    systemDescription: 'Responsive Personal Website',
    systemUrl: null,
    year: '2023',
    image: '/assets/projects/portfolio.png',
  },
  {
    id: 3,
    systemTitle: 'School Management System',
    systemDescription: 'University Portal',
    systemUrl: null,
    year: '2023',
    image: '/assets/projects/studentPortal.png',
  },
  {
    id: 4,
    systemTitle: 'Stronger',
    systemDescription: 'GYM AND FITNESS APP',
    systemUrl: null,
    year: '2023',
    image: '/assets/projects/gymFitnessApp.png',
  },
  {
    id: 5,
    systemTitle: 'Tone List',
    systemDescription: 'MUSIC STREAMING APP',
    systemUrl: null,
    year: '2023',
    image: '/assets/projects/musicStreaming.png',
  },
]

export default function Portfolio() {
  const { theme } = useTheme()
  const [showAll, setShowAll] = useState(false)
  
  // Show minimum 3 items, or all if showAll is true
  const displayedProjects = showAll ? projects : projects.slice(0, 6)
  const hasMoreProjects = projects.length > 6
  
  return (
    <section id="portfolio" className={`${theme === 'dark' ? 'bg-gradient-to-tr from-dark via-gray-800 to-gray-900' : 'bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300'} py-12 md:py-24 transition-colors duration-300`}>
      <div className="container mx-auto px-12 md:px-12 lg:px-32">
        <div className="flex justify-between items-center gap-4 mb-10 md:mb-14">
          <h2 className={`text-3xl md:text-[48px] font-extrabold ${theme === 'dark' ? 'text-white' : 'text-dark'} transition-colors duration-300`}>Portfolio</h2>

        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="block"
            >
              {/* Image */}
              {project.systemUrl ? (
                <a
                  href={project.systemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-video overflow-hidden rounded-lg mb-4 group"
                >
                  <Image 
                    src={project.image} 
                    alt={project.systemTitle} 
                    width={400} 
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ) : (
                <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4 group">
                  <Image 
                    src={project.image} 
                    alt={project.systemTitle} 
                    width={400} 
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              {/* Content */}
              <div>
                <p className={`text-sm ${theme === 'dark' ? 'text-light/70' : 'text-gray-600'} mb-2 transition-colors duration-300`}>{project.systemDescription}</p>
                <h3 className={`text-lg md:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 transition-colors duration-300`}>{project.systemTitle}</h3>
                
                {/* Deployment Status and Year */}
                <div className="flex flex-wrap gap-2">
                  {project.systemUrl && (
                    <a
                      href={project.systemUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-light border-white/40' : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'} border rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 hover:scale-110 inline-block`}
                    >
                      Deployment
                    </a>
                  )}
                  <span
                    className={`${theme === 'dark' ? 'bg-white/10 text-light border-white/20' : 'bg-gray-100 text-gray-700 border-gray-300'} border rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-300`}
                  >
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show All / Show Less Button */}
        {hasMoreProjects && (
          <div className="flex items-center justify-center gap-4 mt-10 md:mt-12">
            <div className={`flex-1 h-px ${theme === 'dark' ? 'bg-white/20' : 'bg-dark/20'}`}></div>
            <button
              onClick={() => setShowAll(!showAll)}
              className={`${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 text-light border-white/20' : 'bg-dark/10 hover:bg-dark/20 text-dark border-dark/20'} backdrop-blur-md border rounded-full px-6 py-1.5 text-sm font-semibold transition-all duration-300 hover:scale-105`}
            >
              {showAll ? 'Show Less' : 'Show All'}
            </button>
            <div className={`flex-1 h-px ${theme === 'dark' ? 'bg-white/20' : 'bg-dark/20'}`}></div>
          </div>
        )}
      </div>
    </section>
  )
}
