# KESHO Aesthetics — Developer Brief

> **For the developer:** This is a complete WordPress + Elementor Pro build for a UK aesthetics clinic. The strategy, design direction, content, and tracking infrastructure are already done — your job is execution.
>
> **Estimated effort:** 25-35 hours total. Can be split across multiple sessions.
>
> **Estimated cost (UK freelance dev rates):** £750-£1,750 at £30-50/hr.

---

## 1. Project Summary

| Field | Value |
|---|---|
| Client | KESHO Aesthetics |
| Domain | https://keshopro.com |
| Stack | WordPress + Elementor Pro + Hello Elementor theme + custom child theme |
| Hosting | Fasthosts (Plesk, Nginx, PHP 8.2) |
| Current state | Default WordPress install — "Praise The Sun" placeholder + "Hello world!" post |
| Target | Fully branded, conversion-focused, fully-indexable site with complete SEO infrastructure, GDPR-compliant analytics, and 6 cornerstone blog posts |

---

## 2. What's Already Done (Don't Redo)

All deliverables below are in the client's `/kesho/` folder. Use them — don't recreate.

| Asset | Location | What it is |
|---|---|---|
| Full design spec | `/docs/superpowers/specs/2026-05-31-kesho-website-design.md` | Brand direction, site architecture, page-by-page plan |
| Detailed implementation plan | `/docs/superpowers/plans/2026-05-31-kesho-website-implementation.md` | This file is the summary; the long plan has every Elementor section, every command |
| Child theme | `/kesho/theme/hello-elementor-kesho/` | style.css + functions.php — upload via Plesk |
| robots.txt | `/kesho/code-bundle/robots.txt` | Paste into Rank Math → Edit robots.txt |
| .htaccess hardening | `/kesho/code-bundle/htaccess-hardening.txt` | Append to .htaccess (after the WP block) |
| Page content drafts | `/kesho/code-bundle/page-content-drafts.md` | Every page's copy, headings, CTAs |
| Rank Math meta bundle | `/kesho/code-bundle/rank-math-meta-bundle.md` | All meta titles, descriptions, focus keywords |
| GTM container | `/kesho/code-bundle/gtm-container.json` | One-click import in GTM |
| GTM import instructions | `/kesho/code-bundle/gtm-import-instructions.md` | Step-by-step |
| Schema markup | `/kesho/code-bundle/schema-markup.md` | 11 JSON-LD blocks for Rank Math |
| 6 cornerstone blog posts | `/kesho/blog-drafts/*.md` | ~12,700 words, ready to publish |

---

## 3. Credentials & Access You'll Get from the Client

Before starting, ensure you have:

- [ ] WordPress admin login at `https://keshopro.com/wp-admin/`
- [ ] Plesk control panel access (Fasthosts dashboard)
- [ ] SSH / SFTP credentials (for child theme upload + .htaccess edit)
- [ ] Elementor Pro licence key (already purchased)
- [ ] Cloudflare account (or willingness to create one)
- [ ] Google account for: Google Search Console, GA4, GTM, Google Business Profile
- [ ] Meta Business account
- [ ] TikTok Ads Manager account
- [ ] Fresha account (for booking embed code)

### Client-supplied values to confirm before launch

The client will provide these. Where they appear in content as `__PLACEHOLDER__`, search-and-replace before publishing.

- [ ] Phone number (`__PHONE__`)
- [ ] Confirm email: `info@keshoaesthetics.co.uk`
- [ ] Practitioner surnames (Claire, Kyle, Dr Ryan Marni)
- [ ] GPhC registration number (Kyle)
- [ ] GMC registration number (Dr Ryan Marni)
- [ ] OfQual certification reference (Claire)
- [ ] Real opening hours per day
- [ ] Fresha embed code (`__FRESHA_EMBED_CODE__`)
- [ ] Polynucleotides 3-session price (currently TBD — flyer typo)
- [ ] Insurance provider name
- [ ] Real professional photos (team headshots + premises) — likely arriving separately

