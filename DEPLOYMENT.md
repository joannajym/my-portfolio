# Portfolio Deployment Guide

This guide will help you deploy your React portfolio to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your machine
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., "my-portfolio" or "joanna-moy-portfolio")
5. Make it **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 2. Update the Homepage URL

**IMPORTANT**: Before deploying, you need to update the homepage URL in `package.json`:

1. Open `package.json`
2. Find the line: `"homepage": "https://yourusername.github.io/your-repo-name"`
3. Replace `yourusername` with your GitHub username
4. Replace `your-repo-name` with your repository name
5. Save the file

Example: If your GitHub username is `joannamoy` and your repo is `my-portfolio`, it should be:
```json
"homepage": "https://joannamoy.github.io/my-portfolio"
```

### 3. Connect to GitHub Repository

Run these commands in your project directory:

```bash
# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio project setup"

# Add your GitHub repository as remote origin
# Replace 'yourusername' and 'your-repo-name' with your actual values
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages

Once your code is on GitHub:

```bash
# Deploy to GitHub Pages
npm run deploy
```

This command will:
- Build your React app for production
- Create a `gh-pages` branch
- Push the built files to GitHub Pages

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

### 6. Access Your Live Portfolio

Your portfolio will be available at:
`https://yourusername.github.io/your-repo-name`

## Updating Your Portfolio

Whenever you make changes to your portfolio:

1. Make your changes
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Deploy the changes:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure the homepage URL in package.json matches your GitHub username and repository name exactly.

2. **Build Fails**: Run `npm run build` locally first to check for any build errors.

3. **GitHub Pages Not Updating**: Wait a few minutes after deployment, or try clearing your browser cache.

4. **Routing Issues**: If you're using React Router, you may need to add a `_redirects` file in the public folder with the content: `/* /index.html 200`

## File Structure

Your project should have:
```
portfolio-frontend/
├── public/
├── src/
├── package.json (with homepage and deploy scripts)
├── .gitignore
└── DEPLOYMENT.md
```

## Support

If you encounter issues:
1. Check the GitHub Pages documentation
2. Verify your repository settings
3. Ensure all file paths are correct
4. Check the browser console for any JavaScript errors
