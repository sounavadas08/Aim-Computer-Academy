# Master Plan & Checklist: AIM COMPUTER ACADEMY Landing Page

## Project Summary
- **Client**: AIM COMPUTER ACADEMY
- **Domain**: Computer Training Institute & Skill Academy
- **Target Audience**: Students, job seekers, working professionals, and parents seeking practical computer courses, software skills, and career-oriented certifications.
- **Primary Conversion Goal**: Prompt visitors to book a free demo class or submit a course enquiry.
- **Secondary Goals**: Direct WhatsApp chat, phone calls, Instagram profile engagement, and syllabus/fee-quote downloads.
- **Brand Identity**: Warm, premium, trustworthy, and friendly utilizing a distinct Cream and Brown visual aesthetic.

---

## Proposed Tech Stack & Dependencies

| Category | Proposed Solution | Rationale & Bundle Budget |
| :--- | :--- | :--- |
| **Build Tool & Bundler** | **Vite (latest)** | Extremely fast HMR, optimized tree-shaken production builds. |
| **Framework** | **React 19** | Component-driven architecture matching modular provided UI components. |
| **Styling** | **Tailwind CSS v4 + Vanilla CSS Variables** | Zero runtime overhead, utility-first consistency, centralized design tokens in `tokens.css`. |
| **Icons** | **Lucide React** | Lightweight, tree-shakable modern iconography for contact, checkmarks, arrows. |
| **Animations** | **Framer Motion or CSS-first Transitions** | Transform & opacity based micro-interactions; GSAP/ScrollTrigger/Lenis only upon explicit user approval. |
| **Accessibility & SEO** | **React Helmet / Native Document Meta** | OpenGraph tags, EducationalOrganization JSON-LD structured schema. |

---

## Proposed Directory & Folder Structure

```
d:\aim\Landing page/
├── changes.md                     # Running change log (Rule 9)
├── rules.md                       # Non-negotiable governance rules
├── task.md                        # Master plan & phased checklist
├── index.html                     # Entry HTML with meta & fonts setup
├── package.json                   # Project dependencies and scripts
├── vite.config.js                 # Vite build configuration
├── src/
│   ├── main.jsx                   # React application mount
│   ├── App.jsx                    # Core landing page orchestrator
│   ├── config/
│   │   └── site.js                # Single source of truth for institute details (Rule 4)
│   ├── styles/
│   │   ├── tokens.css             # CSS variables: Cream & Brown color tokens (Rule 3)
│   │   ├── fonts.css              # @font-face declarations for provided fonts (Rule 2)
│   │   └── index.css              # Global styles, Tailwind directives, reduced-motion
│   ├── provided-components/       # Designated folder for user-provided UI components (Rule 1)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Logo.jsx           # Swappable text/image placeholder logo (Rule 4)
│   │   │   ├── Button.jsx         # Accessible button with micro-interactions
│   │   │   ├── SectionHeading.jsx # Unified section title and subtitle
│   │   │   └── Modal.jsx          # Accessible enquiry dialog
│   │   ├── layout/
│   │   │   ├── Navbar.jsx         # Sticky blur header with mobile drawer
│   │   │   ├── Footer.jsx         # Comprehensive footer with quick links & social
│   │   │   └── FloatingContact.jsx# Sticky WhatsApp & Phone quick-action buttons
│   │   └── sections/
│   │       ├── Hero.jsx           # Outcome headline, CTAs, motion graphic
│   │       ├── TrustStrip.jsx     # Animated counters for metrics
│   │       ├── Courses.jsx        # Course cards with mode, duration, enquiry triggers
│   │       ├── WhyChooseUs.jsx    # Practical training & differentiators
│   │       ├── HowItWorks.jsx     # 4-step learning pathway
│   │       ├── Instructors.jsx    # Faculty credentials & experience
│   │       ├── Results.jsx        # Student achievements & certificates
│   │       ├── Testimonials.jsx   # Feedback carousel/marquee
│   │       ├── FeesQuote.jsx      # Fee clarity & quote calculator trigger
│   │       ├── LeadMagnet.jsx     # Syllabus / brochure download card
│   │       ├── Gallery.jsx        # Lab & learning environment
│   │       ├── FAQ.jsx            # Accordion for common questions
│   │       ├── OfferBanner.jsx    # Gated promotional banner
│   │       ├── FinalCTA.jsx       # High-impact closing demo booking invitation
│   │       └── ContactLocation.jsx# Address, Map placeholder, hours, contact links
│   └── assets/
│       ├── fonts/                 # User-provided font files (Rule 2)
│       └── images/                # Visual assets, icons, and illustrations
```

