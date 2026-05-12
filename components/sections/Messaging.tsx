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
      className="relative flex h-[494px] items-end justify-center overflow-hidden bg-[#54694f] bg-[url('/design/Home%20Page/Section%205%20-%20Messaging/Messaging%20Image%20-%20Phone%20version.webp')] bg-cover bg-[position:center_top] md:h-[49.25rem] md:items-center md:bg-[url('/design/Home%20Page/Section%205%20-%20Messaging/Messaging%20Image%20-%20Phone%20version.webp')] md:bg-[position:center_8%] xl:h-[49.25rem] xl:items-center xl:bg-[url('/design/Home%20Page/Section%205%20-%20Messaging/Messaging%20Image%20-%20Desptop%20version%20.webp')] xl:bg-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[2] mb-8 flex w-full flex-col items-center justify-center gap-0 text-center font-[Argufy] uppercase leading-[0.82] text-[rgba(167,180,162,0.32)] text-[clamp(2.25rem,9vw,4rem)] md:absolute md:bottom-[2.75rem] md:left-1/2 md:w-[min(34rem,calc(100%-2rem))] md:-translate-x-1/2 md:text-[clamp(4.75rem,8vw,7rem)] xl:bottom-[3.5rem] xl:w-[calc(100%-0.5rem)] xl:flex-row xl:flex-nowrap xl:items-baseline xl:gap-[0.35em] xl:text-[8.5rem] xl:leading-[0.8]"
      >
        <span className="block xl:inline-block">{line1}</span>
        <span className="block xl:inline-block">{line2}</span>
      </motion.p>
    </section>
  );
}
