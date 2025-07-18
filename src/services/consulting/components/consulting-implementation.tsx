export const ConsultingImplementation = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-24 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Consulting Implementation Framework
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            We use a proven consulting methodology that ensures strategic
            alignment, effective delivery, and long-term business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery & Alignment",
              description:
                "Engage key stakeholders to define priorities, align expectations, and clarify business outcomes.",
            },
            {
              step: "02",
              title: "Diagnostic Assessment",
              description:
                "Conduct a thorough analysis of current processes, risks, financials, and performance gaps.",
            },
            {
              step: "03",
              title: "Strategic Roadmap",
              description:
                "Design a customized transformation plan with clear milestones, KPIs, and ownership.",
            },
            {
              step: "04",
              title: "Execution & Enablement",
              description:
                "Deploy solutions with change management, governance, and ongoing performance optimization.",
            },
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
