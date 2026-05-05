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
      className="relative z-[1] h-[41.125rem] w-full overflow-hidden bg-[var(--sage-intro)] font-poppins text-[var(--cream)] md:h-auto md:min-h-[700px] lg:min-h-[900px]"
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
        className="absolute left-[1.25rem] right-[1.25rem] top-[2.5rem] z-[1] md:inset-auto md:bottom-[clamp(12.5rem,22vh,18.5rem)] md:left-0 md:right-0 md:top-[clamp(3.25rem,6.5vh,5.5rem)] md:flex md:items-center md:justify-center md:px-[clamp(1.75rem,4vw,4.875rem)]"
      >
        {/* Mobile text */}
        <p className="m-0 w-full text-justify font-poppins text-[1.5rem] font-[100] leading-[2rem] text-[#F5F1E8] [text-align-last:left] [word-spacing:0.2em] md:hidden">
          Wildlife Sasan Gir Forest Gir National Park Nature Safari Asiatic Lion Forest Gujarat India Wild Calm Nature Retreat Luxury Stay Wilderness Forest Stay Landscape Experience Calm Lion Nature Wild Wildlife Sasan Gir Gir Forest National Park Nature Safari Asiatic Lion{'              '}Gujarat India
        </p>
        {/* Web/Tablet text */}
        <p className="hidden m-0 w-full text-justify font-poppins text-[2.25rem] font-[100] leading-[3.8rem] text-[#F5F1E8] [text-align-last:left] [word-spacing:0.2em] md:block md:max-w-[70rem]">
          Wildlife Sasan Gir Forest Gir National Park WildCalm Retreat
Nature Safari Asiatic Lion Forest Gujarat India WildCalm Nature Retreat Luxury Stay Wilderness Forest Stay Landscape Experience  Lion Wilderness Wildlife Sasan Gir Stay Resort Landscape Nature CalmGir Forest National Park Nature Safari Asiatic Lion Gujarat India Wilderness Landscape Retreat Resort Luxury Stay Experience Scenic Surroundings Calm Escape Adventure Devaliya Park Jungle Safari Asiatic Lion Gujarat India Untamed Landscape Nature Retreat Luxury
        </p>
      </motion.div>

      {/* Lion image: mobile and web/tablet use different images */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 top-[12.5rem] z-[3] h-[22rem] w-[15.375rem] -translate-x-1/2 overflow-hidden md:top-[14rem] md:h-[26rem] md:w-[19rem] lg:top-[20rem] lg:h-[29.1875rem] lg:w-[21.625rem]"
      >
        {/* Mobile lion image */}
        <Image
          src="/design/Home Page/Section 2 - Lion/Sasan Gir_Lion-converted-from-png.webp"
          alt={heading}
          width={246}
          height={322}
          className="object-cover object-[55%_28%] md:hidden w-[246px] h-[322px]"
        />
        {/* Web/Tablet lion image */}
        <Image
          src="/design/Home Page/Section 2 - Lion/Sasan Gir_Lion-converted-from-png.webp"
          alt={heading}
          fill
          sizes="346px"
          className="object-cover object-[55%_28%] hidden md:block"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-[2.5rem] left-1/2 z-[4] -translate-x-1/2 whitespace-nowrap text-center font-poppins text-[0.875rem] md:text-[1.5rem] font-extralight tracking-[0.2em] md:tracking-[0.25em] text-[rgba(245,241,232,0.72)] uppercase" style={{ fontWeight: 200, fontSize: '14px', letterSpacing: '0.2em' }}
      >
        SASANGIR . GUJARAT . INDIA
      </motion.p>
      <p className="sr-only">{body}</p>
    </section>
  );
}
