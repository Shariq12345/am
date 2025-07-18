import { Award } from "lucide-react";

export const ConsultingHero = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-[118px] pt-20 pb-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="hidden md:inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award size={16} />
            Trusted by Organizations Worldwide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Transformative Consulting
            <span className="block text-emerald-600">
              Solutions for Your Business
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Our expert consultants partner with you to drive innovation,
            optimize processes, and achieve sustainable growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </button>
            <button
              onClick={() => (window.location.href = "/case-studies")}
              className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold px-5 py-3 rounded-full transition-all duration-200"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
