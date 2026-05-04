'use client';

import { useState } from 'react';

import {
  navLinks,
  menuLinks,
  accommodationRooms,
  experiences,
  amenities,
  faqs,
  transport,
} from '@/data/homeData';

import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Accommodation from '@/components/sections/Accommodation';
import CardsSection from '@/components/sections/CardsSection';
import Experiences from '@/components/sections/Experiences';
import Messaging from '@/components/sections/Messaging';
import HorizontalScroll from '@/components/sections/HorizontalScroll';
import Events from '@/components/sections/Events';
import Testimonials from '@/components/sections/Testimonials';
import GettingHere from '@/components/sections/GettingHere';
import Faq from '@/components/sections/Faq';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

const TESTIMONIAL_VIDEOS = [
  { id: 'anurita', src: '/design/Home Page/Section 8 - Testimonials/Anurita Jha.mp4', author: 'Anurita Jha' },
  { id: 'khushi', src: '/design/Home Page/Section 8 - Testimonials/Khushi Jain.mp4', author: 'Khushi Jain' },
  { id: 'aparna', src: '/design/Home Page/Section 8 - Testimonials/Aparna Dixit.mp4', author: 'Aparna Dixit' },
] as const;

const TESTIMONIAL_QUOTES = [
  { id: 'q1', text: 'Beautiful spaces and curated experiences created a perfect blend of comfort and serene tranquility.', author: 'Khushi' },
  { id: 'q2', text: 'Pure excellence. Every detail—from the service to the atmosphere was flawless.', author: 'Aparna Dixit' },
] as const;

const FOOTER_COL1: typeof navLinks = [
  { label: 'Our Story', href: '#about' },
  { label: 'The Stay', href: '#the-stay' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Amenities', href: '#amenities' },
];

const FOOTER_COL2: typeof navLinks = [
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Events', href: '#events' },
  { label: 'Rates', href: '#rates' },
  { label: 'Contact', href: '#faq' },
];

const FOOTER_SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/wildcalm.in',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/wildcalm',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState(0);
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0].id);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handleFaqToggle = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <main>
      <Navbar
        navLinks={navLinks}
        menuLinks={menuLinks}
        menuOpen={menuOpen}
        onMenuOpen={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
      />

      <Hero
        navLinks={navLinks}
        onMenuOpen={() => setMenuOpen(true)}
        heading="Where The West Wild Stays"
        subheadingDesktop="Sasan Gir · Gujarat · India"
        subheadingMobile="Sasan Gir · Gujarat"
        videoSrcDesktop="/design/Home Page/Section 1 - Hero/Hero_Desktop.mp4"
        videoSrcMobile="/design/Home Page/Section 1 - Hero/Hero_Mobile.mp4"
      />

      <About
        imageSrc="/design/Home Page/Section 2 - About/About.webp"
        location="Sasan Gir · Gujarat · India"
        heading="A sanctuary where the wild and the refined exist as one"
        body="Nestled near the buffer zone of Gir National Park, WildCalm is a luxury experiential resort designed for those who seek the extraordinary. Where nature's raw beauty meets considered comfort."
      />

      <Accommodation
        roomCount={30}
        courtyardCount={15}
        heading="Rooms crafted for the discerning traveller"
        body="Each space at WildCalm is a deliberate composition — materials drawn from the land, forms inspired by the forest, and service attuned to the unhurried pace of nature."
        badgeText="Experiential stays · Sasan Gir"
      />

      <CardsSection
        rooms={accommodationRooms}
        activeIndex={activeRoom}
        onRoomChange={setActiveRoom}
      />

      <Experiences experiences={experiences} />

      <Messaging line1="STAY WILD" line2="STAY CALM" />

      <HorizontalScroll
        amenities={amenities}
        label="Amenities"
        heading="Crafted for comfort"
      />

      <Events
        label="Events & Celebrations"
        sectionHeading="A refined sanctuary for bespoke weddings and executive retreats"
        blocks={[
          {
            heading: 'Celebrate Your Wedding with Timeless Grace and Elegance',
            body: 'From intimate ceremonies to grand wedding celebrations, every moment is thoughtfully curated with refined details, bespoke arrangements, and seamless hospitality, set against a serene backdrop for truly unforgettable memories.',
            imageSrc: '/design/Home Page/Section 7 - Events & Celebrations/Weddings.webp',
            imageAlt: 'WildCalm wedding venue',
            ctaHref: '#faq',
            ctaLabel: 'More About Us',
          },
          {
            heading: 'Corporate Retreats in a Serene and Elegant Destination Setting',
            body: 'Host meaningful gatherings where refined spaces, natural surroundings, and seamless hospitality come together to create truly memorable and effortlessly elevated experiences, thoughtfully designed with attention to every detail.',
            imageSrc: '/design/Home Page/Section 7 - Events & Celebrations/Corporate Retreat.webp',
            imageAlt: 'WildCalm corporate retreat',
            ctaHref: '#faq',
            ctaLabel: 'More About Us',
          },
        ]}
      />

      <Testimonials
        videos={TESTIMONIAL_VIDEOS}
        quotes={TESTIMONIAL_QUOTES}
        playingId={playingVideoId}
        onVideoToggle={(id) => setPlayingVideoId(id || null)}
      />

      <GettingHere
        transport={transport}
        mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d70.5!3d21.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA2JzAwLjAiTiA3MMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
      />

      <Faq
        faqs={faqs}
        openId={openFaqId}
        onToggle={handleFaqToggle}
      />

      <CTA
        quote="In every walk with nature, one receives far more than he seeks."
        quoteAuthor="John Muir"
        imageSrc="/design/Home Page/Section 10 - CTA/CTA.webp"
        ctaHref="#faq"
      />

      <Footer
        col1Links={FOOTER_COL1}
        col2Links={FOOTER_COL2}
        contact={{
          address: 'Near Sasan Gir National Park, Sasan Gir, Gujarat 362135',
          phone: '+91 9918-01-9918',
          email: 'sasan.stay@wildcalm.in',
        }}
        socials={FOOTER_SOCIALS}
      />
    </main>
  );
}
