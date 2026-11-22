import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/layout/FloatingContact';
import EnquiryModal from './components/common/EnquiryModal';
import LegalModal from './components/common/LegalModal';

// Phase 2 Sections (In Exact Sequential Order 1-17)
import Hero from './components/sections/Hero';
import TrustStrip from './components/sections/TrustStrip';
import Courses from './components/sections/Courses';
import WhyChooseUs from './components/sections/WhyChooseUs';
import HowItWorks from './components/sections/HowItWorks';
import Instructors from './components/sections/Instructors';
import Results from './components/sections/Results';
import Testimonials from './components/sections/Testimonials';
import FeesQuote from './components/sections/FeesQuote';
import LeadMagnet from './components/sections/LeadMagnet';
import Gallery from './components/sections/Gallery';
import FAQ from './components/sections/FAQ';
import OfferBanner from './components/sections/OfferBanner';
import FinalCTA from './components/sections/FinalCTA';
import ContactLocation from './components/sections/ContactLocation';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState('');
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState('privacy');

  const handleOpenDemoModal = (courseName = '') => {
    setPreselectedCourse(courseName);
    setDemoModalOpen(true);
  };

  const handleOpenLegalModal = (type = 'privacy') => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF3E8] text-[#3B2418]">
      {/* 1. Navbar (Sticky with blur on scroll, logo, links, CTA) */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      <main className="flex-1">
        {/* 2. Hero: outcome headline, fanned-out interactive course deck */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* 3. Trust Strip: animated counters for students, years, courses */}
        <TrustStrip />

        {/* 4. Courses: interactive course catalog with enquiry buttons */}
        <Courses onOpenDemoModal={handleOpenDemoModal} />

        {/* 5. Why Choose Us: practical training, small batches, personal attention */}
        <WhyChooseUs />

        {/* 6. How It Works: 4-step progressive learning stepper */}
        <HowItWorks onOpenDemoModal={handleOpenDemoModal} />

        {/* 7. Instructors: faculty credentials & experience */}
        <Instructors />

        {/* 8. Results / Student Achievements & Certificates */}
        <Results onOpenDemoModal={handleOpenDemoModal} />

        {/* 9. Testimonials: student reviews carousel */}
        <Testimonials />

        {/* 10. Fees / Fee Quote request path */}
        <FeesQuote onOpenDemoModal={handleOpenDemoModal} />

        {/* 11. Free Resources Lead Magnet: syllabus download */}
        <LeadMagnet />

        {/* 12. Gallery: computer lab & classroom environment */}
        <Gallery />

        {/* 13. FAQ: accordion addressing fees, certificate, timings */}
        <FAQ />

        {/* 14. Offer Banner (conditional countdown & admission offer) */}
        <OfferBanner onOpenDemoModal={handleOpenDemoModal} hasOffer={true} />

        {/* 15. Final CTA: high-impact demo class invitation */}
        <FinalCTA onOpenDemoModal={handleOpenDemoModal} />

        {/* 16. Contact & Location: address, map placeholder, hours, links */}
        <ContactLocation onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* 17. Footer: links, contact info, Instagram, legal modals */}
      <Footer
        onOpenDemoModal={handleOpenDemoModal}
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Floating Sticky Conversion Actions (Phase 3) */}
      <FloatingContact />

      {/* Modals */}
      <EnquiryModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        preselectedCourse={preselectedCourse}
      />

      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        type={legalModalType}
      />
    </div>
  );
}
