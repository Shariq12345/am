import { CheckCircle } from "lucide-react";

export const ConsultingCta = () => {
  return (
    <section className="mt-[120px] px-4 md:px-16 lg:px-[118px]">
      <div className="relative w-full bg-emerald-600 rounded-xl shadow-lg overflow-hidden py-16 px-6 sm:px-10 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Drive Change with Expert Consulting
        </h2>
        <p className="text-lg sm:text-xl text-emerald-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          Unlock your organization's potential with our tailored consulting
          services and strategic insights
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={() => (window.location.href = "/contact")}
            className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule Free Consultation
          </button>
          <button
            onClick={() => (window.location.href = "/download-brochure")}
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold px-5 py-3 rounded-full transition-all duration-200"
          >
            Download Our Brochure
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-emerald-100">
          <div className="flex items-center gap-2">
            <CheckCircle size={20} />
            <span>Free Initial Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} />
            <span>No Long-term Commitments</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} />
            <span>Proven Track Record</span>
          </div>
        </div>
      </div>
    </section>
  );
};
