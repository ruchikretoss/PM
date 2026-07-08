import { useState } from "react";
import {
  Shield,
  Sparkles,
  Calendar,
  DollarSign,
  Phone,
  Clock,
  ChevronDown,
  Award,
  Info,
  Layers,
  HeartPulse,
  Activity,
  Flame,
  ArrowRight,
  Check,
  AlertCircle
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const SCAR_TYPES = [
  {
    num: "01",
    title: "Surgical Scars",
    desc: "C-sections, tummy tucks, breast augmentation/reconstruction, and orthopedic incision lines are perfect candidates once fully matured."
  },
  {
    num: "02",
    title: "Accidental Injuries",
    desc: "Accidental cuts, scrapes, and flat, fully healed burn scars can be camouflaged by depositing pigment to match your natural skin tone."
  },
  {
    num: "03",
    title: "Stretch Marks",
    desc: "Pregnancy, weight fluctuation, or growth stretch marks can be blended out. This works best when stretch marks are white or silver."
  },
  {
    num: "04",
    title: "Facelift & Self-Harm",
    desc: "Highly personal scars around the hairline, ears, arms, or thighs can be camouflaged to help you move forward with confidence."
  }
];

const PROCESS_STEPS = [
  {
    num: "01",
    session: "Consultation Stage",
    duration: "30-45 MIN",
    desc: "We analyze your scar's texture, age, color, and your skin type. A test patch is performed if necessary to observe healing reactions."
  },
  {
    num: "02",
    session: "Pigment Formulation",
    duration: "30 MIN",
    desc: "We meticulously match skin undertones, custom blending organic skin-toned pigments to mirror your natural complexion shades."
  },
  {
    num: "03",
    session: "Needling Procedure",
    duration: "1 - 2 HOURS",
    desc: "A medical-grade topical anesthetic is applied. Using specialized micro-needles, pigment layers are deposited directly into the scar borders."
  },
  {
    num: "04",
    session: "Pigment Maturation",
    duration: "4 - 6 WEEKS",
    desc: "The pigment settles and heals over several weeks. A touch-up perfecting session is scheduled to refine the final shade density."
  }
];

const FAQS = [
  {
    q: "Is Scar Camouflage Permanent?",
    a: "Yes, scar camouflage is considered a semi-permanent to permanent tattoo. Like any permanent makeup, the pigment will fade slightly over the years due to cellular metabolism and sun exposure. An occasional refresh touch-up every 3 to 5 years is recommended to keep it looking perfect."
  },
  {
    q: "Does The Procedure Hurt?",
    a: "Most clients describe the sensation as a light scratching. We apply a highly effective medical-grade topical anesthetic gel prior to and during the procedure to minimize any discomfort."
  },
  {
    q: "Can All Scars Be Treated?",
    a: "No. The scar must be at least 12 months old, completely flat, and lighter than the surrounding skin. Raised scars, keloids, dark/hyperpigmented scars, or scars in areas with active skin conditions (acne, eczema) cannot be camouflaged."
  },
  {
    q: "How Many Sessions Will I Need?",
    a: "Most scars require 2 to 3 sessions spaced 6 to 8 weeks apart. This gradual layering technique allows the pigment to settle and blends the borders seamlessly with your surrounding skin."
  }
];

function ScarCamouflagePage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [beforeAfterView, setBeforeAfterView] = useState("after"); // "before" or "after"
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <div className="bg-[#070708] text-white min-h-screen font-sans selection:bg-[#F894FF] selection:text-black">
      <Header currentPage="scar-camouflage-page" onNavigate={onNavigate} />

      {/* ── 1. SPLIT-SCREEN HERO SECTION ── */}
      <section className="relative min-h-[90vh] flex items-center pt-[185px] pb-20 overflow-hidden px-0 sm:px-6">
        <div className="absolute inset-0 bg-[#F894FF]/2.5 blur-3xl z-0" />

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                <Award className="w-4 h-4 text-[#F894FF]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#F894FF]">Advanced Dermapigmentation</span>
              </div>

              <h1
                className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none mb-6"
                style={{ fontFamily: "Staatliches, sans-serif" }}
              >
                SCAR CAMOUFLAGE <br />
                <span className="text-[#F894FF] drop-shadow-[0_0_15px_rgba(248,148,255,0.25)]">TATTOO TREATMENT</span>
              </h1>

              <p className="text-md md:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                A specialized, non-surgical treatment that deposits custom skin-toned pigments into healed scars and stretch marks, blending them seamlessly with your surrounding skin tone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full sm:w-auto text-center py-4 px-8"
                >
                  BOOK FREE CONSULTATION
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById("pricing");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-secondary w-full sm:w-auto text-center py-4 px-8"
                >
                  VIEW PRICES
                </button>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Sparkles className="w-4 h-4 text-[#F894FF]" />
                <span>0% APR Payment Plans Available Through Cherry Financing</span>
              </div>
            </div>

            {/* Right Column: Floating Glowing Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute inset-0 bg-[#F894FF]/10 rounded-3xl blur-3xl transform rotate-6 z-0" />
              <div className="relative border border-[#F894FF]/30 rounded-3xl overflow-hidden bg-[#121216] p-3 z-10 shadow-[0_0_40px_rgba(248,148,255,0.15)] max-w-md w-full">
                <img
                  src="/scar_camouflage_treatment_needle.png"
                  alt="Precision scar camouflage tattoo needling"
                  className="rounded-2xl w-full object-cover aspect-[4/5] hover:scale-102 transition-all duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. SPLIT PANEL INTRO & CHECKLIST (LIGHT THEME) ── */}
      <section className="py-24 px-0 sm:px-6 relative" style={{ background: "var(--bg-gradient)" }}>
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Side: Combined Intro Text */}
            <div className="lg:col-span-6 text-left">
              <span className="text-sm font-bold tracking-[3px] text-[#6B7280] block mb-2 uppercase">Skin Shade Alignment</span>
              <h2
                className="text-3xl md:text-5xl font-bold text-[#0F0F12]"
                style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "24px" }}
              >
                REGAIN SKIN'S NATURAL COMPLEXION
              </h2>

              <div className="space-y-5 text-[#6B7280] leading-relaxed text-[16px]">
                <p>
                  White or light scars can create an uneven skin appearance that affects your confidence.
                  Our customized permanent makeup technique deposits medical-grade organic pigments into the hypopigmented areas, restoring even tones.
                </p>
                <p>
                  Unlike transplants or surgical excision, this aesthetic needling blends the borders of white scars and stretch marks, replicating your exact skin undertones to render the treatment site virtually unnoticeable.
                </p>
              </div>
            </div>

            {/* Right Side: Interactive Checklist Card */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-black/[0.06] rounded-2xl p-8 shadow-xl text-left">
                <h3
                  className="text-2xl font-bold text-[#0F0F12] tracking-wide"
                  style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "20px" }}
                >
                  CANDIDATE CHECKLIST
                </h3>

                <p className="text-xs text-[#6B7280] mb-6">
                  Verify if your scar is ready for camouflage treatment:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F0F12]">Matured Scar (12+ Months Old)</h4>
                      <p className="text-xs text-[#6B7280]">Completely healed and white/silver. Scars still red, pink, or purple are ineligible.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F0F12]">Flat Skin Texture</h4>
                      <p className="text-xs text-[#6B7280]">Perfect for flat surgical, injury, or stretch lines. Raised keloid tissue cannot be treated.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F0F12]">Hypopigmented (Lighter Shade)</h4>
                      <p className="text-xs text-[#6B7280]">The scar tissue must be lighter than your surrounding skin so pigment can shade match it.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-black/5 pt-4 mt-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-red-500">Exclusion Criteria</h4>
                      <p className="text-xs text-[#6B7280]">No history of keloids, and no active skin inflammation (acne, eczema) in the area.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. COMMON SCAR TYPES GRID (MINIMAL ROW DESIGN) ── */}
      <section className="py-24 px-0 sm:px-6 relative border-b border-white/5">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">Treatable Types</span>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}
            >
              SCARS WE REGULARLY CAMOUFLAGE
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Our advanced shading techniques are versatile and address multiple scar layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {SCAR_TYPES.map((type, idx) => (
              <div key={idx} className="border-t border-white/10 pt-6 hover:border-[#F894FF] transition-colors duration-300">
                <span className="text-xs font-bold text-[#F894FF] block mb-3">{type.num}</span>
                <h4
                  className="text-lg font-bold text-white uppercase tracking-wider mb-2"
                  style={{ fontFamily: "Staatliches, sans-serif" }}
                >
                  {type.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INTERACTIVE BEFORE AFTER TOGGLE CARD ── */}
      <section className="py-24 px-0 sm:px-6 relative bg-gradient-to-b from-[#121216]/20 to-[#070708]">
        <div className="container max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">Case Study</span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Staatliches, sans-serif" }}
          >
            INTERACTIVE SHADE COMPARISON
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-12 text-sm">
            Toggle between BEFORE and AFTER views to see how the white hypopigmented scar blends into the matching skin tone.
          </p>

          <div className="max-w-xl mx-auto bg-[#121216] border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">

            {/* View Selector Buttons */}
            <div className="flex justify-center gap-2 mb-6">
              <button
                onClick={() => setBeforeAfterView("before")}
                className={`px-6 py-2.5 rounded-full tracking-wider text-xs transition-all duration-300 ${beforeAfterView === "before"
                    ? "bg-[#F894FF] text-black shadow-md"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  }`}
                style={{ fontFamily: "Staatliches, sans-serif" }}
              >
                SHOW BEFORE
              </button>
              <button
                onClick={() => setBeforeAfterView("after")}
                className={`px-6 py-2.5 rounded-full tracking-wider text-xs transition-all duration-300 ${beforeAfterView === "after"
                    ? "bg-[#F894FF] text-black shadow-md"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  }`}
                style={{ fontFamily: "Staatliches, sans-serif" }}
              >
                SHOW AFTER (CAMOUFLAGE)
              </button>
            </div>

            {/* Display Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/5">
              {/* Before image with fade transition */}
              <img
                src="/scar_before.png"
                alt="Scar camouflage before"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${beforeAfterView === "before" ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
              />

              {/* After image with fade transition */}
              <img
                src="/scar_after.png"
                alt="Scar camouflage after"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${beforeAfterView === "after" ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
              />
            </div>

            <div className="mt-4 text-xs text-gray-500">
              *Real untreated healed surgical scar vs. pigments shaded to match matching skin complexion.
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. VERTICAL TIMELINE / STEPPER JOURNEY ── */}
      <section className="py-24 px-0 sm:px-6 relative border-t border-white/5 bg-[#0e0e12]/60">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">The Process</span>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}
            >
              YOUR PROCEDURE TIMELINE
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              A gradual, layering approach that guarantees perfect pigmentation depth and color matching.
            </p>
          </div>

          {/* Vertical Stepper */}
          <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-9 space-y-12 text-left">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative group">

                {/* Step circle indicator */}
                <div className="absolute -left-[50px] md:-left-[56px] top-0 w-10 h-10 rounded-full border border-[#F894FF]/30 bg-[#121216] flex items-center justify-center group-hover:bg-[#2a0a3a] group-hover:border-[#F894FF]/90 transition-colors duration-300">
                  <span className="text-xs font-bold text-[#F894FF]">{step.num}</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3
                    className="text-xl font-bold text-white uppercase tracking-wider"
                    style={{ fontFamily: "Staatliches, sans-serif" }}
                  >
                    {step.session}
                  </h3>
                  <span className="text-[10px] font-bold text-[#F894FF] uppercase tracking-wider py-0.5 px-2 bg-[#F894FF]/5 border border-[#F894FF]/20 rounded self-start">
                    {step.duration}
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. AFTERCARE & SENSATION FULL-WIDTH GRID ── */}
      <section className="py-24 px-0 sm:px-6 relative border-t border-white/5 bg-[#070708]">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Column: Aftercare List */}
            <div className="lg:col-span-6 text-left">
              <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">Color Retention</span>
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "24px" }}
              >
                CRITICAL AFTERCARE RULES
              </h2>

              <ul className="space-y-4 list-none p-0 m-0 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <ChevronDown className="w-4 h-4 text-[#F894FF] shrink-0 mt-1 -rotate-90" />
                  <span><strong>Clean & Dry:</strong> Keep the treatment site dry for the first 24–48 hours to lock in pigment lines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronDown className="w-4 h-4 text-[#F894FF] shrink-0 mt-1 -rotate-90" />
                  <span><strong>Thin Ointment:</strong> Apply the recommended aftercare cream in a thin layer twice daily.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronDown className="w-4 h-4 text-[#F894FF] shrink-0 mt-1 -rotate-90" />
                  <span><strong>Restricted Activities:</strong> No scratch/pick, and avoid sun, swimming, or heavy sweat for 14 days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronDown className="w-4 h-4 text-[#F894FF] shrink-0 mt-1 -rotate-90" />
                  <span><strong>Sun Protection:</strong> Always apply high SPF sunscreen after healing is complete to protect against fading.</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Sensation Floating Card */}
            <div className="lg:col-span-6">
              <div className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md p-8 text-left shadow-lg">
                <div className="flex gap-4 mb-6 items-center">
                  <HeartPulse className="w-8 h-8 text-[#F894FF] shrink-0" />
                  <h3
                    className="text-2xl font-bold tracking-wide text-white uppercase"
                    style={{ fontFamily: "Staatliches, sans-serif" }}
                  >
                    WHAT TO EXPECT?
                  </h3>
                </div>
                <div className="space-y-4 text-xs text-gray-400 leading-relaxed">
                  <p>
                    <strong>Sensation:</strong> Most clients describe the needle touch as a mild scratching sensation. A topical medical anesthetic gel is continuously layered to ensure a relaxed experience.
                  </p>
                  <p>
                    <strong>Duration:</strong> Depending on the complexity and dimensions of the scar tissue layout, sessions usually range from 1 to 2 hours.
                  </p>
                  <p>
                    <strong>Micropigmentation:</strong> While medical areola reconstruction replaces tissue details, scar camouflage focuses exclusively on blending light marks back into natural shades.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. PRICING & FINANCING CARD ── */}
      <section id="pricing" className="py-24 px-0 sm:px-6 relative border-t border-white/5 bg-[#121216]/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">Pricing Tier</span>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}
            >
              SCAR CAMOUFLAGE SERVICE RATES
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              We offer clear, upfront pricing based on the treatment layout.
            </p>
          </div>

          <div className="max-w-md mx-auto p-8 rounded-3xl bg-[#0e0e12] border border-[#F894FF]/25 text-center shadow-[0_0_30px_rgba(248,148,255,0.08)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F894FF]/5 to-transparent rounded-bl-full z-0" />

            <h4
              className="text-lg font-bold text-white uppercase tracking-wider mb-2 relative z-10"
              style={{ fontFamily: "Staatliches, sans-serif" }}
            >
              Standard Scar Camouflage
            </h4>

            <div
              className="text-5xl text-[#F894FF] mb-4 relative z-10 drop-shadow-[0_0_10px_rgba(248,148,255,0.2)]"
              style={{ fontFamily: "Staatliches, sans-serif" }}
            >
              Starting at $300<span className="text-xs text-gray-500 font-sans font-normal"> / session</span>
            </div>

            <p className="text-xs text-gray-400 mb-6 relative z-10 leading-relaxed">
              Price depends on the length, texture, and size of the scar tissue. Multiple sessions (usually 2-3) are recommended to achieve full shade match coverage.
            </p>

            <a
              href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full inline-block py-3.5 mb-4 text-sm"
            >
              BOOK SESSION NOW
            </a>

            <a
              href="https://pay.withcherry.com/thepermanentmakeupstudio?utm_source=merchant&utm_medium=website"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-400 hover:text-[#F894FF] inline-flex items-center gap-1 hover:underline"
            >
              Learn about financing options through Cherry <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ACCORDION ── */}
      <section className="py-24 px-0 sm:px-6 bg-[#121216]/20 border-t border-white/5">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">FAQ Portal</span>
            <h2
              className="text-3xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Common questions concerning longevity, matching skin types, and physical comfort.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${isOpen ? "border-[#F894FF]/30 bg-black/40" : "border-white/5 bg-black/20"
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none"
                    style={{
                      fontFamily: "var(--font-title)",
                      fontSize: "20px",
                      color: "white",
                      letterSpacing: "1px"
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F894FF] transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className="transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? "400px" : "0",
                      opacity: isOpen ? "1" : "0",
                      visibility: isOpen ? "visible" : "hidden"
                    }}
                  >
                    <div className="p-6 pt-5 text-sm text-gray-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 9. CALL TO ACTION ── */}
      <section className="py-24 px-0 sm:px-6 bg-gradient-to-r from-[#121216] via-[#2a0a3a]/40 to-[#121216] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F894FF]/2.5 blur-3xl z-0" />
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h2
            className="text-4xl md:text-6xl font-bold tracking-wide"
            style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "20px" }}
          >
            RESTORE YOUR SKIN'S <span className="text-[#F894FF]">NATURAL HARMONY</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-10 text-md">
            Unify your skin tone today. Take a quick photo of your scar and schedule a free consultation with our certified experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto text-center"
            >
              BOOK FREE CONSULTATION
            </a>
            <a
              href="https://chat.thepermanentmakeupstudios.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-full sm:w-auto text-center"
            >
              CONTACT OUR CLINIC
            </a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default ScarCamouflagePage;
