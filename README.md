# AIM COMPUTER ACADEMY — Landing Page

A complete, production-quality, responsive landing page for **AIM COMPUTER ACADEMY**, built with a plan-first methodology, warm Cream & Brown design aesthetic, and an interactive course showcase.

[![Repository](https://img.shields.io/badge/GitHub-sounavadas08%2FAim--Computer--Academy-5C3D2E?style=flat-square&logo=github)](https://github.com/sounavadas08/Aim-Computer-Academy)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

---

## 🏛️ Institute Details (Single Source of Truth)

All contact channels and institutional details are centralized in [`src/config/site.js`](src/config/site.js):
- **Institute Name**: AIM COMPUTER ACADEMY
- **Phone**: `+91 79809 61475` (`tel:+917980961475`)
- **Email**: `aimcomputeracademy2016@gmail.com` (`mailto:aimcomputeracademy2016@gmail.com`)
- **Instagram**: [`@aimcomputer.in`](https://instagram.com/aimcomputer.in)
- **WhatsApp**: `+91 79809 61475` with pre-filled enquiry text:
  `https://wa.me/917980961475?text=Hi%20AIM%20Computer%20Academy%2C%20I%20want%20to%20know%20more%20about%20your%20courses`

---

## 🎨 Design System: Cream & Brown Aesthetic

The visual theme is warm, premium, friendly, and trustworthy. All color tokens, radii, and shadows are defined in [`src/styles/tokens.css`](src/styles/tokens.css):

| Token Name | Hex Code | Purpose | Contrast Ratio |
| :--- | :--- | :--- | :--- |
| `--color-cream-bg` | `#FAF3E8` | Page body & primary background | Base canvas |
| `--color-cream-surface` | `#F3E7D3` | Cards, panels, elevated elements | Neutral surface |
| `--color-brown-primary` | `#5C3D2E` | Brand buttons, section headers | 5.7:1 (WCAG AA) |
| `--color-brown-dark` | `#3B2418` | Primary text, bold headlines | 9.8:1 (WCAG AAA) |
| `--color-caramel-accent` | `#B07A4F` | Badges, hover states, highlights | Accent state |

- **Typography**: Local **Roboto** font family provided in `static/` registered via `@font-face` in [`src/styles/fonts.css`](src/styles/fonts.css).
- **Motion**: Restrained, lightweight CSS transitions on `transform` and `opacity` with full `@media (prefers-reduced-motion: reduce)` accessibility compliance.

---

## 📑 17 Landing Page Sections

1. **Navbar**: Sticky blur-on-scroll header with official logo, phone dialer, navigation links, and accessible mobile drawer.
2. **Hero**: Outcome-driven headline (`Master Practical Computer Skills. Build a Career That Thrives`), CTAs (Demo, WhatsApp, Phone), and an **interactive fanned-out 5-card course deck** inspired by the Swiss reference UI.
3. **Trust Strip**: Animated milestone counters for 2500+ students, 8+ years, 15+ courses, and 100% lab terminal focus.
4. **Courses**: Full program catalog with category filters (Basic IT, MS Office, Tally Prime + GST, Web Design, Python, Graphic Design) with course enquiry triggers.
5. **Why Choose Us**: 6 institutional pillars (hands-on practice, small batches, personal coaching, recognized certification, career prep, doubt clearing).
6. **How It Works**: 4-step progressive stepper from demo booking to certification.
7. **Instructors**: Faculty credentials, experience, and domain specialties.
8. **Results & Achievements**: Real-world project submissions and career milestone highlights.
9. **Testimonials**: Interactive review carousel with student quotes, roles, and 5-star ratings.
10. **Fees & Quote**: Transparent fee policy with custom fee estimate prompt.
11. **Lead Magnet**: High-converting 2026 course syllabus and brochure download card.
12. **Gallery**: Modern air-conditioned computer lab and classroom environment highlights.
13. **FAQ**: Accessible accordion covering common admissions, certifications, and schedule queries.
14. **Offer Banner**: Admission offer banner with direct reservation action.
15. **Final CTA**: High-impact closing callout to book demo seats.
16. **Contact & Location**: Campus address placeholder, interactive map placeholder, hours, and direct links.
17. **Footer**: Logo, mission, navigation links, contact info, Instagram link, and legal policy modals.

---

## ⚡ Conversion Features

- **Floating WhatsApp Pill**: Sticky bottom-right button opening direct WhatsApp chat with pre-filled enquiry.
- **Mobile Sticky Call Button**: One-tap phone dialer for immediate mobile inquiries.
- **Validated Demo Booking Modal**: Complete enquiry modal validating full name (min 2 chars) and 10-digit Indian mobile number with direct WhatsApp dispatch.
- **Event Analytics Tracker**: Built-in [`src/utils/analytics.js`](src/utils/analytics.js) tracking WhatsApp clicks, phone calls, demo bookings, and brochure downloads with GTM / GA4 `dataLayer` integration.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+ recommended, tested on Node v24 LTS)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/sounavadas08/Aim-Computer-Academy.git

# Navigate to project folder
cd Aim-Computer-Academy

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📋 Governance Files

Strict plan-first development governed by three core files in the project root:
- [`task.md`](task.md): Master phased plan and checklist.
- [`rules.md`](rules.md): 18 non-negotiable project rules.
- [`changes.md`](changes.md): Running chronological change log.

---

## 📄 License
MIT License. © 2026 AIM COMPUTER ACADEMY. All rights reserved.
