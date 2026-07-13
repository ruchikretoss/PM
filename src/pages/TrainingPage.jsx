import { useState } from "react";
import { Check, ArrowRight, GraduationCap, Sparkles, BookOpen } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const COURSES = [
  {
    id: "lash-training",
    title: "Eyelash Extensions Training",
    subtitle: "One on One Lash Training",
    image: "/lash_training_split.png",
    curriculum: [
      "Day 1: Review manual & practice on mannequin",
      "Day 2: Practice on live models (portfolio building)",
      "Day 3: Optional client shadowing session",
      "One-on-one personalized attention"
    ],
    included: [
      "Full Professional Lash Kit & Case",
      "Practice Mannequin Head",
      "Official Certificate of Completion",
      "Ongoing Student Support & Mentorship"
    ],
    tuition: "$800",
    deposit: "$150",
  },
  {
    id: "smp-training",
    title: "Artificial Dermapigmentation Training",
    subtitle: "Scalp Micropigmentation (SMP) Certification",
    image: "/smp_treatment_close_up.png",
    curriculum: [
      "SMP Micro-pigmentation Dot Shading",
      "Hair Follicle Replication & Density Mapping",
      "Needle Depth, Speed, & Safety Controls",
      "Symmetric Hairline Drafting & Design",
      "Guidance on obtaining a tattoo license"
    ],
    included: [
      "Full SMP Equipment Kit (machine & cartridges)",
      "Reference Manual & Completion Certificate",
      "1 Month support (2 models & 2 shadow sessions)",
      "SMP Potential (1 client/wk): $2,000/wk ($96k/yr)",
      "SMP Potential (2 clients/wk): $3,999/wk ($192k/yr)"
    ],
    tuition: "$2,999",
    deposit: "$300",
  },
  {
    id: "brows-training",
    title: "Powder Brows Training",
    subtitle: "Ombre Shading & Private Training",
    image: "/powder_brows_training_split.png",
    curriculum: [
      "Brow mapping (sticky ruler & mapping thread)",
      "Ombre Powder Shading & outline techniques",
      "Color theory, product knowledge & pre-care",
      "Machine speed, holding & pendulum motion",
      "Nano Brows Option ($2,700)",
      "Microblading Option (Contact for prices)"
    ],
    included: [
      "Wireless PMU machine, charger, & needles",
      "Starter Kit (pigment, mapping tools, fake skin)",
      "Official Manual & Framed Certificate",
      "Ongoing support (shadow/work on models twice)"
    ],
    tuition: "$1,999",
    deposit: "$250",
  },
  {
    id: "lipblush-training",
    title: "Lip Blush Training",
    subtitle: "Full Color Lips Lip Blushing Artistry",
    image: "/lip_blush_training_split.png",
    curriculum: [
      "Lip mapping, shaping, & outlining technique",
      "Device settings, needle selection & speed",
      "Color and custom pigment selection theory",
      "Permanent makeup health & safety standards",
      "Hands-on practice & live model demonstration"
    ],
    included: [
      "PMU Machine, Charger, & Cartridge Needles",
      "Starter Kit (manual, practice skin, pigments)",
      "Official Certificate of Completion",
      "Ongoing Support (2 models & 2 shadow sessions)"
    ],
    tuition: "$1,300",
    deposit: "$500",
  },
  {
    id: "eyeliner-training",
    title: "Semi-Permanent Eyeliner Training",
    subtitle: "Lashline Enhancement & Classic Wing Eyeliner",
    image: "/eyeliner_training_split.png",
    curriculum: [
      "Lashline enhancement & eyeliner tattoo",
      "Tattooed eyeliner theory & touch-up rules",
      "Apparatus machine technique & workspace prep",
      "Needle depth, angle, pressure & safety laws",
      "Eye structure mapping & symmetry design"
    ],
    included: [
      "Professional Kit (machine, needles, manual)",
      "Eyeliner practice lids, mats & pigments",
      "Live model hands-on & instructor demo",
      "Ongoing support & studio use for 1 month"
    ],
    tuition: "$1,300",
    deposit: "$200",
  }
];

