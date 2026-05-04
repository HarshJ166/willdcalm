interface MessagingProps {
  line1: string;
  line2: string;
}

export default function Messaging({ line1, line2 }: MessagingProps) {
  return (
    <section id="messaging" className="flex items-center justify-center py-16 bg-sage">
      <div className="text-center space-y-1">
        <p className="text-cream text-2xl md:text-4xl tracking-[0.25em] uppercase font-light">
          {line1}
        </p>
        <p className="text-cream text-2xl md:text-4xl tracking-[0.25em] uppercase font-light">
          {line2}
        </p>
      </div>
    </section>
  );
}
