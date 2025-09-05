#!/usr/bin/env node

/**
 * GitHub Pages Deployment Checker and Auto-Fixer
 * 
 * This script checks for required files for GitHub Pages deployment
 * and automatically generates them if missing.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

class GitHubPagesChecker {
    constructor() {
        this.issues = [];
        this.fixes = [];
        this.requiredFiles = [
            {
                path: '.nojekyll',
                description: 'Disables Jekyll processing for non-Jekyll sites',
                content: '',
                critical: true
            },
            {
                path: 'public/.nojekyll',
                description: 'Ensures .nojekyll is copied to build output',
                content: '',
                critical: true
            },
            {
                path: 'public/404.html',
                description: 'Custom 404 page for SPA routing',
                content: this.generate404Page(),
                critical: false
            }
        ];
    }

    log(message, type = 'info') {
        const colors = {
            info: '\x1b[36m',    // cyan
            success: '\x1b[32m', // green
            warning: '\x1b[33m', // yellow
            error: '\x1b[31m',   // red
            reset: '\x1b[0m'
        };
        
        const prefix = {
            info: 'ℹ️ ',
            success: '✅ ',
            warning: '⚠️ ',
            error: '❌ '
        };

        console.log(`${colors[type]}${prefix[type]}${message}${colors.reset}`);
    }

    checkFile(filePath) {
        const fullPath = path.join(rootDir, filePath);
        return fs.existsSync(fullPath);
    }

    createFile(filePath, content, description) {
        const fullPath = path.join(rootDir, filePath);
        const dir = path.dirname(fullPath);
        
        // Create directory if it doesn't exist
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            this.log(`Created directory: ${dir}`, 'info');
        }
        
        fs.writeFileSync(fullPath, content);
        this.log(`Created: ${filePath} - ${description}`, 'success');
        this.fixes.push(`Created ${filePath}`);
    }

    generate404Page() {
        return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 - Page Not Found | Musk vs Trump - AI Reputation Tracker</title>
    <meta name="description" content="Page not found. Track and analyze the reputation of public figures through AI-powered sentiment analysis." />
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .container {
        text-align: center;
        padding: 2rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      h1 { font-size: 4rem; margin: 0 0 1rem 0; }
      p { font-size: 1.2rem; margin: 1rem 0; }
      a {
        display: inline-block;
        margin-top: 2rem;
        padding: 12px 24px;
        background: #00ad9f;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        transition: background 0.3s;
      }
      a:hover { background: #008a7a; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <p>This might be a client-side route. Redirecting to home...</p>
      <a href="/musk_vs_trump-ed725/">Go to Home</a>
    </div>
    <script>
      // For SPA routing, redirect to base path after 3 seconds
      setTimeout(() => {
        window.location.href = '/musk_vs_trump-ed725/';
      }, 3000);
    </script>
  </body>
</html>`;
    }

    checkWorkflowConflicts() {
        const deployWorkflow = path.join(rootDir, '.github/workflows/deploy.yml');
        const jekyllWorkflow = path.join(rootDir, '.github/workflows/jekyll-gh-pages.yml');
        
        if (this.checkFile('.github/workflows/deploy.yml') && this.checkFile('.github/workflows/jekyll-gh-pages.yml')) {
            this.issues.push({
                type: 'conflict',
                message: 'Multiple deployment workflows detected (deploy.yml and jekyll-gh-pages.yml)',
                solution: 'Remove jekyll-gh-pages.yml as it conflicts with Vite deployment',
                critical: true
            });
            return false;
        }
        return true;
    }

    checkPackageJson() {
        const packagePath = path.join(rootDir, 'package.json');
        if (!this.checkFile('package.json')) {
            this.issues.push({
                type: 'missing',
                message: 'package.json not found',
                critical: true
            });
            return false;
        }

        try {
            const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
            
            // Check for required scripts
            const requiredScripts = ['build', 'dev'];
            for (const script of requiredScripts) {
                if (!packageJson.scripts || !packageJson.scripts[script]) {
                    this.issues.push({
                        type: 'config',
                        message: `Missing required script: ${script}`,
                        critical: script === 'build'
                    });
                }
            }

            // Check for homepage field
            if (!packageJson.homepage || !packageJson.homepage.includes('github.io')) {
                this.issues.push({
                    type: 'config',
                    message: 'Missing or incorrect homepage field in package.json',
                    critical: false
                });
            }

            return true;
        } catch (error) {
            this.issues.push({
                type: 'error',
                message: `Error reading package.json: ${error.message}`,
                critical: true
            });
            return false;
        }
    }

    checkViteConfig() {
        const vitePath = path.join(rootDir, 'vite.config.js');
        if (!this.checkFile('vite.config.js')) {
            this.issues.push({
                type: 'missing',
                message: 'vite.config.js not found',
                critical: true
            });
            return false;
        }

        try {
            const viteConfig = fs.readFileSync(vitePath, 'utf8');
            if (!viteConfig.includes('base:') || !viteConfig.includes('/musk_vs_trump-ed725/')) {
                this.issues.push({
                    type: 'config',
                    message: 'vite.config.js missing proper base path for GitHub Pages',
                    critical: true
                });
            }
            return true;
        } catch (error) {
            this.issues.push({
                type: 'error',
                message: `Error reading vite.config.js: ${error.message}`,
                critical: true
            });
            return false;
        }
    }

    fixWorkflowConflicts() {
        const jekyllWorkflow = path.join(rootDir, '.github/workflows/jekyll-gh-pages.yml');
        if (fs.existsSync(jekyllWorkflow)) {
            fs.unlinkSync(jekyllWorkflow);
            this.log('Removed conflicting jekyll-gh-pages.yml workflow', 'success');
            this.fixes.push('Removed jekyll-gh-pages.yml workflow');
        }
    }

    async run(autoFix = false) {
        this.log('🔍 Checking GitHub Pages deployment setup...', 'info');
        
        // Check for required files
        for (const file of this.requiredFiles) {
            if (!this.checkFile(file.path)) {
                this.issues.push({
                    type: 'missing',
                    message: `Missing file: ${file.path} - ${file.description}`,
                    critical: file.critical,
                    file: file
                });
            } else {
                this.log(`Found: ${file.path}`, 'success');
            }
        }

        // Check configuration files
        this.checkPackageJson();
        this.checkViteConfig();
        this.checkWorkflowConflicts();

        // Report issues
        if (this.issues.length === 0) {
            this.log('✨ All GitHub Pages requirements are satisfied!', 'success');
            return true;
        }

        this.log(`\n📋 Found ${this.issues.length} issues:`, 'warning');
        this.issues.forEach((issue, index) => {
            const severity = issue.critical ? 'error' : 'warning';
            this.log(`${index + 1}. ${issue.message}`, severity);
        });

        // Auto-fix if requested
        if (autoFix) {
            this.log('\n🔧 Auto-fixing issues...', 'info');
            
            // Create missing files
            for (const issue of this.issues) {
                if (issue.type === 'missing' && issue.file) {
                    this.createFile(issue.file.path, issue.file.content, issue.file.description);
                }
            }

            // Fix workflow conflicts
            const conflictIssue = this.issues.find(i => i.type === 'conflict');
            if (conflictIssue) {
                this.fixWorkflowConflicts();
            }

            if (this.fixes.length > 0) {
                this.log('\n✅ Auto-fixes applied:', 'success');
                this.fixes.forEach(fix => this.log(`  - ${fix}`, 'success'));
                this.log('\n🔄 Re-run the checker to verify all issues are resolved.', 'info');
            }
        } else {
            this.log('\n💡 Run with --fix to automatically resolve these issues.', 'info');
        }

        return this.issues.filter(i => i.critical).length === 0;
    }
}

// CLI interface
const args = process.argv.slice(2);
const autoFix = args.includes('--fix') || args.includes('-f');

const checker = new GitHubPagesChecker();
checker.run(autoFix).then(success => {
    process.exit(success ? 0 : 1);
}).catch(error => {
    console.error('❌ Error running GitHub Pages checker:', error);
    process.exit(1);
});