# Vercel Project Management Guide

## Delete a Project on Vercel

1. Go to **Vercel Dashboard** → https://vercel.com/dashboard
2. Click on the project you want to delete
3. Go to **Settings** (top menu)
4. Scroll down to the bottom of the Settings page
5. Find the **"Danger Zone"** section
6. Click **"Delete Project"**
7. Type the project name to confirm
8. Click **"Delete"**

⚠️ **Warning:** This permanently deletes the project and all deployments. Make sure you're deleting the correct one!

## Change Domain Name on Vercel

### Option 1: Change the Auto-Generated Domain

1. Go to **Settings** → **Domains**
2. You'll see your current domain (e.g., `osias-dev-portfolio.vercel.app`)
3. Click on the domain name
4. You can edit it or add a new one
5. Vercel will assign you a new `.vercel.app` domain

**Note:** The auto-generated domain format is: `[project-name].vercel.app`
- To change it, you'd need to rename the project itself

### Option 2: Rename the Project (Changes Auto-Generated Domain)

1. Go to **Settings** → **General**
2. Find **"Project Name"** at the top
3. Click the edit/pencil icon
4. Enter your new project name
5. Save
6. Your new domain will be: `[new-project-name].vercel.app`

### Option 3: Add a Custom Domain

1. Go to **Settings** → **Domains**
2. Click **"Add"** or **"Add Domain"**
3. Enter your custom domain (e.g., `yourname.com` or `portfolio.yourname.com`)
4. Follow the DNS configuration instructions
5. Vercel will provide DNS records to add to your domain registrar

## Recommended Actions

1. **Delete the duplicate/wrong project** using steps above
2. **Keep the working project** (`osias-dev-portfolio` or whatever it's named)
3. **Rename it** if you want a different `.vercel.app` domain
4. **Add a custom domain** later if you want (requires owning a domain name)

