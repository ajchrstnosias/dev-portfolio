# Deployment Guide

## Deploying to Vercel

### Option 1: Deploy via Vercel Web Interface (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (or sign up with GitHub)
2. Click "New Project"
3. Import your GitHub repository: `ajchrstnosias/dev-portfolio`
4. Vercel will auto-detect it's a Next.js project
5. **Important**: Add these environment variables in the project settings:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your EmailJS service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = your EmailJS template ID
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your EmailJS public key
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Run `vercel` in the project directory
2. Follow the prompts to authenticate and link your project
3. Add environment variables when prompted or via Vercel dashboard
4. Run `vercel --prod` to deploy to production

### Environment Variables Required

Make sure to add these in Vercel project settings:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

These are the same values from your `.env.local` file (which should NOT be committed to git).

