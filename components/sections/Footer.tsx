import Image from 'next/image';
import type { ReactNode } from 'react';
import type { NavLink } from '@/data/homeData';

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

interface FooterContact {
  address: string;
  phone: string;
  email: string;
}

interface FooterProps {
  col1Links: NavLink[];
  col2Links: NavLink[];
  contact: FooterContact;
  socials: SocialLink[];
}

export default function Footer({ col1Links, col2Links, contact, socials }: FooterProps) {
  return (
    <footer id="footer" className="relative w-full overflow-hidden bg-[#54694f] bg-[url('/design/web-noise-bg.svg')] bg-cover bg-center px-0 py-0 text-[var(--text-cream)]">
      <div className="flex min-h-[41.25rem] w-full flex-col border border-white/35 bg-[var(--wc-footer-mobile-bg)] bg-[url('/design/web-noise-bg.svg')] bg-cover bg-center px-[var(--wc-mobile-nav-pad-x)] pb-0 pt-[3.5625rem] md:min-h-[37rem] md:border-0 md:bg-transparent md:px-[var(--wc-page-gutter)] md:pb-[var(--wc-footer-pad-bottom)] md:pt-[var(--wc-footer-pad-top)]">
        <div className="grid w-full grid-cols-[minmax(0,11.9375rem)_minmax(0,7.9375rem)] justify-between gap-x-4 gap-y-3 md:flex md:gap-8">
          <nav className="flex flex-col gap-3 md:min-w-[7.6875rem] md:gap-4">
            {col1Links.map((link) => (
              <a key={link.href} href={link.href} className="font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-[1.125rem] text-[#f6f2e9] md:text-[clamp(0.8125rem,1.05vw,1.1875rem)] md:leading-[1.22]">
                {link.label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-3 md:ml-4 md:min-w-[12.625rem] md:gap-4">
            {col2Links.map((link) => (
              <a key={link.href} href={link.href} className="font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-[1.125rem] text-[#f6f2e9] md:text-[clamp(0.8125rem,1.05vw,1.1875rem)] md:leading-[1.22]">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="col-span-2 mt-3 h-px w-full bg-[rgba(245,241,232,0.28)] md:hidden" />
          <address className="col-span-2 flex max-w-none flex-col gap-[1.375rem] not-italic text-left md:ml-auto md:max-w-[20.375rem] md:text-right">
            <p className="font-[Pilcrow_Rounded] text-[0.875rem] leading-[1.125rem] text-[#f6f2e9] md:text-[clamp(0.8125rem,1vw,1.125rem)] md:leading-[1.45]">
              <strong className="mb-1 block font-[Pilcrow_Rounded] text-[0.875rem] font-semibold uppercase tracking-[0.04em] text-[#f6f2e9] md:text-[clamp(0.9375rem,1.12vw,1.25rem)] md:font-medium md:tracking-normal">
                WILDCALM SASAN GIR
              </strong>
              {contact.address}
            </p>
            <p className="font-[Pilcrow_Rounded] text-[0.875rem] leading-[1.125rem] text-[#f6f2e9] md:text-[clamp(0.8125rem,1vw,1.125rem)] md:leading-[1.45]">
              <strong className="mb-1 block font-[Pilcrow_Rounded] text-[0.875rem] font-semibold uppercase tracking-[0.04em] text-[#f6f2e9] md:text-[clamp(0.9375rem,1.12vw,1.25rem)] md:font-medium md:tracking-normal">
                FOR RESERVATIONS
              </strong>
              {contact.phone} | 9213005439
              <br />
              <a href={`mailto:${contact.email}`} className="font-[Pilcrow_Rounded] lowercase text-[#f6f2e9]">
                {contact.email}
              </a>
            </p>
          </address>
        </div>

        <div className="mt-4 h-px w-full bg-[rgba(245,241,232,0.28)] md:mt-auto" />

        <div className="grid w-full grid-cols-[minmax(0,1fr)_max-content] items-start gap-2 py-3 md:flex md:items-center md:justify-between md:py-4">
          <div className="flex max-w-[8.5rem] flex-col items-start gap-2 md:max-w-none md:flex-row md:items-center">
            <span className="font-[Pilcrow_Rounded] text-[0.875rem] leading-[1.5625rem] text-[#f6f2e9] md:text-[clamp(0.9375rem,1.15vw,1.25rem)]">
              Follow us
            </span>
            <div className="inline-flex items-center gap-2 md:gap-[0.9375rem]">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex items-center justify-center text-[#f5f1e8] opacity-80 transition-opacity hover:opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="justify-self-end md:ml-auto md:max-w-[20.375rem]">
            <div className="relative w-[min(8rem,42vw)] md:w-[var(--wc-footer-logo-width)]">
              <Image src="/design/Footer/wild-calm-logo.svg" alt="Wild Calm logo" width={328} height={74} className="h-auto w-full object-contain object-right" />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[rgba(245,241,232,0.28)]" />

        <div className="flex w-full flex-wrap items-start justify-between gap-2 pb-1 pt-2 font-poppins text-[0.625rem] font-[200] leading-[1.625rem] text-[rgba(246,242,233,0.92)] md:pb-0 md:pt-1 md:text-[clamp(0.75rem,0.95vw,1.125rem)] md:text-[rgba(245,241,232,0.78)]">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
          <span>
            Designed By <strong className="font-[400]">Netglobes</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
