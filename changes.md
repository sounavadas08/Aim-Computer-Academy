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

## Pending Approvals
1. **Phase 4 & Phase 5 Execution**: Proceed to motion polish, accessibility checks, responsive verification, and SEO audit.

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
1. **Course List & Modes**: What courses should be featured (title, duration, mode: Online/Offline/Hybrid, target audience)?
2. **Form Backend Selection**: Which backend handler should be connected to the demo booking/enquiry form (WhatsApp redirect, Google Sheets script, EmailJS, or REST API endpoint)?

---

## Placeholders to Replace
The following items are active placeholders and must be replaced once official data or assets are supplied by the user:

1. **Address & City**: `[PLACEHOLDER: Institute Address & City to be provided]`.
2. **Working Hours**: `[PLACEHOLDER: Institute Working Hours to be provided]`.
3. **Year of Establishment**: `[PLACEHOLDER: Established Year to be provided]`.
4. **Courses List & Details**: `[PLACEHOLDER: 4-6 representative course cards with syllabus, duration, mode, and batch timings]`.
5. **Fees / Fee Quote Ranges**: `[PLACEHOLDER: Course fee structures and fee quote path]`.
6. **Testimonials**: `[PLACEHOLDER: Student reviews, photos, names, and course completed]`.
7. **Results & Student Achievements**: `[PLACEHOLDER: Verified student hiring, certifications, and placement highlights]`.
8. **Instructor Details**: `[PLACEHOLDER: Instructor names, photos, qualifications, and years of teaching experience]`.
9. **Classroom / Lab Gallery**: `[PLACEHOLDER: Lab environment and computer setup photos/videos]`.
10. **Form Backend Handler**: `[PLACEHOLDER: Form submission action pending backend choice]`.
11. **Offer Banner / Countdown**: `[PLACEHOLDER: Active promotional offer details, if any]`.
