# Running Change Log — AIM COMPUTER ACADEMY

This file maintains a strict chronological record of every change, addition, modification, configuration update, and decision made throughout the project lifecycle.

---

## Change Log Entries

### [2026-11-22 16:25] CHANGE-001
- Task ID: TASK-0.1
- Type: Config
- Files affected:
  - `rules.md`
  - `changes.md`
  - `task.md`
- What changed: Initialized the foundational project governance files (`rules.md`, `changes.md`, and `task.md`) for the AIM COMPUTER ACADEMY landing page.
- Why: Step 0 requirement to establish strict plan-first governance, rules, master task checklist, and change tracking before writing any code.
- Approved by user: Pending approval of `task.md`
- Notes / follow-ups: Awaiting user approval of `task.md` and user-provided inputs (reference video path, UI components folder, fonts folder, course details, address/hours).

---

### [2026-11-22 16:36] CHANGE-002
- Task ID: TASK-0.2
- Type: Config
- Files affected:
  - `task.md`
  - `changes.md`
- What changed: Analyzed the reference video (`2026-11-22 16-31-29.mp4`) and inspected the provided fonts in `static/` (full Roboto typeface family). Updated `task.md` with complete reference video observations (organic curved wave dividers, fanned-out interactive hero course deck, pill navigation, generous 24px border radii, warm cream & brown color depth). Confirmed English language scope and cross-device efficiency focus.
- Why: Comply with Rule 2 (use provided fonts in `static/`), Rule 5 (study and document reference video before building), and incorporate user confirmations.
- Approved by user: Yes (user confirmed video, static font assets, English language, and efficiency priorities).
- Notes / follow-ups: Ready to start Phase 1 upon user "go".

---

### [2026-11-22 16:41] CHANGE-003
- Task ID: TASK-1.1 through TASK-1.7
- Type: Added / Config
- Files affected:
  - `package.json`
  - `vite.config.js`
  - `index.html`
  - `src/config/site.js`
  - `src/styles/tokens.css`
  - `src/styles/fonts.css`
  - `src/styles/index.css`
  - `src/provided-components/README.md`
  - `src/main.jsx`
  - `src/App.jsx`
- What changed:
  1. Initialized Vite + React 19 project structure.
  2. Installed approved dependencies (`tailwindcss`, `@tailwindcss/vite`, `lucide-react`).
  3. Created central site configuration (`src/config/site.js`) with institute phone, email, WhatsApp, Instagram, and tagged placeholders.
  4. Created design tokens (`src/styles/tokens.css`) with Cream & Brown palette, radii, and shadows.
  5. Registered Roboto font family from `static/` via `@font-face` in `src/styles/fonts.css`.
  6. Initialized `src/provided-components/` directory.
  7. Built foundational layout shell with responsive container scale, smooth scrolling, and reduced-motion reset.
  8. Verified production build via `npm run build` (successful compilation in 1.53s).
- Why: Complete Phase 1 (Project Setup & Foundations) according to master plan in `task.md`.
- Approved by user: Yes (user gave explicit "go" to proceed with Phase 1).
- Notes / follow-ups: Phase 1 complete and verified. Ready to present summary and request "go" for Phase 2.

---

### [2026-11-22 16:57] CHANGE-004
- Task ID: TASK-2.1 through TASK-2.17, TASK-3.1 through TASK-3.5
- Type: Added / Modified
- Files affected:
  - `src/assets/images/logo.webp`
  - `public/logo.webp`
  - `index.html`
  - `src/components/common/Logo.jsx`
  - `src/components/common/Button.jsx`
  - `src/components/common/SectionHeading.jsx`
  - `src/components/common/Icons.jsx`
  - `src/components/common/EnquiryModal.jsx`
  - `src/components/common/LegalModal.jsx`
  - `src/components/layout/Navbar.jsx`
  - `src/components/layout/Footer.jsx`
  - `src/components/layout/FloatingContact.jsx`
  - `src/components/sections/Hero.jsx`
  - `src/components/sections/TrustStrip.jsx`
  - `src/components/sections/Courses.jsx`
  - `src/components/sections/WhyChooseUs.jsx`
  - `src/components/sections/HowItWorks.jsx`
  - `src/components/sections/Instructors.jsx`
  - `src/components/sections/Results.jsx`
  - `src/components/sections/Testimonials.jsx`
  - `src/components/sections/FeesQuote.jsx`
  - `src/components/sections/LeadMagnet.jsx`
  - `src/components/sections/Gallery.jsx`
  - `src/components/sections/FAQ.jsx`
  - `src/components/sections/OfferBanner.jsx`
  - `src/components/sections/FinalCTA.jsx`
  - `src/components/sections/ContactLocation.jsx`
  - `src/App.jsx`
  - `task.md`
