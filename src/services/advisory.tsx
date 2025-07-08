import {
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Target,
  Award,
  Clock,
  DollarSign,
  BarChart3,
  Star,
} from "lucide-react";

const sections = [
  {
    title: "Process Improvement",
    description:
      "We help to improve, rationalize, and enhance core Finance processes such as accounts receivables, payables, fixed assets, closing activities, consolidation, and MIS reporting. Our support empowers CFOs and finance teams to meet the demands of evolving roles, finance function effectiveness, data quality, internal controls, and governance.",
    image: "/images/process-improvement.jpg",
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
    image: "/images/performance-alignment.jpg",
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
    image: "/images/risk-assessment.jpg",
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
    image: "/images/project-accounting.jpg",
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

const stats = [
  { number: "500+", label: "Clients Served", icon: Users },
  { number: "95%", label: "Client Satisfaction", icon: Star },
  { number: "40%", label: "Average Cost Reduction", icon: DollarSign },
  { number: "15+", label: "Years Experience", icon: Award },
];

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

const AdvisoryPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-10 lg:px-[118px] pt-20 pb-32 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              Trusted by Organizations Worldwide
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Strategic Business Advisory
              <span className="block text-emerald-600">
                That Drives Results
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Partner with seasoned financial experts to unlock strategic
              insights, optimize performance, and build resilient operations
              that fuel sustainable growth in today's dynamic business
              environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => (window.location.href = "/contact")}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Transformation <ArrowRight size={18} />
              </button>
              <button
                onClick={() => (window.location.href = "/case-studies")}
                className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                View Case Studies <BarChart3 size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Leading Organizations Choose Us
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with innovative methodologies
              to deliver transformational results that last.
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

      {/* Testimonials */}
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

      {/* Implementation Process */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-24 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured, time-tested approach that ensures
              successful outcomes and sustainable improvements.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

      {/* Final CTA */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-[118px] py-24 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-emerald-100 mb-8 leading-relaxed">
            Join hundreds of organizations that have achieved remarkable results
            through our strategic advisory services. Let's discuss how we can
            accelerate your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Free Consultation <ArrowRight size={18} />
            </button>
            <button
              onClick={() => (window.location.href = "/download-brochure")}
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              Download Our Brochure <Clock size={18} />
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
    </div>
  );
};

export default AdvisoryPage;
