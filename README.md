# manopause.info

**Clarity, calm, and boundaries — without blame.**

An educational resource for understanding relationship conflict, setting healthy boundaries, and accessing support.

## Overview

manopause.info is a static website built with [Astro](https://astro.build) that provides:

- Educational content about relationship dynamics and conflict patterns
- Practical tools for de-escalation, boundaries, and documentation
- Age-appropriate resources for children and teens
- Support guidance for families and loved ones
- Safety-first orientation with crisis resources

## Tech Stack

- **Framework**: Astro 4.x with MDX support
- **Styling**: CSS custom properties + scoped component styles
- **Deployment**: GitHub Pages with GitHub Actions
- **Domain**: Custom domain via GoDaddy

## Local Development

### Prerequisites

- Node.js 20+ 
- npm 10+

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/manopause-site.git
cd manopause-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production to `./dist` |
| `npm run preview` | Preview production build locally |

## Project Structure

```
manopause-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── CNAME                   # Custom domain config
│   ├── favicon.svg             # Site favicon
│   ├── og-image.svg            # Open Graph image
│   └── robots.txt              # Search engine directives
├── src/
│   ├── components/             # Reusable components
│   │   ├── PatternCard.astro
│   │   ├── SafetyCallout.astro
│   │   └── ScriptBlock.astro
│   ├── layouts/                # Page layouts
│   │   ├── ArticleLayout.astro
│   │   └── BaseLayout.astro
│   ├── pages/                  # All site pages
│   │   ├── index.astro         # Homepage
│   │   ├── start-here/         # Guided assessment
│   │   ├── get-help/           # Crisis resources
│   │   ├── learn/              # Educational content
│   │   ├── tools/              # Practical tools
│   │   ├── for-men/            # Men's resources
│   │   ├── for-women/          # Women's resources
│   │   ├── for-children/       # Youth resources
│   │   ├── for-families/       # Family support
│   │   ├── about/              # About & ethics
│   │   └── ...                 # Legal pages
│   └── styles/
│       └── global.css          # Design system
├── astro.config.mjs            # Astro configuration
├── package.json
└── README.md
```

## Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

#### Initial Setup Checklist

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Build and deployment", select **"GitHub Actions"** (not "Deploy from a branch")
   - Save changes

2. **Push to main branch** or trigger workflow manually:
   - The workflow will run automatically on push
   - Or go to Actions → Deploy to GitHub Pages → Run workflow

3. **Verify deployment**:
   - Check Actions tab for green checkmark
   - Note the deployment URL (will be `https://your-username.github.io/manopause-site/` initially)
   - Visit the URL to confirm site loads

4. **Before custom domain is configured**:
   - Site will deploy to default Pages URL: `https://your-username.github.io/manopause-site/`
   - Once DNS is configured (see below), it will work at `https://manopause.info`

**The workflow automatically**:
- Builds the Astro site with `npm ci` and `npm run build`
- Uploads the `./dist` directory
- Deploys to GitHub Pages

### Custom Domain Setup (GoDaddy)

#### Step 1: Configure GitHub

1. In your repository, go to Settings → Pages
2. Under "Custom domain", enter `manopause.info`
3. Check "Enforce HTTPS" (after DNS propagates)

#### Step 2: Configure GoDaddy DNS

Add these DNS records in your GoDaddy DNS Management:

**For apex domain (manopause.info):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

**For www subdomain:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | your-github-username.github.io | 600 |

> **Note:** Replace `your-github-username` with your actual GitHub username (e.g., if your repo is at `github.com/johndoe/manopause-site`, use `johndoe.github.io`)

#### Step 3: Verify

1. Wait for DNS propagation (can take up to 48 hours, usually faster)
2. Visit https://manopause.info to verify
3. Ensure HTTPS is working (green padlock)

### Troubleshooting

**Build fails:**
- Ensure all dependencies are in `package.json`
- Check for TypeScript/syntax errors
- Review GitHub Actions logs

**Custom domain not working:**
- Verify DNS records are correct
- Check that `public/CNAME` contains `manopause.info`
- Wait for DNS propagation
- Try clearing browser cache

**HTTPS certificate issues:**
- Disable and re-enable "Enforce HTTPS" in GitHub Pages settings
- Ensure DNS is fully propagated first

## Content Guidelines

All content follows these principles:

1. **Educational only** — not medical, legal, or therapeutic advice
2. **Safety-first** — crisis resources always accessible
3. **Non-pathologizing** — focus on patterns and behaviors, not diagnoses
4. **Trauma-informed** — respectful, non-blaming language
5. **Culturally sensitive** — inclusive of diverse backgrounds
6. **Age-appropriate** — separate content for children/teens

## Contributing

This is an educational resource maintained by volunteers. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes following content guidelines
4. Submit a pull request

All contributions must maintain the site's educational, non-diagnostic approach.

## License

Content is © manopause.info. Brief excerpts may be shared with attribution. Contact for other uses.

## Support

For questions about the site:
- General: hello@manopause.info
- Technical: tech@manopause.info
- Accessibility: accessibility@manopause.info

**If you or someone you know is in immediate danger, call 911 or your local emergency services.**

**National Domestic Violence Hotline: 1-800-799-7233**
