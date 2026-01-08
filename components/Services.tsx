'use client'

import { FaPenNib, FaMobile, FaObjectGroup, FaBrain, FaProjectDiagram, FaDesktop } from 'react-icons/fa' 
import { useTheme } from '@/contexts/ThemeContext'

const services = [
  {
    id: 1,
    icon: FaPenNib,
    title: 'Graphic & Brand Design',
    description: 'Expertise in creating logos, posters, and advertisements that capture your brand\'s essence and leave a lasting impression.',
  },
  {
    id: 2,
    icon: FaDesktop,
    title: 'Web Development & Digital Presence',
    description: 'Designing and developing modern, responsive websites for businesses and portfolios—focused on performance, usability, and clean aesthetics.',
  },
  {
    id: 3,
    icon: FaMobile,
    title: 'Mobile & System Development',
    description: 'Building functional mobile apps and desktop systems such as expense trackers, learning platforms, medical apps, and smart portals tailored to real-world needs.',
  },
  {
    id: 4,
    icon: FaObjectGroup,
    title: 'UI/UX Design',
    description: 'Crafting intuitive, user-centered interfaces that make products easy to use, visually appealing, and recognizable—especially for small businesses and startups.',
  },
  {
    id: 5,
    icon: FaBrain,
    title: 'Smart & AI-Powered Solutions',
    description: 'Developing intelligent systems with features like automation, recommendations, assessments, and data tracking to enhance productivity and user experience.',
  },
  {
    id: 6,
    icon: FaProjectDiagram,
    title: 'Software Prototyping',
    description: 'Transforming ideas into working prototypes and full systems for academic projects, startups, and business concepts—from planning to implementation.',
  },
]

export default function Services() {
  const { theme } = useTheme()
  
  return (
    <section id="services" className={`${theme === 'dark' ? 'bg-gradient-to-tr from-dark via-gray-800 to-gray-900' : 'bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300'} py-8 md:py-16 relative overflow-hidden transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-32 pt-8 md:pt-16 mb-8 md:mb-16">
        <h2 className={`text-2xl md:text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-6 md:mb-8 text-center transition-colors duration-300`}>Services Offered</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.id} className="text-center">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className={`relative ${theme === 'dark' ? 'bg-white/10 border-white/5' : 'bg-dark/5 border-dark/20'} backdrop-md border rounded-full p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center`}>
                    <IconComponent className="relative text-2xl md:text-3xl text-blue z-10" />
                  </div>
                </div>
                <h3 className={`text-lg md:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-2 md:mb-3 transition-colors duration-300`}>{service.title}</h3>
                <p className={`text-sm md:text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} leading-relaxed transition-colors duration-300`}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
