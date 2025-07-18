import { Shield, Target, TrendingUp, Users } from "lucide-react";

const whyChooseUs = [
  {
    icon: Target,
    title: "Strategic Focus",
    description:
      "We don't just solve problems—we align solutions with your long-term strategic objectives for sustainable growth.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our consultants bring 15+ years of experience across industries, combining deep expertise with fresh perspectives.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Track record of delivering measurable improvements: 40% cost reduction, 60% process efficiency gains.",
  },
  {
    icon: Shield,
    title: "Risk-First Approach",
    description:
      "Every recommendation is thoroughly vetted for risk implications, ensuring sustainable and secure implementations.",
  },
];

export const AdvisoryChoose = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Leading Organizations Choose Us
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            We combine deep industry expertise with innovative methodologies to
            deliver transformational results that last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
