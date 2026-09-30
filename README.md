# PUNYA S R - Portfolio
npm install
npm run dev      # local preview
npm run build    # production build in dist/
Resume: public/resume.pdf (Download Resume buttons link to it).
LinkedIn / GitHub links live in src/data.ts (linkedin, github).
Visual effects live in src/effects.css and src/components/ParticleField.tsx.

## Contact form setup (required to receive messages by email)
The form posts to Formspree. Nothing is delivered until you add your own form URL:
1. Create a free form at https://formspree.io and confirm your email (srpunya05@gmail.com).
2. Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ENDPOINT` to your form URL.
3. Rebuild and deploy: `npm run deploy` (the value is baked in at build time).
Until it is set, the form shows a notice and opens the visitor's email app instead.

## Run / build
    npm install
    npm run dev       # local preview
    npm run build     # type-check + production build
    npm run deploy    # publish to GitHub Pages

## Where things live
- src/data.ts: all personal content, links and the form setting
- src/components/: Hero, Sections, Projects (+ ProjectModal), Contact (+ ContactForm), Navbar, Toast
- src/index.css + src/effects.css: styling (effects.css loads last and holds the polish layer)
