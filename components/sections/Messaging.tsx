interface MessagingProps {
  line1: string;
  line2: string;
}

export default function Messaging({ line1, line2 }: MessagingProps) {
  return (
    <section id="messaging" className="flex items-center justify-center py-12 sm:py-14 md:py-16 bg-sage px-4">
      <div className="text-center space-y-1">
        <p className="text-cream text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase font-light">
          {line1}
        </p>
        <p className="text-cream text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase font-light">
          {line2}
        </p>
      </div>
    </section>
  );
}
