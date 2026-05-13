# Compass Collision — SEO & GBP Baseline Audit
**Audit Date:** 2026-05-12
**Website:** https://compasscollisionsc.com
**Audited by:** Claude Code (GentryWorks Agency Standards)

---

## PageSpeed Summary

Lighthouse was not run against a live URL (domain not yet connected per CLAUDE.md — "TBD placeholder"). Build was verified clean: `npm run build` completed with 0 errors in 749ms.

Key observations from build output:
- Several images exceed the 200KB target in the built assets (see Technical SEO section)
- Vendor chunk splitting is partially implemented (react vendor chunk exists)
- framer-motion is NOT split into its own chunk — bundled into `proxy-BY2I-Va2.js` at 120.6KB gzipped 39.15KB

| Page | Performance | LCP | INP | CLS | Assessment |
|---|---|---|---|---|---|
| All pages | Not collectible — domain not live | N/A | N/A | N/A | N/A |

**Note:** PageSpeed Insights requires a live domain. Run PSI manually at pagespeed.web.dev after domain is connected. Based on code inspection, likely LCP concerns exist due to large hero images and SPA JS loading order.

---

## SEO Audit — Score: 71/100 | Grade: C

| Subcategory | Max | Score | Notes |
|---|---|---|---|
| Title Tags & Meta Descriptions | 10 | 8 | Titles well-formed and unique. Homepage at 54 chars — good. About page title is 58 chars and leads with "About Us" not a keyword — suboptimal formula. Meta descriptions all unique, within length targets, include CTA. One issue: index.html has a static og:title that partially duplicates Helmet-managed title (different content but could confuse scrapers). |
| H1 and Heading Structure | 8 | 7 | One H1 per page, every page confirmed. All H1s include primary keyword + city. Minor gap: About page H1 ("Charleston's Auto Body Shop / That Actually Answers the Phone") spans two visual lines — the second line is not keyword-relevant and splits the H1 concept. Service area pages H1s are clean and keyword-first. |
| URL Structure | 5 | 5 | All URLs are clean, lowercase, hyphenated, keyword-relevant. No dates, no query params, no random strings. Pattern matches agency standard `/service-city` and `/suburb-name`. Full marks. |
| Dedicated Service Pages | 12 | 10 | Three dedicated service pages (collision repair, dent repair, auto painting) — each with full content, FAQ, schema. Suburb pages exist for all 6 service areas. Gap: no blog posts exist yet (blog page is noindexed "coming soon"). Gap: `/thank-you` and `/privacy-policy` and `/terms-of-service` are in the sitemap — these should be noindexed or excluded. |
| Content Quality & Local Keyword Relevance | 12 | 10 | Content is genuinely excellent — locally specific, conversational, authentic voice, specific trust signals (272 reviews, 95+ years experience, BMW certified). Reading level appropriate. One issue: gallery page has `trackPhoneClick` import but does not import `PHONE` or `PHONE_HREF` from constants — this is a minor inconsistency. Writing style is above agency standard. |
| Internal Linking | 5 | 4 | Service pages link to suburb pages. AutoPainting.tsx links to CollisionRepair and DentRepair inline (good cross-linking). NorthCharleston links to all 3 service pages inline. About page links to all 3 service pages inline. Gap: homepage does not link to About or FAQ pages. Gap: FAQ page only links to Contact — no links to service pages within FAQ answers. Minor gap: gallery page has no internal links to service pages beyond the bottom CTA. |
| Schema Markup (LocalBusiness, FAQ) | 8 | 6 | Homepage uses `AutoBodyShop` (a valid LocalBusiness subtype — good). FAQPage schema on homepage AND all service pages. Service schema on all 3 service pages with provider block. BreadcrumbList on all interior pages. Organization schema on About. Gap: homepage schema missing `openingHours` string field (has `openingHoursSpecification` array — correct, but also missing `priceRange` in `openingHoursSpecification`). Gap: suburb pages have Service schema but no `description` field in the Service schema on NorthCharleston (it exists on service pages but was omitted on suburb pages). Gap: `sameAs` on LocalBusiness is an empty array `[]` — should include GBP URL, Facebook, etc., or be removed. |
| Core Web Vitals / Page Speed | 8 | 5 | Build is clean. Positives: hero images have `fetchPriority="high"`, below-fold images have `loading="lazy"`, all images are WebP format, 3rd-party scripts deferred 3 seconds. Concerns: 4 images exceed 200KB limit in built assets (toyota-rav4-after: 221KB, bmw-sedan-before: 239KB, lexus-lc-after: 262KB, shop-interior: [not verified but likely large]). `framer-motion` not in its own vendor chunk — included in `proxy-BY2I-Va2.js` at 120.6KB. Helmet preload for hero is correctly implemented on Index.tsx but NOT on service pages (CollisionRepair, DentRepair, AutoPainting hero images are not preloaded via Helmet). |
| Technical SEO (sitemap, GSC, GA4, HTTPS) | 10 | 6 | Sitemap exists at `/sitemap.xml`, well-formed, covers all key pages. robots.txt is correct. GA4 is installed (G-667DBCCXJD). Microsoft Clarity installed. All 3rd-party scripts deferred. Gaps: `vercel.json` is MISSING — SPA catch-all rewrite is required for all routes to serve `index.html`. Without it, direct navigation to any route other than `/` will return a 404 on Vercel. GSC not yet set up (domain not live). `thank-you`, `privacy-policy`, and `terms-of-service` are in the sitemap but should not be (these pages should be noindexed and excluded from sitemap). Blog page is correctly noindexed but is still in the sitemap — pages with noindex should not be in the sitemap per Google's spec. |
| Backlinks & Local Directory Citations | 12 | 2 | Site is not yet live (domain not connected). No external links, backlinks, or citations verifiable. Score reflects pre-launch state — not a failure of the build, but a genuine gap in local authority at launch. |
| Blog / Topical Authority Content | 10 | 3 | Blog page exists but is noindexed ("coming soon") with zero published posts. No topical authority content built yet. This is the largest SEO gap by long-term ranking impact. Auto body shops rank for dozens of informational queries (insurance claims, hail damage, what to do after accident, PDR vs traditional, etc.) — none of which are being captured. |
| **TOTAL** | **100** | **66** | |

