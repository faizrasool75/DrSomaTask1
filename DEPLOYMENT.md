# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended - 2 minutes)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Done! Your site is live 🎉

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd tummy-tuck-website
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - What's your project's name? `tummy-tuck-website`
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

5. **Production deployment:**
   ```bash
   vercel --prod
   ```

Your site is now live! 🎉

---

## Deploy to Netlify

### Option 1: Netlify Dashboard

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop the `dist` folder
   - Done! 🎉

### Option 2: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

4. **Publish directory:** Enter `dist`

---

## Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`:**
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/tummy-tuck-website",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.js`:**
   ```javascript
   export default {
     base: '/tummy-tuck-website/'
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## Deploy to Custom Server (VPS/cPanel)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder contents to your server:**
   - Via FTP/SFTP
   - Via SSH: `rsync -avz dist/ user@server:/path/to/public_html/`

3. **Configure server:**
   - Point document root to uploaded files
   - Ensure all routes redirect to `index.html` for SPA routing

### Apache (.htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Environment Variables (if needed)

Create `.env` file in project root:
```env
VITE_API_URL=your_api_url
VITE_WHATSAPP_NUMBER=your_number
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

For Vercel, add environment variables in Project Settings → Environment Variables.

---

## Performance Optimization Tips

### 1. Optimize Images
- Use WebP format
- Compress images
- Use responsive images with `srcset`

### 2. Enable Compression
Most platforms (Vercel, Netlify) enable Gzip/Brotli automatically.

### 3. CDN
Both Vercel and Netlify include global CDN automatically.

### 4. Caching Headers
Configured automatically by Vercel/Netlify for static assets.

---

## Custom Domain Setup

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records as instructed

---

## Troubleshooting

### Build Fails
- Check Node version: `node --version` (should be 16+)
- Clear cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### 404 Errors on Refresh
- Ensure SPA routing is configured (see server configuration above)
- Check `vercel.json` rewrites are correct

### Tailwind Styles Not Loading
- Check that `<script src="https://cdn.tailwindcss.com"></script>` is in `index.html`
- Clear browser cache

### Icons Not Showing
- Check Font Awesome CDN link in `index.html`
- Verify internet connection (CDN resources)

---

## Post-Deployment Checklist

- [ ] Test on mobile devices
- [ ] Test all links and buttons
- [ ] Verify WhatsApp link works
- [ ] Check all images load
- [ ] Test FAQ accordions
- [ ] Verify smooth scrolling to sections
- [ ] Test on different browsers
- [ ] Check page load speed (use PageSpeed Insights)
- [ ] Verify meta tags for SEO
- [ ] Test contact forms (if implemented)

---

**Need help?** Check the main README.md or create an issue.

🎉 **Happy Deploying!**
