'use client'

import { useState } from 'react'
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useTheme } from '@/contexts/ThemeContext'

export default function Contact() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials not configured. Please set up environment variables.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'imprentabyaj@gmail.com',
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      console.error('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'Set' : 'Missing')
      console.error('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? 'Set' : 'Missing')
      console.error('Public Key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Set' : 'Missing')
      setSubmitStatus('error')
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className={`${theme === 'dark' ? 'bg-gradient-to-br from-dark via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-200 via-gray-50 to-gray-300'} py-12 md:py-24 relative overflow-hidden transition-colors duration-300`}>
      {/* Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/assets/blue-whiteLogo.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          rotate: '3deg',
        }}
      ></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-32 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className={`text-3xl md:text-[48px] font-extrabold ${theme === 'dark' ? 'text-white' : 'text-dark'} mb-3 md:mb-4 transition-colors duration-300`}>Let&apos;s talk about a project</h2>
          <p className={`text-base font-medium ${theme === 'dark' ? 'text-light' : 'text-gray-700'} max-w-3xl mx-auto transition-colors duration-300`}>
            Have a project in mind? I&apos;d love to hear about it. Send me a message 
            and let&apos;s create something amazing together.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Name Field */}
            <div className="relative">
              <FaUser className={`absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 ${theme === 'dark' ? 'text-light' : 'text-gray-600'} z-10 pointer-events-none transition-colors duration-300`} />
              <input
                type="text"
                name="name"
                placeholder="Last name, first name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full ${theme === 'dark' ? 'bg-white/10 border-white/20 text-white placeholder-light' : 'bg-dark/10 border-dark/20 text-dark placeholder-gray-500'} backdrop-blur-sm border rounded-lg pl-10 md:pl-12 pr-4 py-3 md:py-4 focus:outline-none focus:border-blue transition-colors text-sm md:text-base relative z-0`}
              />
            </div>
            
            {/* Email Field */}
            <div className="relative">
              <FaEnvelope className={`absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 ${theme === 'dark' ? 'text-light' : 'text-gray-600'} z-10 pointer-events-none transition-colors duration-300`} />
              <input
                type="email"
                name="email"
                placeholder="youremail@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full ${theme === 'dark' ? 'bg-white/10 border-white/20 text-white placeholder-light' : 'bg-dark/10 border-dark/20 text-dark placeholder-gray-500'} backdrop-blur-sm border rounded-lg pl-10 md:pl-12 pr-4 py-3 md:py-4 focus:outline-none focus:border-blue transition-colors text-sm md:text-base relative z-0`}
              />
            </div>
          </div>
          
          {/* Message Field */}
          <div className="mb-4 md:mb-6">
            <textarea
              name="message"
              placeholder="Type here..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className={`w-full ${theme === 'dark' ? 'bg-white/10 border-white/20 text-white placeholder-light' : 'bg-dark/10 border-dark/20 text-dark placeholder-gray-500'} backdrop-blur-sm border rounded-lg px-4 py-3 md:py-4 focus:outline-none focus:border-blue transition-colors resize-none text-sm md:text-base`}
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="flex flex-col items-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${theme === 'dark' ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' : 'bg-dark/10 border-dark/20 hover:bg-dark/20 text-dark'} backdrop-blur-md border px-10 md:px-12 py-2 md:py-3 rounded-lg transition-all duration-300 font-bold text-base md:text-lg w-auto flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:bg-white/10`}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane />
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm md:text-base font-medium mt-2">
                ✓ Message sent successfully! I'll get back to you soon.
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="text-red-400 text-sm md:text-base font-medium mt-2">
                ✗ Failed to send message. Please try again or email me directly at imprentabyaj@gmail.com
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
