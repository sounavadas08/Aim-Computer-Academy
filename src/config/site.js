/**
 * AIM COMPUTER ACADEMY — Central Site Configuration
 * Single source of truth for all institute details, contact links, and placeholder content.
 * Follows Rule 4: Never duplicate, alter, or hardcode outside this file.
 */

export const siteConfig = {
  name: "AIM COMPUTER ACADEMY",
  tagline: "Empowering Careers Through Practical Computer Education",

  // Official Contact Details (Exact as provided)
  phone: "9331126294",
  displayPhone: "+91 93311 26294",
  phoneDialUrl: "tel:+919331126294",

  email: "aimcomputeracademy2016@gmail.com",
  emailMailtoUrl: "mailto:aimcomputeracademy2016@gmail.com",

  instagram: {
    handle: "aimcomputer.in",
    url: "https://instagram.com/aimcomputer.in",
  },

  whatsapp: {
    number: "919331126294",
    prefilledText: "Hi AIM Computer Academy, I want to know more about your courses",
    url: "https://wa.me/919331126294?text=Hi%20AIM%20Computer%20Academy%2C%20I%20want%20to%20know%20more%20about%20your%20courses",
  },

  // Official Google Maps Integration
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.9659930736257!2d88.38215537610694!3d22.76664327935362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b6e0b6c264f%3A0xbad6dfdf84ab652f!2sAIM%20COMPUTER%20ACADEMY!5e0!3m2!1sen!2sin!4v1795383080402!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://maps.google.com/?cid=13463131705886696751",

  // Isolated Placeholders (Strictly tagged until provided by user)
  address: "24/A, Barrackpore - Barasat Rd, Jaffarpur more, Wireless Para, Anandapuri, Barrackpore, West Bengal 700122",
  city: "[PLACEHOLDER: City]",
  workingHours: "Mon-Sat: 9:00 AM - 7:00 PM | Sun: Closed",
  establishedYear: "Established 2016",

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
