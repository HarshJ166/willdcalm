import Image from 'next/image';
import type { Transport } from '@/data/homeData';

const MAPS_ADDRESS_URL =
  'https://maps.google.com/?q=Sasan+Talala+Road+opp+Mansadevi+Temple+near+Woods+Sasan+Gir+Gujarat+362150';

interface GettingHereProps {
  transport: Transport[];
  mapSrc: string;
}

export default function GettingHere({ transport, mapSrc }: GettingHereProps) {
  // Figma desktop: row1 = [train1, airport1], row2 = [train2, airport2]
  const row1 = [transport[0], transport[2]];
  const row2 = [transport[1], transport[3]];

  return (
    <section
      id="getting-here"
      className="relative flex w-full flex-col bg-[#f5f1e8] px-[var(--wc-mobile-nav-pad-x)] pt-[2.5rem] pb-[3rem] md:h-[50rem] md:flex-row md:items-start md:gap-32 md:px-[var(--wc-page-gutter)] md:py-[5.5625rem]"
    >
      <div className="w-full max-w-[30.6875rem]">
        {/* Label */}
        <span className="block font-poppins text-[0.625rem] font-[300] uppercase tracking-[0.2em] text-[#5a6b53] md:text-[0.75rem]">
          GETTING HERE
        </span>

        {/* Heading */}
        <h2 className="mt-[1.25rem] font-poppins text-[1.375rem] font-[300] leading-[1.35] text-[#3d4f38] md:mt-[1.75rem] md:max-w-[34.875rem] md:text-[2.25rem] md:leading-[1.3]">
          Located 6.5 km from Gir National Park, WildCalm offers refined wilderness with seamless regional access
        </h2>

        {/* ── Mobile: vertical list with hairline dividers ── */}
        <ul className="mt-[2rem] list-none p-0 md:hidden">
          {transport.map((item) => (
            <li key={item.name}>
              <div className="h-px w-full bg-[#3d4f38] opacity-20" />
              <div className="flex items-center gap-[1rem] py-[0.875rem]">
                <div className="relative h-[1.5rem] w-[1.5rem] flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt=""
                    fill
                    sizes="24px"
                    className="object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(800%) hue-rotate(70deg) brightness(90%) contrast(90%)' }}
                  />
                </div>
                <div className="flex flex-col gap-[0.125rem]">
                  <div className="flex items-baseline gap-[0.25rem]">
                    <span className="font-poppins text-[2.5rem] font-[200] leading-none text-[#3d4f38]">
                      {item.distance}
                    </span>
                    <span className="font-poppins text-[0.875rem] font-[300] uppercase tracking-[0.1em] text-[#3d4f38]">
                      {item.unit}
                    </span>
                  </div>
                  <p className="font-poppins text-[0.625rem] font-[300] uppercase tracking-[0.18em] text-[#3d4f38] opacity-70">
                    {item.name}
                  </p>
                </div>
              </div>
            </li>
          ))}
          <li>
            <div className="h-px w-full bg-[#3d4f38] opacity-20" />
          </li>
        </ul>

        {/* ── Desktop: 2-column grid ── */}
        <div className="mt-[2.625rem] hidden md:grid md:max-w-none md:grid-cols-2 md:gap-x-[2.35rem]">
          {row1.map((item) => (
            <div key={item.name} className="py-3">
              <div className="flex items-center gap-[0.875rem]">
                <div className="relative h-[2rem] w-[2rem] flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt=""
                    fill
                    sizes="32px"
                    className="object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(800%) hue-rotate(70deg) brightness(90%) contrast(90%)' }}
                  />
                </div>
                <div className="flex items-baseline gap-[0.25rem] text-[#3d4f38]">
                  <span className="font-poppins text-[3rem] font-[200] leading-none">{item.distance}</span>
                  <span className="font-poppins text-[1rem] font-[300] uppercase tracking-[0.1em]">{item.unit}</span>
                </div>
              </div>
              <span className="mt-1 block font-poppins text-[0.75rem] font-[300] uppercase tracking-[0.18em] text-[#3d4f38] opacity-70">{item.name}</span>
            </div>
          ))}
          <div className="col-span-2 h-px bg-[#3d4f38] opacity-20" />
          {row2.map((item) => (
            <div key={item.name} className="py-3">
              <div className="flex items-center gap-[0.875rem]">
                <div className="relative h-[2rem] w-[2rem] flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt=""
                    fill
                    sizes="32px"
                    className="object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(800%) hue-rotate(70deg) brightness(90%) contrast(90%)' }}
                  />
                </div>
                <div className="flex items-baseline gap-[0.25rem] text-[#3d4f38]">
                  <span className="font-poppins text-[3rem] font-[200] leading-none">{item.distance}</span>
                  <span className="font-poppins text-[1rem] font-[300] uppercase tracking-[0.1em]">{item.unit}</span>
                </div>
              </div>
              <span className="mt-1 block font-poppins text-[0.75rem] font-[300] uppercase tracking-[0.18em] text-[#3d4f38] opacity-70">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="mt-[2rem] w-full max-w-[36.5rem] md:ml-auto md:mt-[1.3125rem]">
        <div className="relative aspect-[296/336] w-full overflow-hidden md:aspect-[584/580]">
          <iframe
            src={mapSrc}
            width="584"
            height="580"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Wild Calm Sasan Gir location"
            className="absolute inset-0 h-full w-full border-0 grayscale"
          />
        </div>
        {/* Mobile: open in maps link with address */}
        <a
          href={MAPS_ADDRESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-1.5 font-poppins text-[0.75rem] font-[300] uppercase tracking-[0.12em] text-[#5a6b53] underline underline-offset-2 md:hidden"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
}
