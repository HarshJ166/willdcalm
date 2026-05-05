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
  { id: 'anurita', src: '/design/Home%20Page/Section%208%20-%20Testimonials/Anurita%20Jha.mp4', author: 'Anurita Jha' },
  { id: 'khushi', src: '/design/Home%20Page/Section%208%20-%20Testimonials/Khushi%20Jain.mp4', author: 'Khushi Jain' },
  { id: 'aparna', src: '/design/Home%20Page/Section%208%20-%20Testimonials/Aparna%20Dixit.mp4', author: 'Aparna Dixit' },
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
  { label: 'Sustainabilty', href: '#sustainability' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Rates', href: '#rates' },
];

const FOOTER_COL2: typeof navLinks = [
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#faq' },
  { label: 'Media Kit', href: '#media' },
  { label: 'News & Insights', href: '#news' },
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
];

const FOOTER_SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/wildcalmsasangir',
    iconSrc: '/design/Footer/Instagram.svg',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/wildcalmsasangir',
    iconSrc: '/design/Footer/facebook.svg',
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/wildcalm',
    iconSrc: '/design/Footer/pinterest.svg',
  },
  {
    label: 'X (Twitter)',
    href: 'https://www.x.com/wildcalm',
    iconSrc: '/design/Footer/twitter.svg',
    iconSize: 23,
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
    <main className="relative w-full bg-[var(--sage-hero)]">
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
        subheadingDesktop="Wild Calm retreat near Sasan Gir offers a refined nature experience, surrounded by forest and countryside. It blends peaceful stays with immersive moments & quiet luxury escapes in serene surroundings."
        subheadingMobile="Wild Calm retreat near Sasan Gir offers a refined nature escape, blending peaceful stays with immersive moments and quiet luxury in serene forest surroundings."
        videoSrcDesktop="/design/Home Page/Section 1 - Banner/Desktop/Banner Video.mp4"
        videoSrcMobile="/design/Home%20Page/Section%201%20-%20Banner/Mobile%20Version/front%20banner%20video_phone%20version.mp4"
      />

      {/* Spacer so scrollable content sits below the fixed hero */}
      <div className="h-[100dvh]" aria-hidden="true" />

      <About
        imageSrc="/design/Home Page/Section 2 - Lion/Sasan Gir_Lion-converted-from-png.webp"
        location="Sasangir  .  Gujarat  .  India"
        heading="Asiatic Lion at Sasan Gir"
        body="Wildlife Sasan Gir Forest Gir National Park WildCalm Retreat Nature Safari Asiatic Lion Forest Gujarat India."
      />

      <Accommodation
        roomCount={30}
        courtyardCount={15}
        heading={<span style={{ fontWeight: 100 }}>WildCalm Resort offers elegant, tranquil accommodations with premium comforts for a truly refined stay.</span>}
        body="A refined collection of rooms and private pool villas, crafted for elevated comfort, privacy, and immersive nature."
        badgeText="ACCOMODATION"
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
        label="AMENITIES"
        heading={`Refined Premium\nLifestyle Amenities\nDesigned for a\nSeamless and\nRelaxing Stay`}
      />

      <Events
        label="Events & Celebrations"
        sectionHeading="A refined sanctuary for bespoke weddings and executive retreats"
        blocks={[
          {
            heading: 'Celebrate Your Wedding with Timeless Grace and Elegance',
            body: 'Elevate executive retreats and bespoke destination weddings in a refined setting designed for professional focus and elegant celebrations.',
            imageSrc: '/design/Home Page/Section 7 - Events & Celebrations/freepik_photo-an-outdoor-wedding-_2855361114.webp',
            imageAlt: 'WildCalm wedding venue',
            ctaHref: '#faq',
            ctaLabel: 'More About Us',
          },
          {
            heading: 'Corporate Retreats in a Serene and Elegant Destination Setting',
            body: 'Host meaningful gatherings where refined spaces, natural surroundings, and seamless hospitality come together to create truly memorable and effortlessly elevated experiences, thoughtfully designed with attention to every detail.',
            imageSrc: '/design/Home Page/Section 7 - Events & Celebrations/freepik_2855367418.webp',
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
        mapSrc="https://www.google.com/maps?q=Wild+Calm,+Sasan+Gir,+Sasan+Talala+Road+opp+Mansadevi+Temple,+near+Woods,+Sasan+Gir,+Sasan+sasan,+Gujarat+362150&output=embed"
      />

      <Faq
        faqs={faqs}
        openId={openFaqId}
        onToggle={handleFaqToggle}
      />

      <CTA
        quote="Raw wilderness and refined luxury meet in a state of intentional stillness."
        imageSrc="/design/Home Page/Section 10 - CTA/Desktop/Lion.webp"
        ctaHref="#faq"
      />

      <Footer
        col1Links={FOOTER_COL1}
        col2Links={FOOTER_COL2}
        contact={{
          address: 'Survey No: 59/P1, Borvav\nSasan Talala Road  Sasan Gir\nGujarat - 362150',
          phone: '9918019918  |  9213005439',
          email: 'sasan.stay@wildcalm.in',
        }}
        socials={FOOTER_SOCIALS}
      />
    </main>
  );
}
