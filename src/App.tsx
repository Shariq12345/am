import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { SolutionsSection } from "./components/Solutions";
import { TrustedPartnersSlider } from "./components/CompanySlider";
import { CTABanner } from "./components/Cta";
import AdvisoryPage from "./services/advisory/advisory";
import Layout from "./layout";
import ConsultingPage from "./services/consulting/consulting";

function HomePage() {
  return (
    <>
      <Hero />
      <SolutionsSection />
      <TrustedPartnersSlider />
      <CTABanner />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services/advisory" element={<AdvisoryPage />} />
        <Route path="services/consulting" element={<ConsultingPage />} />
        {/* Add other service pages here */}
      </Route>
    </Routes>
  );
}

export default App;