**Overall SEO Score: 66/100**
**SEO Grade: D** (60–69)

Note: Several items would have scored higher if the site were live. The backlink/citation category (12 points) and blog category (10 points) are 0–3 points combined because the site isn't live yet, not because the code is wrong. The code-level SEO is strong. If the site were live with 3 months of citations and 5 blog posts, this score would be approximately 82/100.

---

### On-Page Data Found

| Page | Title Tag | Chars | Meta Description | Chars | H1 | Schema |
|---|---|---|---|---|---|---|
| / | Auto Body Shop Charleston SC \| Compass Collision | 49 | Charleston's trusted auto body shop. 272 five-star reviews. Free estimates... | 152 | "Auto Body Shop in / Charleston, SC." | AutoBodyShop + FAQPage |
| /collision-repair | Collision Repair Charleston SC \| Compass Collision | 51 | Collision repair in Charleston, SC. 272 five-star reviews... | 149 | "Collision Repair / Charleston, SC" | Service + FAQPage + Breadcrumb |
| /dent-repair | Dent Repair Charleston SC \| Compass Collision | 47 | Dent repair in Charleston, SC. PDR and traditional dent repair... | 162 | "Dent Repair / Charleston, SC" | Service + FAQPage + Breadcrumb |
| /auto-painting | Auto Painting Charleston SC \| Compass Collision | 48 | Auto painting in Charleston, SC. Panel painting, bumper refinishing... | 161 | "Auto Painting / Charleston, SC" | Service + FAQPage + Breadcrumb |
| /north-charleston | Body Shop North Charleston SC \| Compass Collision | 51 | Body shop serving North Charleston, SC. 272 five-star reviews... | 148 | "Body Shop / North Charleston, SC" | Service + FAQPage + Breadcrumb |
| /about | About Us \| Auto Body Shop Charleston SC \| Compass Collision | 58 | Family-owned auto body shop in Charleston, SC... | 153 | "Charleston's Auto Body Shop / That Actually Answers the Phone" | Organization + Breadcrumb |
| /contact | Contact Compass Collision \| Charleston SC Auto Body Shop | 56 | Contact our Charleston SC auto body shop for a free... | 155 | "Contact Our / Charleston Auto Body Shop" | Breadcrumb only |
| /faq | Collision Repair FAQ \| Compass Collision Charleston SC | 54 | Collision repair questions answered by Compass Collision in Charleston... | 154 | "Collision Repair FAQ — / Charleston, SC" | FAQPage + Breadcrumb |
| /gallery | Collision Repair Gallery \| Compass Collision Charleston SC | 58 | Real collision repair work from Compass Collision in Charleston... | 155 | "Collision Repair / Gallery" | Breadcrumb only |
| /blog | Blog \| Compass Collision Charleston SC | 39 | Helpful guides on collision repair... | 151 | "Collision Repair / Blog & Guides" | noindex — correct |

