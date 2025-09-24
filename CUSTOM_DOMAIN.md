# Custom Domain Setup for GitHub Pages

This guide will help you set up a custom domain for your portfolio hosted on GitHub Pages.

## Option 1: Using a Subdomain (Recommended for Beginners)

### Step 1: Choose a Domain Name
- Go to a domain registrar like:
  - [Namecheap](https://www.namecheap.com/) (popular, affordable)
  - [GoDaddy](https://www.godaddy.com/)
  - [Google Domains](https://domains.google/)
  - [Cloudflare](https://www.cloudflare.com/)

### Step 2: Purchase Your Domain
- Search for your desired domain name
- Purchase it (usually $10-15/year for .com domains)
- Examples: `joannamoy.com`, `joannamoy.dev`, `joannamoy.tech`

### Step 3: Configure DNS Settings
In your domain registrar's DNS settings, add these records:

**For a subdomain (e.g., portfolio.joannamoy.com):**
```
Type: CNAME
Name: portfolio
Value: joannajym.github.io
```

**For the root domain (e.g., joannamoy.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### Step 4: Configure GitHub Pages
1. Go to your repository: https://github.com/joannajym/my-portfolio
2. Click **Settings** → **Pages**
3. In the **Custom domain** field, enter your domain (e.g., `joannamoy.com`)
4. Check **"Enforce HTTPS"** (this may take a few minutes to activate)
5. Click **Save**

### Step 5: Update Your Project
Create a `CNAME` file in your project:

```bash
echo "joannamoy.com" > public/CNAME
```

Then commit and deploy:
```bash
git add public/CNAME
git commit -m "Add custom domain"
git push origin main
npm run deploy
```

## Option 2: Using GitHub's Free Subdomain

If you don't want to purchase a domain, you can use GitHub's free subdomain:

1. Go to your repository settings
2. In **Pages** section, change the source to **"Deploy from a branch"**
3. Your site will be available at: `https://joannajym.github.io/my-portfolio`

## Popular Domain Extensions for Portfolios

- `.com` - Most professional and memorable
- `.dev` - Great for developers
- `.tech` - Technology-focused
- `.io` - Popular in tech community
- `.me` - Personal branding

## DNS Propagation

After setting up DNS records, it can take:
- **A records**: 24-48 hours to fully propagate
- **CNAME records**: 1-24 hours to propagate
- **HTTPS**: 5-10 minutes after DNS is set

## Testing Your Domain

1. Use [DNS Checker](https://dnschecker.org/) to verify DNS propagation
2. Test your domain: `https://yourdomain.com`
3. Check HTTPS is working (green lock icon)

## Troubleshooting

### Common Issues:

1. **Domain not working**: Wait for DNS propagation (up to 48 hours)
2. **HTTPS not working**: Enable "Enforce HTTPS" in GitHub Pages settings
3. **404 errors**: Make sure CNAME file is in the `public` folder
4. **Mixed content warnings**: Ensure all resources use HTTPS

### Quick Fixes:

```bash
# Check if CNAME file exists
ls public/CNAME

# If not, create it
echo "yourdomain.com" > public/CNAME

# Deploy again
npm run deploy
```

## Cost Breakdown

- **Domain registration**: $10-15/year
- **GitHub Pages hosting**: FREE
- **SSL certificate**: FREE (provided by GitHub)
- **Total**: ~$1-2/month

## Benefits of Custom Domain

✅ **Professional appearance**: `joannamoy.com` vs `joannajym.github.io/my-portfolio`
✅ **Branding**: Easier to remember and share
✅ **SEO**: Better for search engines
✅ **Resume**: Looks more professional on job applications
✅ **Business cards**: Easy to print and share

## Next Steps After Setup

1. Update your resume with the new domain
2. Share your portfolio URL on LinkedIn
3. Add the domain to your email signature
4. Consider setting up email forwarding (e.g., hello@joannamoy.com)

## Support

If you encounter issues:
1. Check DNS propagation with online tools
2. Verify GitHub Pages settings
3. Wait 24-48 hours for full propagation
4. Contact your domain registrar's support