---

## 4. Deliverables

By end of engagement, the following must be live and verified:

- [ ] 17+ pages built and published per `page-content-drafts.md`
- [ ] 6 cornerstone blog posts published with featured images
- [ ] Global header + footer (Elementor Theme Builder)
- [ ] Reusable treatment page template + 5 individual treatment pages
- [ ] Blog single-post template + 404 template
- [ ] Rank Math configured, sitemap submitted to GSC + Bing
- [ ] All pages have unique meta titles, descriptions, schema
- [ ] GTM container imported and live with GA4, Meta Pixel, TikTok Pixel, Clarity
- [ ] Complianz cookie banner GDPR-compliant
- [ ] LiteSpeed/WP Rocket caching configured
- [ ] ShortPixel image optimisation enabled
- [ ] Cloudflare DNS + SSL configured
- [ ] Wordfence + UpdraftPlus + WP Mail SMTP configured
- [ ] Mobile Lighthouse Performance ≥ 90, SEO ≥ 95 on Home + treatment pages
- [ ] All forms tested end-to-end
- [ ] All schema validates with zero errors on Google Rich Results Test
- [ ] Cookie audit: no tracking before consent, all expected tags fire after consent

---

## 5. Phase 1 — Foundation (Day 1)

### 1.1. Backup current site
- [ ] Plesk → Backup Manager → Back Up (full) → Download

### 1.2. Set WordPress site identity (Settings → General)
- [ ] Site Title: `KESHO Aesthetics`
- [ ] Tagline: `Elevate Your Beauty`
- [ ] Site Language: English (United Kingdom)
- [ ] Timezone: London
- [ ] Date format: `F j, Y`
- [ ] Time format: `g:i a`
- [ ] Week starts on: Monday

### 1.3. Set permalinks
- [ ] Settings → Permalinks → Post name (`/%postname%/`) → Save

### 1.4. Delete default content
- [ ] Trash + permanently delete "Hello world!" post
- [ ] Trash + permanently delete "Sample Page"
- [ ] Delete default comment
- [ ] Rename "Uncategorized" category → "General"

### 1.5. WordPress hardening
- [ ] Generate fresh salts at https://api.wordpress.org/secret-key/1.1/salt/
- [ ] Replace in `wp-config.php`
- [ ] Set permissions: directories 755, files 644, wp-config.php 640
- [ ] Append `/kesho/code-bundle/htaccess-hardening.txt` to `.htaccess` (BEFORE the WordPress block)

### 1.6. Install Hello Elementor theme
- [ ] Appearance → Themes → Add New → "Hello Elementor" by Elementor Team → Install + Activate

### 1.7. Install Kesho child theme
- [ ] Upload `/kesho/theme/hello-elementor-kesho/` to `wp-content/themes/` via SFTP/Plesk
- [ ] Appearance → Themes → Activate "KESHO (Hello Elementor Child)"

### 1.8. Install + activate plugins
- [ ] Elementor (free) — install from repo
- [ ] Elementor Pro — upload `.zip` from client's Elementor account
- [ ] Activate Elementor Pro licence
- [ ] Rank Math SEO
- [ ] LiteSpeed Cache (if server is LSWS) OR WP Rocket
- [ ] ShortPixel Image Optimizer
- [ ] Wordfence Security
- [ ] UpdraftPlus
- [ ] Complianz
- [ ] Trustindex Reviews for Google
- [ ] WP Mail SMTP

### 1.9. UpdraftPlus → daily backups to Google Drive
- [ ] Configure schedule: Daily files + Daily database
- [ ] Connect Google Drive
- [ ] Run first manual backup → verify success

### 1.10. Wordfence basic hardening
- [ ] Enable Extended Firewall
- [ ] 2FA on admin role
- [ ] Lock out after 5 failed attempts / 5 min / 4-hour lockout
- [ ] Don't reveal valid usernames
- [ ] Schedule weekly scan

