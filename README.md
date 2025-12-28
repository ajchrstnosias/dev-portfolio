# Aj Christian Osias - Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## 🎨 Design

- **Colors:**
  - Dark/Black: `#242424`
  - Blue: `#2069E4`
  - Light: `#D9D9D9`

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy on Vercel

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Services.tsx     # Services section
│   ├── Skills.tsx       # Skills section
│   ├── Portfolio.tsx    # Portfolio section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── public/
│   └── assets/          # Images and static assets
└── ...
```

## ✨ Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Active section highlighting
- ✅ Contact form
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Optimized images with Next.js Image component

## 📝 Notes

- Contact form currently shows an alert on submission. You can integrate it with a service like Formspree, EmailJS, or your own API endpoint.
- Update social media links in components (Header, Hero, Footer) with your actual URLs.
- Add your resume PDF to the public folder and update the link in the About component.