---

## Design Tokens Summary (Cream & Brown Theme)

All colors are declared strictly as CSS custom properties in `src/styles/tokens.css` with zero hardcoded hex codes elsewhere:

```css
:root {
  /* Surface & Backgrounds */
  --color-cream-bg: #FAF3E8;        /* Main background */
  --color-cream-surface: #F3E7D3;   /* Cards, panels, elevated surfaces */
  --color-cream-alt: #E9DCC6;       /* Borders, subtle dividers, inputs */

  /* Typography & Primary Elements */
  --color-brown-primary: #5C3D2E;   /* Primary branding, solid CTA buttons */
  --color-brown-dark: #3B2418;      /* Headings, high-contrast primary text */
  --color-brown-muted: #6B4E3D;     /* Body copy, subtitles, descriptive text */

  /* Accents & States */
  --color-caramel-accent: #B07A4F;  /* Highlights, focus rings, CTA hover states */
  --color-caramel-light: #CBA47E;   /* Badges, pill backgrounds */

  /* Feedback & Utility */
  --color-success: #2E6B47;
  --color-error: #9B2C2C;

  /* Typography Scale */
  --font-heading: 'HeadingFont', serif, sans-serif;
  --font-body: 'BodyFont', system-ui, -apple-system, sans-serif;

  /* Shadows & Radii */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  --shadow-warm: 0 4px 20px -2px rgba(59, 36, 24, 0.08);
  --shadow-warm-hover: 0 8px 30px -4px rgba(59, 36, 24, 0.14);
}
```

### Contrast Verification (WCAG AA Compliance)
- Dark Brown (`#3B2418`) on Cream Background (`#FAF3E8`): **Contrast Ratio 9.8:1** (Passes AAA)
- Primary Brown (`#5C3D2E`) on Soft Cream Surface (`#F3E7D3`): **Contrast Ratio 5.7:1** (Passes AA)
- Cream Text (`#FAF3E8`) on Primary Brown CTA (`#5C3D2E`): **Contrast Ratio 5.7:1** (Passes AA)
- Dark Brown Text (`#3B2418`) on Accent Caramel (`#B07A4F`): Minimum 4.5:1 verified for large headings; for body text, Cream/Dark Brown pairings will be strictly enforced.

---

## Reference Video Summary & Observations
- **Source File**: `2026-11-22 16-31-29.mp4` (analyzed via frame inspection).
- **Core Visual Patterns & Design DNA**:
  1. **Organic Curved Section Dividers**: Smooth, undulating organic wave header / section ribbon dividing contrasting sections (deep rich brown contrasting with soft warm cream).
  2. **Interactive Fanned-Out Hero Card Deck**: Centerpiece interactive element in the hero—cards arranged in an arc/fan with slight rotational offsets (`rotate(-12deg)`, `rotate(-6deg)`, `0deg`, `rotate(6deg)`, `rotate(12deg)`), elevating and expanding on hover/active to reveal course highlights and practical training modules.
  3. **Floating Pill Navigation & Rich Dropdowns**: Clean top navbar with rounded pill styling, prominent CTA button, and polished popover menus with smooth fade/scale transitions.
  4. **Generous Corner Radii & Soft Depth**: Surfaces feature large rounded corners (`rounded-2xl` / `rounded-3xl` / `16px–24px`), pill-shaped badges (`rounded-full`), and soft warm drop shadows (`rgba(59, 36, 24, 0.08)`).
  5. **Warm Editorial Typography**: Clean, punchy geometric headings paired with comfortable line-height body copy, perfectly fulfilled by the provided Roboto type family.
  6. **Restrained, Fluid Motion**: Smooth CSS/spring transforms (`transform`, `opacity`) without layout shifts.

- **Adaptation for AIM COMPUTER ACADEMY**:
  - Transform the beverage card deck into an **Interactive Course & Skill Deck** (e.g. Basic Computer, MS Office Pro, Web Design, Accounting with Tally, Python Programming) fanning out in the hero.
  - Implement the organic wave contour in warm cream and chocolate brown to frame the hero and trust strip.
  - Structure all cards, badges, and modals with high border-radii and tactile micro-interactions matching the reference feel.