### 1.11. Cloudflare in front of site
- [ ] Add `keshopro.com` to Cloudflare (free plan)
- [ ] Update nameservers at Fasthosts → Cloudflare
- [ ] SSL/TLS → Full (Strict)
- [ ] Edge Certificates → Always Use HTTPS, HSTS (6 months), TLS 1.3
- [ ] Speed → minify JS/CSS/HTML, Brotli
- [ ] Page Rule: bypass cache for `*/wp-admin*` and `*/wp-login.php`

### 1.12. Caching plugin config
- [ ] If LiteSpeed Cache: enable page cache, exclude logged-in, defer JS, lazy-load images
- [ ] If WP Rocket: enable all defaults, file optimization, lazy load, preload

### 1.13. ShortPixel
- [ ] Connect API key
- [ ] Compression: Glossy
- [ ] Generate WebP via `<picture>` tag
- [ ] Resize images > 1920x1920 on upload
- [ ] Run bulk optimization

### 1.14. WP Mail SMTP
- [ ] Configure Brevo (or other SMTP) per `info@keshoaesthetics.co.uk`
- [ ] Test email → confirm inbox delivery

---

## 6. Phase 2 — Global Design System (Day 1-2)

### 2.1. Elementor Site Settings (brand tokens)
- [ ] Global Colors: Kesho Brown `#3d2e22`, Sand `#8a7060`, Body `#2e241c`, Beige `#e8d5c0`, Cream `#f5ede3`, Subtle `#f9f4ed`, White `#ffffff`
- [ ] Global Fonts: Cormorant Garamond (headings) + Inter (body)
- [ ] Button styles per spec
- [ ] Form field styles per spec
- [ ] Layout: container 1240px

### 2.2. Verify child theme CSS active
- [ ] View page source — confirm both `hello-elementor/style.css` and `hello-elementor-kesho/style.css` load
- [ ] Verify `:root` custom properties exist (`--kesho-brown`, etc.)

### 2.3. Build global header (Elementor Theme Builder)
- [ ] Templates → Theme Builder → Header → "Kesho Header"
- [ ] 3-column layout: logo (left), nav menu (centre), Book Consultation button (right)
- [ ] Sticky on scroll with blur effect (use sticky CSS from spec)
- [ ] Mobile: hamburger menu at tablet breakpoint
- [ ] Publish → Display Conditions: Entire Site
- [ ] Export `.json` → `/kesho/elementor-templates/header-kesho.json`

### 2.4. Logo + favicon
- [ ] Upload logo (140x400px PNG, transparent) → Customizer → Site Identity → Logo
- [ ] Upload favicon (512x512px PNG) → Site Icon

### 2.5. Create Primary navigation menu
- [ ] Appearance → Menus → New menu "Primary"
- [ ] Add custom links: Home, Treatments, About, Pricing, Blog, Contact
- [ ] Assign to "Primary" location

### 2.6. Build global footer
- [ ] Templates → Theme Builder → Footer → "Kesho Footer"
- [ ] 4-column section + divider + 2-column copyright row
- [ ] Background Kesho Brown, text Kesho Beige
- [ ] Publish → Entire Site
- [ ] Export `.json`

---

## 7. Phase 3 — Templates (Day 2)

### 3.1. Treatment page layout (saved template, not Single template)
- [ ] Templates → Saved Templates → Add New → Page → "Treatment Page Layout"
- [ ] Build all sections per `/kesho/code-bundle/page-content-drafts.md` section 9 (Anti-Wrinkle is the canonical template):
   - Hero
   - What it is
   - Who it's for
   - The Kesho approach (3-card)
   - Pricing table
   - What to expect timeline (4 steps)
   - Aftercare
   - FAQs (toggle/accordion)
   - Meet your practitioners
   - Related treatments
   - Final CTA
- [ ] Save + Export `.json`

### 3.2. Single Post template
- [ ] Theme Builder → Single Post → "Kesho Single Post"
- [ ] Hero with Post Title + Post Info + Featured Image
- [ ] Post Content widget within 760px container
- [ ] Related Posts (3, same category)
- [ ] Final CTA: "Considering this treatment? Book Consultation"
- [ ] Display Conditions: All Singular → All Posts

