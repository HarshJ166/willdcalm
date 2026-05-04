import Image from 'next/image';
import { motion } from 'framer-motion';

interface AboutProps {
  imageSrc: string;
  location: string;
  heading: string;
  body: string;
}

export default function About({ imageSrc, location, heading, body }: AboutProps) {
  return (
    <section
      id="about"
      aria-labelledby="wc-about-heading"
      className="relative z-[1] h-[100svh] w-full overflow-hidden bg-[var(--sage-intro)] font-poppins text-[var(--cream)] md:h-auto md:min-h-[900px]"
    >
      <h2 id="wc-about-heading" className="sr-only">
        About
      </h2>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/design/web-noise-bg.svg')] bg-cover bg-center opacity-[0.08] mix-blend-soft-light" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 z-[1] flex items-start p-[clamp(1.25rem,4vw,2rem)] md:inset-auto md:left-[7.21875rem] md:right-[7.21875rem] md:top-[21.61rem] md:-translate-y-1/2 md:items-start md:p-0"
      >
        <p className="m-0 w-full text-left text-justify font-poppins text-[clamp(1.1rem,4.8vw,2.25rem)] font-[100] leading-[1.7] tracking-normal text-[rgba(245,241,232,0.55)] [text-align-last:left] md:text-[2.25rem] md:leading-[3.8125rem] md:[word-spacing:0.2em]">
          Wildlife Sasan Gir Forest Gir National Park WildCalm Retreat Nature Safari Asiatic Lion Forest Gujarat India WildCalm Nature Retreat Luxury Stay Wilderness Forest Stay Landscape Experience Lion Wilderness Wildlife Sasan Gir Stay Resort Landscape Nature Calm Gir Forest National Park Nature Safari Asiatic Lion Gujarat India Wilderness Landscape Retreat Resort Luxury Stay Experience Scenic Surroundings Calm Escape Adventure Devaliya Park Jungle Safari Asiatic Lion Gujarat India Untamed Landscape Nature stay Retreat Luxury
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-[3.5rem] left-1/2 z-[3] h-[clamp(20rem,58vw,26rem)] w-[min(16rem,68vw)] -translate-x-1/2 overflow-hidden md:bottom-auto md:top-[14.1875rem] md:h-[29.1875rem] md:w-[21.625rem]"
      >
        <Image src={imageSrc} alt={heading} fill sizes="(max-width: 48em) 246px, 346px" className="object-cover object-[55%_28%] md:object-[55%_28%]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-[1.25rem] left-1/2 z-[4] -translate-x-1/2 whitespace-nowrap text-center font-poppins text-[0.875rem] font-[200] uppercase leading-[1.5rem] tracking-[0.2em] text-[rgba(245,241,232,0.72)] md:bottom-auto md:top-[47.8125rem] md:-translate-y-1/2 md:text-[1.5rem] md:leading-[2.75rem] md:tracking-[0.25em]"
      >
        {location}
      </motion.p>
      <p className="sr-only">{body}</p>
    </section>
  );
}
