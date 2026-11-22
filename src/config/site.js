/**
 * AIM COMPUTER ACADEMY — Central Site Configuration
 * Single source of truth for all institute details, contact links, and placeholder content.
 * Follows Rule 4: Never duplicate, alter, or hardcode outside this file.
 */

export const siteConfig = {
  name: "AIM COMPUTER ACADEMY",
  tagline: "Empowering Careers Through Practical Computer Education",
  
  // Official Contact Details (Exact as provided)
  phone: "7980961475",
  displayPhone: "+91 79809 61475",
  phoneDialUrl: "tel:+917980961475",
  
  email: "aimcomputeracademy2016@gmail.com",
  emailMailtoUrl: "mailto:aimcomputeracademy2016@gmail.com",
  
  instagram: {
    handle: "aimcomputer.in",
    url: "https://instagram.com/aimcomputer.in",
  },
  
  whatsapp: {
    number: "917980961475",
    prefilledText: "Hi AIM Computer Academy, I want to know more about your courses",
    url: "https://wa.me/917980961475?text=Hi%20AIM%20Computer%20Academy%2C%20I%20want%20to%20know%20more%20about%20your%20courses",
  },

  // Isolated Placeholders (Strictly tagged until provided by user)
  address: "[PLACEHOLDER: Institute Address, City, State, PIN]",
  city: "[PLACEHOLDER: City]",
  workingHours: "[PLACEHOLDER: Mon-Sat: 9:00 AM - 7:00 PM | Sun: Closed]",
  establishedYear: "[PLACEHOLDER: Established 2016]",
  googleMapEmbedUrl: "[PLACEHOLDER: Google Map Embed URL]",

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "Courses", href: "#courses" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Instructors", href: "#instructors" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};
