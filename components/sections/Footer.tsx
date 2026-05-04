import type { NavLink } from '@/data/homeData';

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
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
    <footer
      id="footer"
      className="bg-forest text-cream/80 pt-12 sm:pt-14 md:pt-16 pb-8 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 pb-10 sm:pb-12 border-b border-cream/10">
        {/* Brand — full width on the smallest breakpoint */}
        <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
          <span className="block text-cream text-base sm:text-xl tracking-widest uppercase font-light">
            WildCalm
          </span>
          <p className="text-sm leading-relaxed text-cream/60">
            A luxury nature retreat near Sasan Gir, Gujarat.
          </p>
          <div className="flex gap-4 pt-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-cream/50 hover:text-cream transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav col 1 */}
        <nav className="space-y-2 sm:space-y-3">
          <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-3 sm:mb-4">Explore</p>
          {col1Links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-cream/70 hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Nav col 2 */}
        <nav className="space-y-2 sm:space-y-3">
          <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-3 sm:mb-4">Info</p>
          {col2Links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-cream/70 hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <address className="col-span-2 sm:col-span-1 not-italic space-y-2 sm:space-y-3 text-sm text-cream/70">
          <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-3 sm:mb-4">Contact</p>
          <p className="leading-relaxed">{contact.address}</p>
          <a href={`tel:${contact.phone}`} className="block hover:text-cream transition-colors">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="block hover:text-cream transition-colors break-all">
            {contact.email}
          </a>
        </address>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-6 sm:pt-8 text-xs text-cream/40">
        <span>&copy; {new Date().getFullYear()} WildCalm. All rights reserved.</span>
        <span>Designed by Netglobes</span>
      </div>
    </footer>
  );
}