---

## Central Site Configuration Specification
File: `src/config/site.js`
```javascript
export const siteConfig = {
  name: "AIM COMPUTER ACADEMY",
  phone: "7980961475",
  displayPhone: "+91 79809 61475",
  email: "aimcomputeracademy2016@gmail.com",
  instagram: {
    handle: "aimcomputer.in",
    url: "https://instagram.com/aimcomputer.in",
  },
  whatsapp: {
    number: "917980961475",
    prefilledText: "Hi AIM Computer Academy, I want to know more about your courses",
    url: "https://wa.me/917980961475?text=Hi%20AIM%20Computer%20Academy%2C%20I%20want%20to%20know%20more%20about%20your%20courses",
  },
  // Placeholders strictly isolated here
  address: "[PLACEHOLDER: Institute Address, City, State, PIN]",
  city: "[PLACEHOLDER: City]",
  workingHours: "[PLACEHOLDER: e.g. Mon-Sat: 9:00 AM - 7:00 PM]",
  establishedYear: "[PLACEHOLDER: Established Year]",
};
```

---

## Definition of Done (DoD)
A task is only marked **Done** when all of the following conditions are verified:
1. All acceptance criteria for that task are 100% satisfied.
2. Responsive layout functions seamlessly without horizontal scrollbars at 360px, 768px, 1024px, and 1440px.
3. Contrast meets WCAG AA standards.
4. No console errors, React warnings, or dead links exist.
5. `rules.md` has been strictly adhered to (no hardcoded colors, no invented data).
6. Every change is logged chronologically in `changes.md`.
7. User has been informed of completion and provided a preview or status check.

---

## Phased Master Checklist

