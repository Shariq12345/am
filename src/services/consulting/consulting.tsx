import { ConsultingCta } from "./components/consulting-cta";
import { ConsultingHero } from "./components/consulting-hero";
import { ConsultingImplementation } from "./components/consulting-implementation";
import { ConsultingServices } from "./components/consulting-services";
import { ConsultingStats } from "./components/consulting-stats";
import { ConsultingTestimonials } from "./components/consulting-testimonials";
import { ConsultingChoose } from "./components/cosulting-choose";

const ConsultingPage = () => {
  return (
    <div className="bg-white">
      <ConsultingHero />
      <ConsultingStats />
      <ConsultingServices />
      <ConsultingChoose />
      <ConsultingTestimonials />
      <ConsultingImplementation />
      <ConsultingCta />
    </div>
  );
};

export default ConsultingPage;
