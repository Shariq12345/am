import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Their strategic insights transformed our financial operations. We've seen a 45% improvement in process efficiency and significant cost savings.",
    author: "Sarah Chen",
    position: "CFO, TechCorp Solutions",
    company: "Fortune 500 Technology Company",
  },
  {
    quote:
      "The risk management framework they implemented has been invaluable. We now have complete visibility into our risk exposure and proactive mitigation strategies.",
    author: "Michael Rodriguez",
    position: "VP Finance, Global Manufacturing Inc.",
    company: "Manufacturing Leader",
  },
  {
    quote:
      "Their PMO services helped us deliver our largest digital transformation project on time and 20% under budget. Exceptional expertise and support.",
    author: "Jennifer Kim",
    position: "Program Director, FinanceFirst",
    company: "Financial Services",
  },
];

export const AdvisoryTestimonials = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it—hear from the leaders who've
            transformed their organizations with our advisory services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">
                  {testimonial.author}
                </div>
                <div className="text-emerald-400 text-sm">
                  {testimonial.position}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
