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
      className="relative z-[1] w-full overflow-hidden bg-[var(--sage-intro)] font-poppins text-[var(--cream)] md:h-auto md:min-h-[900px]"
    >
      <h2 id="wc-about-heading" className="sr-only">
        About
      </h2>
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/design/web-noise-bg.svg')] bg-cover bg-center opacity-[0.08] mix-blend-soft-light" />

      {/* Mobile layout: flex column, natural height */}
      <div className="flex flex-col px-[var(--wc-mobile-nav-pad-x)] py-[clamp(2rem,7dvh,3.5rem)] md:hidden">
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="m-0 w-full text-justify font-poppins text-[clamp(1rem,5vw,1.5rem)] font-[100] leading-[clamp(1.5rem,7vw,2rem)] text-[#F5F1E8] [text-align-last:left] [word-spacing:0.2em]"
        >
          Wildlife Sasan Gir Forest Gir National Park Nature Safari Asiatic Lion Forest Gujarat India Wild Calm Nature Retreat Luxury Stay Wilderness Forest Stay Landscape Experience Calm Lion Nature Wild Wildlife Sasan Gir Gir Forest National Park Nature Safari Asiatic Lion{'              '}Gujarat India
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mt-[clamp(1.5rem,5dvh,2.5rem)] aspect-[246/352] w-[min(15.375rem,60vw)] overflow-hidden"
        >
          <Image src={imageSrc} alt={heading} fill sizes="(max-width: 48em) 246px, 346px" className="object-cover object-[55%_28%]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-[clamp(1rem,3dvh,1.5rem)] text-center font-poppins text-[clamp(0.75rem,3.5vw,0.875rem)] font-[200] tracking-[0.2em] text-[rgba(245,241,232,0.72)]"
        >
          {location}
        </motion.p>
      </div>

      {/* Desktop layout: absolute positioning preserved */}
      <div className="relative hidden md:block md:min-h-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-x-0 bottom-[clamp(12.5rem,22vh,18.5rem)] top-[clamp(3.25rem,6.5vh,5.5rem)] z-[1] flex items-center justify-center px-[clamp(1.75rem,4vw,4.875rem)]"
        >
          <p className="m-0 w-full text-justify font-poppins text-[2.25rem] font-[100] leading-[3.8rem] text-[#F5F1E8] [text-align-last:left] [word-spacing:0.2em] md:max-w-[70rem]">
            Wildlife Sasan Gir Forest Gir National Park Nature Safari Asiatic Lion Forest Gujarat India Wild Calm Nature Retreat Luxury Stay Wilderness Forest Stay Landscape Experience Calm Lion Nature Wild Wildlife Sasan Gir Gir Forest National Park Nature Safari Asiatic Lion{'              '}Gujarat India
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute left-1/2 top-[20rem] z-[3] h-[29.1875rem] w-[21.625rem] -translate-x-1/2 overflow-hidden"
        >
          <Image src={imageSrc} alt={heading} fill sizes="346px" className="object-cover object-[55%_28%]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-1/2 top-[52rem] z-[4] -translate-x-1/2 whitespace-nowrap text-center font-poppins text-[1.5rem] font-[200] tracking-[0.25em] text-[rgba(245,241,232,0.72)]"
        >
          {location}
        </motion.p>
      </div>

      <p className="sr-only">{body}</p>
    </section>
  );
}