### 3.3. 404 template
- [ ] Theme Builder → Single → 404 → "Kesho 404"
- [ ] Centered: H1 "Page Not Found" + helpful links + Search form
- [ ] Display Conditions: 404 Page

---

## 8. Phase 4 — Core Pages (Day 2-3)

All page content is in `/kesho/code-bundle/page-content-drafts.md`. Meta values are in `/kesho/code-bundle/rank-math-meta-bundle.md`.

### 4.1. Home page
- [ ] Create Page "Home"
- [ ] Settings → Reading → Front page displays: A static page → Home
- [ ] Build per page-content-drafts.md section 1
- [ ] Rank Math meta from rank-math-meta-bundle.md
- [ ] Publish

### 4.2. About page
- [ ] Create Page "About" → slug `/about/`
- [ ] Build per page-content-drafts.md section 2
- [ ] Rank Math meta

### 4.3. Practitioner profiles (3 child pages of About)
- [ ] Page "Claire" → parent About → slug `/about/claire/`
- [ ] Page "Kyle" → parent About → slug `/about/kyle/`
- [ ] Page "Dr Ryan Marni" → parent About → slug `/about/dr-ryan-marni/`
- [ ] Each: hero, bio, qualifications, treatments administered, CTA
- [ ] Each: Person schema from schema-markup.md sections 2-4
- [ ] Each: Rank Math meta

### 4.4. Treatments hub
- [ ] Create Page "Treatments" → slug `/treatments/`
- [ ] Build per page-content-drafts.md section 4

### 4.5. Pricing
- [ ] Create Page "Pricing" → slug `/pricing/`
- [ ] Build per page-content-drafts.md section 5 (full price tables, anchor nav)

### 4.6. Book Consultation
- [ ] Create Page "Book" → slug `/book/`
- [ ] Embed Fresha widget in HTML widget (client provides embed code)

### 4.7. Contact
- [ ] Create Page "Contact" → slug `/contact/`
- [ ] NAP block + contact form + Google Maps embed
- [ ] Form submit → email + redirect to /thank-you/

### 4.8. Thank You
- [ ] Create Page "Thank You" → slug `/thank-you/`
- [ ] Rank Math: noindex, follow

### 4.9. Blog (posts archive)
- [ ] Create empty page "Blog" → slug `/blog/`
- [ ] Settings → Reading → Posts page: Blog

### 4.10. Legal pages
- [ ] Run Complianz wizard → generates Privacy Policy + Cookie Policy
- [ ] Create Terms page (use UK aesthetics-clinic template)
- [ ] All 3: noindex, follow
- [ ] Add to footer menu

---

## 9. Phase 5 — Treatment Pages (Day 3)

Each page uses the "Treatment Page Layout" template (Phase 3.1). Content per page-content-drafts.md sections 9-13.

### 5.1. Anti-Wrinkle (`/treatments/anti-wrinkle/`)
- [ ] Insert template
- [ ] Replace placeholders with anti-wrinkle copy
- [ ] Pricing table per spec (1 area £180 etc.)
- [ ] 6 FAQs (see drafts)
- [ ] MedicalProcedure schema from schema-markup.md section 5
- [ ] FAQPage schema from schema-markup.md section 10
- [ ] Rank Math meta

### 5.2. Lip Fillers (`/treatments/lip-fillers/`)
- [ ] Same pattern. Hero price: From £150
- [ ] Schema from section 6 of schema-markup.md

### 5.3. Dermal Fillers (`/treatments/dermal-fillers/`)
- [ ] Hero price: From £280
- [ ] Schema from section 7

### 5.4. Skin Boosters (`/treatments/skin-boosters/`)
- [ ] Hero price: From £150
- [ ] Schema from section 8

### 5.5. Microneedling (`/treatments/microneedling/`)
- [ ] Hero price: From £100
- [ ] Schema from section 9