- What changed:
  1. Integrated official user-supplied logo into `src/assets/images/` and `public/` as well as favicon.
  2. Implemented all 17 landing page sections in their strict sequential order (Navbar through Footer).
  3. Built the centerpiece interactive fanned-out 5-card course deck in the Hero with organic wave dividers matching the reference video.
  4. Built all Phase 3 conversion features: sticky WhatsApp button with pre-filled enquiry URL (`rel="noopener noreferrer"`), mobile sticky phone dialer, accessible validated enquiry/demo booking modal, and legal policy modals.
  5. Verified successful production build with `npm run build` (built in 1.83s, zero errors).
- Why: Complete Phase 2 (Landing Page Sections) and Phase 3 (Conversion Features & Lead Generation) as approved by the user.
- Approved by user: Yes (explicit "go for phase 2").
- Notes / follow-ups: Logo removed from active placeholders. Ready for Phase 4 (Motion & Polish) and Phase 5 (SEO, Performance & Accessibility).

---

### [2026-11-22 17:03] CHANGE-005
- Task ID: TASK-6.5
- Type: Config / Remote
- Files affected:
  - `.gitignore`
  - All project repository files
- What changed:
  1. Updated `.gitignore` to properly exclude `node_modules`, `dist`, local environment files, and large raw video assets (`*.mp4`).
  2. Staged all 95 clean project source files, static Roboto fonts, official logo, and governance documentation.
  3. Created root commit `94a0aaf` on `main`.
  4. Added remote `origin` pointing to `https://github.com/sounavadas08/Aim-Computer-Academy.git`.
  5. Pushed `main` branch to GitHub remote with tracking (`origin/main`).
- Why: User requested pushing the entire project to their GitHub repository.
- Approved by user: Yes (user provided repository URL: `https://github.com/sounavadas08/Aim-Computer-Academy`).
- Notes / follow-ups: Remote is synced and up to date.

---

### [2026-11-22 17:10] CHANGE-006
- Task ID: TASK-4.1 through TASK-4.7
- Type: Added / Modified
- Files affected:
  - `src/styles/index.css`
  - `src/hooks/useScrollReveal.js`
  - `src/components/sections/Hero.jsx`
  - `src/components/common/SectionHeading.jsx`
  - `task.md`
- What changed:
  1. Implemented `useScrollReveal.js` hook utilizing IntersectionObserver to trigger performant transitions (animating strictly `transform` and `opacity`).
  2. Created CSS keyframe animations for floating skill tags (`animate-float`, `animate-float-alt`), warm pulse badges (`animate-warm-pulse`), and staggered entry classes.
  3. Added section anchor scroll offsets (`section[id] { scroll-margin-top: 5rem; }`) to guarantee smooth navbar link transitions.
  4. Added full `@media (prefers-reduced-motion: reduce)` overrides to instantly resolve all motions for users requiring accessibility accommodation.
  5. Tested and verified production build with zero errors.
- Why: Complete Phase 4 (Motion, Micro-Interactions & Visual Polish) per master plan.
- Approved by user: Yes (explicit "go for phase 4").
- Notes / follow-ups: Phase 4 complete. Ready for Phase 5 (Performance, SEO & Accessibility).

---

### [2026-11-22 17:14] CHANGE-007
- Task ID: TASK-5.1 through TASK-5.6
- Type: Added / Config / SEO
- Files affected:
  - `src/utils/analytics.js`
  - `index.html`
  - `src/components/layout/Navbar.jsx`
  - `src/components/layout/FloatingContact.jsx`
  - `src/components/common/EnquiryModal.jsx`
  - `src/components/sections/LeadMagnet.jsx`
  - `task.md`
- What changed:
  1. Built centralized conversion tracking utility `src/utils/analytics.js` supporting GTM/GA4 dataLayer integration.
  2. Wired custom event trackers into WhatsApp clicks, phone call dialers, demo modal opens, demo form submissions, and brochure downloads.
  3. Added complete Open Graph and Twitter Card metadata to `index.html`.
  4. Added dual `EducationalOrganization` and `LocalBusiness` JSON-LD Structured Data Schema matching Google Rich Results guidelines.
  5. Verified responsive breakpoints and keyboard navigation (Tab, Enter, Escape key closing modals).
  6. Tested production build via `npm run build` (built cleanly in 1.71s).
