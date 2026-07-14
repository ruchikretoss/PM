import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SmpPage from "./pages/SmpPage";
import ScarCamouflagePage from "./pages/ScarCamouflagePage";
import BeforeAfterCarePage from "./pages/BeforeAfterCarePage";
import MicroneedlingPage from "./pages/MicroneedlingPage";
import GalleryPage from "./pages/GalleryPage";
import ConsentFormsPage from "./pages/ConsentFormsPage";
import TrainingPage from "./pages/TrainingPage";
import MembershipPage from "./pages/MembershipPage";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling behavior based on pathname and hash changes
    const pathname = location.pathname;
    const hash = location.hash;

    // Services page anchor scroll (e.g. /services/eyelash-extensions)
    if (pathname.startsWith("/services/")) {
      const parts = pathname.split("/services/");
      if (parts[1]) {
        setTimeout(() => {
          const el = document.getElementById(parts[1]);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
        return;
      }
    }

    // Scroll to hash element (e.g. /training-courses#lash-training or /#pricing)
    if (hash) {
      const sectionId = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
      return;
    }

    // Default scroll to top
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  const navigateTo = (page, anchor) => {
    let path = "/";
    if (page === "about") path = "/about";
    else if (page === "services") path = anchor ? `/services/${anchor}` : "/services";
    else if (page === "smp-page") path = "/scalp-micropigmentation";
    else if (page === "scar-camouflage-page") path = "/scar-camouflage-tattoo";
    else if (page === "before-after-care-page") path = "/before-after-care";
    else if (page === "microneedling-page") path = "/microneedling";
    else if (page === "gallery-page") path = "/gallery";
    else if (page === "consent-forms-page") path = "/consent-forms";
    else if (page === "training-page") path = anchor ? `/training-courses#${anchor}` : "/training-courses";
    else if (page === "membership-page") path = "/membership";
    else if (page === "home") path = anchor ? `/${anchor}` : "/";

    // If we're already on the target path, we can still attempt scrolling manually
    const currentFullPath = location.pathname + (location.hash || "");
    if (currentFullPath === path) {
      if (page === "services" && anchor) {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (anchor) {
        const sectionId = anchor.replace("#", "");
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home onNavigate={navigateTo} />} />
      <Route path="/about" element={<AboutPage onNavigate={navigateTo} />} />
      <Route path="/services" element={<ServicesPage onNavigate={navigateTo} />} />
      <Route path="/services/:serviceName" element={<ServicesPage onNavigate={navigateTo} />} />

      {/* Scalp Micropigmentation routes */}
      <Route path="/scalp-micropigmentation" element={<SmpPage onNavigate={navigateTo} />} />
      <Route path="/smp" element={<SmpPage onNavigate={navigateTo} />} />

      {/* Scar Camouflage routes */}
      <Route path="/scar-camouflage-tattoo" element={<ScarCamouflagePage onNavigate={navigateTo} />} />
      <Route path="/scar-camouflage" element={<ScarCamouflagePage onNavigate={navigateTo} />} />

      {/* Before After Care routes */}
      <Route path="/before-after-care" element={<BeforeAfterCarePage onNavigate={navigateTo} />} />
      <Route path="/care-instructions" element={<BeforeAfterCarePage onNavigate={navigateTo} />} />

      {/* Microneedling routes */}
      <Route path="/microneedling" element={<MicroneedlingPage onNavigate={navigateTo} />} />
      <Route path="/microneedling-prp" element={<MicroneedlingPage onNavigate={navigateTo} />} />

      {/* Gallery route */}
      <Route path="/gallery" element={<GalleryPage onNavigate={navigateTo} />} />

      {/* Consent Forms routes */}
      <Route path="/consent-forms" element={<ConsentFormsPage onNavigate={navigateTo} />} />
      <Route path="/forms" element={<ConsentFormsPage onNavigate={navigateTo} />} />

      {/* Training routes */}
      <Route path="/training-courses" element={<TrainingPage onNavigate={navigateTo} />} />
      <Route path="/training" element={<TrainingPage onNavigate={navigateTo} />} />

      {/* Membership routes */}
      <Route path="/membership" element={<MembershipPage onNavigate={navigateTo} />} />
      <Route path="/membership-saving-programs" element={<MembershipPage onNavigate={navigateTo} />} />

      {/* Fallback route */}
      <Route path="*" element={<Home onNavigate={navigateTo} />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;