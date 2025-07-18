import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";

const sections = [
  {
    title: "Process Improvement",
    description:
      "We help to improve, rationalize, and enhance core Finance processes such as accounts receivables, payables, fixed assets, closing activities, consolidation, and MIS reporting. Our support empowers CFOs and finance teams to meet the demands of evolving roles, finance function effectiveness, data quality, internal controls, and governance.",
    image: "/images/advisory/process-improvement.jpg",
    features: [
      "Accounts Receivable & Payable Optimization",
      "Fixed Asset Management Systems",
      "Financial Close Process Acceleration",
      "Automated Reconciliation Solutions",
      "Real-time Financial Reporting",
    ],
    benefits:
      "Reduce processing time by 40-60% while improving accuracy and compliance",
  },
  {
    title: "Performance Alignment",
    description:
      "We align business performance with incentive structures, enabling CFOs to deliver timely, accessible, and relevant decision-making information with confidence and transparency.",
    image: "/images/advisory/performance-alignment.jpg",
    features: [
      "KPI Development & Monitoring",
      "Balanced Scorecard Implementation",
      "Executive Dashboard Creation",
      "Performance Benchmarking",
      "Incentive Structure Design",
    ],
    benefits:
      "Achieve 25-35% improvement in strategic goal attainment through better alignment",
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
    title: "Project Accounting & PMO Services",
    description:
      "We provide end-to-end support across project lifecycles—from planning to rollout and benefit realization—covering budgeting, forecasting, variance analysis, PMO operations, contract and risk management, and performance reporting.",
    image: "/images/advisory/project-accounting.jpg",
    features: [
      "Project Budget & Forecast Management",
      "Variance Analysis & Reporting",
      "PMO Setup & Operations",
      "Contract Risk Management",
      "Resource Optimization",
    ],
    benefits:
      "Deliver projects 20-30% faster with improved budget accuracy and stakeholder satisfaction",
  },
];

export const AdvisoryServices = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Advisory Services
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            From process optimization to strategic risk management, we deliver
            end-to-end solutions that address your most critical business
            challenges.
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
