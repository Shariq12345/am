import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { SolutionsSection } from "./components/Solutions";
import { TrustedPartnersSlider } from "./components/CompanySlider";
import { CTABanner } from "./components/Cta";
import AdvisoryPage from "./services/advisory";
import Layout from "./layout";

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
        {/* Add other service pages here */}
      </Route>
    </Routes>
  );
}

export default App;