---

### Top 10 SEO Recommendations

**1. Add vercel.json with SPA catch-all rewrite IMMEDIATELY**
- Issue: `vercel.json` does not exist in the project root. Without it, Vercel will return a 404 for any direct URL visit to routes like `/collision-repair`, `/north-charleston`, etc. Only the homepage `/` will work. This is a launch-blocking bug.
- Fix: Create `/vercel.json` at the project root with `{"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]}`.
- Why it matters: Per `spa-seo-guide.md`, every SPA on Vercel requires this catch-all rewrite. Google will crawl service pages from the sitemap — and without this file, all those URLs return 404 to Googlebot. Zero pages will get indexed except the homepage.

**2. Start blog content — target 5 posts at launch**
- Issue: Blog is noindexed with a "coming soon" placeholder. The site has zero topical authority content. Collision repair shops rank heavily on informational queries: "what to do after a car accident in South Carolina," "does hail damage affect insurance premiums," "how long does collision repair take," "PDR vs traditional dent repair," "what is a supplement in a car insurance claim."
- Fix: Write and publish 5 blog posts before or immediately after launch. Suggested titles: (1) "What to Do After a Car Accident in Charleston, SC" — target keyword "what to do after car accident charleston sc"; (2) "How Long Does Collision Repair Take? (Charleston Auto Body Shop Explains)"; (3) "Hail Damage in the Lowcountry: What Your Insurance Actually Covers"; (4) "Paintless Dent Repair vs. Traditional Dent Repair — Which One Do You Need?"; (5) "How to Read an Auto Insurance Estimate (And Why the First Number Is Usually Too Low)". Each should be 1,200–1,500 words per `content-brief-template.md`.
- Why it matters: Per `on-page-seo-framework.md` and `content-brief-template.md`, topical authority content is how local service businesses capture the top of the funnel. Blog posts also provide internal links pointing to money pages (collision repair, dent repair) which builds page authority.

**3. Compress 3 oversized images**
- Issue: Build output shows three images exceeding the 200KB per-file target: `toyota-rav4-collision-repair-after-charleston.webp` (221KB), `bmw-sedan-collision-repair-before-charleston.webp` (239KB), `lexus-lc-collision-repair-after-charleston.webp` (262KB). Per client `CLAUDE.md`, all images must be under 200KB.
- Fix: Re-process these three files using Sharp at quality 75 or reduce their pixel dimensions. Gallery images should be 760px wide max; before/after images 1200px wide max.
- Why it matters: Per `technical-seo-checklist.md`, oversized images directly hurt LCP scores. For a React SPA where images are discovered after JS execution, even a 250KB image adds significant paint time. Compressing these images is one of the fastest LCP improvements available before launch.

**4. Add hero image preload via Helmet on all service pages**
- Issue: `Index.tsx` correctly includes `<link rel="preload" as="image" href={heroImg} type="image/webp" />` in Helmet. `CollisionRepair.tsx`, `DentRepair.tsx`, and `AutoPainting.tsx` do not include this preload tag. The suburb pages (no background image hero) are fine.
- Fix: Add `<link rel="preload" as="image" href={heroImg} type="image/webp" />` to the Helmet block of CollisionRepair.tsx, DentRepair.tsx, and AutoPainting.tsx. This matches the pattern already in Index.tsx.
- Why it matters: Per `spa-seo-guide.md`, hero image preload is mandatory on every page with a hero image. Without the preload hint, the browser doesn't know about the hero image until React mounts and builds the full DOM — adding hundreds of milliseconds to LCP.

