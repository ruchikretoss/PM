import { useState, useEffect } from "react";
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

function getPageFromPath(pathname) {
  if (pathname === "/about") return "about";
  if (pathname === "/services" || pathname.startsWith("/services/")) return "services";
  if (pathname === "/scalp-micropigmentation" || pathname === "/smp") return "smp-page";
  if (pathname === "/scar-camouflage-tattoo" || pathname === "/scar-camouflage") return "scar-camouflage-page";
  if (pathname === "/before-after-care" || pathname === "/care-instructions") return "before-after-care-page";
  if (pathname === "/microneedling" || pathname === "/microneedling-prp") return "microneedling-page";
  if (pathname === "/gallery") return "gallery-page";
  if (pathname === "/consent-forms" || pathname === "/forms") return "consent-forms-page";
  if (pathname === "/training-courses" || pathname === "/training") return "training-page";
  return "home";
}

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const currentPage = getPageFromPath(currentPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);

      const page = getPageFromPath(window.location.pathname);
      // If navigating to services with an anchor, scroll to it
      if (page === "services") {
        const parts = window.location.pathname.split("/services/");
        if (parts[1]) {
          setTimeout(() => {
            const el = document.getElementById(parts[1]);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300);
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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

    window.history.pushState({}, "", path);
    setCurrentPath(path);

    if (page === "services" && anchor) {
      // Scroll to service section after render
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else if (page === "home" && anchor) {
      // Scroll to home page section anchor (e.g. #pricing, #training-courses)
      const sectionId = anchor.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo(0, 0);
      }, 150);
    } else if (page === "training-page" && anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  };


  return (
    <>
      {currentPage === "home" ? (
        <Home onNavigate={navigateTo} />
      ) : currentPage === "about" ? (
        <AboutPage onNavigate={navigateTo} />
      ) : currentPage === "smp-page" ? (
        <SmpPage onNavigate={navigateTo} />
      ) : currentPage === "scar-camouflage-page" ? (
        <ScarCamouflagePage onNavigate={navigateTo} />
      ) : currentPage === "before-after-care-page" ? (
        <BeforeAfterCarePage onNavigate={navigateTo} />
      ) : currentPage === "microneedling-page" ? (
        <MicroneedlingPage onNavigate={navigateTo} />
      ) : currentPage === "gallery-page" ? (
        <GalleryPage onNavigate={navigateTo} />
      ) : currentPage === "consent-forms-page" ? (
        <ConsentFormsPage onNavigate={navigateTo} />
      ) : currentPage === "training-page" ? (
        <TrainingPage onNavigate={navigateTo} />
      ) : (
        <ServicesPage key={currentPath} onNavigate={navigateTo} />
      )}
    </>
  );
}

export default App;