import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// Pages
const Index = lazy(() => import("./pages/Index"));
const CollisionRepair = lazy(() => import("./pages/CollisionRepair"));
const DentRepair = lazy(() => import("./pages/DentRepair"));
const AutoPainting = lazy(() => import("./pages/AutoPainting"));
const NorthCharleston = lazy(() => import("./pages/NorthCharleston"));
const MountPleasant = lazy(() => import("./pages/MountPleasant"));
const Summerville = lazy(() => import("./pages/Summerville"));
const WestAshley = lazy(() => import("./pages/WestAshley"));
const JamesIsland = lazy(() => import("./pages/JamesIsland"));
const GooseCreek = lazy(() => import("./pages/GooseCreek"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppLayout = () => {
  return (
    <>
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collision-repair" element={<CollisionRepair />} />
            <Route path="/dent-repair" element={<DentRepair />} />
            <Route path="/auto-painting" element={<AutoPainting />} />
            <Route path="/north-charleston" element={<NorthCharleston />} />
            <Route path="/mount-pleasant" element={<MountPleasant />} />
            <Route path="/summerville" element={<Summerville />} />
            <Route path="/west-ashley" element={<WestAshley />} />
            <Route path="/james-island" element={<JamesIsland />} />
            <Route path="/goose-creek" element={<GooseCreek />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
