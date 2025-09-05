# GitHub Pages Deployment Scripts

This directory contains scripts for validating and maintaining GitHub Pages deployments.

## GitHub Pages Checker (`check-github-pages.js`)

A comprehensive tool that checks for all required files and configurations needed for successful GitHub Pages deployment and can automatically generate missing files.

### Usage

#### Check deployment readiness
```bash
npm run check-pages
# or
node scripts/check-github-pages.js
```

#### Auto-fix issues
```bash
npm run fix-pages
# or  
node scripts/check-github-pages.js --fix
```

### What it checks

#### Required Files
- **`.nojekyll`** - Disables Jekyll processing (critical for React/Vite apps)
- **`public/.nojekyll`** - Ensures `.nojekyll` is copied to build output  
- **`public/404.html`** - Custom 404 page for SPA routing

#### Configuration Validation
- **`package.json`** - Required scripts (`build`, `dev`) and homepage field
- **`vite.config.js`** - Proper base path for GitHub Pages
- **Workflow conflicts** - Detects and resolves conflicting deployment workflows

#### Auto-fixes Applied

When run with `--fix` flag:
- ✅ Creates missing `.nojekyll` files
- ✅ Generates a custom 404.html page for SPA routing
- ✅ Removes conflicting Jekyll workflows
- ✅ Reports all changes made

### Integration

The checker is automatically run before deployment via the `predeploy` script in `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run check-pages"
  }
}
```

This ensures deployment requirements are validated before each build.

### Exit Codes
- `0` - All requirements satisfied or only non-critical issues
- `1` - Critical issues found that prevent deployment

### Examples

#### Successful check
```bash
$ npm run check-pages
🔍 Checking GitHub Pages deployment setup...
✅ Found: .nojekyll
✅ Found: public/.nojekyll  
✅ Found: public/404.html
✨ All GitHub Pages requirements are satisfied!
```

#### Issues found
```bash  
$ npm run check-pages
🔍 Checking GitHub Pages deployment setup...
📋 Found 2 issues:
❌ 1. Missing file: .nojekyll - Disables Jekyll processing
⚠️ 2. Missing file: public/404.html - Custom 404 page for SPA routing
💡 Run with --fix to automatically resolve these issues.
```

#### Auto-fixing
```bash
$ npm run fix-pages  
🔍 Checking GitHub Pages deployment setup...
🔧 Auto-fixing issues...
✅ Created: .nojekyll - Disables Jekyll processing
✅ Created: public/404.html - Custom 404 page for SPA routing
✅ Auto-fixes applied:
✅   - Created .nojekyll
✅   - Created public/404.html
```