import type { Transport } from '@/data/homeData';

interface GettingHereProps {
  transport: Transport[];
  mapSrc: string;
}

export default function GettingHere({ transport, mapSrc }: GettingHereProps) {
  return (
    <section id="getting-here" className="bg-cream py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div className="space-y-2">
          <span className="text-xs tracking-[0.3em] uppercase text-sage font-medium">
            Getting Here
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-forest">Finding WildCalm</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Transport grid — 2 cols always, cards shrink gracefully */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {transport.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 bg-white rounded-sm border border-sage/10"
              >
                <img src={item.icon} alt={item.type} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                <div>
                  <p className="text-2xl sm:text-3xl font-light text-forest tabular-nums">
                    {item.distance}
                    <span className="text-xs sm:text-sm ml-1 text-forest/50">{item.unit}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-forest/60 mt-1 leading-snug">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="w-full aspect-video rounded-sm overflow-hidden">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WildCalm location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
