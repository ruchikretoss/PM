import { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  X,
  Maximize2
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const CATEGORIES = ["EYEBROWS", "EYELINER", "LASHES", "LIP BLUSH", "SMP"];

const GALLERY_IMAGES = [
  // EYEBROWS (5 local images)
  { id: 1, category: "EYEBROWS", src: "/service_brows.png", alt: "Brows - Finished Powder Brows Shading" },
  { id: 2, category: "EYEBROWS", src: "/powder_brows_after.png", alt: "Brows - Powder Brows Shading Result" },
  { id: 3, category: "EYEBROWS", src: "/powder_brows_before.png", alt: "Brows - Before Permanent Makeup Shading" },
  { id: 4, category: "EYEBROWS", src: "/powder_brows_training_split.png", alt: "Brows - Before & After Mapping and Shading" },
  { id: 5, category: "EYEBROWS", src: "/powder_brows_training_single.png", alt: "Brows - Microblading Academy Training Student Work" },

  // EYELINER (2 local images)
  { id: 6, category: "EYELINER", src: "/eyeliner_training_single.png", alt: "Eyeliner - Precision Winged Eyeliner Tattoo" },
  { id: 7, category: "EYELINER", src: "/eyeliner_training_split.png", alt: "Eyeliner - Permanent Eyeliner Before & After Shading" },

  // LASHES (6 local images)
  { id: 8, category: "LASHES", src: "/classic_eyelash_extensions.png", alt: "Lashes - Classic Lash Extensions Full Set" },
  { id: 9, category: "LASHES", src: "/hybrid_eyelash_extensions.png", alt: "Lashes - Hybrid Eyelash Extensions Set" },
  { id: 10, category: "LASHES", src: "/volume_eyelash_extensions.png", alt: "Lashes - Mega Volume Lash Extensions Set" },
  { id: 12, category: "LASHES", src: "/service_lashes.png", alt: "Lashes - Custom Lash Lash Styling Close-Up" },
  { id: 13, category: "LASHES", src: "/lash_training_single.png", alt: "Lashes - Professional Lash Training Demonstration" },
  { id: 14, category: "LASHES", src: "/lash_training_split.png", alt: "Lashes - Lash Training Student Mapping Split" },

  // LIP BLUSH (5 local images)
  { id: 15, category: "LIP BLUSH", src: "/lip_blush_after.png", alt: "Lip Blush - Fully Healed Pink Lip Blush Shading" },
  { id: 16, category: "LIP BLUSH", src: "/lip_blush_before.png", alt: "Lip Blush - Pale Lips Before Blushing Treatment" },
  { id: 17, category: "LIP BLUSH", src: "/service_lipblush.png", alt: "Lip Blush - Soft Rose Lip Blush Outline and Fill" },
  { id: 18, category: "LIP BLUSH", src: "/lip_blush_training_single.png", alt: "Lip Blush - Lip Mapping and Symmetry Training" },
  { id: 19, category: "LIP BLUSH", src: "/lip_blush_training_split.png", alt: "Lip Blush - Lip Blushing Academy Student Work" },

  // SMP (4 local images)
  { id: 20, category: "SMP", src: "/smp_after.png", alt: "SMP - Hairline Density Restoration Finished" },
  { id: 21, category: "SMP", src: "/smp_before.png", alt: "SMP - Male Pattern Balding Hairline Before" },
  { id: 22, category: "SMP", src: "/smp_treatment_close_up.png", alt: "SMP - Micro-pigmentation Follicle Shading Detail" },
  { id: 23, category: "SMP", src: "/smp_hero_banner.png", alt: "SMP - Male Scalp Micropigmentation Restoration" },
];

function GalleryPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("EYEBROWS");
  const [activeImage, setActiveImage] = useState(null);
  const [colsCount, setColsCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setColsCount(4);
      else if (w >= 768) setColsCount(3);
      else if (w >= 640) setColsCount(2);
      else setColsCount(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredImages = GALLERY_IMAGES.filter(img => img.category === activeTab);

  // Distribute filtered images horizontally into column list arrays
  const columns = Array.from({ length: colsCount }, () => []);
  filteredImages.forEach((img, index) => {
    columns[index % colsCount].push(img);
  });

  // Filter out empty columns to prevent rendering grid spacer columns
  const activeColumns = columns.filter((col) => col.length > 0);
  const activeColsCount = activeColumns.length;

  return (
    <div className="bg-[#070708] text-white min-h-screen font-sans selection:bg-[#F894FF] selection:text-black transition-all duration-300">
      <Header currentPage="gallery-page" onNavigate={onNavigate} />

      {/* ── SPLIT-SCREEN DARK LUXURY HERO BANNER ── */}
      <section className="relative pt-[180px] pb-16 overflow-hidden px-4 bg-[#0B0B0E] border-b border-white/[0.05]">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[#F894FF]/5 blur-3xl z-0" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#F894FF]/10 to-transparent rounded-full blur-3xl z-0" />

        <div className="container max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            <div className="md:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[3px] text-[#F894FF] uppercase">
                Portfolio Showcase
              </span>
              <h1
                className="text-5xl md:text-7xl font-bold tracking-tight text-white uppercase leading-none"
                style={{ fontFamily: "var(--font-title)" }}
              >
                Our Gallery
              </h1>
              <p className="text-sm md:text-base text-gray-400 max-w-lg leading-relaxed">
                Explore real results from our certified permanent makeup, lash extensions, and scalp micro-pigmentation procedures. Select a category below to filter.
              </p>
            </div>

            <div className="md:col-span-5 border-l border-white/10 pl-6 space-y-4 hidden md:block">
              <h4 className="text-white text-xs uppercase tracking-[2px] font-bold" style={{ fontFamily: "var(--font-title)" }}>
                Commitment to Perfection
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                Every image in our portfolio showcases authentic, unedited client outcomes. We utilize state-of-the-art pigment shading and precision dermapigmentation tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY TABS NAV (DARK BACKDROP) ── */}
      <section className="py-8 px-4 sm:px-6 sticky top-[70px] bg-[#070708]/90 backdrop-blur-md border-b border-white/5 z-20">
        <div className="container max-w-4xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-8">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-sm sm:text-xl uppercase pb-2 tracking-wider transition-all duration-300 relative cursor-pointer ${isActive
                    ? "text-[#F894FF] scale-105"
                    : "text-gray-400 hover:text-white"
                  }`}
                style={{ fontFamily: "var(--font-title)" }}
              >
                {cat}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F894FF] rounded-full animate-fadeIn" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── MASONRY IMAGE GRID (Original Sizes, No Crop, Dynamic Centered Grid) ── */}
      <section className="py-12 px-4 sm:px-6 relative z-10 min-h-[50vh] bg-[#070708]">
        <div className="container max-w-6xl mx-auto">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No images available in this category.
            </div>
          ) : (
            <div
              className="grid gap-6 items-start justify-center mx-auto animate-fadeIn"
              style={{
                gridTemplateColumns: `repeat(${activeColsCount}, minmax(0, 1fr))`,
                maxWidth: `${activeColsCount * 300}px`
              }}
            >
              {activeColumns.map((columnImages, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-6 w-full">
                  {columnImages.map((img) => (
                    <div
                      key={img.id}
                      onClick={() => setActiveImage(img)}
                      className="group relative rounded-[20px] overflow-hidden bg-[#121216]/50 border border-white/5 hover:border-[#F894FF]/25 shadow-sm hover:shadow-[0_0_30px_rgba(248,148,255,0.05)] cursor-pointer transition-all duration-500 hover:scale-[1.015] w-full"
                    >
                      {/* Image displays original sizes with w-full h-auto block (NO CROP/CUT) */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Text Overlay Card */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                        <div className="flex justify-between items-end gap-4">
                          <p className="text-white text-xs font-semibold leading-relaxed">
                            {img.alt}
                          </p>
                          <div className="w-8 h-8 rounded-full bg-[#F894FF] text-black flex items-center justify-center shrink-0 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <Maximize2 className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX MODAL OVERLAY ── */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 z-[2010]"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Card */}
          <div
            className="relative max-w-4xl w-full bg-[#121216] border border-white/5 rounded-3xl overflow-hidden shadow-2xl animate-scaleUp text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Image side */}
              <div className="md:col-span-6 bg-black flex items-center justify-center aspect-[4/3] sm:aspect-video md:aspect-square max-h-[80vh]">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info side */}
              <div className="md:col-span-6 p-8 flex flex-col justify-between text-white space-y-8">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 bg-[#F894FF]/10 border border-[#F894FF]/30 rounded-full text-xs font-bold text-[#F894FF] tracking-wider uppercase font-sans">
                    {activeImage.category}
                  </span>

                  <h3
                    className="text-2xl font-bold uppercase tracking-wide leading-tight text-white"
                    style={{ fontFamily: "var(--font-title)" }}
                  >
                    Result Close-up
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-sans font-medium">
                    {activeImage.alt}
                  </p>
                </div>

                <a
                  href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-3.5 bg-[#F894FF] text-black hover:bg-[#ff5ef1] text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-md shadow-[#F894FF]/10"
                >
                  Book Treatment
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default GalleryPage;