---

## 10. Phase 6 — SEO Infrastructure (Day 4)

### 6.1. Rank Math setup wizard
- [ ] Connect Rank Math account
- [ ] Site Type: Business
- [ ] Business Type: MedicalBusiness (MedicalClinic)
- [ ] Company name, logo, default share image

### 6.2. Local SEO config
- [ ] Rank Math → Titles & Meta → Local SEO
- [ ] Full NAP, geo coordinates `51.6005, -0.1928`
- [ ] Business hours per day
- [ ] Opening hours specification: yes

### 6.3. robots.txt
- [ ] Rank Math → General → Edit robots.txt → paste from `/kesho/code-bundle/robots.txt`

### 6.4. Submit to Google Search Console
- [ ] Add property (Domain method, DNS TXT via Cloudflare)
- [ ] Submit sitemap `sitemap_index.xml`
- [ ] URL Inspection → request indexing for homepage, treatments hub, all 5 treatment pages

### 6.5. Submit to Bing Webmaster Tools
- [ ] Add site, import from GSC, submit sitemap

### 6.6. Validate schema on every page
- [ ] Run https://search.google.com/test/rich-results on:
   - Home, About, all 3 practitioner pages
   - Treatments hub, all 5 treatment pages
   - Pricing, Contact, Book
- [ ] All must return 0 errors

---

## 11. Phase 7 — Analytics & Consent (Day 4)

### 7.1. Create accounts (client owns each)
- [ ] GTM container for `keshopro.com` → save Container ID
- [ ] GA4 property → save Measurement ID
- [ ] Meta Business + Pixel → save Pixel ID
- [ ] TikTok Ads + Pixel → save Pixel ID
- [ ] Microsoft Clarity project → save Project ID

### 7.2. Install GTM4WP plugin
- [ ] Plugins → Add New → GTM4WP → Install + Activate
- [ ] Settings → paste Container ID
- [ ] Placement: Codex method 4 (Footer of `<head>`)

### 7.3. Import GTM container
- [ ] GTM → Admin → Import Container
- [ ] Upload `/kesho/code-bundle/gtm-container.json`
- [ ] Workspace: New "Initial Import"
- [ ] Merge → Overwrite conflicts → Confirm

### 7.4. Update GTM variables with real IDs
- [ ] Edit `GA4_MEASUREMENT_ID` → real value
- [ ] Edit `META_PIXEL_ID` → real value
- [ ] Edit `TIKTOK_PIXEL_ID` → real value
- [ ] Edit `CLARITY_PROJECT_ID` → real value

### 7.5. Complianz cookie banner
- [ ] Run wizard: UK + EU, Health & Beauty industry, generate Privacy + Cookie Policy
- [ ] Banner design: Kesho Brown bg, bottom-right
- [ ] Buttons: Accept all (primary), Manage preferences, Reject all
- [ ] Test in incognito — confirm no tracking fires before consent

### 7.6. GTM Preview + Publish
- [ ] GTM → Preview → walk through site, click "Book Consultation" → verify event fires
- [ ] Submit → Publish "v1.0 launch"

---

## 12. Phase 8 — Blog Launch (Day 5)

### 8.1. Create blog categories
- [ ] Treatments, Aftercare, Before & After, Local, General

### 8.2-8.7. Publish 6 blog posts
Each post markdown is in `/kesho/blog-drafts/`. For each:
- [ ] Posts → Add New → paste markdown body
- [ ] Set title, slug from frontmatter
- [ ] Set featured image (use Kesho concept images or stock that matches brand)
- [ ] Assign category
- [ ] Rank Math meta from frontmatter
- [ ] Internal links per frontmatter `internal_links` list
- [ ] Publish

Posts:
- [ ] 01-anti-wrinkle-consultation.md → category Treatments
- [ ] 02-lip-fillers-aftercare.md → category Aftercare
- [ ] 03-dermal-fillers-vs-skin-boosters.md → category Treatments
- [ ] 04-microneedling-pdrn-collagen-exosomes.md → category Treatments
- [ ] 05-practitioner-qualifications.md → category General
- [ ] 06-kesho-approach-natural-results.md → category General

