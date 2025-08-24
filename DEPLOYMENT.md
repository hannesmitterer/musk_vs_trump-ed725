# GitHub Pages Deployment Guide

This document provides detailed instructions for deploying the Musk vs Trump AI Reputation Tracker frontend to GitHub Pages.

## Overview

The frontend is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the `main` branch.

**Live Site**: https://hannesmitterer.github.io/musk_vs_trump-ed725/

## Automated Deployment Process

### GitHub Actions Workflow

The deployment is handled by `.github/workflows/deploy.yml` which:

1. **Triggers** on push to `main` branch (and PRs for testing)
2. **Sets up** Node.js 18 environment with npm caching
3. **Installs** dependencies with `npm ci`
4. **Builds** the React application with `npm run build`
5. **Deploys** the built files to GitHub Pages

### Required GitHub Repository Settings

The following settings should be configured in the GitHub repository:

1. **GitHub Pages Source**: 
   - Go to Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will automatically create and manage the `gh-pages` branch

2. **Actions Permissions**:
   - Go to Settings → Actions → General
   - Ensure "Allow all actions and reusable workflows" is selected

3. **Environment Protection** (Optional but recommended):
   - Go to Settings → Environments
   - Create environment named `github-pages`
   - Add deployment protection rules if desired

## Manual Deployment Steps

If you need to deploy manually or troubleshoot:

### Prerequisites

- Node.js 18 or higher
- npm
- Git access to the repository

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hannesmitterer/musk_vs_trump-ed725.git
   cd musk_vs_trump-ed725
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the application:**
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages** (if you have push access):
   ```bash
   # The GitHub Actions workflow handles this automatically
   # Manual deployment would require additional tools like gh-pages package
   ```

## Local Testing

Before deployment, you can test the application locally:

### Development Server
```bash
npm run dev
```
Opens at: http://localhost:5173/musk_vs_trump-ed725/

### Production Preview
```bash
npm run build
npm run preview
```
Opens at: http://localhost:4173/musk_vs_trump-ed725/

## Build Configuration

The application is configured for GitHub Pages deployment:

- **Base Path**: `/musk_vs_trump-ed725/` (matches repository name)
- **Build Tool**: Vite (modern, fast bundler)
- **Output Directory**: `dist/`
- **Asset Handling**: Automatic optimization and bundling

### Key Configuration Files

- `vite.config.js` - Build configuration with GitHub Pages base path
- `package.json` - Dependencies and scripts
- `index.html` - Application entry point
- `.github/workflows/deploy.yml` - Deployment automation

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version (should be 18+)
   - Ensure all dependencies are installed: `npm ci`
   - Check for syntax errors in React components

2. **Deployment Not Working**:
   - Verify GitHub Actions permissions in repository settings
   - Check GitHub Pages source is set to "GitHub Actions"
   - Review workflow logs in Actions tab

3. **Site Not Loading**:
   - Verify the base path in `vite.config.js` matches repository name
   - Check browser developer tools for 404 errors
   - Ensure GitHub Pages is enabled in repository settings

4. **Workflow Permission Issues**:
   ```yaml
   permissions:
     contents: read
     pages: write
     id-token: write
   ```
   These permissions are required in the workflow file.

### Viewing Deployment Status

1. **GitHub Actions**:
   - Go to repository → Actions tab
   - View deployment workflow runs and logs

2. **GitHub Pages**:
   - Go to repository → Settings → Pages
   - View deployment status and history

## Updating the Deployment

To make changes to the deployed site:

1. Make changes to React components in `src/`
2. Test locally with `npm run dev`
3. Commit and push changes to `main` branch
4. GitHub Actions will automatically build and deploy
5. Site updates are live within 1-2 minutes

## Security Considerations

- The site is publicly accessible
- No sensitive data should be included in the frontend code
- Environment variables for production should use GitHub Secrets if needed
- All dependencies are audited during the build process

## Performance

The built application includes:

- Code splitting and tree shaking
- Asset optimization and compression
- Modern JavaScript/React optimizations
- Gzip compression enabled by GitHub Pages

Expected load times:
- Initial page load: < 2 seconds
- Subsequent navigation: < 500ms