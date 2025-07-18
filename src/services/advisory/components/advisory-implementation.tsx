

export const AdvisoryImplementation = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-24 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Proven Implementation Process
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            We follow a structured, time-tested approach that ensures successful
            outcomes and sustainable improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assessment",
              description:
                "Comprehensive analysis of current state and opportunities",
            },
            {
              step: "02",
              title: "Strategy",
              description:
                "Develop tailored roadmap aligned with business objectives",
            },
            {
              step: "03",
              title: "Implementation",
              description:
                "Execute solutions with dedicated project management",
            },
            {
              step: "04",
              title: "Optimization",
              description:
                "Continuous monitoring and refinement for sustained results",
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
