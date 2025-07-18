import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";

const sections = [
  {
    title: "Financial Planning & Analysis",
    description:
      "We help organizations optimize their financial planning and analysis processes, enabling CFOs to deliver timely, accessible, and relevant decision-making information with confidence and transparency",
    image: "/images/advisory/process-improvement.jpg",
    features: [
      "Budgeting & Forecasting",
      "Variance Analysis",
      "Financial Modeling",
      "Scenario Planning",
      "Performance Reporting",
    ],
    benefits:
      "Achieve 20-30% faster financial close cycles with improved accuracy and insights",
  },
  {
    title: "HR Information Analytics",
    description:
      "We provide comprehensive HR analytics solutions that empower organizations to make data-driven decisions, optimize workforce performance, and enhance employee engagement",
    image: "/images/advisory/performance-alignment.jpg",
    features: [
      "Workforce Planning",
      "Talent Acquisition Analytics",
      "Employee Engagement Surveys",
      "Performance Management Systems",
      "Compensation & Benefits Analysis",
    ],
    benefits:
      "Increase employee retention by 15-20% through targeted engagement strategies",
  },
  {
    title: "Risk Assessment",
    description:
      "Organizations face unprecedented risks. We ensure comprehensive risk identification and robust management systems are in place to mitigate these threats effectively.",
    image: "/images/advisory/risk-assessment.jpg",
    features: [
      "Enterprise Risk Management Framework",
      "Operational Risk Assessment",
      "Compliance & Regulatory Risk",
      "Financial Risk Modeling",
      "Crisis Management Planning",
    ],
    benefits:
      "Proactively identify and mitigate 80% of potential risks before they impact operations",
  },
  {
    title: "Litigation Management",
    description:
      "We support organizations through complex legal challenges by streamlining litigation workflows, improving case tracking, and enhancing legal spend visibility through analytics and strategic oversight.",
    image: "/images/advisory/project-accounting.jpg", // Change image if needed
    features: [
      "Case Lifecycle Management",
      "Litigation Budgeting & Cost Control",
      "E-Discovery Support & Coordination",
      "Legal Risk Assessment",
      "External Counsel & Vendor Oversight",
    ],
    benefits:
      "Reduce legal spend by up to 25% while improving litigation readiness and cross-functional visibility.",
  },
];

export const ConsultingServices = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Consulting Services
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Our consulting services are designed to help organizations optimize
            their operations, enhance performance, and achieve strategic goals
          </p>
        </div>

        <div className="space-y-24">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 !== 0 ? "lg:col-start-8" : ""
                }`}
              >
                <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 !== 0 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 text-base sm:text-base leading-relaxed mb-6">
                      {section.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle size={20} className="text-emerald-600" />
                      Key Services Include:
                    </h4>
                    <ul className="space-y-2">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                      <TrendingUp size={20} className="text-emerald-600" />
                      Expected Outcomes:
                    </h4>
                    <p className="text-emerald-800">{section.benefits}</p>
                  </div>

                  <button
                    onClick={() =>
                      (window.location.href = `/services/${section.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`)
                    }
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                  >
                    Learn More About {section.title} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
