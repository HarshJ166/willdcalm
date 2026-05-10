import Image from 'next/image';
import type { NavLink } from '@/data/homeData';

interface SocialLink {
  label: string;
  href: string;
  iconSrc: string;
  iconSize?: number;
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
    <footer id="footer" className="relative isolate z-20 w-full bg-[#65785e] px-0 py-0 ">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/design/web-noise-bg.svg')] bg-cover bg-center opacity-[0.10] mix-blend-soft-light" aria-hidden="true" />
      <div className="relative z-[1] flex w-full flex-col bg-transparent pb-[2.5rem] pt-[3.5625rem] ">
        <div className="mb-[4.625rem] grid w-full grid-cols-[3fr_2fr] gap-x-4 gap-y-0 ">
          <nav className="flex flex-col gap-[0.5rem] ">
            {col1Links.map((link) => (
              <a key={link.href} href={link.href} className="font-sans text-[0.875rem] uppercase text-[#f6f2e9] ">
                {link.label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-[0.5rem] ">
            {col2Links.map((link) => (
              <a key={link.href} href={link.href} className="font-sans text-[0.875rem] uppercase text-[#f6f2e9] ">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="col-span-2 mt-[2.375rem] h-px w-full bg-[rgba(245,241,232,0.28)] " />
          <address className="col-span-2 mt-[2.3125rem] flex max-w-none flex-col gap-[1.875rem] not-italic text-left ">
            <p className="font-sans text-[0.875rem] text-[#f6f2e9] ">
              <strong className="mb-1 block font-sans text-[0.875rem] font-semibold uppercase text-[#f6f2e9] ">
                WILDCALM SASAN GIR
              </strong>
              <span className="whitespace-pre-line">{contact.address}</span>
            </p>
            <p className="font-sans text-[0.875rem] text-[#f6f2e9] ">
              <strong className="mb-1 block font-sans text-[0.875rem] font-semibold uppercase text-[#f6f2e9] ">
                FOR RESERVATIONS
              </strong>
              {contact.phone}
              <br />
              <a href={`mailto:${contact.email}`} className="font-sans lowercase text-[#f6f2e9]">
                {contact.email}
              </a>
            </p>
          </address>
        </div>

        <div className="flex w-full flex-col gap-[0.875rem]">
          <div className="flex w-full items-center justify-between gap-2 ">
          <div className="flex flex-col items-start gap-2 ">
            <span className="font-sans text-[0.875rem] text-[#f6f2e9] ">
              Follow us
            </span>
            <div className="inline-flex items-center gap-[0.875rem] ">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex items-center justify-center opacity-80 transition-opacity hover:opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={s.iconSrc} alt="" width={s.iconSize ?? 22} height={s.iconSize ?? 22} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="shrink-0 ">
            <div className="relative z-30 h-[clamp(1.8rem,6.4vw,2.4rem)] w-[clamp(6rem,21.3vw,8rem)] shrink-0 ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/design/Footer/wild-calm-logo.svg"
                alt="Wild Calm logo"
                className="relative z-30 block h-full w-full object-contain [filter:brightness(0)_saturate(100%)_invert(92%)_sepia(16%)_saturate(220%)_hue-rotate(350deg)_brightness(103%)_contrast(92%)]"
              />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[rgba(245,241,232,0.28)]" />

        <div className="flex w-full flex-wrap items-start justify-between gap-2 pb-1 pt-2 font-sans text-[0.625rem] font-[200] text-[rgba(246,242,233,0.92)] ">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
          <span>
            Designed By{' '}
            <a href="https://netglobes.com/" target="_blank" rel="noopener noreferrer" className="font-sans text-[#f6f2e9]">
              <strong className="font-[400]">Netglobes</strong>
            </a>
          </span>
        </div>
        </div>
      </div>
    </footer>
  );
}
