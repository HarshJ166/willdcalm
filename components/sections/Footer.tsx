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
      className="bg-forest text-cream/80 pt-16 pb-8 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-cream/10">
        {/* Brand */}
        <div className="md:col-span-1 space-y-4">
          <span className="text-cream text-xl tracking-widest uppercase font-light">
            WildCalm
          </span>
          <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
            A luxury nature retreat near Sasan Gir, Gujarat.
          </p>
          <div className="flex gap-4 pt-2">
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
        <nav className="space-y-3">
          <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-4">Explore</p>
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
        <nav className="space-y-3">
          <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-4">Info</p>
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
        <address className="not-italic space-y-3 text-sm text-cream/70">
          <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-4">Contact</p>
          <p className="leading-relaxed">{contact.address}</p>
          <a href={`tel:${contact.phone}`} className="block hover:text-cream transition-colors">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="block hover:text-cream transition-colors">
            {contact.email}
          </a>
        </address>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-cream/40">
        <span>&copy; {new Date().getFullYear()} WildCalm. All rights reserved.</span>
        <span>Designed by Netglobes</span>
      </div>
    </footer>
  );
}
