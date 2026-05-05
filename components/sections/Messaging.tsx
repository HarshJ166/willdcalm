'use client';

import { motion } from 'framer-motion';

interface MessagingProps {
  line1: string;
  line2: string;
}

export default function Messaging({ line1, line2 }: MessagingProps) {
  return (
    <section
      id="messaging"
      className="relative flex h-[494px] items-end justify-center overflow-hidden bg-[#54694f] bg-[url('/design/Home%20Page/Section%205%20-%20Messaging/Messaging%20Image%20-%20Phone%20version.webp')] bg-cover bg-top md:h-[49.25rem] md:items-center md:bg-[url('/design/Home%20Page/Section%205%20-%20Messaging/Messaging%20Image%20-%20Desptop%20version%20.webp')] md:bg-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[2] mb-8 flex w-[min(20.6875rem,calc(100%-1.25rem))] flex-col items-center justify-center text-center font-[Argufy] text-[clamp(3rem,16vw,3.625rem)] uppercase leading-[0.9] text-[rgba(167,180,162,0.32)] md:absolute md:bottom-[3.5rem] md:left-1/2 md:mb-0 md:w-[calc(100%-0.5rem)] md:-translate-x-1/2 md:flex-row md:flex-nowrap md:items-baseline md:justify-center md:gap-[0.35em] md:text-[8.1rem] md:leading-[0.8]"
      >
        <span className="block md:inline-block">{line1}</span>
        <span className="block md:inline-block">{line2}</span>
      </motion.p>
    </section>
  );
}
