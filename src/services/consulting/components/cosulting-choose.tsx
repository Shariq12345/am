import { ShieldCheck, Lightbulb, BarChart3, Users } from "lucide-react";

const whyChooseUs = [
  {
    icon: Lightbulb,
    title: "Strategic Insight",
    description:
      "We go beyond analysis to deliver clear, actionable strategies aligned with your long-term business goals.",
  },
  {
    icon: Users,
    title: "Expert Advisory Team",
    description:
      "Our consultants bring decades of cross-industry experience, combining technical depth with executive-level thinking.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    description:
      "We focus on delivering quantifiable outcomes—such as 40% cost savings and 60% gains in process efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-Aware Execution",
    description:
      "Every initiative we support is rigorously evaluated for financial, operational, and compliance risk.",
  },
];

export const ConsultingChoose = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Leading Organizations Choose Us
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Our clients trust us to deliver strategic insights and actionable
            solutions that drive real business transformation
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
