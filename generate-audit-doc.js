// generate-audit-doc.js
// Run with: node generate-audit-doc.js compass-collision-seo-audit-2026-05-12.md compass-collision-seo-audit-2026-05-12.docx

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak
} = require('docx');
const fs = require('fs');

// ── COLORS ──────────────────────────────────────────────────────────────────
const NAVY        = '1F3864';
const BLUE        = '2E75B6';
const LIGHT_BLUE  = 'EBF3FB';
const GREEN_FILL  = 'E2EFDA';
const GREEN_TEXT  = '375623';
const AMBER_FILL  = 'FFF2CC';
const AMBER_TEXT  = '7B5700';
const RED_FILL    = 'FFC7CE';
const RED_TEXT    = '9C0006';
const WHITE       = 'FFFFFF';
const DARK_TEXT   = '1A1A1A';
const MUTED       = '595959';

// ── PAGE SETUP ───────────────────────────────────────────────────────────────
const PAGE_W      = 12240; // 8.5"
const PAGE_H      = 15840; // 11"
const MARGIN      = 1440;  // 1"
const CONTENT_W   = PAGE_W - (MARGIN * 2); // 9360

// ── HELPERS ──────────────────────────────────────────────────────────────────
function scoreColor(score, max) {
  const pct = max > 0 ? (score / max) * 100 : 0;
  if (pct >= 80) return { fill: GREEN_FILL, color: GREEN_TEXT };
  if (pct >= 60) return { fill: AMBER_FILL, color: AMBER_TEXT };
  return { fill: RED_FILL, color: RED_TEXT };
}

function gradeColor(grade) {
  if (grade === 'A') return { fill: GREEN_FILL, color: GREEN_TEXT };
  if (grade === 'B' || grade === 'C') return { fill: AMBER_FILL, color: AMBER_TEXT };
  return { fill: RED_FILL, color: RED_TEXT };
}

const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
const allThinBorders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };
const navyBorderLeft = { style: BorderStyle.SINGLE, size: 12, color: NAVY };

function shading(fill) {
  return { fill, type: ShadingType.CLEAR, color: 'auto' };
}

function headerCell(text, widths) {
  return new TableCell({
    children: [new Paragraph({
      children: [new TextRun({ text, bold: true, color: WHITE, size: 20 })],
      alignment: AlignmentType.LEFT,
    })],
    shading: shading(BLUE),
    borders: allThinBorders,
    width: widths ? { size: widths, type: WidthType.DXA } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
  });
}

function dataCell(text, fillColor, textColor, bold = false, alignment = AlignmentType.LEFT) {
  return new TableCell({
    children: [new Paragraph({
      children: [new TextRun({ text: String(text), color: textColor || DARK_TEXT, bold, size: 20 })],
      alignment,
    })],
    shading: fillColor ? shading(fillColor) : undefined,
    borders: allThinBorders,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
  });
}

function sectionHeading(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 32, color: NAVY })],
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: NAVY } },
  });
}

function subHeading(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 26, color: NAVY })],
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 120 },
  });
}

function bodyPara(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, size: 22, color: opts.color || DARK_TEXT, bold: opts.bold || false })],
    spacing: { after: 120 },
  });
}

function scoreBanner(label, score, max, grade) {
  const gc = gradeColor(grade);
  const displayText = `${label}: ${score} / ${max}   |   Grade: ${grade}`;
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    rows: [new TableRow({
      children: [new TableCell({
        children: [new Paragraph({
          children: [new TextRun({ text: displayText, bold: true, size: 28, color: gc.color })],
          alignment: AlignmentType.CENTER,
        })],
        shading: shading(gc.fill),
        borders: allThinBorders,
        margins: { top: 120, bottom: 120, left: 200, right: 200 },
        columnSpan: 1,
      })],
    })],
  });
}