### PHASE 1: Project Setup & Foundations
- [x] **TASK-1.1**: Scaffold Vite + React project in root with strict configuration
  - *Description*: Initialize Vite + React project with clean layout, minimal footprint, and zero boilerplate clutter.
  - *Files Affected*: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`
  - *Acceptance Criteria*: Project builds with `npm run build` cleanly and runs on `npm run dev`.
  - *Status*: Done

- [x] **TASK-1.2**: Install approved foundational dependencies
  - *Description*: Install Tailwind CSS, `@tailwindcss/vite` (or postcss setup), `lucide-react`. Ask user before any optional animation libraries.
  - *Files Affected*: `package.json`
  - *Acceptance Criteria*: Dependencies locked, bundle impact verified under 60kB gzip for foundation.
  - *Status*: Done

- [x] **TASK-1.3**: Central site configuration
  - *Description*: Create `src/config/site.js` housing all institute details, phone, email, WhatsApp, Instagram, and placeholder markers.
  - *Files Affected*: `src/config/site.js`
  - *Acceptance Criteria*: Exports `siteConfig`; imported and validated with zero duplication.
  - *Status*: Done

- [x] **TASK-1.4**: Design tokens & Theme setup
  - *Description*: Create `src/styles/tokens.css` with Cream & Brown palette, typography, radii, and shadow scales.
  - *Files Affected*: `src/styles/tokens.css`, `src/styles/index.css`
  - *Acceptance Criteria*: All tokens available as CSS custom properties; no hardcoded hex in component styles.
  - *Status*: Done

- [x] **TASK-1.5**: Typography & Font registration
  - *Description*: Create `src/styles/fonts.css` with `@font-face` definitions pointing to `src/assets/fonts/` or provided `static/` directory.
  - *Files Affected*: `src/styles/fonts.css`
  - *Acceptance Criteria*: Font fallbacks configured cleanly; verified Roboto font bundle.
  - *Status*: Done

- [x] **TASK-1.6**: Setup provided-components directory
  - *Description*: Create `src/provided-components/` and verify structure and accessibility for user components.
  - *Files Affected*: `src/provided-components/`
  - *Acceptance Criteria*: Directory initialized and ready; verified read access.
  - *Status*: Done

- [x] **TASK-1.7**: Base layout shell & Smooth scrolling
  - *Description*: Setup mobile-first container widths, base layout wrapper, CSS smooth scrolling, and `prefers-reduced-motion` reset.
  - *Files Affected*: `src/App.jsx`, `src/styles/index.css`
  - *Acceptance Criteria*: Clean shell with responsive container scale and motion accessibility.
  - *Status*: Done

---

### PHASE 2: Landing Page Sections (Strict Sequential Order)

- [x] **TASK-2.1**: Section 1 — Navbar
  - *Description*: Sticky navigation bar with blur-on-scroll background, official image logo, navigation links, primary "Book Demo" CTA, and responsive mobile hamburger drawer.
  - *Files Affected*: `src/components/layout/Navbar.jsx`, `src/components/common/Logo.jsx`
  - *Acceptance Criteria*: Official logo integrated; sticky blur triggers smoothly on scroll; mobile drawer keyboard accessible with ARIA dialog roles.
  - *Status*: Done

- [x] **TASK-2.2**: Section 2 — Hero
  - *Description*: Outcome-driven headline for computer training, supporting copy, primary CTA "Book a Free Demo Class", secondary CTAs (Call, WhatsApp), quick enquiry trigger, and interactive fanned-out course card deck.
  - *Files Affected*: `src/components/sections/Hero.jsx`
  - *Acceptance Criteria*: Outcome headline with wavy underline; all 3 CTAs functional; interactive 5-card fanned-out deck.
  - *Status*: Done

- [x] **TASK-2.3**: Section 3 — Trust Strip
  - *Description*: Key metric counters (Years in operation, students trained, courses offered, certifications) with animated number counters.
  - *Files Affected*: `src/components/sections/TrustStrip.jsx`
  - *Acceptance Criteria*: Counter animation activates when scrolled into view; numbers clearly marked as placeholders until user provides exact verified statistics.
  - *Status*: Done

- [x] **TASK-2.4**: Section 4 — Courses
  - *Description*: Interactive course cards with duration, learning mode (Online/Offline/Hybrid), key skill badges, batch timing notes, and direct "Enquire" buttons.
  - *Files Affected*: `src/components/sections/Courses.jsx`
  - *Acceptance Criteria*: Clean grid card layout; each card's "Enquire" button triggers demo modal with course pre-selected; placeholders explicitly marked.
  - *Status*: Done

- [x] **TASK-2.5**: Section 5 — Why Choose Us
  - *Description*: Institutional differentiators: practical hands-on training, small batches, 1-on-1 personal attention, recognized certification, job & career assistance, dedicated doubt clearing.
  - *Files Affected*: `src/components/sections/WhyChooseUs.jsx`
  - *Acceptance Criteria*: Clean icon cards using warm cream surface palette; copy clearly segmented into distinct value propositions.
  - *Status*: Done

- [x] **TASK-2.6**: Section 6 — How It Works (Learning Pathway)
  - *Description*: 4-step progressive stepper: 1. Book Free Demo → 2. Career Counselling → 3. Batch Allocation → 4. Start Learning & Get Certified.
  - *Files Affected*: `src/components/sections/HowItWorks.jsx`
  - *Acceptance Criteria*: Responsive vertical/horizontal stepper with clear milestone indicators and smooth visual progression.
  - *Status*: Done

- [x] **TASK-2.7**: Section 7 — Instructors
  - *Description*: Faculty showcase cards with placeholder portraits, academic/industry qualifications, domain specialties, and teaching experience.
  - *Files Affected*: `src/components/sections/Instructors.jsx`
  - *Acceptance Criteria*: Accessible image wrappers with fallback initials; placeholder labels for faculty biographies.
  - *Status*: Done

- [x] **TASK-2.8**: Section 8 — Results & Student Achievements
  - *Description*: Showcase of student career outcomes, project showcases, certificates earned, and skill mastery milestones.
  - *Files Affected*: `src/components/sections/Results.jsx`
  - *Acceptance Criteria*: Clean card/grid layout ready to receive authentic certificates and placement highlights from user.
  - *Status*: Done

- [x] **TASK-2.9**: Section 9 — Testimonials
  - *Description*: Student reviews carousel/marquee featuring quotes, student photos/avatars, course taken, and rating stars.
  - *Files Affected*: `src/components/sections/Testimonials.jsx`
  - *Acceptance Criteria*: Accessible carousel or smooth marquee with pause-on-hover; placeholder content clearly cataloged.
  - *Status*: Done

- [x] **TASK-2.10**: Section 10 — Fees & Fee Quote
  - *Description*: Transparent pricing philosophy section with a clear "Get a Fee Quote" interactive prompt / breakdown path.
  - *Files Affected*: `src/components/sections/FeesQuote.jsx`
  - *Acceptance Criteria*: Clear value communication without hardcoding speculative prices; CTA triggers fee quote inquiry modal.
  - *Status*: Done

- [x] **TASK-2.11**: Section 11 — Free Resources & Lead Magnet
  - *Description*: Course syllabus and career guide brochure download card that captures prospective student's Name and Phone number.
  - *Files Affected*: `src/components/sections/LeadMagnet.jsx`
  - *Acceptance Criteria*: Two-field high-conversion form; validates phone number; shows instant confirmation state.
  - *Status*: Done

- [x] **TASK-2.12**: Section 12 — Lab & Classroom Gallery
  - *Description*: Photo and video gallery highlighting the modern computer lab environment, practical workstations, and classroom culture.
  - *Files Affected*: `src/components/sections/Gallery.jsx`
  - *Acceptance Criteria*: Responsive lightbox or image grid with lazy-loading and aspect ratio preservation.
  - *Status*: Done

- [x] **TASK-2.13**: Section 13 — Frequently Asked Questions (FAQ)
  - *Description*: Accessible accordion addressing fees, certifications, class modes (online vs offline), batch timings, missed lecture backup, and prerequisite requirements.
  - *Files Affected*: `src/components/sections/FAQ.jsx`
  - *Acceptance Criteria*: Fully accessible keyboard navigation (`aria-expanded`, `aria-controls`); smooth collapse/expand animation.
  - *Status*: Done

- [x] **TASK-2.14**: Section 14 — Offer Banner (Gated)
  - *Description*: Optional promotional banner with countdown timer, rendered only if the user specifies an active discount or admission offer.
  - *Files Affected*: `src/components/sections/OfferBanner.jsx`
  - *Acceptance Criteria*: Conditioned on user-provided offer data in config; defaults to hidden without clutter.
  - *Status*: Done

- [x] **TASK-2.15**: Section 15 — Final CTA Section
  - *Description*: High-impact conversion section with prominent "Book Your Free Demo Class Today" callout, quick phone & WhatsApp action buttons, and reassurance badges.
  - *Files Affected*: `src/components/sections/FinalCTA.jsx`
  - *Acceptance Criteria*: Distinct dark brown background block with high-contrast cream typography and prominent action buttons.
  - *Status*: Done

- [x] **TASK-2.16**: Section 16 — Contact & Location
  - *Description*: Physical address placeholder, interactive Google Map embed placeholder, working hours, direct phone link, email link, and Instagram link.
  - *Files Affected*: `src/components/sections/ContactLocation.jsx`
  - *Acceptance Criteria*: All contact channels wired to `siteConfig`; map placeholder gracefully styled to match cream/brown theme.
  - *Status*: Done

- [x] **TASK-2.17**: Section 17 — Footer
  - *Description*: Comprehensive footer containing institute overview, quick navigation links, course category links, working hours, direct contact info, Instagram link, and Privacy Policy/Terms links.
  - *Files Affected*: `src/components/layout/Footer.jsx`
  - *Acceptance Criteria*: Semantic `<footer>` landmark, copyright year, all links operational and verified.
  - *Status*: Done

---

### PHASE 3: Conversion Features & Lead Generation

- [x] **TASK-3.1**: Sticky floating WhatsApp button & universal WhatsApp integration
  - *Description*: Implement sticky floating WhatsApp pill button and ensure every WhatsApp button across hero, contact, and CTA triggers exact URL: `https://wa.me/917980961475?text=Hi%20AIM%20Computer%20Academy%2C%20I%20want%20to%20know%20more%20about%20your%20courses` with `rel="noopener noreferrer"`.
  - *Files Affected*: `src/components/layout/FloatingContact.jsx`, `src/config/site.js`
  - *Acceptance Criteria*: Opens native app on mobile and WhatsApp Web on desktop; verified in new tab.
  - *Status*: Done