---

## 13. Phase 9 — Pre-launch QA (Day 5-6)

### 9.1. Lighthouse audit (Chrome DevTools → Lighthouse → Mobile)
- [ ] Home: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- [ ] About: same targets
- [ ] Each treatment page: same targets

Common fixes if not hitting targets:
- LCP slow → add `fetchpriority="high"` to hero image
- CLS → set explicit width/height on all images, reserve space for Fresha embed
- Tap targets → button padding ≥ 48px

### 9.2. Schema validation (all pages)
- [ ] All pages return 0 errors on https://validator.schema.org/

### 9.3. Broken link scan
- [ ] Use https://www.deadlinkchecker.com/ on https://keshopro.com → fix all 4xx/5xx

### 9.4. Mobile device testing
- [ ] iPhone Safari, Android Chrome, iPad Safari
- [ ] Header sticky works, mobile menu opens, CTAs tappable, forms submit, no horizontal scroll

### 9.5. Form testing
- [ ] Submit contact form with valid data → email arrives → user sees /thank-you/ → GA4 records form_submit event
- [ ] Submit invalid → validation works
- [ ] Submit spam → honeypot blocks

### 9.6. GDPR cookie audit
- [ ] First load (incognito, no interaction): only Complianz cookie set
- [ ] After Accept: GA, Meta, TikTok, Clarity cookies set
- [ ] After Reject: no marketing/analytics cookies

### 9.7. Indexability check
- [ ] GSC Coverage report: all pages except `/thank-you/` and legal are indexable

---

## 14. Phase 10 — Launch

### 10.1. Pre-flight
- [ ] All `__PHONE__`, `__EMAIL__`, `__FRESHA_EMBED_CODE__`, `__SURNAME__`, `__GPHC_NUMBER__`, `__GMC_NUMBER__` placeholders replaced site-wide
- [ ] No "lorem ipsum" anywhere
- [ ] All images have alt text
- [ ] Final UpdraftPlus backup

### 10.2. Remove dev barriers
- [ ] Settings → Reading → "Discourage search engines from indexing" is UNCHECKED
- [ ] Rank Math sitewide overview: all non-legal pages are `index, follow`

### 10.3. Announce launch
- [ ] Visit homepage in incognito — verify everything works
- [ ] Notify client → handover

---

## 15. What's Out of Scope (Don't Do These)

These tracks belong to separate engagements:

- [ ] Social media account setup (Facebook, Instagram, TikTok)
- [ ] Google Business Profile setup + verification
- [ ] Paid ad campaigns (Google Ads, Meta Ads, TikTok Ads)
- [ ] Ongoing SEO content production beyond the 6 launch posts
- [ ] Competitor analysis
- [ ] Print materials

---

## 16. Handover Checklist

Before closing the engagement:

- [ ] Hand over 1Password / Bitwarden vault with all account credentials created
- [ ] Document any custom configuration choices made
- [ ] 30-minute walkthrough call: how to add a blog post, how to update prices, how to view analytics
- [ ] Final UpdraftPlus backup downloaded to client's Google Drive

---

## 17. Reference Files

The client should make these accessible to you before starting:

| File | Path |
|---|---|
| Long-form implementation plan | `/Users/kyle/docs/superpowers/plans/2026-05-31-kesho-website-implementation.md` |
| Design spec | `/Users/kyle/docs/superpowers/specs/2026-05-31-kesho-website-design.md` |
| Project README | `/Users/kyle/kesho/README.md` |
| All assets | `/Users/kyle/kesho/` |

The long-form implementation plan has every Elementor section, every plugin setting, every code snippet. Use it as a reference when the brief above isn't detailed enough.

---

**End of brief. Total: 10 phases, 100+ checkboxes, ~£750-£1,750 of work.**
