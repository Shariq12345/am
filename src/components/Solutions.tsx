import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Business Advisory",
    description:
      "Expert guidance to navigate challenges and optimize performance",
    image: "/images/business-advisory.webp",
    href: "/services/advisory",
  },
  {
    title: "Business Consulting",
    description:
      "Transform your business with financial planning, strategy, and operational excellence",
    image: "/images/business-consulting.webp",
    href: "/services/consulting",
  },
  {
    title: "Business Support Services",
    description:
      "Streamline operations with contract staffing and business process outsourcing",
    image: "/images/business-support.webp",
    href: "/services/business-support",
  },
  {
    title: "Assurance Services",
    description:
      "Ensure compliance and enhance trust with our comprehensive assurance solutions",
    image: "/images/business-assurance.webp",
    href: "/services/assurance",
  },
  // {
  //   title: "Mobile App Development",
  //   description:
  //     "Native and cross-platform apps designed to engage users and optimize mobile workflows",
  //   image: "/images/mobile.webp",
  //   href: "/services/mobile",
  // },
  // {
  //   title: "AI, Analytics & Automation",
  //   description:
  //     "Leverage data-driven insights and automation to enhance decision-making and efficiency",
  //   image: "/images/ai.webp",
  //   href: "/services/ai-analytics",
  // },
];

export const SolutionsSection = () => {
  return (
    <section className="mt-16 px-4 sm:px-6 md:px-10 lg:px-[118px]">
      {/* Caption */}
      <p className="text-sm text-emerald-600 font-semibold tracking-wide mb-2">
        What We Offer
      </p>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Solutions That Drive Innovation and Results
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
        Explore our suite of specialized services designed to streamline your
        operations, modernize infrastructure, and drive long-term growth
      </p>

      {/* Divider */}
      <div className="w-14 h-1 bg-emerald-600 rounded-full mb-10" />

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-sm shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 bg-white"
          >
            {/* Image section */}
            <div className="relative h-45 sm:h-40 md:h-45 w-full">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent px-5 py-3">
                <h3 className="text-white text-lg font-semibold">
                  {solution.title}
                </h3>
              </div>
            </div>

            {/* Text section */}
            <div className="p-5 flex flex-col justify-between flex-grow">
              <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                {solution.description}
              </p>
              <div className="pt-3 border-t border-gray-200 mt-auto">
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-emerald-600 text-sm font-medium hover:underline transition-colors duration-200"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
