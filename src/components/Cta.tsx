import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTABanner = () => {
  return (
    <section className="mt-[120px] px-4 md:px-16 lg:px-[118px]">
      <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/cta-image.png" // Replace with your actual image path
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          {/* Blur + overlay */}
          <div className="absolute inset-0 bg-emerald-700/30 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 max-w-3xl">
            Empower Your Business with Cutting-Edge IT Solutions
          </h2>
          <p className="text-sm md:text-base max-w-2xl mb-6 text-white/90">
            Stay ahead with secure, scalable, and future-ready technology
            tailored for your success
          </p>
          <Link to="/contact">
            <Button className="w-[200px] h-[47px] bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-sm transition duration-200 cursor-pointer">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