- Why: Complete Phase 5 (Performance, SEO & Accessibility) per project plan.
- Approved by user: Yes (explicit "after getting done first push to github the complete phase 5 then push the rest").
- Notes / follow-ups: Pushing Phase 5 to GitHub now.

---

### [2026-11-22 17:16] CHANGE-008
- Task ID: TASK-6.1 through TASK-6.5
- Type: Added / Docs / QA
- Files affected:
  - `README.md`
  - `task.md`
  - `changes.md`
- What changed:
  1. Authored complete project documentation in `README.md` including institute details, Cream & Brown design system guide, section architecture, conversion tracking, and setup/deployment commands.
  2. Executed complete link and conversion test across all WhatsApp links (`https://wa.me/917980961475?text=...`), phone dialer (`tel:+917980961475`), email mailto (`aimcomputeracademy2016@gmail.com`), and Instagram profile (`https://instagram.com/aimcomputer.in`). All passed 100%.
  3. Validated form input edge cases (min 2 character name, 10-digit mobile number, invalid character sanitization).
  4. Conducted full compliance audit against `rules.md` (Rules 1-18 verified, zero violations).
  5. Verified production compilation via `npm run build` (built cleanly in 1.71s).
- Why: Complete Phase 6 (Final QA & Handover Documentation) and finalize project.
- Approved by user: Yes (user instructed "then push the rest").
- Notes / follow-ups: Project complete. Pushing final phase and documentation to GitHub.

---

### [2026-11-23 02:15] CHANGE-009
- Task ID: TASK-2.4 (Courses Curriculum Update)
- Type: Feature / Content / SEO
- Files affected:
  - `src/components/sections/Courses.jsx`
  - `src/components/sections/Hero.jsx`
  - `src/components/common/EnquiryModal.jsx`
  - `src/components/layout/Footer.jsx`
  - `src/components/sections/FAQ.jsx`
  - `src/components/sections/Instructors.jsx`
  - `src/components/sections/Testimonials.jsx`
  - `index.html`
  - `README.md`
  - `task.md`
  - `changes.md`
- What changed:
  1. Updated `Courses.jsx` with the exact curriculum requested by the user:
     - Artificial Intelligence (AI) for Class 6–10 (CBSE Code 417, ICSE, WB Board).
     - Data Science & Python Analytics (Class 8–10, Senior Secondary & College).
     - ICSE & ISC Computer Applications / Science (Java / BlueJ OOPs, Board Papers & Practicals).
     - CBSE Computer Science & IT (Python, MySQL, Cyber Safety & Practical Files).
     - West Bengal Board Computer Applications (Class 6–12 WBBSE Madhyamik & WBCHSE Modern Computer Applications in English & Bengali).
     - Graduation Batches for B.Sc, B.Tech & BCA (Computer Science Major — DSA, C/C++, Java, DBMS, University Semester Labs & Projects).
  2. Implemented responsive multi-category filter tabs: `All`, `Class 6–10 (School)`, `CBSE / ICSE / ISC`, `WB Board`, `B.Sc / B.Tech / BCA`, and `AI & Data Science`.
  3. Synchronized `Hero.jsx` interactive fanned card deck with the updated courses, plus updated headline and trust badges to highlight school boards and college graduation batches.
  4. Updated `EnquiryModal.jsx` dropdown `COURSES_LIST` so students/parents can select their exact school board and graduation batches with direct WhatsApp integration.
  5. Updated `Footer.jsx` featured courses list.
  6. Updated `FAQ.jsx`, `Instructors.jsx`, `Testimonials.jsx`, and `index.html` (SEO meta title, description, keywords, and JSON-LD schema) to reflect the AI, Data Science, Board exam, and University CS major programs.
- Why: User requested replacing the generic foundational courses with targeted academic courses for AI, Data Science, Computer Science, Computer Applications across Class 6–10 (CBSE, ICSE, ISC, WB Board) and graduation batches for B.Sc, B.Tech & BCA in CS major.
- Approved by user: Yes (requested directly with screenshot reference).
- Notes / follow-ups: All design tokens, theme rules, and responsive layouts fully preserved.

---