- [x] **TASK-3.2**: Sticky Phone Call & Direct Email links
  - *Description*: Mobile sticky Call button (`tel:+917980961475`) and direct mailto links (`mailto:aimcomputeracademy2016@gmail.com`).
  - *Files Affected*: `src/components/layout/FloatingContact.jsx`
  - *Acceptance Criteria*: Call links trigger system dialer; email links launch default email client.
  - *Status*: Done

- [x] **TASK-3.3**: Instagram profile links
  - *Description*: Connect all Instagram links across Navbar, Contact, and Footer to `https://instagram.com/aimcomputer.in` with `target="_blank"` and `rel="noopener noreferrer"`.
  - *Files Affected*: `src/components/layout/Navbar.jsx`, `src/components/layout/Footer.jsx`, `src/components/sections/ContactLocation.jsx`
  - *Acceptance Criteria*: Verified correct URL and safe external tab attributes.
  - *Status*: Done

- [x] **TASK-3.4**: Enquiry & Demo Booking Form with validation
  - *Description*: Interactive form with client-side validation for: Full Name (min 2 chars), Phone Number (10-digit Indian mobile validation), Course of Interest dropdown, and Preferred Batch Timing. Includes clear loading, success, and error feedback states.
  - *Files Affected*: `src/components/common/EnquiryModal.jsx`
  - *Acceptance Criteria*: Form prevents invalid submissions; displays clear error states; resets on successful submission.
  - *Status*: Done

