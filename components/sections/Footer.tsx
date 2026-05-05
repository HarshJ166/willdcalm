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
    <footer id="footer" className="relative isolate z-20 w-full overflow-hidden bg-[#65785e] bg-[url('/design/web-noise-bg.svg')] bg-cover bg-center px-0 py-0 text-[var(--text-cream)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-2 bg-[#65785e]" aria-hidden="true" />
      <div className="flex min-h-[41.25rem] w-full flex-col bg-[#65785e] bg-[url('/design/web-noise-bg.svg')] bg-cover bg-center px-[var(--wc-mobile-nav-pad-x)] pb-0 pt-[3.5625rem] md:min-h-[clamp(28rem,48vw,37rem)] md:bg-transparent md:px-[var(--wc-page-gutter)] md:pb-[var(--wc-footer-pad-bottom)] md:pt-[var(--wc-footer-pad-top)]">
        <div className="mb-[4.625rem] grid w-full grid-cols-[minmax(0,11.9375rem)_minmax(0,7.9375rem)] justify-between gap-x-0 gap-y-0 md:mb-[clamp(3.5rem,6.5vw,6.5rem)] md:flex md:gap-8">
          <nav className="flex flex-col gap-3 md:min-w-[7.6875rem] md:gap-4">
            {col1Links.map((link) => (
              <a key={link.href} href={link.href} className="font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-[19px] text-[#f6f2e9] md:text-[clamp(0.8125rem,1.05vw,1.1875rem)] md:leading-[1.22]">
                {link.label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-3 md:ml-4 md:min-w-[12.625rem] md:gap-4">
            {col2Links.map((link) => (
              <a key={link.href} href={link.href} className="font-[Pilcrow_Rounded] text-[0.875rem] uppercase leading-[19px] text-[#f6f2e9] md:text-[clamp(0.8125rem,1.05vw,1.1875rem)] md:leading-[1.22]">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="col-span-2 mt-[2.375rem] h-px w-full bg-[rgba(245,241,232,0.28)] md:hidden" />
          <address className="col-span-2 mt-[2.3125rem] flex max-w-none flex-col gap-[1.875rem] not-italic text-left md:mt-0 md:ml-auto md:max-w-[20.375rem] md:text-right">
            <p className="font-[Pilcrow_Rounded] text-[0.875rem] leading-[1.125rem] text-[#f6f2e9] md:text-[clamp(0.8125rem,1vw,1.125rem)] md:leading-[1.45]">
              <strong className="mb-0 block font-[Pilcrow_Rounded] text-[0.875rem] font-semibold uppercase tracking-[0.04em] text-[#f6f2e9] md:text-[clamp(0.9375rem,1.12vw,1.25rem)] md:font-medium md:tracking-normal">
                WILDCALM SASAN GIR
              </strong>
              <span className="whitespace-pre-line">{contact.address}</span>
            </p>
            <p className="font-[Pilcrow_Rounded] text-[0.875rem] leading-[1.125rem] text-[#f6f2e9] md:text-[clamp(0.8125rem,1vw,1.125rem)] md:leading-[1.45]">
              <strong className="mb-0 block font-[Pilcrow_Rounded] text-[0.875rem] font-semibold uppercase tracking-[0.04em] text-[#f6f2e9] md:text-[clamp(0.9375rem,1.12vw,1.25rem)] md:font-medium md:tracking-normal">
                FOR RESERVATIONS
              </strong>
              {contact.phone}
              <br />
              <a href={`mailto:${contact.email}`} className="font-[Pilcrow_Rounded] lowercase text-[#f6f2e9]">
                {contact.email}
              </a>
            </p>
          </address>
        </div>

        <div className="flex w-full flex-col gap-[1.3125rem]">
          <div className="flex w-full items-center justify-between gap-2 md:flex md:items-center md:gap-6 md:py-0">
          <div className="flex flex-col items-start gap-[0.625rem] md:max-w-none md:flex-row md:items-center">
            <span className="font-[Pilcrow_Rounded] text-[0.875rem] leading-[1.5625rem] text-[#f6f2e9] md:text-[clamp(0.9375rem,1.15vw,1.25rem)]">
              Follow us
            </span>
            <div className="inline-flex items-center gap-[0.375rem] md:gap-[0.9375rem]">
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

          <div className="flex shrink-0 justify-end md:ml-auto md:max-w-[20.375rem]">
            <div className="relative z-30 h-[clamp(2.1875rem,6.4vw,2.4rem)] w-[clamp(7.25rem,21.3vw,8rem)] shrink-0 md:h-[clamp(2.99rem,4.16vw,3.9963rem)] md:w-[clamp(10rem,13.9vw,13.3731rem)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/design/Footer/wild-calm-logo.svg"
                alt="Wild Calm logo"
                className="relative z-30 block h-full w-full object-contain object-right [filter:brightness(0)_saturate(100%)_invert(92%)_sepia(16%)_saturate(220%)_hue-rotate(350deg)_brightness(103%)_contrast(92%)]"
              />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-[rgba(245,241,232,0.28)]" />

        <div className="flex w-full flex-wrap items-start justify-between gap-2 pb-1 pt-2 font-poppins text-[0.625rem] font-[200] leading-[1.625rem] text-[rgba(246,242,233,0.92)] md:pb-0 md:pt-1 md:text-[clamp(0.75rem,0.95vw,1.125rem)] md:text-[rgba(245,241,232,0.78)]">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
          <span>
            Designed By{' '}
            <a href="https://netglobes.com/" target="_blank" rel="noopener noreferrer" className="font-poppins text-[#f6f2e9]">
              <strong className="font-[400]">Netglobes</strong>
            </a>
          </span>
        </div>
        </div>
      </div>
    </footer>
  );
}