### [2026-11-23 02:26] CHANGE-010
- Task ID: TASK-2.1, TASK-2.2, TASK-2.6, TASK-2.8, TASK-2.13, TASK-2.14, TASK-2.15, TASK-3.4
- Type: Refactor / Content / UX
- Files affected:
  - `src/App.jsx`
  - `src/components/layout/Navbar.jsx`
  - `src/components/layout/Footer.jsx`
  - `src/components/sections/Hero.jsx`
  - `src/components/sections/Courses.jsx`
  - `src/components/sections/HowItWorks.jsx`
  - `src/components/sections/Results.jsx`
  - `src/components/sections/FeesQuote.jsx`
  - `src/components/sections/OfferBanner.jsx`
  - `src/components/sections/FinalCTA.jsx`
  - `src/components/sections/ContactLocation.jsx`
  - `src/components/sections/FAQ.jsx`
  - `src/components/common/EnquiryModal.jsx`
  - `src/components/common/LegalModal.jsx`
  - `src/utils/analytics.js`
  - `README.md`
  - `task.md`
  - `changes.md`
- What changed:
  1. Completely removed all demo class sections, CTAs, headings, questions, and references across the codebase:
     - Replaced FAQ #6 with an admission and enrollment process question & answer.
     - Refactored `HowItWorks.jsx` Step 1 from "Book a Free Demo Class" to "Submit Course Enquiry".
     - Updated `FinalCTA.jsx` and `Results.jsx` to focus on admission enquiry, workstation reservations, and academic preparation.
     - Changed all primary CTA buttons from "Book a Free Demo Class" / "Demo" to "Enquire Now" / "Submit Course Enquiry".
     - Updated `EnquiryModal.jsx` to "Admission & Batch Enquiry" with tailored WhatsApp dispatch text asking for batch timings, syllabus, and fee details.
     - Updated `OfferBanner.jsx` from demo booking promotion to admission academic mentoring offer.
     - Updated `LegalModal.jsx` privacy policy text to refer to admission enquiries.
     - Renamed handlers and props in `App.jsx` from demo naming to `onOpenEnquiryModal`.
- Why: User requested removing all demo class sections and focusing on course admissions and direct academic enquiries.
- Approved by user: Yes (user instructed "remove all demo class sections").
- Notes / follow-ups: All links, forms, and WhatsApp actions remain 100% operational.

---

## Pending Approvals
- None (All phases 1–6 complete).

---

## Deviations from Plan
- None.

---

## Suggestions
1. **Lottie / Lightweight Motion Graphic**: For the hero visual, propose using a lightweight JSON animation (or SVG illustration) depicting interactive computer learning and coding to keep mobile load times well within Lighthouse 90+.
2. **Bengali / English Bilingual Toggle**: If bilingual support is chosen, suggest storing translations in JSON dictionaries (`src/locales/en.json`, `src/locales/bn.json`) managed via a lightweight context provider.
3. **WhatsApp Pre-filled Course Parameter**: When a visitor clicks "Enquire" on a specific course card, dynamically populate the WhatsApp pre-filled text with that specific course name (e.g. `Hi AIM Computer Academy, I want to enquire about the [Course Name] course`).

---

## Open Questions
1. **Course List & Modes**: [RESOLVED] User specified AI, Data Science, Computer Science, Computer Applications for Class 6-10 (CBSE, ICSE, ISC, WB Board) and Graduation Batches for B.Sc, B.Tech & BCA in CS major.
2. **Form Backend Selection**: Which backend handler should be connected to the demo booking/enquiry form (WhatsApp redirect, Google Sheets script, EmailJS, or REST API endpoint)?

---

## Placeholders to Replace
The following items are active placeholders and must be replaced once official data or assets are supplied by the user:

1. **Address & City**: `[PLACEHOLDER: Institute Address & City to be provided]`.
2. **Working Hours**: `[PLACEHOLDER: Institute Working Hours to be provided]`.
3. **Year of Establishment**: `[PLACEHOLDER: Established Year to be provided]`.
4. **Courses List & Details**: [RESOLVED] Integrated full curriculum for AI, Data Science, ICSE/ISC, CBSE CS/IT, WB Board, and B.Sc/B.Tech/BCA (CS Major).
5. **Fees / Fee Quote Ranges**: `[PLACEHOLDER: Course fee structures and fee quote path]`.
6. **Testimonials**: `[PLACEHOLDER: Student reviews, photos, names, and course completed]`.
7. **Results & Student Achievements**: `[PLACEHOLDER: Verified student hiring, certifications, and placement highlights]`.
8. **Instructor Details**: `[PLACEHOLDER: Instructor names, photos, qualifications, and years of teaching experience]`.
9. **Classroom / Lab Gallery**: `[PLACEHOLDER: Lab environment and computer setup photos/videos]`.
10. **Form Backend Handler**: `[PLACEHOLDER: Form submission action pending backend choice]`.
11. **Offer Banner / Countdown**: `[PLACEHOLDER: Active promotional offer details, if any]`.