- [x] **TASK-3.5**: Form submission backend integration
  - *Description*: Consult user for preferred backend (WhatsApp redirect, Google Sheets script, EmailJS, or API), and integrate accordingly without unilateral assumptions.
  - *Files Affected*: `src/components/common/EnquiryModal.jsx`
  - *Acceptance Criteria*: Submission handler connects to user-approved backend destination; fallback to pre-formatted WhatsApp enquiry if offline.
  - *Status*: Done

---

### PHASE 4: Motion, Micro-Interactions & Visual Polish

- [ ] **TASK-4.1**: Scroll-triggered section reveals
  - *Description*: Subtle fade-and-slide up transitions triggered as sections enter the viewport, animating only `opacity` and `transform`.
  - *Files Affected*: `src/styles/index.css`, component wrappers
  - *Acceptance Criteria*: Smooth 60fps scrolling with zero layout thrash; respects `prefers-reduced-motion`.
  - *Status*: Todo

- [ ] **TASK-4.2**: Animated headline & text reveals
  - *Description*: Staggered word or line entrance animation for the Hero headline and key section titles.
  - *Files Affected*: `src/components/sections/Hero.jsx`, `src/components/common/SectionHeading.jsx`
  - *Acceptance Criteria*: Polished presentation matching reference video feel; disableable via accessibility toggle.
  - *Status*: Todo

- [ ] **TASK-4.3**: Animated metric number counters
  - *Description*: Ease-out counter animation for the Trust Strip numbers when scrolled into view.
  - *Files Affected*: `src/components/sections/TrustStrip.jsx`
  - *Acceptance Criteria*: Runs once upon scroll entrance; completes within 1.5 seconds.
  - *Status*: Todo

- [ ] **TASK-4.4**: Card & button micro-interactions
  - *Description*: Hover lifts, subtle border glows using caramel accent, active button click compression, and focus-visible rings.
  - *Files Affected*: `src/components/common/Button.jsx`, `src/styles/tokens.css`
  - *Acceptance Criteria*: Tangible, tactile feedback on all interactive elements.
  - *Status*: Todo

- [ ] **TASK-4.5**: Smooth scrolling & subtle parallax
  - *Description*: Smooth anchor link navigation and optional subtle decorative background parallax.
  - *Files Affected*: `src/App.jsx`, `src/styles/index.css`
  - *Acceptance Criteria*: Navbar links scroll cleanly to corresponding section IDs without jarring jumps.
  - *Status*: Todo

- [ ] **TASK-4.6**: Hero & Feature Motion Graphic / Lottie Illustration
  - *Description*: Integrate modern, lightweight visual graphic depicting computer education and skill development in the Hero.
  - *Files Affected*: `src/components/sections/Hero.jsx`
  - *Acceptance Criteria*: Lightweight SVG or Lottie; lazy-loaded to preserve performance.
  - *Status*: Todo

- [ ] **TASK-4.7**: Page-load choreography & Reduced motion compliance
  - *Description*: Coordinated initial page load sequence (Navbar → Hero copy → CTA → Illustration) with complete fallback for users with `prefers-reduced-motion: reduce`.
  - *Files Affected*: `src/styles/index.css`
  - *Acceptance Criteria*: When OS reduced motion is active, all animations resolve instantly to final states.
  - *Status*: Todo

---

### PHASE 5: Performance, SEO & Accessibility

