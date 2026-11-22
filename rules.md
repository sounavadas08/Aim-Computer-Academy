# AIM COMPUTER ACADEMY — Project Governance Rules

These 18 rules are non-negotiable and govern all design, development, content, and deployment decisions for the AIM COMPUTER ACADEMY landing page project.

---

### 1. COMPONENTS
Use ONLY the UI components provided by the user in `src/provided-components/` (or the user-specified directory). Do not substitute, recreate, restyle, or "improve" them. If a section needs a component that has not been provided, STOP and ask the user. Do not invent one or pull one from an external library independently.

### 2. FONTS
Use ONLY the fonts provided by the user in `src/assets/fonts/` (or the user-specified path). Register them with `@font-face` or the Vite-supported method. Do not substitute Google Fonts or system fonts without explicit approval. Fonts: `[HEADING FONT: TO BE PROVIDED]`, `[BODY FONT: TO BE PROVIDED]`, `[ACCENT FONT, if any: TO BE PROVIDED]`.

### 3. THEME
Cream and brown only, defined via the central design tokens file (`src/styles/tokens.css` or equivalent). No hardcoded colors outside this file. Any palette or contrast changes require explicit user approval.
- Cream Background: `#FAF3E8`
- Soft Cream Surface/Cards: `#F3E7D3`
- Primary Brown: `#5C3D2E`
- Dark Brown (Text, Headings): `#3B2418`
- Accent Caramel (Highlights, CTA Hover): `#B07A4F`

### 4. INSTITUTE DETAILS
Use the institute name, phone number, email, WhatsApp number, and Instagram handle exactly as given, sourced exclusively from the central config file (`src/config/site.js`). Never alter or duplicate them. Never invent an address, city, working hours, established year, fee structures, courses, results, or testimonials. Use `[PLACEHOLDER]` tags for unprovided data.
- Institute Name: `AIM COMPUTER ACADEMY`
- Phone: `7980961475`
- Email: `aimcomputeracademy2016@gmail.com`
- Instagram: `aimcomputer.in` (Link: `https://instagram.com/aimcomputer.in`)
- WhatsApp: `917980961475` (Country code 91 + 7980961475)

### 5. REFERENCE VIDEO
Follow the provided reference UI video for layout, section order, spacing scale, animation style, timing, and overall feel, but never copy brand assets, logos, or texts from it. If any aspect of the reference video is unclear, ask the user. Do not guess.

### 6. STICK TO THE PLAN
Follow `task.md` exactly, in sequential order. Do not add, remove, reorder, or skip tasks or sections without explicit user approval.

### 7. NO SILENT CHANGES
Never change any file, dependency, configuration, design decision, copy, structure, or approved plan item without notifying the user first. Explain what needs to change and why, then WAIT for explicit user approval before proceeding.

### 8. DEPENDENCIES
Install only what is listed and approved in `task.md`. Always ask before adding any package, and state its package size, purpose, and impact on bundle performance.

### 9. LOGGING
Every change, regardless of size, must be logged in `changes.md` at the exact time it is made. No exceptions.

### 10. TASK STATUS
Update `task.md` immediately after completing each task. Do not mark a task as `Done` until every one of its acceptance criteria has been rigorously met and verified.

### 11. SCOPE
Do not build features or add sections that are not explicitly documented in `task.md`. Record suggestions in `changes.md` under the "Suggestions" section instead of implementing them preemptively.

### 12. CONTACT LINKS
WhatsApp, Call, Email, and Instagram links must work exactly as specified in Phase 3 of `task.md`:
- WhatsApp: `https://wa.me/917980961475?text=Hi%20AIM%20Computer%20Academy%2C%20I%20want%20to%20know%20more%20about%20your%20courses` with `target="_blank"` and `rel="noopener noreferrer"`
- Call: `tel:+917980961475`
- Email: `mailto:aimcomputeracademy2016@gmail.com`
- Instagram: `https://instagram.com/aimcomputer.in` with `target="_blank"` and `rel="noopener noreferrer"`
Test and verify that each link works on both mobile and desktop before marking its task as done.

### 13. QUALITY & PERFORMANCE
Mobile-first responsive architecture tested at 360px, 768px, 1024px, and 1440px. Fully accessible (WCAG AA contrast on both cream and brown surfaces, semantic HTML, ARIA attributes, keyboard navigability). Respect `prefers-reduced-motion`. Animate only `transform` and `opacity` to avoid layout thrashing. Target Lighthouse 90+ on mobile.

### 14. CODE STYLE
Clean, modular, well-commented code where non-obvious logic exists. Consistent naming conventions, reusable components, zero dead code, and zero console errors or warnings.

### 15. PLACEHOLDERS
Mark missing content unambiguously with `[PLACEHOLDER: ...]` markers and log each one under "Placeholders to Replace" in `changes.md`. Never present placeholder data as authentic or final.

### 16. COMMUNICATION
If anything is ambiguous, pause and ask the user rather than making assumptions. Before starting each phase, summarize the planned actions and await the user's explicit "go".

### 17. NO DELETIONS
Never delete, overwrite, or mutate provided components, fonts, reference videos, or user-supplied asset files.

### 18. FILE HYGIENE
Strictly maintain the agreed project folder structure. Never create stray, undocumented, or temporary files outside designated directories.
