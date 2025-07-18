import { Award, DollarSign, Star, Users } from "lucide-react";

const stats = [
  { number: "600+", label: "Businesses Advised", icon: Users },
  { number: "98%", label: "Client Retention Rate", icon: Star },
  {
    number: "35%",
    label: "Growth After Engagement",
    icon: DollarSign,
  },
  { number: "20+", label: "Industries Served", icon: Award },
];

export const ConsultingStats = () => {
  return (
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
  );
};
