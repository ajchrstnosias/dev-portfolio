'use client'

import { FaDesktop, FaLightbulb, FaList } from 'react-icons/fa'
import { useTheme } from '@/contexts/ThemeContext'

const services = [
  {
    id: 1,
    icon: FaDesktop,
    title: 'Graphic Design Excellence',
    description: 'Expertise in creating logos, posters, and advertisements that capture your brand\'s essence and leave a lasting impression.',
  },
  {
    id: 2,
    icon: FaLightbulb,
    title: 'Digital Solutions',
    description: 'Offering cutting-edge digital solutions like websites, applications, and software prototypes tailored to your needs.',
  },
  {
    id: 3,
    icon: FaList,
    title: 'UI/UX Design',
    description: 'Making brands recognizable and distinguished for small businesses through intuitive and beautiful user interfaces.',
  },
]

export default function Services() {
  const { theme } = useTheme()
  
  return (
    <section id="services" className={`${theme === 'dark' ? 'bg-gradient-to-tr from-dark via-gray-800 to-gray-900' : 'bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300'} py-12 md:py-24 relative overflow-hidden transition-colors duration-300`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-32 pt-12 md:pt-24 mb-16 md:mb-32">
        <h2 className={`text-3xl md:text-[48px] font-extrabold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-8 md:mb-12 text-center transition-colors duration-300`}>Services Offered</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.id} className="text-center">
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className={`relative ${theme === 'dark' ? 'bg-white/10 border-white/5' : 'bg-dark/5 border-dark/20'} backdrop-md border rounded-full p-4 md:p-6 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center`}>
                    <IconComponent className="relative text-3xl md:text-4xl text-blue z-10" />
                  </div>
                </div>
                <h3 className={`text-xl md:text-[30px] font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 md:mb-4 transition-colors duration-300`}>{service.title}</h3>
                <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} leading-relaxed transition-colors duration-300`}>
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
