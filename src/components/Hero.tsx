import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/button";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/effect-fade";

import "./Hero.css";

const slides = [
  {
    image: "/Hero.jpg",
    title: "Empowering Growth Through Strategic Advisory",
    subtitle:
      "Navigate complex challenges with expert guidance in consulting, compliance, and assurance. We align your vision with tailored business solutions for measurable success",
  },
  {
    image: "/Hero2.jpg",
    title: "Drive Innovation with Modern IT Consulting",
    subtitle:
      "Leverage cutting-edge technology strategies to future-proof your business. Our IT experts deliver scalable solutions in cloud, cybersecurity, and digital transformation.",
  },
  {
    image: "/Hero3.jpg",
    title: "Build Smarter with Custom Software & Cloud Services",
    subtitle:
      "Accelerate growth with robust, secure, and scalable applications. From cloud migration to mobile apps, we turn your ideas into reliable digital products.",
  },
];

export const Hero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[600px] lg:h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        speed={900}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full absolute inset-0"
              />

              {/* Dark Blur Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10" />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  <Button className="w-full md:w-[256px] h-[46px] text-white bg-emerald-600 hover:bg-emerald-700 text-sm md:text-base cursor-pointer rounded-sm">
                    Schedule a Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full md:w-[208px] h-[46px] text-white bg-transparent border-white hover:bg-white hover:text-black transition-all duration-200 text-sm md:text-base cursor-pointer rounded-sm"
                  >
                    Explore Solutions
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
