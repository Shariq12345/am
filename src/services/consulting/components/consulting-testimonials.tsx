import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Their strategic advisory helped us reframe our entire financial planning process. Forecasting is now more accurate, and we reduced budgeting time by 30%.",
    author: "Emily Grant",
    position: "Chief Financial Officer",
    company: "MidMarket Logistics Corp.",
  },
  {
    quote:
      "We now have a fully integrated enterprise risk framework that enables proactive decision-making and compliance across global operations",
    author: "Rahul Mehta",
    position: "Chief Risk Officer",
    company: "GlobalChem Industries",
  },
  {
    quote:
      "With their PMO consulting, we established a scalable governance model and successfully delivered a multi-region ERP rollout under budget and ahead of schedule.",
    author: "Natalie Foster",
    position: "Director of Strategy & Operations",
    company: "Helix Financial Group",
  },
];

export const ConsultingTestimonials = () => {
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