function calloutBox(text) {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    rows: [new TableRow({
      children: [new TableCell({
        children: [new Paragraph({
          children: [new TextRun({ text, size: 22, color: DARK_TEXT })],
          spacing: { after: 80 },
        })],
        shading: shading(LIGHT_BLUE),
        borders: {
          top: thinBorder,
          bottom: thinBorder,
          right: thinBorder,
          left: { style: BorderStyle.SINGLE, size: 18, color: NAVY },
        },
        margins: { top: 100, bottom: 100, left: 160, right: 160 },
      })],
    })],
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

// ── AUDIT DATA ───────────────────────────────────────────────────────────────
const SEO_SCORE = 66;
const SEO_MAX   = 100;
const SEO_GRADE = 'D';
const GBP_SCORE = 'N/A';
const COMBINED  = '66/200';
const AUDIT_DATE = '2026-05-12';

const SEO_SUBCATEGORIES = [
  { name: 'Title Tags & Meta Descriptions',       max: 10, score: 8,  notes: 'Titles unique, well-formed, keyword-first. About page title leads with "About Us" — suboptimal. Meta descriptions all unique, within length targets.' },
  { name: 'H1 and Heading Structure',             max: 8,  score: 7,  notes: 'One H1 per page on every page. All H1s contain primary keyword + city. About page H1 splits across two visual lines — second line is not keyword-relevant.' },
  { name: 'URL Structure',                        max: 5,  score: 5,  notes: 'All URLs clean, lowercase, hyphenated, keyword-relevant. Full marks.' },
  { name: 'Dedicated Service Pages',              max: 12, score: 10, notes: '3 service pages + 6 suburb pages — all built. Blog is noindexed "coming soon." thank-you, privacy-policy, and terms pages indexed when they should not be.' },
  { name: 'Content Quality & Local Keyword Relevance', max: 12, score: 10, notes: 'Content is locally specific, authentic, conversational. Specific trust signals throughout. Reading level appropriate. Writing quality is above agency standard.' },
  { name: 'Internal Linking',                     max: 5,  score: 4,  notes: 'Service pages link to suburb pages. AutoPainting and About cross-link services inline. Gaps: homepage does not link to About or FAQ; FAQ answers contain no service page links.' },
  { name: 'Schema Markup (LocalBusiness, FAQ)',   max: 8,  score: 6,  notes: 'AutoBodyShop schema on homepage. FAQPage on homepage + service pages. Service schema on service pages. BreadcrumbList on all interior pages. Gaps: sameAs is empty array; suburb Service schema missing description field.' },
  { name: 'Core Web Vitals / Page Speed',         max: 8,  score: 5,  notes: '3 images over 200KB (221, 239, 262KB). Hero preload missing on 3 service pages. framer-motion not in own vendor chunk. GA4 + 3rd party scripts correctly deferred. WebP images throughout.' },
  { name: 'Technical SEO (sitemap, GSC, GA4, HTTPS)', max: 10, score: 6, notes: 'vercel.json MISSING — launch blocker. Sitemap exists and is well-formed but includes noindexed blog and utility pages. GA4 + Clarity installed and deferred. GSC not yet set up (domain not live).' },
  { name: 'Backlinks & Local Directory Citations', max: 12, score: 2, notes: 'Site is pre-launch. No external authority established. Score reflects pre-launch state.' },
  { name: 'Blog / Topical Authority Content',     max: 10, score: 3,  notes: 'Blog is noindexed with zero published posts. No informational content to capture top-of-funnel traffic.' },
];

const ON_PAGE_DATA = [
  { page: 'Homepage (/)',         title: 'Auto Body Shop Charleston SC | Compass Collision',         titleLen: 49, desc: 'Charleston\'s trusted auto body shop. 272 five-star reviews...', descLen: 152, h1: 'Auto Body Shop in Charleston, SC.', schema: 'AutoBodyShop + FAQPage' },
  { page: '/collision-repair',    title: 'Collision Repair Charleston SC | Compass Collision',        titleLen: 51, desc: 'Collision repair in Charleston, SC. 272 five-star reviews...', descLen: 149, h1: 'Collision Repair / Charleston, SC', schema: 'Service + FAQPage + Breadcrumb' },
  { page: '/dent-repair',         title: 'Dent Repair Charleston SC | Compass Collision',             titleLen: 47, desc: 'Dent repair in Charleston, SC. PDR and traditional dent repair...', descLen: 162, h1: 'Dent Repair / Charleston, SC', schema: 'Service + FAQPage + Breadcrumb' },
  { page: '/auto-painting',       title: 'Auto Painting Charleston SC | Compass Collision',           titleLen: 48, desc: 'Auto painting in Charleston, SC. Panel painting...', descLen: 161, h1: 'Auto Painting / Charleston, SC', schema: 'Service + FAQPage + Breadcrumb' },
  { page: '/north-charleston',    title: 'Body Shop North Charleston SC | Compass Collision',         titleLen: 51, desc: 'Body shop serving North Charleston, SC...', descLen: 148, h1: 'Body Shop / North Charleston, SC', schema: 'Service + FAQPage + Breadcrumb' },
  { page: '/about',               title: 'About Us | Auto Body Shop Charleston SC | Compass Collision', titleLen: 58, desc: 'Family-owned auto body shop in Charleston, SC...', descLen: 153, h1: 'Charleston\'s Auto Body Shop...', schema: 'Organization + Breadcrumb' },
  { page: '/faq',                 title: 'Collision Repair FAQ | Compass Collision Charleston SC',    titleLen: 54, desc: 'Collision repair questions answered by Compass Collision...', descLen: 154, h1: 'Collision Repair FAQ — Charleston, SC', schema: 'FAQPage + Breadcrumb' },
  { page: '/gallery',             title: 'Collision Repair Gallery | Compass Collision Charleston SC', titleLen: 58, desc: 'Real collision repair work from Compass Collision...', descLen: 155, h1: 'Collision Repair Gallery', schema: 'Breadcrumb only' },
  { page: '/contact',             title: 'Contact Compass Collision | Charleston SC Auto Body Shop',  titleLen: 56, desc: 'Contact our Charleston SC auto body shop...', descLen: 155, h1: 'Contact Our Charleston Auto Body Shop', schema: 'Breadcrumb only' },
  { page: '/blog',                title: 'Blog | Compass Collision Charleston SC',                    titleLen: 39, desc: 'Helpful guides on collision repair...', descLen: 151, h1: 'Collision Repair Blog & Guides', schema: 'noindex' },
];

const SEO_RECS = [
  {
    title: '1. Add vercel.json — LAUNCH BLOCKER',
    issue: 'vercel.json does not exist. Without it, Vercel returns 404 for every page except the homepage when visitors navigate directly to any route.',
    fix: 'Create /vercel.json at project root with: {"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]}',
    why: 'spa-seo-guide.md: Every SPA on Vercel requires the catch-all rewrite. Google crawls service pages from the sitemap — without vercel.json, all those URLs return 404 to Googlebot.',
  },
  {
    title: '2. Publish 5 blog posts at launch',
    issue: 'Blog is noindexed with zero published posts. No topical authority content exists to capture informational queries.',
    fix: 'Write 5 posts: (1) What to Do After a Car Accident in Charleston SC, (2) How Long Does Collision Repair Take, (3) Hail Damage in the Lowcountry, (4) PDR vs Traditional Dent Repair, (5) How to Read an Auto Insurance Estimate. 1,200–1,500 words each.',
    why: 'content-brief-template.md: Topical authority content captures top-of-funnel traffic and passes authority to money pages via internal links. Without a blog, the site only targets transactional keywords.',
  },
  {
    title: '3. Compress 3 oversized images',
    issue: 'toyota-rav4-after (221KB), bmw-sedan-before (239KB), lexus-lc-after (262KB) all exceed the 200KB limit per client CLAUDE.md.',
    fix: 'Re-process these 3 files using Sharp at quality 75 or reduce dimensions. Gallery images: 760px wide max. Before/after images: 1200px wide max.',
    why: 'technical-seo-checklist.md: Oversized images directly hurt LCP. For a React SPA, images are discovered after JS execution — compression is one of the fastest LCP improvements available.',
  },
  {
    title: '4. Add hero preload to 3 service pages',
    issue: 'CollisionRepair.tsx, DentRepair.tsx, and AutoPainting.tsx are missing <link rel="preload" as="image"> in their Helmet blocks. Index.tsx correctly includes this.',
    fix: 'Add <link rel="preload" as="image" href={heroImg} type="image/webp" /> to the Helmet block of all three service pages.',
    why: 'spa-seo-guide.md: Hero image preload is mandatory on every page with a hero image. Without it, the browser does not discover the hero image until React builds the full DOM — adding hundreds of ms to LCP.',
  },
  {
    title: '5. Remove utility pages from sitemap + noindex them',
    issue: '/thank-you, /privacy-policy, /terms-of-service are indexed and in the sitemap. /blog is noindexed but also in the sitemap — noindexed pages must not be in the sitemap per Google\'s spec.',
    fix: 'Add noindex meta tag to ThankYou.tsx, PrivacyPolicy.tsx, TermsOfService.tsx. Remove these 4 URLs from sitemap.xml.',
    why: 'google-seo-reference-layer1.md: Sitemaps must not include pages with noindex tags. technical-seo-checklist.md: Only indexable, ranking-worthy pages belong in the sitemap.',
  },
  {
    title: '6. Add framer-motion vendor chunk',
    issue: 'framer-motion is not split into its own chunk — included in proxy-BY2I-Va2.js at 120.6KB (39.15KB gzipped). Any code change invalidates this large cache.',
    fix: 'Add \'vendor-motion\': [\'framer-motion\'] to manualChunks in vite.config.ts.',
    why: 'spa-seo-guide.md: Vendor chunk splitting lets the browser cache heavy libraries independently. Framer Motion is a stable dependency that should cache long-term.',
  },
  {
    title: '7. Fix About page title tag formula',
    issue: 'Title is "About Us | Auto Body Shop Charleston SC | Compass Collision" — leads with "About Us" instead of the primary keyword.',
    fix: 'Change to "Auto Body Shop Charleston SC | Compass Collision" (49 chars) — keyword first, brand last, under 60 chars.',
    why: 'on-page-seo-framework.md: Google weights the beginning of title tags more heavily. Leading with a non-keyword phrase wastes the strongest signal position.',
  },
  {
    title: '8. Populate sameAs in LocalBusiness schema',
    issue: 'The AutoBodyShop schema on Index.tsx has "sameAs": [] — an empty array that provides no value.',
    fix: 'After GBP and social profiles are set up, populate sameAs with the GBP URL and any business profile URLs. Until then, remove the empty array.',
    why: 'technical-seo-checklist.md: Schema must accurately reflect the business. Populated sameAs links help Google connect the website to the GBP and social profiles.',
  },
  {
    title: '9. Add service page links within FAQ answers',
    issue: 'FAQ page has 20 detailed answers covering collision, dent, paint, and insurance. None of the answers contain internal links to service pages.',
    fix: 'Add contextual links in 3–5 FAQ answers: PDR answer → /dent-repair; paint matching answer → /auto-painting; collision damage answers → /collision-repair.',
    why: 'on-page-seo-framework.md: Internal links pass authority from informational content to money pages. The FAQ page is a significant content asset that should direct link equity to service pages.',
  },
  {
    title: '10. Add internal links from homepage to About and FAQ',
    issue: 'The homepage does not link to the About page or FAQ page. These are content pages with trust and topical signals that should receive at least one internal link each.',
    fix: 'Add links in the existing homepage sections: link to /about from the "Why Charleston Trusts Us" section, and link to /faq from the FAQ section (already has a "View All FAQs" link — confirm it\'s present).',
    why: 'on-page-seo-framework.md: Every page on the site should have at least one internal link pointing to it (no orphan pages). The FAQ link already exists in Index.tsx — verify it is visible.',
  },
];

const GBP_NOTE = 'GBP NOT YET SET UP — Score: N/A. See Top 10 GBP Recommendations below for pre-launch setup checklist. Primary category should be "Auto Body Shop." Set up GBP before or immediately at domain launch to begin accumulating review recency signals.';

const GBP_RECS = [
  { title: '1. Create GBP and set primary category to "Auto Body Shop"', issue: 'GBP does not exist.', fix: 'Create GBP listing at business.google.com. Set primary category to "Auto Body Shop" — not "Auto Repair Shop."', why: 'Agency standards: Primary category is the single highest-impact GBP ranking factor.' },
  { title: '2. Complete NAP to match website exactly', issue: 'No GBP exists yet.', fix: 'Name: "Compass Collision." Address: "1949 Dulsey Road, Unit 202, Charleston, SC 29407." Phone: "(843) 380-7055." Must match constants.ts exactly.', why: 'NAP consistency is a core local ranking signal — any mismatch creates trust issues.' },
  { title: '3. Add up to 4 secondary categories', issue: 'N/A — GBP not created.', fix: 'Add: "Auto Dent Removal Service," "Auto Paint Shop," "Auto Restoration Service," "Auto Repair Shop."', why: 'Secondary categories expand the keyword footprint of the GBP listing.' },
  { title: '4. Verify the GBP listing', issue: 'N/A.', fix: 'Complete postcard or phone verification. Required before the listing is active and rankable.', why: 'Unverified listings do not appear in local pack results.' },
  { title: '5. Upload 20+ photos at setup', issue: 'N/A.', fix: 'Upload from src/assets/: shop exterior, interior, paint booth, team, before/after photos. 31 WebP images already exist in the project.', why: 'Photo quantity is a GBP engagement signal and builds trust with potential customers.' },
  { title: '6. Write keyword-rich business description', issue: 'N/A.', fix: 'Include: "collision repair," "auto body shop," "dent repair," "auto painting," "Charleston, SC," "BMW certified," "free estimates." 750 characters max.', why: 'GBP description provides keyword context for the listing.' },
  { title: '7. Add all services with descriptions', issue: 'N/A.', fix: 'Add: Collision Repair, Dent Repair (PDR), Auto Painting, Insurance Claim Assistance — each with a 300-character description.', why: 'Services section expands keyword coverage and signals relevance to Google.' },
  { title: '8. Complete all relevant GBP attributes', issue: 'N/A.', fix: 'Complete: free parking, appointment required (No), accessibility features, languages spoken.', why: 'Completed attributes signal a fully managed, trustworthy listing.' },
  { title: '9. Begin posting — 1 post/week minimum', issue: 'N/A.', fix: 'Use "Update" post type only. No phone numbers in post text (use CTA button). Photo must match post topic. Pre-write 12 posts per quarter.', why: 'Per agency GBP standards. Post frequency signals an active, managed listing.' },
  { title: '10. Respond to all reviews within 24 hours', issue: 'N/A.', fix: 'Set up Google alerts. Respond to every review — positive and negative. Review velocity is a top-3 local ranking factor.', why: 'Review recency and owner response rate are strong local ranking signals per agency GBP standards.' },
];

// ── BUILD DOCUMENT ────────────────────────────────────────────────────────────

function buildDoc() {
  const children = [];

  // ── COVER PAGE ──────────────────────────────────────────────────────────────
  children.push(
    new Paragraph({
      children: [],
      spacing: { before: 2880, after: 200 },
    }),
    new Paragraph({
      children: [new TextRun({ text: 'Compass Collision', bold: true, size: 72, color: WHITE })],
      alignment: AlignmentType.CENTER,
      shading: shading(NAVY),
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: 'SEO & GBP BASELINE AUDIT', size: 28, color: 'D0E4F7', allCaps: true })],
      alignment: AlignmentType.CENTER,
      shading: shading(NAVY),
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: `Audit Date: ${AUDIT_DATE}`, size: 24, color: 'D0E4F7' })],
      alignment: AlignmentType.CENTER,
      shading: shading(NAVY),
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: 'https://compasscollisionsc.com', size: 24, color: 'D0E4F7' })],
      alignment: AlignmentType.CENTER,
      shading: shading(NAVY),
      spacing: { after: 240 },
    }),
    new Paragraph({
      children: [new TextRun({ text: '─────────────────────────────────────────', color: '3A6A9E', size: 24 })],
      alignment: AlignmentType.CENTER,
      shading: shading(NAVY),
      spacing: { after: 120 },
    }),
    new Paragraph({
      children: [new TextRun({ text: 'Prepared by GentryWorks', size: 22, color: '8FBDE8' })],
      alignment: AlignmentType.CENTER,
      shading: shading(NAVY),
      spacing: { after: 5760 },
    }),
    pageBreak(),
  );

  // ── EXECUTIVE SUMMARY ───────────────────────────────────────────────────────
  children.push(sectionHeading('Executive Summary'));

  // Score summary table
  const seoGC = gradeColor(SEO_GRADE);
  children.push(
    new Table({
      width: { size: CONTENT_W, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [
          headerCell('Category', 4680),
          headerCell('Score', 4680),
        ]}),
        new TableRow({ children: [
          dataCell('SEO Score', LIGHT_BLUE, DARK_TEXT, true),
          dataCell(`${SEO_SCORE} / ${SEO_MAX}  —  Grade: ${SEO_GRADE}`, seoGC.fill, seoGC.color, true),
        ]}),
        new TableRow({ children: [
          dataCell('GBP Score', WHITE, DARK_TEXT, true),
          dataCell('N/A — GBP Not Yet Set Up', AMBER_FILL, AMBER_TEXT, true),
        ]}),
        new TableRow({ children: [
          dataCell('Combined Score', LIGHT_BLUE, DARK_TEXT, true),
          dataCell(COMBINED, LIGHT_BLUE, DARK_TEXT, true),
        ]}),
        new TableRow({ children: [
          dataCell('Audit Date', WHITE, DARK_TEXT, true),
          dataCell(AUDIT_DATE, WHITE, DARK_TEXT),
        ]}),
      ],
    }),
    new Paragraph({ spacing: { after: 200 } }),
    bodyPara(
      "Compass Collision's website is technically well-built and SEO-ready at the code level. The on-page SEO structure, schema implementation, content quality, and React SPA best practices are executed at a high standard for a local service business. The critical gap is that the site is not yet live: no domain connection, no GBP, no backlinks, no indexed pages. The single highest-leverage move is launching the site, connecting the domain, and setting up GBP within the same week."
    ),
    new Paragraph({ spacing: { after: 160 } }),
    calloutBox(
      'Highest-leverage first move: Create vercel.json (launch blocker — without it, all routes except / return 404 on Vercel), then connect the domain and set up GBP within the same week.'
    ),
    pageBreak(),
  );

  // ── SEO AUDIT ───────────────────────────────────────────────────────────────
  children.push(sectionHeading('SEO Audit'));
  children.push(scoreBanner('SEO Score', SEO_SCORE, SEO_MAX, SEO_GRADE));
  children.push(new Paragraph({ spacing: { after: 200 } }));

  // Scoring table
  const scoringRows = [
    new TableRow({ children: [
      headerCell('Subcategory', 4000),
      headerCell('Max', 1200),
      headerCell('Score', 1200),
      headerCell('Notes', 2960),
    ]}),
    ...SEO_SUBCATEGORIES.map((row, i) => {
      const sc = scoreColor(row.score, row.max);
      const bg = i % 2 === 0 ? WHITE : LIGHT_BLUE;
      return new TableRow({ children: [
        dataCell(row.name, bg, DARK_TEXT),
        dataCell(String(row.max), bg, DARK_TEXT, false, AlignmentType.CENTER),
        dataCell(String(row.score), sc.fill, sc.color, true, AlignmentType.CENTER),
        dataCell(row.notes, bg, MUTED),
      ]});
    }),
    new TableRow({ children: [
      dataCell('TOTAL', NAVY, WHITE, true),
      dataCell('100', NAVY, WHITE, true, AlignmentType.CENTER),
      dataCell(String(SEO_SCORE), seoGC.fill, seoGC.color, true, AlignmentType.CENTER),
      dataCell('', NAVY, WHITE),
    ]}),
  ];
  children.push(
    new Table({
      width: { size: CONTENT_W, type: WidthType.DXA },
      rows: scoringRows,
    }),
    new Paragraph({ spacing: { after: 300 } }),
  );

  // On-page data
  children.push(subHeading('On-Page Data Found'));
  const opRows = [
    new TableRow({ children: [
      headerCell('Page', 1600),
      headerCell('Title Tag', 2400),
      headerCell('Chars', 600),
      headerCell('H1', 2000),
      headerCell('Schema', 2760),
    ]}),
    ...ON_PAGE_DATA.map((row, i) => {
      const bg = i % 2 === 0 ? WHITE : LIGHT_BLUE;
      const titleOk = row.titleLen <= 60;
      return new TableRow({ children: [
        dataCell(row.page, bg, DARK_TEXT),
        dataCell(row.title, bg, DARK_TEXT),
        dataCell(String(row.titleLen), titleOk ? GREEN_FILL : RED_FILL, titleOk ? GREEN_TEXT : RED_TEXT, true, AlignmentType.CENTER),
        dataCell(row.h1, bg, DARK_TEXT),
        dataCell(row.schema, bg, MUTED),
      ]});
    }),
  ];
  children.push(
    new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, rows: opRows }),
    new Paragraph({ spacing: { after: 300 } }),
  );

  // SEO Recommendations
  children.push(subHeading('Top 10 SEO Recommendations'));
  SEO_RECS.forEach(rec => {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: rec.title, bold: true, size: 24, color: NAVY })],
        spacing: { before: 240, after: 80 },
      }),
      new Table({
        width: { size: CONTENT_W, type: WidthType.DXA },
        rows: [
          new TableRow({ children: [
            dataCell('Issue', LIGHT_BLUE, NAVY, true, AlignmentType.LEFT),
            dataCell(rec.issue, WHITE, DARK_TEXT),
          ]}),
          new TableRow({ children: [
            dataCell('Fix', LIGHT_BLUE, NAVY, true, AlignmentType.LEFT),
            dataCell(rec.fix, WHITE, DARK_TEXT),
          ]}),
          new TableRow({ children: [
            dataCell('Why it matters', LIGHT_BLUE, NAVY, true, AlignmentType.LEFT),
            dataCell(rec.why, WHITE, MUTED),
          ]}),
        ],
      }),
      new Paragraph({ spacing: { after: 200 } }),
    );
  });
  children.push(pageBreak());

  // ── GBP AUDIT ────────────────────────────────────────────────────────────────
  children.push(sectionHeading('Google Business Profile Audit'));
  children.push(
    new Table({
      width: { size: CONTENT_W, type: WidthType.DXA },
      rows: [new TableRow({
        children: [new TableCell({
          children: [new Paragraph({
            children: [new TextRun({ text: 'GBP Score: N/A  |  Grade: N/A — GBP Not Yet Set Up', bold: true, size: 28, color: AMBER_TEXT })],
            alignment: AlignmentType.CENTER,
          })],
          shading: shading(AMBER_FILL),
          borders: allThinBorders,
          margins: { top: 120, bottom: 120, left: 200, right: 200 },
        })],
      })],
    }),
    new Paragraph({ spacing: { after: 200 } }),
    calloutBox(
      'Note: Per 2026 BrightLocal Local Search Ranking Factors data, the following have low or no impact on Local Pack rankings and are not included as top recommendations: geo-tagged photos, keywords in owner review responses, keywords in GBP description, post quantity, and Q&A quantity.'
    ),
    new Paragraph({ spacing: { after: 200 } }),
    bodyPara(GBP_NOTE),
    new Paragraph({ spacing: { after: 200 } }),
  );

  children.push(subHeading('Top 10 GBP Recommendations (Pre-Launch Setup)'));
  GBP_RECS.forEach(rec => {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: rec.title, bold: true, size: 24, color: NAVY })],
        spacing: { before: 240, after: 80 },
      }),
      new Table({
        width: { size: CONTENT_W, type: WidthType.DXA },
        rows: [
          new TableRow({ children: [
            dataCell('Issue', LIGHT_BLUE, NAVY, true),
            dataCell(rec.issue, WHITE, DARK_TEXT),
          ]}),
          new TableRow({ children: [
            dataCell('Fix', LIGHT_BLUE, NAVY, true),
            dataCell(rec.fix, WHITE, DARK_TEXT),
          ]}),
          new TableRow({ children: [
            dataCell('Why it matters', LIGHT_BLUE, NAVY, true),
            dataCell(rec.why, WHITE, MUTED),
          ]}),
        ],
      }),
      new Paragraph({ spacing: { after: 200 } }),
    );
  });
  children.push(pageBreak());

  // ── NEXT STEPS ───────────────────────────────────────────────────────────────
  children.push(sectionHeading('Recommended Next Steps'));
  children.push(bodyPara('The five highest-impact actions to take immediately, in order of priority:'));
  children.push(new Paragraph({ spacing: { after: 160 } }));

  const NEXT_STEPS = [
    { n: '1', action: 'Create vercel.json (launch blocker)', detail: 'Add {"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]} to project root. Required for Vercel SPA routing — without it, only the homepage works.' },
    { n: '2', action: 'Compress 3 oversized images, add hero preloads to service pages', detail: 'Compress toyota-rav4 (221KB), bmw-sedan (239KB), lexus-lc (262KB) to under 200KB. Add <link rel="preload"> for hero images in CollisionRepair, DentRepair, and AutoPainting Helmet blocks.' },
    { n: '3', action: 'Connect domain, verify HTTPS, set up GBP', detail: 'Connect compasscollisionsc.com to Vercel. Set up Google Business Profile with primary category "Auto Body Shop," complete NAP matching the website, and add all service photos. Verify GBP listing immediately.' },
    { n: '4', action: 'Set up GSC and submit sitemap (after removing utility pages)', detail: 'Remove /thank-you, /privacy-policy, /terms-of-service, and /blog from sitemap.xml first. Create GSC property for the canonical domain, verify it, and submit the cleaned sitemap.' },
    { n: '5', action: 'Write and publish 5 blog posts', detail: 'Publish before or immediately after launch: (1) What to Do After a Car Accident in Charleston SC, (2) How Long Does Collision Repair Take, (3) Hail Damage in the Lowcountry, (4) PDR vs Traditional Dent Repair, (5) How to Read an Auto Insurance Estimate.' },
  ];

  NEXT_STEPS.forEach(step => {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: `${step.n}. ${step.action}`, bold: true, size: 24, color: NAVY })],
        spacing: { before: 200, after: 80 },
      }),
      bodyPara(step.detail),
      new Paragraph({ spacing: { after: 80 } }),
    );
  });

  children.push(
    new Paragraph({ spacing: { after: 400 } }),
    bodyPara(
      'Compass Collision enters this market with a meaningful advantage: 272 five-star reviews at a perfect 5.0 rating is rare for any local auto body shop at launch. The website code quality is strong. The content is genuinely excellent. The gaps identified in this audit are all solvable — most within a week. Fixing the vercel.json blocker, getting the site live, and setting up GBP unlocks every other SEO benefit immediately.',
      { color: MUTED }
    ),
  );

  // ── ASSEMBLE ──────────────────────────────────────────────────────────────────
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          size: { width: PAGE_W, height: PAGE_H },
          margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
        },
      },
      children,
    }],
  });

  return doc;
}

// ── RUN ──────────────────────────────────────────────────────────────────────
const outPath = process.argv[3] || 'compass-collision-seo-audit-2026-05-12.docx';

Packer.toBuffer(buildDoc()).then(buffer => {
  fs.writeFileSync(outPath, buffer);
  console.log('Saved:', outPath);
}).catch(err => {
  console.error('Error generating docx:', err);
  process.exit(1);
});
