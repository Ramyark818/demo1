# Firebase Hosting Deployment Guide

This guide will help you deploy your portfolio website to Firebase Hosting.

## Prerequisites

1. **Google/Firebase Account**: Create one at [console.firebase.google.com](https://console.firebase.google.com)
2. **Node.js**: Ensure you have Node.js installed
3. **Firebase CLI**: Install globally with `npm install -g firebase-tools`

## Step-by-Step Deployment

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Enter project name (e.g., "ramya-portfolio")
4. Disable Google Analytics (optional for portfolio)
5. Click "Create project"

### 2. Set up Firebase Hosting

1. In Firebase Console, select your project
2. Go to "Hosting" in the left sidebar
3. Click "Get started"
4. Follow the setup instructions

### 3. Initialize Firebase in your project

```bash
# Navigate to your project directory
cd portfolio-app

# Login to Firebase (this will open a browser)
firebase login

# Initialize Firebase hosting
firebase init hosting
```

When prompted:
- **Use an existing project**: Select your created project
- **Public directory**: Enter `build`
- **Single-page app**: Enter `y` (Yes)
- **Automatic builds with GitHub**: Enter `n` (No, unless you want CI/CD)
- **Overwrite build/index.html**: Enter `n` (No)

### 4. Build and Deploy

```bash
# Build the production version
npm run build

# Deploy to Firebase
firebase deploy
```

### 5. Custom Domain (Optional)

1. In Firebase Console, go to Hosting
2. Click "Add custom domain"
3. Enter your domain name
4. Follow the verification steps
5. Update your DNS records as instructed

## Environment Variables (if needed)

If you need environment variables:

1. Create `.env.production` file:
   ```
   REACT_APP_API_URL=https://your-api.com
   REACT_APP_CONTACT_EMAIL=your@email.com
   ```

2. Use in your components:
   ```javascript
   const apiUrl = process.env.REACT_APP_API_URL;
   ```

## Continuous Deployment with GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: your-project-id
```

## Useful Firebase Commands

```bash
# View your projects
firebase projects:list

# Switch project
firebase use project-name

# View hosting URLs
firebase hosting:sites:list

# View deployment history
firebase hosting:clone source-site-id:target-site-id

# Set custom domain
firebase hosting:domain:update example.com

# View logs
firebase functions:log
```

## Performance Optimization

The `firebase.json` file includes caching headers for optimal performance:
- Images: 1 year cache
- JS/CSS: 1 year cache with automatic invalidation
- HTML: No cache (for updates)

## Security Headers (Optional)

Add to `firebase.json` for enhanced security:

```json
{
  "hosting": {
    "headers": [
      {
        "source": "**",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "DENY"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          }
        ]
      }
    ]
  }
}
```

## Troubleshooting

### Common Issues:

1. **"Permission denied"**: Run `firebase login` again
2. **"Project not found"**: Check project ID with `firebase projects:list`
3. **"Build folder not found"**: Run `npm run build` first
4. **"Hosting setup incomplete"**: Run `firebase init hosting` again

### Build Errors:

1. Check for unused imports (warnings in build)
2. Ensure all dependencies are installed: `npm install`
3. Clear cache: `npm start -- --reset-cache`

### Deployment Issues:

1. Check Firebase project permissions
2. Verify billing account (free tier has limits)
3. Check build size (Firebase has size limits)

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections are functional
- [ ] Dark/light mode toggle works
- [ ] Contact form submits (check browser console)
- [ ] Responsive design works on mobile
- [ ] SEO meta tags are present (check page source)
- [ ] Performance is acceptable (use Lighthouse)

## Support

For Firebase-specific issues:
- [Firebase Documentation](https://firebase.google.com/docs/hosting)
- [Firebase Status](https://status.firebase.google.com/)
- [Firebase Support](https://firebase.google.com/support)

---

**Your portfolio is now live! 🎉**

Remember to update your content regularly and keep your dependencies up to date.