function TrainingPage({ onNavigate }) {
  const [activeCourseId, setActiveCourseId] = useState("lash-training");
  const activeCourse = COURSES.find(c => c.id === activeCourseId) || COURSES[0];

  return (
    <div className="bg-[#070708] text-white min-h-screen font-sans selection:bg-[#F894FF] selection:text-black transition-all duration-300">
      <Header currentPage="training-courses" onNavigate={onNavigate} />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-[180px] pb-16 overflow-hidden px-4 bg-[#0B0B0E] border-b border-white/[0.05]">
        {/* Glow decorations */}
        <div className="absolute inset-0 bg-[#F894FF]/[0.03] blur-3xl z-0" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial from-[#F894FF]/10 to-transparent rounded-full blur-3xl z-0" />

        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <GraduationCap className="w-3.5 h-3.5 text-[#F894FF]" />
            <span className="text-[10px] font-bold tracking-[3px] text-[#F894FF] uppercase">
              Certified Academy Courses
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-white uppercase leading-none mb-6"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Academy Training
          </h1>

          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Gain certified industry expertise with our private and group training programs. 
            Select a course below to view curriculum checklist, kit inclusions, and tuition.
          </p>
        </div>
      </section>

      {/* ── COURSE SELECTOR SLIDER/GRID ── */}
      <section className="py-10 px-4 sm:px-6 relative z-10 bg-[#070708] border-b border-white/[0.03]">
        <div className="container max-w-6xl mx-auto">
          {/* Horizontal scroll on mobile, flex grid on desktop */}
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-6 pb-4 lg:pb-0 scrollbar-none snap-x justify-start lg:justify-center">
            {COURSES.map((course) => {
              const isActive = course.id === activeCourseId;
              return (
                <button
                  key={course.id}
                  onClick={() => setActiveCourseId(course.id)}
                  className={`snap-center shrink-0 w-[240px] lg:w-auto text-left relative h-[160px] rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer group flex flex-col justify-end p-5 ${
                    isActive 
                      ? "border-[#F894FF] shadow-[0_0_25px_rgba(248,148,255,0.15)] bg-[#121216]" 
                      : "border-white/5 "
                  }`}
                >
                  {/* Background Image with blur highlight */}
                  <div className="absolute inset-0 z-0 bg-cover bg-center filter saturate-[0.8] brightness-[0.4] transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-[1]" />

                  {/* Icon label */}
                  <div className="relative z-10 space-y-1">
                    <span className="text-[9px] font-bold tracking-[2px] text-[#F894FF] uppercase block">
                      {course.subtitle}
                    </span>
                    <h3 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wide leading-tight"
                      style={{ fontFamily: "var(--font-title)" }}
                    >
                      {course.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DYNAMIC COURSE WORKSPACE ── */}
      <section className="py-16 px-4 sm:px-6 relative z-10 bg-[#070708]">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Curriculum & Kits Inclusions (col-span-7) */}
            <div className="lg:col-span-7 space-y-8 animate-fadeIn text-left">
              
              {/* Course Title Accent */}
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-[2.5px] text-[#F894FF] uppercase">
                  {activeCourse.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  {activeCourse.title}
                </h2>
                <div className="h-[2px] w-12 bg-[#F894FF] rounded-full" />
              </div>

              {/* Main Course Graphic */}
              <div className="relative rounded-3xl overflow-hidden border border-white/5 aspect-video md:aspect-[21/9]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <img
                  src={activeCourse.image}
                  alt={activeCourse.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Inclusions Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#121216]/30 border border-white/[0.04] p-8 rounded-3xl backdrop-blur-md">
                
                {/* Course Curriculum */}
                <div className="space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 font-mono flex items-center gap-1.5 border-b border-white/5 pb-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#F894FF]" />
                    Syllabus Details
                  </h4>
                  <div className="space-y-3">
                    {activeCourse.curriculum.map((item, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <Check className="w-3.5 h-3.5 text-[#F894FF] shrink-0 mt-0.5" />
                        <span className="text-[12px] sm:text-[13px] text-gray-300 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What is Included */}
                <div className="space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 font-mono flex items-center gap-1.5 border-b border-white/5 pb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#F894FF]" />
                    Included Kits
                  </h4>
                  <div className="space-y-3">
                    {activeCourse.included.map((item, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start">
                        <Check className="w-3.5 h-3.5 text-[#F894FF] shrink-0 mt-0.5" />
                        <span className="text-[12px] sm:text-[13px] text-gray-300 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: Invoice style Tuition Box & CTA (col-span-5) */}
            <div className="lg:col-span-5 space-y-8 animate-fadeIn">
              
              {/* Premium Invoice Pricing Box */}
              <div
                className="rounded-3xl p-8 sm:p-10 shadow-xl border border-black/[0.03] text-left relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #ffe7e8 0%, #ffffff 100%)" }}
              >
                {/* Visual glow background inside tag */}
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#F894FF]/5 rounded-full blur-2xl" />

                <div className="space-y-6 relative z-10">
                  <div className="border-b border-black/10 pb-4">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mb-1">
                      Certified Masterclass
                    </span>
                    <h3 className="text-[#0F0F12] text-xl font-bold uppercase tracking-wide leading-tight"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Tuition Invoice
                    </h3>
                  </div>

                  {/* Dot leader lists */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-[#0F0F12] uppercase tracking-wide">
                        TUITION FEE
                      </span>
                      <div className="border-b border-dotted border-black/30 grow mx-2 h-1" />
                      <span className="text-lg font-black text-[#0F0F12] font-mono leading-none">
                        {activeCourse.tuition}
                      </span>
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                        SECURE DEPOSIT
                      </span>
                      <div className="border-b border-dotted border-black/30 grow mx-2 h-1" />
                      <span className="text-lg font-black text-[#F894FF] font-mono leading-none">
                        {activeCourse.deposit}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-6">
                    <p className="text-[10px] text-gray-500 leading-relaxed font-sans mb-6">
                      A registration deposit is required to secure your booking seat. The remaining balance is due on the first day of class training.
                    </p>
                    <a
                      href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#0F0F12] hover:bg-black text-white hover:text-white transition-all duration-300 shadow-md hover:scale-105"
                    >
                      Book Course Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Client note tag block */}
              <div className="bg-[#121216]/50 border border-white/5 p-6 rounded-2xl text-left">
                <span className="text-[#F894FF] text-[10px] font-bold tracking-[2px] uppercase block mb-2 font-mono">
                  Academy Guidelines
                </span>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  All training courses include private live model practice under certified trainer supervision. Student kits contain professional PMU tools and materials.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── CHERRY FINANCING CARD ── */}
      <section className="pb-24 px-4 sm:px-6 relative z-10 text-center bg-[#070708]">
        <div className="container max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#F894FF]/30 hover:shadow-[0_0_40px_rgba(248,148,255,0.05)] hover:scale-[1.005] flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(18,18,22,0.9) 0%, rgba(30,30,40,0.9) 100%)"
            }}
          >
            {/* Background glow */}
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#F894FF]/5 rounded-full blur-3xl" />
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-[#F894FF]/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              {/* Cherry Logo */}
              <div className="flex items-center justify-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="text-xl">🍒</span>
                <span className="text-md font-bold tracking-wider text-white font-sans">cherry</span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide uppercase text-center"
                style={{ fontFamily: "var(--font-title)" }}
              >
                BUY NOW, PAY LATER
              </h2>

              <p className="text-sm md:text-base text-gray-400 max-w-md mx-auto mb-8 font-medium text-center">
                Monthly Payments designed for you.
              </p>

              <a
                href="https://pay.withcherry.com/thepermanentmakeupstudio?utm_source=merchant&utm_medium=website"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-4 px-10 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#F894FF] text-black hover:bg-[#ff5ef1] transition-all duration-300 shadow-md shadow-[#F894FF]/10 hover:scale-105"
              >
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default TrainingPage;
