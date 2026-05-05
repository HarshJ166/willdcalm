import Image from 'next/image';
import type { Transport } from '@/data/homeData';

const MAPS_ADDRESS_URL =
  'https://www.google.com/maps?q=Wild+Calm,+Sasan+Gir,+Sasan+Talala+Road+opp+Mansadevi+Temple,+near+Woods,+Sasan+Gir,+Sasan+sasan,+Gujarat+362150';

interface GettingHereProps {
  transport: Transport[];
  mapSrc: string;
}

export default function GettingHere({ transport, mapSrc }: GettingHereProps) {
  // Desktop: 2-column grid — row1 = [train1, airport1], row2 = [train2, airport2]
  const row1 = [transport[0], transport[2]];
  const row2 = [transport[1], transport[3]];

  return (
    <section
      id="getting-here"
      className="relative flex w-full flex-col bg-[#f5f1e8] px-[var(--wc-mobile-nav-pad-x)] pt-[clamp(3.75rem,11vw,4.5rem)] pb-[clamp(3rem,9vw,4rem)] md:h-auto md:flex-row md:items-start md:gap-[clamp(2rem,5vw,8rem)] md:px-[var(--wc-page-gutter)] md:py-[5.5625rem] lg:h-[50rem] lg:gap-32"
    >
      {/* Left column */}
      <div className="w-full md:w-[30.6875rem] md:flex-[0_0_30.6875rem]">

        {/* Label */}
        <span className="block font-[Pilcrow_Rounded] text-[0.875rem] font-[400] uppercase tracking-[0.14em] text-[#697a61] md:text-[1.25rem] md:tracking-normal mt-[4rem] md:mt-[6rem]">
          GETTING HERE
        </span>

        {/* Heading */}
        <h2 className="mt-[2.5rem] max-w-[19.375rem] font-poppins text-[1.75rem] font-[200] leading-[2.375rem] text-[#697a61] md:mt-[0.75rem] md:max-w-[28.875rem] md:text-[2.375rem] md:leading-[3.3125rem]">
          Located 6.5 km from Gir National Park, WildCalm offers refined wilderness with seamless regional access
        </h2>

        {/* ── Mobile: flat vertical list ── */}
        <ul className="mt-[4.5rem] w-full max-w-[18.5rem] list-none p-0 md:hidden">
          {transport.map((item, idx) => {
            // Veraval Railway Station (first item): less top padding
            if (idx === 0) {
              return (
                <li
                  key={item.name}
                  className={`pt-[1rem] pb-[1.75rem]${idx < transport.length - 1 ? ' border-b border-b-[rgba(101,120,94,0.22)]' : ''}`}
                >
                  <div className="flex items-center gap-[0.875rem]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-auto w-[clamp(1.75rem,8vw,2rem)] flex-shrink-0 opacity-95"
                    />
                    <div className="flex items-baseline gap-[0.125rem]">
                      <span className="font-poppins text-[3rem] font-[200] leading-[1.875rem] text-[#65785e]">
                        {item.distance}
                      </span>
                      <span className="font-poppins text-[2rem] font-[200] leading-[1.875rem] text-[#65785e]">
                        {item.unit}
                      </span>
                    </div>
                  </div>
                  <p className="mt-[clamp(0.35rem,1.5vw,0.5rem)] font-poppins text-[0.875rem] font-[200] uppercase leading-[1.25rem] tracking-[0.02em] text-[#65785e]">
                    {item.name}
                  </p>
                </li>
              );
            }
            // Rajkot International Airport (last item): divider line directly after text, then bottom padding
            if (idx === transport.length - 1) {
              return (
                <li key={item.name} className="pt-[2.5rem] pb-0">
                  <div className="flex items-center gap-[0.875rem]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-auto w-[clamp(1.75rem,8vw,2rem)] flex-shrink-0 opacity-95"
                    />
                    <div className="flex items-baseline gap-[0.125rem]">
                      <span className="font-poppins text-[3rem] font-[200] leading-[1.875rem] text-[#65785e]">
                        {item.distance}
                      </span>
                      <span className="font-poppins text-[2rem] font-[200] leading-[1.875rem] text-[#65785e]">
                        {item.unit}
                      </span>
                    </div>
                  </div>
                  <p className="mt-[clamp(0.35rem,1.5vw,0.5rem)] mb-0 font-poppins text-[0.875rem] font-[200] uppercase leading-[1.25rem] tracking-[0.02em] text-[#65785e]">
                    {item.name}
                  </p>
                  <div className="h-px w-full bg-[rgba(101,120,94,0.22)] mt-[1.25rem]" />
                  <div className="pb-[4rem]" />
                </li>
              );
            }
            // All others: default
            return (
              <li
                key={item.name}
                className={`pt-[2.5rem] pb-[1.75rem] border-b border-b-[rgba(101,120,94,0.22)]`}
              >
                <div className="flex items-center gap-[0.875rem]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-auto w-[clamp(1.75rem,8vw,2rem)] flex-shrink-0 opacity-95"
                  />
                  <div className="flex items-baseline gap-[0.125rem]">
                    <span className="font-poppins text-[3rem] font-[200] leading-[1.875rem] text-[#65785e]">
                      {item.distance}
                    </span>
                    <span className="font-poppins text-[2rem] font-[200] leading-[1.875rem] text-[#65785e]">
                      {item.unit}
                    </span>
                  </div>
                </div>
                <p className="mt-[clamp(0.35rem,1.5vw,0.5rem)] font-poppins text-[0.875rem] font-[200] uppercase leading-[1.25rem] tracking-[0.02em] text-[#65785e]">
                  {item.name}
                </p>
              </li>
            );
          })}
        </ul>

        {/* ── Desktop: 2-column grid ── */}
        <div className="mt-[2.625rem] hidden md:grid md:grid-cols-2 md:gap-x-[2.35rem]">
          {row1.map((item) => (
            <div key={item.name} className="py-3">
              <div className="flex items-center gap-[0.875rem]">
                <Image
                  src={item.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-auto w-[2.5rem] flex-shrink-0 opacity-95"
                />
                <div className="flex items-baseline gap-[0.125rem] text-[#65785e]">
                  <span className="font-poppins text-[3rem] font-[200] leading-[1.875rem]">{item.distance}</span>
                  <span className="font-poppins text-[2rem] font-[200] leading-[1.875rem]">{item.unit}</span>
                </div>
              </div>
              <span className="mt-[0.3125rem] block font-poppins text-[0.875rem] font-[200] uppercase leading-[1.25rem] tracking-[0.02em] text-[#65785e]">
                {item.name}
              </span>
            </div>
          ))}
          <div className="col-span-2 h-px bg-[rgba(101,120,94,0.18)]" />
          {row2.map((item) => (
            <div key={item.name} className="py-8 md:py-8">
              <div className="flex items-center gap-[0.875rem]">
                <Image
                  src={item.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-auto w-[2.5rem] flex-shrink-0 opacity-95"
                />
                <div className="flex items-baseline gap-[0.125rem] text-[#65785e]">
                  <span className="font-poppins text-[3rem] font-[200] leading-[1.875rem]">{item.distance}</span>
                  <span className="font-poppins text-[2rem] font-[200] leading-[1.875rem]">{item.unit}</span>
                </div>
              </div>
              <span className="mt-[0.3125rem] block font-poppins text-[0.875rem] font-[200] uppercase leading-[1.25rem] tracking-[0.02em] text-[#65785e]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="mt-[clamp(0.5rem,2vw,0.75rem)] w-full max-w-[18.5rem] self-center md:ml-auto md:mt-[1.3125rem] md:max-w-full md:flex-1 md:self-start lg:max-w-[36.5rem] lg:flex-none">
        <div className="relative aspect-[296/336] w-full overflow-hidden rounded-[0.25rem] md:aspect-[584/580] md:rounded-none">
          <iframe
            src={mapSrc}
            width="584"
            height="580"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Wild Calm Sasan Gir location"
            className="absolute inset-0 h-full w-full border-0 grayscale brightness-90 contrast-[1.02] saturate-[0.55]"
          />
        </div>

      </div>
    </section>
  );
}
