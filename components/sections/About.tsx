interface AboutProps {
  imageSrc: string;
  location: string;
  heading: string;
  body: string;
}

export default function About({ imageSrc, location, heading, body }: AboutProps) {
  return (
    <section id="about" className="relative overflow-hidden bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="relative">
          <img
            src={imageSrc}
            alt="WildCalm — Sasan Gir"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 gap-6">
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
            {location}
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-forest leading-snug">
            {heading}
          </h2>
          <p className="text-base text-forest/70 leading-relaxed max-w-md">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
