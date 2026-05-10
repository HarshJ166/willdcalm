'use client';

import { useState } from 'react';

import {
  navLinks,
  menuLinks,
  footerCol1Links,
  footerCol2Links,
  footerSocials,
  footerContact,
} from '@/data/homeData';

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative w-full ">
      <Navbar
        navLinks={navLinks}
        menuLinks={menuLinks}
        menuOpen={menuOpen}
        onMenuOpen={() => setMenuOpen(true)}
        onMenuClose={() => setMenuOpen(false)}
      />

      <Footer
        col1Links={footerCol1Links}
        col2Links={footerCol2Links}
        contact={footerContact}
        socials={footerSocials}
      />
    </main>
  );
}