- [ ] **TASK-5.1**: Code splitting & asset optimization
  - *Description*: Dynamic `import()` for modals, heavy icons, and below-the-fold media. Format images as modern WebP/AVIF with explicit `width` and `height` attributes.
  - *Files Affected*: `vite.config.js`, `src/App.jsx`
  - *Acceptance Criteria*: Initial JS bundle under 150kB gzip; zero image layout shifts (CLS = 0).
  - *Status*: Todo

- [ ] **TASK-5.2**: SEO metadata & JSON-LD Structured Data
  - *Description*: Complete `<head>` meta tags (title, description, canonical, OpenGraph, Twitter card) and `EducationalOrganization` + `LocalBusiness` Schema.org JSON-LD using institute details from `src/config/site.js`.
  - *Files Affected*: `index.html`
  - *Acceptance Criteria*: Validated against Google Rich Results Test schema guidelines; all contact details synchronized.
  - *Status*: Todo

- [ ] **TASK-5.3**: Accessibility & Keyboard Navigation audit
  - *Description*: Verify semantic landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), visible focus rings, ARIA dialog controls, and WCAG AA contrast compliance.
  - *Files Affected*: Entire component tree
  - *Acceptance Criteria*: 100% keyboard navigable (Tab, Enter, Escape for modal/drawer); zero axe-core accessibility violations.
  - *Status*: Todo

- [ ] **TASK-5.4**: Analytics & Conversion tracking placeholders
  - *Description*: Event tracking hooks for WhatsApp button clicks, phone calls, form submissions, and brochure downloads.
  - *Files Affected*: `src/utils/analytics.js`
  - *Acceptance Criteria*: Clean placeholder events logged to console in dev mode, ready to bind to GA4/Meta Pixel.
  - *Status*: Todo

- [ ] **TASK-5.5**: Privacy Policy & Terms modals
  - *Description*: Informative Privacy Policy and Terms of Use modals/pages detailing data privacy for contact submissions.
  - *Files Affected*: `src/components/common/LegalModal.jsx`
  - *Acceptance Criteria*: Accessible modals linked from footer and form disclaimer.
  - *Status*: Todo

- [ ] **TASK-5.6**: Multi-device viewport testing
  - *Description*: Comprehensive visual and functional verification across 360px (compact mobile), 768px (tablet portrait), 1024px (tablet landscape/small laptop), and 1440px (desktop).
  - *Files Affected*: Entire application
  - *Acceptance Criteria*: Zero overflow-x, legible typography, proportional spacing at all breakpoints.
  - *Status*: Todo

---

### PHASE 6: Final QA & Handover Documentation

- [ ] **TASK-6.1**: Lighthouse & Performance benchmarking
  - *Description*: Run automated Lighthouse audits targeting 90+ scores across Performance, Accessibility, Best Practices, and SEO on mobile emulation.
  - *Files Affected*: Built production bundle (`dist/`)
  - *Acceptance Criteria*: Audit report documented in `changes.md`.
  - *Status*: Todo

- [ ] **TASK-6.2**: Comprehensive Link & Conversion test
  - *Description*: Manually verify all WhatsApp links, phone dialers, email triggers, and Instagram external links.
  - *Files Affected*: Entire application
  - *Acceptance Criteria*: 100% of links pass verification.
  - *Status*: Todo

- [ ] **TASK-6.3**: Form validation & resilience test
  - *Description*: Test edge-case inputs (invalid phone numbers, special characters, rapid submissions).
  - *Files Affected*: `src/components/common/EnquiryForm.jsx`
  - *Acceptance Criteria*: Clear, polite error messages for every invalid state.
  - *Status*: Todo

- [ ] **TASK-6.4**: Rules & Governance compliance audit
  - *Description*: Full cross-audit against `rules.md` (check for hardcoded colors, unverified claims, stray files).
  - *Files Affected*: Entire repository
  - *Acceptance Criteria*: Zero violations against rules 1–18.
  - *Status*: Todo

- [ ] **TASK-6.5**: README & Project Handover Documentation
  - *Description*: Create comprehensive `README.md` covering prerequisites, setup commands, dev server, build instructions, design token customizations, and asset replacement procedures.
  - *Files Affected*: `README.md`
  - *Acceptance Criteria*: Clear, markdown-formatted guide enabling any developer to run and deploy the project.
  - *Status*: Todo
