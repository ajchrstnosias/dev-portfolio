# EmailJS Setup Instructions

To make the contact form functional, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## Step 2: Create an Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **Service ID**

## Step 3: Create an Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact Form Message from Portfolio

**Content:**
```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key**

## Step 5: Configure Environment Variables
1. Create a `.env.local` file in the root of your project
2. Add these variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the values with your actual credentials
4. Restart your development server (`npm run dev`)

## Step 6: Test
1. Fill out the contact form on your portfolio
2. Submit and check your email (imprentabyaj@gmail.com)
3. You should receive the message!

## Important Notes
- The `.env.local` file is already in `.gitignore`, so your credentials won't be committed to git
- For production deployment (Vercel), add these environment variables in your Vercel project settings
- Free tier allows 200 emails per month, which is perfect for a portfolio site

