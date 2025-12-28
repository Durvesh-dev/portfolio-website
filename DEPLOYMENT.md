# 🚀 Deployment Guide - Vercel (Recommended)

## Quick Deployment Steps

### 1. **Prepare Your Code**
```bash
# Make sure everything is committed
git add .
git commit -m "Portfolio ready for deployment"
```

### 2. **Push to GitHub**
```bash
# Create a new repository on GitHub named: portfolio
# Then push:
git remote add origin https://github.com/durvesh000/portfolio.git
git branch -M main
git push -u origin main
```

### 3. **Deploy to Vercel**

#### Option A: Using Vercel Website (Easiest)
1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your portfolio repository
5. Click "Deploy" (No configuration needed!)
6. ✅ Your site is live!

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

### 4. **Post-Deployment Tasks**

#### A. Update URLs in Code
Replace these placeholder URLs with your actual Vercel domain:

**In `app/layout.tsx`:**
```typescript
metadataBase: new URL('https://your-actual-domain.vercel.app'),
```

**In `app/sitemap.ts`:**
```typescript
const baseUrl = 'https://your-actual-domain.vercel.app'
```

**In `app/robots.ts`:**
```typescript
sitemap: 'https://your-actual-domain.vercel.app/sitemap.xml',
```

Commit and push changes:
```bash
git add .
git commit -m "Update URLs with actual domain"
git push
```
Vercel will automatically redeploy!

#### B. Add Custom Domain (Optional)
1. Go to your project in Vercel Dashboard
2. Settings → Domains
3. Add your custom domain (e.g., durveshbhadgaonkar.com)
4. Update DNS records as shown
5. Update URLs in code with custom domain

#### C. Add Images
Upload these to `/public` folder:
- `og-image.png` (1200x630px) - For social sharing
- `profile.jpg` - Your photo
- `Durvesh_Bhadgaonkar_Resume.pdf` - Your resume
- Favicon files (use [Favicon Generator](https://realfavicongenerator.net/))

### 5. **SEO Setup After Deployment**

#### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your Vercel URL
4. Verification is automatic (Vercel handles this)
5. Submit sitemap: `https://your-domain.vercel.app/sitemap.xml`

#### Update Verification Code
In `app/layout.tsx`, add your Google verification:
```typescript
verification: {
  google: 'your-actual-verification-code',
},
```

### 6. **Performance Check**

Run Lighthouse audit:
1. Open your deployed site
2. Right-click → Inspect
3. Go to "Lighthouse" tab
4. Run audit for Desktop & Mobile
5. Aim for 90+ scores!

### 7. **Share Your Portfolio**

Update these profiles with your portfolio link:
- ✅ LinkedIn: Featured section
- ✅ GitHub: Repository description & README
- ✅ Resume: Website section
- ✅ Email signature
- ✅ Twitter/X bio
- ✅ Dev.to profile

## 🎯 Expected Deployment Time: 5 minutes

## 🔥 Alternative Deployment Options

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

### GitHub Pages (Not recommended for Next.js)
- Next.js requires a Node.js server
- Use Vercel or Netlify instead

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional)
1. Create GA4 property
2. Get Measurement ID
3. Add to `app/layout.tsx`:

```typescript
<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `
  }} />
</head>
```

## 🐛 Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build

# If successful, commit and push
```

### Images Not Loading
- Check image paths (should start with `/`)
- Use `next/image` component for optimization
- Ensure images are in `/public` folder

### SEO Not Working
- Wait 2-3 days for Google indexing
- Check Google Search Console
- Verify sitemap is accessible
- Test with [SEO Tester](https://www.seotesteronline.com/)

## ✅ Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] All sections display correctly
- [ ] Mobile responsive (test on phone)
- [ ] All links work (social, email, GitHub)
- [ ] Resume downloads properly
- [ ] OG image displays in social shares
- [ ] Lighthouse score 90+
- [ ] Sitemap submitted to Google
- [ ] Portfolio link added to all profiles
- [ ] URLs updated in code

## 🎉 Congratulations!

Your portfolio is now live and ready to impress FAANG recruiters!

**Next Steps:**
1. Share on LinkedIn
2. Add to resume
3. Apply to jobs with confidence! 💪

---

**Need Help?** Check Vercel's [Documentation](https://vercel.com/docs)
