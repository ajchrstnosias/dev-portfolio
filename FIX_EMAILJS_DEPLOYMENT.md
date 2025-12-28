# Fix EmailJS on Vercel Deployment

## Quick Fix Steps:

### 1. Verify Environment Variables in Vercel
Go to: **Vercel Dashboard → Your Project → Settings → Environment Variables**

Make sure these THREE variables exist:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_ksdm9cg`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_l4op777`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `dSiQi5QjybaajA7dN`

**Important:** Each variable must be set for **ALL environments** (Production, Preview, Development)

### 2. REDEPLOY (This is Critical!)
After setting/changing environment variables, you MUST redeploy:

**Option A: Redeploy via Dashboard**
1. Go to **Deployments** tab
2. Click **"..."** (three dots) on the latest deployment
3. Select **"Redeploy"**
4. **UNCHECK** "Use existing Build Cache"
5. Click **"Redeploy"**

**Option B: Trigger New Deployment**
- Push any commit to GitHub (this will auto-deploy)
- Or wait for the current deployment to complete

### 3. Verify After Redeployment
1. Wait for deployment to show "Ready" (green checkmark)
2. Visit your site: `https://osias-dev-portfolio.vercel.app`
3. Test the contact form
4. Check browser console (F12) - should show "Set" for all three variables

## Why This Happens:
- Environment variables are only included in the build when they exist at build time
- If you add env vars AFTER a deployment, they won't be in that build
- You must redeploy for the new env vars to be included

## Still Not Working?
1. Double-check variable names are EXACT (case-sensitive)
2. Make sure they're set for Production environment
3. Check build logs to see if env vars are being read
4. Try redeploying again

