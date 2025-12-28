# Vercel 404 Error Troubleshooting

## Common Causes & Solutions

### 1. Check Deployment Logs
- Go to your Vercel project dashboard
- Click on the failed deployment
- Check the "Build Logs" to see if there are any build errors

### 2. Verify Build Settings
Make sure in Vercel project settings:
- **Framework Preset**: Next.js (should auto-detect)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default, auto-detected)
- **Install Command**: `npm install` (default)
- **Node.js Version**: 18.x or 20.x (recommended)

### 3. Check Environment Variables
If using EmailJS, ensure these are set in Vercel:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Note: Missing env vars won't cause a 404, but they're needed for the contact form to work.

### 4. Verify Files Are Pushed
Make sure all files are committed and pushed to GitHub:
```bash
git status
git push origin main
```

### 5. Check Next.js Version Compatibility
Ensure you're using a compatible Node.js version (18.x or 20.x recommended for Next.js 14).

### 6. Redeploy
- If build succeeded but you see 404, try:
  1. Go to Vercel Dashboard → Your Project → Deployments
  2. Click the "⋯" menu on the latest deployment
  3. Select "Redeploy"

### 7. Check Runtime Logs
- Go to your Vercel project → Logs
- Check for runtime errors (different from build errors)

## Quick Fixes

### If Build Fails:
1. Check the build logs for specific errors
2. Make sure `package.json` has correct dependencies
3. Try deleting `.next` folder locally and rebuilding: `rm -rf .next && npm run build`

### If Build Succeeds but 404:
1. Check if `app/page.tsx` exists
2. Verify `app/layout.tsx` exists
3. Ensure no custom routing issues
4. Try accessing the deployment URL directly (not via a redirect)

## Still Having Issues?

1. Check Vercel Status: https://vercel-status.com
2. Review Vercel Documentation: https://vercel.com/docs
3. Check Next.js Deployment Guide: https://nextjs.org/docs/deployment

