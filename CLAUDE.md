## Client: Compass Collision
Site: TBD (compasscollisionsc.com placeholder)
Business: Auto body / collision repair shop in Charleston, SC
Address: 1949 Dulsey Road, Unit 202, Charleston, SC 29407
Phone: 843-380-7055
Email: adam.compasscollision@gmail.com

## Tech Stack
- React + Vite + TypeScript + Tailwind CSS v3
- React Router v6
- react-helmet-async for per-page meta tags
- framer-motion for animations
- lucide-react for icons

## Key Architecture Decisions
- Routes use React.lazy() code splitting
- Path alias: @/ maps to ./src/
- Business data centralized in src/data/constants.ts
- SEO: title formula is "Primary Keyword City | Compass Collision"
- Schema: LocalBusiness on homepage, Service + BreadcrumbList on service pages, BreadcrumbList on all interior pages
- Below-fold images use loading="lazy", hero images use fetchpriority="high"

## Services
- Collision repair
- Dent repair (paintless dent removal + traditional)
- Auto painting (color matching, full repaints, spot repairs)

## Service Areas
- Charleston, SC (primary)
- North Charleston
- Mount Pleasant
- Summerville
- West Ashley
- James Island
- Goose Creek

## Current Page Structure
- / Homepage (body shop charleston sc)
- /collision-repair (collision repair charleston sc)
- /dent-repair (dent repair charleston sc)
- /auto-painting (auto painting charleston sc)
- /north-charleston (body shop north charleston sc)
- /mount-pleasant (body shop mount pleasant sc)
- /summerville (collision repair summerville sc)
- /west-ashley (body shop west ashley)
- /james-island (body shop james island)
- /goose-creek (collision repair goose creek)
- /about
- /contact
- /faq
- /gallery
- /thank-you
- /privacy-policy
- /terms-of-service

## Image Processing
When new images are added to `src/assets/`, automatically resize, compress, and convert them using Sharp. Do not ask the user to process images manually.

**Size targets by usage:**
- Hero images (full-width background): 2400px wide, WebP, quality 80
- Gallery images (3-column grid): 760px wide, WebP, quality 80
- Before/after images (2-column grid): 1200px wide, WebP, quality 80
- All images must be under 200KB after compression

## Next Tasks
1. Write full page content for all pages
2. Build Navbar and Footer components
3. Source hero images and gallery photos
4. Set up deployment (Vercel)
5. Connect domain
6. GBP setup
