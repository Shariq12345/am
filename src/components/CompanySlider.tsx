"use client";

const partnerLogos = [
  "/partners/apple.svg",
  "/partners/dell.svg",
  "/partners/siemens.svg",
  "/partners/bose.svg",
  "/partners/acer.svg",
  "/partners/asus.svg",
  "/partners/lenovo.svg",
  "/partners/lg.svg",
  "/partners/samsung.svg",
  "/partners/siemens.svg",
  "/partners/philips.svg",
];

export const TrustedPartnersSlider = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const displayedLogos = isMobile
    ? partnerLogos
    : [...partnerLogos, ...partnerLogos];

  return (
    <section className="mt-[100px] px-4 md:px-16 lg:px-[118px] overflow-hidden">
      {/* Caption */}
      <p className="text-sm text-emerald-600 font-medium tracking-wide mb-2">
        Trusted by Leading Enterprises
      </p>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Our Trusted Partners
      </h2>

      {/* Infinite Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-12 animate-infinite-marquee whitespace-nowrap">
          {displayedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-md h-[80px] w-[160px] px-4 shrink-0"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-[80px] object-contain hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
