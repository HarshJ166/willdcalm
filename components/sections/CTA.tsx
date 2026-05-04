interface CTAProps {
  quote: string;
  quoteAuthor?: string;
  imageSrc: string;
  ctaHref?: string;
}

export default function CTA({ quote, quoteAuthor, imageSrc, ctaHref = '#faq' }: CTAProps) {
  return (
    <section
      id="plan"
      className="relative flex items-center justify-center min-h-[60vh] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageSrc}')` }}
      />
      <div className="absolute inset-0 bg-forest/50" />
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto space-y-6">
        <blockquote className="text-cream text-xl md:text-3xl font-light leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </blockquote>
        {quoteAuthor && (
          <cite className="block text-cream/70 text-sm tracking-widest uppercase not-italic">
            — {quoteAuthor}
          </cite>
        )}
        <a
          href={ctaHref}
          className="inline-block mt-4 px-8 py-3 border border-cream text-cream text-sm tracking-[0.2em] uppercase hover:bg-cream hover:text-forest transition-colors duration-300"
        >
          Plan Your Stay
        </a>
      </div>
    </section>
  );
}