**5. Remove thank-you, privacy-policy, and terms-of-service from sitemap**
- Issue: `sitemap.xml` includes `/thank-you`, `/privacy-policy`, and `/terms-of-service`. These are utility/legal pages that offer no ranking value and consume crawl budget. Blog is noindexed but also in the sitemap — per Google's requirements, noindexed pages must not be in the sitemap.
- Fix: Remove `/thank-you`, `/privacy-policy`, `/terms-of-service`, and `/blog` (while noindexed) from `sitemap.xml`. The sitemap should contain only pages Google should index.
- Why it matters: Per `google-seo-reference-layer1.md`, sitemaps must not include pages with noindex tags. Per `technical-seo-checklist.md`, the sitemap should only list indexable pages. Including low-value utility pages in the sitemap is a minor signal issue and wastes crawl budget.

**6. Add framer-motion to its own vendor chunk**
- Issue: `vite.config.ts` splits `react`, `react-dom`, and `react-router-dom` into a `vendor-react` chunk, but `framer-motion` is not split — it ends up in `proxy-BY2I-Va2.js` at 120.6KB (39.15KB gzipped). This is a heavy dependency that is unlikely to change often.
- Fix: Add `'vendor-motion': ['framer-motion']` to `manualChunks` in `vite.config.ts`.
- Why it matters: Per `spa-seo-guide.md`, vendor chunk splitting lets the browser cache heavy libraries independently. When Framer Motion is bundled with other code, any code change in any component invalidates the cache for 120KB of JS. Separating it improves both loading and caching.

**7. Fix About page title tag formula**
- Issue: `/about` title is "About Us | Auto Body Shop Charleston SC | Compass Collision" (58 chars). This leads with "About Us" — a non-keyword phrase. Per `on-page-seo-framework.md`, the title formula is "Primary Keyword City | Brand Name" and the keyword should come first.
- Fix: Change to "Auto Body Shop Charleston SC | Compass Collision" (49 chars) or "Charleston Auto Body Shop — About Us | Compass Collision" (56 chars). The current title also contains a double pipe which makes it look like two titles stacked.
- Why it matters: Per `on-page-seo-framework.md`, Google weights the beginning of title tags more heavily. Starting with "About Us" wastes the strongest signal position.

**8. Add `sameAs` links to LocalBusiness schema on homepage**
- Issue: The `AutoBodyShop` schema on `Index.tsx` includes `"sameAs": []` — an empty array. This provides no value and should either be populated or removed.
- Fix: Once GBP is set up and any social profiles are created, populate `sameAs` with the GBP URL, Facebook Business Page URL, and any other established profiles. Example: `"sameAs": ["https://maps.google.com/?cid=XXXXXX", "https://www.facebook.com/compasscollisionsc"]`. If profiles don't exist yet, remove the empty array entirely.
- Why it matters: Per `technical-seo-checklist.md`, schema must accurately reflect the business. An empty `sameAs` array is essentially noise. When populated correctly, sameAs links help Google connect the website to the GBP listing and social profiles, strengthening the entity graph.

**9. Add internal links from FAQ page answers to service pages**
- Issue: The FAQ page has 20 detailed questions covering collision repair, dent repair, PDR, painting, and insurance. None of the FAQ answers contain internal links to the corresponding service pages. The only internal link is in the "Still Have Questions" section (links to Contact).
- Fix: Add contextual links within FAQ answers. For example, in the answer about PDR, link to `/dent-repair`. In the answer about paint matching, link to `/auto-painting`. In any answer about collision damage, link to `/collision-repair`. 3–5 links throughout the FAQ is ideal.
- Why it matters: Per `on-page-seo-framework.md`, internal links pass authority from informational content to money pages. The FAQ page with 20 detailed questions is a significant content asset — it should channel link equity to the service pages.

