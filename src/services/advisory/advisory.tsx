import { AdvisoryHero } from "./components/advisory-hero";
import { AdvisoryStats } from "./components/advisory-stats";
import { AdvisoryServices } from "./components/advisory-services";
import { AdvisoryChoose } from "./components/advisory-choose";
import { AdvisoryTestimonials } from "./components/advisory-testimonials";
import { AdvisoryImplementation } from "./components/advisory-implementation";
import { AdvisoryCta } from "./components/advisory-cta";

const AdvisoryPage = () => {
  return (
    <div className="bg-white">
      <AdvisoryHero />

      <AdvisoryStats />

      <AdvisoryServices />

      <AdvisoryChoose />

      <AdvisoryTestimonials />

      <AdvisoryImplementation />

      {/* Final CTA */}
      <AdvisoryCta />
    </div>
  );
};

export default AdvisoryPage;
