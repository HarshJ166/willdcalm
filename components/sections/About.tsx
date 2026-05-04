interface AboutProps {
  imageSrc: string;
  location: string;
  heading: string;
  body: string;
}

export default function About({ imageSrc, location, heading, body }: AboutProps) {
  return (
    <section id="about" className="relative overflow-hidden bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh] md:min-h-[80vh]">
        <div className="relative aspect-4/3 md:aspect-auto">
          <img
            src={imageSrc}
            alt="WildCalm — Sasan Gir"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16 gap-4 sm:gap-6">
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
            {location}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-forest leading-snug">
            {heading}
          </h2>
          <p className="text-sm sm:text-base text-forest/70 leading-relaxed max-w-md">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