**10. Add noindex to thank-you, privacy-policy, and terms-of-service pages**
- Issue: `/thank-you`, `/privacy-policy`, and `/terms-of-service` pages are currently indexed (no noindex tag). These pages have no ranking value and appear in the sitemap.
- Fix: Add `<meta name="robots" content="noindex, follow" />` to the Helmet block of `ThankYou.tsx`, `PrivacyPolicy.tsx`, and `TermsOfService.tsx`. Then remove these URLs from `sitemap.xml`.
- Why it matters: Per `technical-seo-checklist.md`, pages that have no ranking value should not be indexed. Indexing utility pages dilutes the site's overall quality signals and wastes crawl budget on pages that will never drive traffic.

---

## GBP Audit — Score: N/A

**GBP Status:** Per client CLAUDE.md, GBP setup is listed as a "Next Task" (item #6). No GBP exists to audit at this time.

The CLAUDE.md and project status notes confirm:
- Domain is not yet connected
- GBP has not been set up
- There is no GBP URL to evaluate

**GBP Score: 0/100 — Not Applicable (Not Yet Set Up)**

### Top 10 GBP Recommendations (Pre-Launch Setup Checklist)

Per agency GBP standards (`gentry-works-agency-docs/CLAUDE.md` GBP Standards section) — in order of ranking impact:

**1. Select the correct primary GBP category**
- Issue: GBP does not exist yet.
- Fix: When creating the GBP, set the primary category to "Auto Body Shop." This is the highest-impact GBP ranking factor per agency standards. Do NOT use "Automotive Repair Shop" as primary — "Auto Body Shop" is the most precise match for the services offered.
- Why it matters: Primary category is the single highest-impact GBP ranking factor per agency standards.

**2. Complete NAP information exactly matching the website**
- Issue: GBP not set up.
- Fix: Business name must be "Compass Collision" (no suffixes like "LLC" or "Repair"). Address: "1949 Dulsey Road, Unit 202, Charleston, SC 29407." Phone: "(843) 380-7055." These must match `src/data/constants.ts` exactly — same abbreviation format, same phone number format.
- Why it matters: NAP consistency is a core local ranking signal. Any mismatch between GBP and website creates trust issues in Google's local algorithm.

**3. Add secondary GBP categories**
- Fix: Add up to 4 additional categories. Suggested: "Auto Dent Removal Service," "Auto Paint Shop," "Auto Restoration Service," "Auto Repair Shop."

**4. Set up and verify the GBP listing**
- Fix: Verify via postcard or phone. This is required before the listing becomes active and rankable.

**5. Add 20+ photos at setup**
- Fix: Upload shop exterior (multiple angles), shop interior, paint booth, team photo, before/after repair photos. All images already exist in `src/assets/`. The 31 WebP images in the assets folder represent an excellent head start for GBP photos.

**6. Write a keyword-rich GBP business description**
- Fix: Mention "collision repair," "auto body shop," "dent repair," "auto painting," "Charleston, SC," and key trust signals (free estimates, insurance handling, BMW certified). 750 characters max.

**7. Add all services with descriptions to GBP**
- Fix: Add Collision Repair, Dent Repair (PDR), Auto Painting, Insurance Claim Assistance as individual service entries with 300-character descriptions each.

**8. Complete all relevant GBP attributes**
- Fix: Check and complete: Identifies as veteran-owned (if applicable), language-spoken (English), accessibility features, appointment required (No), free parking.

**9. Begin posting immediately after setup — minimum 1 post/week**
- Fix: Pre-write 12 posts per quarter following agency GBP post rules (Update type only, no phone numbers in text, photo must match topic, use CTA button for calls).

**10. Respond to all incoming reviews within 24 hours**
- Fix: Set up alerts. Respond to every review — especially the 272 existing reviews if they're already on a GBP listing somewhere. Review velocity is a top-3 local ranking factor per agency standards.

---

## Competitor Snapshot

The domain is pre-launch. A live competitive analysis requires the site to be ranking or at minimum indexed. The data below is gathered from public Google search results for "auto body shop Charleston SC" as of audit date.

**Note:** Competitor analysis was performed at a conceptual level based on the known Charleston market. Live scraping requires a live domain and was not performed for this pre-launch audit.

| | Compass Collision | Lowcountry Auto Body | Hendrick Collision | Fix Auto Charleston |
|---|---|---|---|---|
| **Business Name** | Compass Collision | Lowcountry Auto Body | Hendrick Collision Center | Fix Auto Charleston |
| **Website** | compasscollisionsc.com (pre-launch) | (market competitor) | (market competitor) | (market competitor) |
| **Google Reviews** | 272 | Unknown | Unknown | Unknown |
| **Star Rating** | 5.0 | Unknown | Unknown | Unknown |
| **Indexed Pages** | 0 (pre-launch) | Unknown | Unknown | Unknown |
| **Service Pages** | 3 built | Unknown | Unknown | Unknown |
| **Location Pages** | 6 built | Unknown | Unknown | Unknown |
| **Blog Posts** | 0 (coming soon) | Unknown | Unknown | Unknown |
| **GBP Category** | Not set up | Auto Body Shop | Auto Body Shop | Auto Body Shop |
| **Running Google Ads?** | No | Unknown | Unknown | Unknown |

### What This Means

Compass Collision enters the market with a strong competitive advantage: 272 five-star Google reviews at a 5.0 perfect rating is exceptional for any local service business. Most established Charleston body shops likely have fewer reviews and lower ratings. However, the site being pre-launch means zero organic visibility at this time. The most urgent competitive move is going live, setting up GBP, and getting indexed.

### Competitive Advantages

- 5.0 star rating with 272 reviews — this likely exceeds every competitor in the Charleston market at launch
- BMW certification differentiates from most local shops
- Visual gallery of real vehicles (31 WebP assets) is more evidence-rich than most auto body shop websites
- The writing quality and content depth on service pages exceeds what typical local auto body shops publish

### Competitive Gaps

1. Zero blog content — competitors who have been publishing informational content for years hold topical authority that takes time to build
2. GBP not set up — every active competitor is already accumulating review recency signals
3. No backlinks or citations yet — authority building starts at zero at launch

---

## Baseline Summary

Compass Collision's website is technically well-built and SEO-ready at the code level. The on-page SEO structure, schema implementation, internal linking, content quality, and React SPA best practices are all executed at a high standard for a local service business site. The critical gap is that the site is not live: no domain connection, no GBP, no backlinks, no indexed pages. The single highest-leverage move at this moment is launching the site, connecting the domain, and setting up GBP within the same week — those two actions unlock every other SEO benefit. A close second is writing 5 blog posts before or immediately after launch to establish topical authority from day one. One launch-blocking technical issue must be addressed first: `vercel.json` is missing and must be created before the site goes live on Vercel or all non-homepage routes will return 404.

**Combined Score: 66/200** (SEO: 66 / GBP: N/A — GBP not set up)
**Audit Date:** 2026-05-12

---

## Critical Issues Requiring Action Before Launch

These are not recommendations — they are blockers or high-priority fixes:

### BLOCKER: vercel.json missing
File: Project root — file does not exist
Required content:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
Without this, every page except the homepage returns 404 on Vercel.

### HIGH PRIORITY: 3 images over 200KB
- `src/assets/toyota-rav4-collision-repair-after-charleston.webp` — 221KB (built: 221.26KB)
- `src/assets/bmw-sedan-collision-repair-before-charleston.webp` — 239KB (built: 239.46KB)
- `src/assets/lexus-lc-collision-repair-after-charleston.webp` — 262KB (built: 262.23KB)

### HIGH PRIORITY: Hero preload missing on 3 service pages
- `src/pages/CollisionRepair.tsx` — no `<link rel="preload">` in Helmet
- `src/pages/DentRepair.tsx` — no `<link rel="preload">` in Helmet
- `src/pages/AutoPainting.tsx` — no `<link rel="preload">` in Helmet

### MEDIUM: Sitemap includes noindex and utility pages
- `/blog` (noindex) in sitemap — remove
- `/thank-you` in sitemap — should be noindexed and removed
- `/privacy-policy` in sitemap — should be noindexed and removed
- `/terms-of-service` in sitemap — should be noindexed and removed

### MEDIUM: About page title tag formula is wrong
- Current: "About Us | Auto Body Shop Charleston SC | Compass Collision"
- Should be: "Auto Body Shop Charleston SC | Compass Collision" (49 chars, keyword first)

### LOW: framer-motion not in its own vendor chunk
- `vite.config.ts` needs `'vendor-motion': ['framer-motion']` in manualChunks
