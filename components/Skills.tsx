'use client'

import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

export default function Skills() {
  const { theme } = useTheme()
  
  const design = [
    { name: 'Photoshop', image: '/assets/appLogo/Adobe Photoshop.png' },
    { name: 'Illustrator', image: '/assets/appLogo/Adobe Illustrator.png' },
    { name: 'Canva', image: '/assets/appLogo/canva.png'  },
    { name: 'Figma', image: '/assets/appLogo/figma.png'  },
  ]
  
  const frontend = [
    { name: 'HTML5', image: '/assets/appLogo/Html 5.png' },
    { name: 'CSS', image: '/assets/appLogo/CSS3.png' },
    { name: 'JavaScript', image: '/assets/appLogo/JavaScript.png' },
    { name: 'Bootstrap', image: '/assets/appLogo/Bootstrap.png' },
    { name: 'Tailwind', image:  '/assets/appLogo/tailwindcss.png' },
    { name: 'jQuery', image:  '/assets/appLogo/jquery.png' },
  ]
  
  const backend = [
    { name: 'PHP', image: '/assets/appLogo/php.png' },
    { name: 'Laravel', image: '/assets/appLogo/laravel.png' },
    { name: 'Node.js', image: '/assets/appLogo/node.png' },
    { name: 'Python', image:  '/assets/appLogo/python.png' },
    { name: 'C++', image: '/assets/appLogo/C++.png' },
    { name: 'C#', image:  '/assets/appLogo/csharp.png' },
  ]
  
  const mobile = [
    { name: 'Flutter', image: '/assets/appLogo/flutter.png' },
    { name: 'Dart', image: '/assets/appLogo/dart.png' },
    { name: 'Android Studio', image:  '/assets/appLogo/AndroidStudio.png' },
  ]
  
  const databases = [
    { name: 'MySQL', image:  '/assets/appLogo/mysql.png' },
    { name: 'MongoDB', image:  '/assets/appLogo/mongodb.png' },
    { name: 'Firebase', image: '/assets/appLogo/firebase.png' },

  ]
  
  const tools = [
    { name: 'GitHub', image:  '/assets/appLogo/github.png' },
    { name: 'Vercel', image:  '/assets/appLogo/vercel.png' },
    { name: 'Postman', image:  '/assets/appLogo/postman.png' },
    { name: 'Windows', image:  '/assets/appLogo/windows.png' },
    { name: 'Linux', image:  '/assets/appLogo/linux.png' },
  ]

  const SkillBadge = ({ skill }: { skill: { name: string; image: string | null } }) => (
    <div className={`${theme === 'dark' ? 'bg-white/5 border-white/20 hover:bg-white/20' : 'bg-dark/5 border-dark/20 hover:bg-dark/20'} backdrop-blur-sm px-4 md:px-6 py-4 md:py-5 rounded-lg border transition-colors flex flex-col items-center justify-center gap-2 flex-shrink-0`}>
      {skill.image ? (
        <Image 
          src={skill.image} 
          alt={skill.name} 
          width={32}
          height={32}
          className="object-contain w-8 h-8 md:w-10 md:h-10"
        />
      ) : (
        <div className="w-8 h-8 md:w-10 md:h-10"></div>
      )}
      <span className={`${theme === 'dark' ? 'text-white' : 'text-dark'} font-semibold text-xs md:text-sm text-center transition-colors duration-300`}>{skill.name}</span>
    </div>
  )

  return (
    <section id="skills" className={`${theme === 'dark' ? 'bg-gradient-to-br from-dark via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-200 via-gray-50 to-gray-300'} pt-12 pb-24 relative overflow-hidden transition-colors duration-300`}>
      {/* Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/assets/background/backgroundElement.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-32 relative z-10">
        <div className="text-center mb-8 md:mb-12 mt-10">
          <h2 className={`text-3xl md:text-[48px] font-extrabold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 md:mb-4 transition-colors duration-300`}>My skills</h2>
          <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} transition-colors duration-300`}>
            These are the skills I&apos;ve learned and continuously advancing. 
            Always eager to learn new technologies and improve my craft.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Skills List */}
          <div className="w-full">
            <div className="mb-4 md:mb-6">
              <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 md:mb-4 transition-colors duration-300`}>Design</h3>
              <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {design.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div className="mb-4 md:mb-6">
              <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 md:mb-4 transition-colors duration-300`}>Frontend</h3>
              <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {frontend.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div className="mb-4 md:mb-6">
              <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 md:mb-4 transition-colors duration-300`}>Backend</h3>
              <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {backend.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div className="mb-4 md:mb-6">
              <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 md:mb-4 transition-colors duration-300`}>Mobile</h3>
              <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {mobile.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div className="mb-4 md:mb-6">
              <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 md:mb-4 transition-colors duration-300`}>Databases</h3>
              <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {databases.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 md:mb-4 transition-colors duration-300`}>Tools & Others</h3>
              <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {tools.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
