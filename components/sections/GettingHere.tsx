import Image from 'next/image';
import type { Transport } from '@/data/homeData';

interface GettingHereProps {
  transport: Transport[];
  mapSrc: string;
}

export default function GettingHere({ transport, mapSrc }: GettingHereProps) {
  const firstPair = transport.slice(0, 2);
  const secondPair = transport.slice(2, 4);

  return (
    <section
      id="getting-here"
      className="flex w-full flex-col gap-[clamp(1.75rem,5vw,2.5rem)] bg-[#f5f1e8] px-[var(--wc-mobile-nav-pad-x)] py-[clamp(3.75rem,11vw,4.5rem)] md:h-[50rem] md:flex-row md:items-start md:gap-32 md:px-[var(--wc-page-gutter)] md:py-[5.5625rem]"
    >
      <div className="w-full max-w-[30.6875rem]">
        <span className="block font-[Pilcrow_Rounded] text-[0.875rem] uppercase tracking-[0.14em] text-[#697a61] md:text-[1.25rem] md:normal-case md:tracking-normal">
          GETTING HERE
        </span>
        <h2 className="mt-[clamp(1.25rem,4vw,1.75rem)] max-w-[28.875rem] font-poppins text-[1.75rem] font-[200] leading-[2.375rem] text-[#697a61] md:mt-0 md:text-[2.375rem] md:leading-[3.3125rem]">
          Located 6.5 km from Gir National Park, WildCalm offers refined wilderness with seamless regional access
        </h2>

        <div className="mt-[clamp(1.5rem,4vw,2rem)] grid max-w-[18.5rem] grid-cols-1 md:mt-[2.625rem] md:max-w-none md:grid-cols-2 md:gap-x-[2.35rem]">
          {firstPair.map((item) => (
            <div key={item.name} className="border-b border-b-[rgba(101,120,94,0.22)] py-[clamp(0.875rem,2.5vw,1rem)] md:border-b-0 md:py-3">
              <div className="flex items-center gap-[0.875rem]">
                <Image src={item.icon} alt="" width={30} height={30} className="h-auto w-[clamp(1.75rem,8vw,2.5rem)]" />
                <div className="flex items-end gap-[0.125rem] text-[#65785e]">
                  <span className="font-poppins text-[3rem] font-[200] leading-[1.875rem]">{item.distance}</span>
                  <span className="font-poppins text-[2rem] font-[200] leading-[1.875rem]">{item.unit}</span>
                </div>
              </div>
              <span className="mt-1 block font-poppins text-[0.875rem] font-[200] uppercase leading-[1.25rem] text-[#65785e]">{item.name}</span>
            </div>
          ))}
          <div className="hidden h-px bg-[rgba(101,120,94,0.18)] md:col-span-2 md:block" />
          {secondPair.map((item) => (
            <div key={item.name} className="border-b border-b-[rgba(101,120,94,0.22)] py-[clamp(0.875rem,2.5vw,1rem)] last:border-b-0 md:border-b-0 md:py-3">
              <div className="flex items-center gap-[0.875rem]">
                <Image src={item.icon} alt="" width={30} height={30} className="h-auto w-[clamp(1.75rem,8vw,2.5rem)]" />
                <div className="flex items-end gap-[0.125rem] text-[#65785e]">
                  <span className="font-poppins text-[3rem] font-[200] leading-[1.875rem]">{item.distance}</span>
                  <span className="font-poppins text-[2rem] font-[200] leading-[1.875rem]">{item.unit}</span>
                </div>
              </div>
              <span className="mt-1 block font-poppins text-[0.875rem] font-[200] uppercase leading-[1.25rem] text-[#65785e]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 w-full max-w-[36.5rem] md:ml-auto md:mt-[1.3125rem]">
        <div className="relative aspect-[296/336] w-full overflow-hidden md:aspect-[584/580]">
          <iframe
            src={mapSrc}
            width="584"
            height="580"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Wild Calm Sasan Gir location"
            className="absolute inset-0 h-full w-full border-0 object-cover grayscale brightness-90 contrast-100 saturate-50"
          />
        </div>
      </div>
    </section>
  );
}
