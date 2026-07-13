import { useState, useEffect } from "react";
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
  ArrowRight
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const BENEFITS = [
  {
    icon: <DollarSign className="w-8 h-8 text-[#F894FF]" />,
    title: "Affordable Hair Restoration",
    desc: "A permanent, safe, and natural-looking alternative for hair restoration at a fraction of the cost of a hair transplant."
  },
  {
    icon: <Shield className="w-8 h-8 text-[#F894FF]" />,
    title: "Non-Surgical & Safe",
    desc: "Non-invasive procedure with zero downtime and no scarring. Rest assured you can go back to work the very next day."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#F894FF]" />,
    title: "Zero Maintenance",
    desc: "Ditch the hats, hair fibers, and temporary cosmetic concealers. Look amazing from the moment you roll out of bed."
  }
];

const PROCESS_STEPS = [
  {
    session: "1st Session",
    duration: "2 - 3 Hours",
    bullets: [
      "Capture high-definition baseline photos",
      "Consult and map custom hairline boundaries",
      "Perform initial density pigment coverage",
      "Allow 7 to 20 days for proper healing",
      "Detailed post-care protocol review"
    ]
  },
  {
    session: "2nd Session",
    duration: "1 - 2 Hours",
    bullets: [
      "Layer micro-pigment to build target density",
      "Refine and blend hairline boundaries",
      "Calibrate color shades for natural depth",
      "Allow 7 to 20 days for secondary healing",
      "Review progression and skin response"
    ]
  },
  {
    session: "3rd Session",
    duration: "1 - 2 Hours",
    bullets: [
      "Perfect shading details across the scalp",
      "Discuss if a 4th session is required/desired",
      "Capture final after-treatment scalp photos",
      "Finalize long-term aftercare instructions",
      "Deliver final visual styling checks"
    ]
  }
];

const PRICING_TIERS = [
  { name: "Male Pattern Baldness", price: "$5,000 – $6,000", desc: "Creates the look of a full head of shaven hair." },
  { name: "Receding Hairlines", price: "$900 – $2,500", desc: "Restores a sharp, youthful framing hairline." },
  { name: "SMP For Women", price: "$800 – $1,200", desc: "Decreases scalp contrast to camouflage thinning hair." },
  { name: "Small–Medium Spot on Top", price: "$800 – $2,300", desc: "Builds dense shading on the crown or vertex." },
  { name: "Hair Part", price: "$1,200 – $2,200", desc: "Adds density along the parting line for full appearance." },
  { name: "Hair Surgery Scar", price: "$1,200 – $1,800", desc: "Seamlessly camouflages FUE or FUT transplant scars." },
  { name: "Hair Half Head", price: "$2,500 – $4,000", desc: "Comprehensive top scalp density enhancement." },
  { name: "Hair Bald Head", price: "$5,999", desc: "Complete 360-degree scalp replication." }
];

const FAQS = [
  {
    q: "Is it Permanent?",
    a: "Yes, Scalp Micropigmentation is a permanent aesthetic tattoo similar to permanent makeup or a traditional tattoo. Just like traditional tattoos, the pigment will fade slightly over time. To avoid premature fading, we recommend using sunscreen and avoiding prolonged exposure to direct sunlight on the scalp. Wearing a hat during extended outdoor activities is highly recommended to protect your SMP and your skin."
  },
  {
    q: "Is it a Tattoo?",
    a: "Yes, Scalp Micropigmentation is a specialized form of aesthetic cosmetic tattooing."
  },
  {
    q: "What’s the difference between a Tattoo and SMP?",
    a: "Human skin has three layers: the epidermis, the dermis, and the hypodermis. During a regular tattoo session, the machine penetrates the outer epidermis all the way into the dermis layer up to a depth of 3.5 millimeters using thicker needles and heavy pigment. During SMP, we only penetrate the epidermis to a depth of 1/4 mm to 1/2 mm. We use extremely fine aesthetic needles designed to leave tiny, precise micro-dots that replicate real hair stubble."
  },
  {
    q: "Is it safe?",
    a: "Yes, our SMP procedure is completely safe. We strictly use pre-packaged, single-use, sterile, medical-grade needles for each treatment."
  },
  {
    q: "Does it hurt?",
    a: "Scalp Micropigmentation is far less painful than a traditional body tattoo. While you will feel some mild discomfort, it depends on your individual pain tolerance. Most clients find the treatment highly manageable."
  },
  {
    q: "What if I am not bald, but want to make my hair look fuller?",
    a: "SMP is excellent for decreasing the contrast between your scalp color and hair color, creating an illusion of thickness and fullness. Unlike cosmetics like Toppik or DermMatch, you won't have to worry about uneven application, and it will not run, smudge, or stain your clothes and pillows."
  },
  {
    q: "What if my hair turns gray?",
    a: "Stubble from gray, blond, or white hair naturally appears gray when shaved close to the scalp. Since we match the shade based on your shaved stubble shade rather than long hair color, the underlying SMP blends seamlessly even if you turn gray later in life."
  },
  {
    q: "If I continue to bald, will it look natural?",
    a: "Yes. As you continue to lose natural hair, you can simply come in for quick fill sessions to shade and blend any newly balded sections with your existing SMP."
  },
  {
    q: "What if it fades?",
    a: "SMP requires 2 to 3 sessions spaced 2 to 3 weeks apart to layer colors and establish optimal density. Once complete, it should last for years (typically 3-4 years) before needing a minor touch-up to restore richness."
  },
  {
    q: "Does it look real?",
    a: "Absolutely. With our master artistry and fine hairline blending, SMP is indistinguishable from a real shaven head of hair, even under close inspection. It gives the permanent look of a clean, masculine 5 o'clock shadow."
  },
  {
    q: "Can you make a soft, natural hairline?",
    a: "Yes, we are specialists in custom hairline design. We work individually with each client to map either a soft, feather-faded hairline or a more defined linear look according to your facial structure."
  },
  {
    q: "What will I look like immediately after?",
    a: "Immediately following treatment, your scalp will look slightly pink, similar to a light sunburn, which fades in 24 to 48 hours. The pigment dots will look darker and more pronounced for the first three days until you wash your scalp to rinse away excess surface pigment."
  },
  {
    q: "Can SMP help women with thinning hair?",
    a: "Yes, we perform SMP on women with incredible results, adding density to thin parts, crown areas, and temples to restore the appearance of a full head of hair."
  }
];

export default function SmpPage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#070708] text-white min-h-screen font-sans selection:bg-[#F894FF]/30 selection:text-white">
      <Header currentPage="smp-page" onNavigate={onNavigate} />

      {/* ── HERO BANNER ── */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-[180px] pb-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: "url('/smp_hero_banner.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/85 to-transparent z-1" />
        <div className="absolute inset-0 bg-black/40 z-1" />

        <div className="container relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F894FF]/10 border border-[#F894FF]/30 mb-6 backdrop-blur-md">
            <Award className="w-4 h-4 text-[#F894FF]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#F894FF]">Florida's Premier SMP Provider</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight" style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}>
            SCALP <span className="text-[#F894FF]">MICROPIGMENTATION</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            The Permanent Makeup Studio offers exceptional, affordable SMP for all types of hair loss. Restore your hairline, camouflage scars, and reclaim your confidence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto text-center"
            >
              BOOK FREE CONSULTATION
            </a>
            <button
              onClick={() => {
                const el = document.getElementById("pricing");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary w-full sm:w-auto text-center"
            >
              VIEW PRICING
            </button>
          </div>

          <div className="mt-8 flex justify-center items-center gap-2 text-sm text-[#FAF5EA]/85">
            <Sparkles className="w-4 h-4 text-[#F894FF]" />
            <span>Yes, We Offer Flexible Financing Options!</span>
          </div>
        </div>

        {/* Diagonal Section Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] fill-[#070708]">
            <path d="M1200 120L0 16v104z"></path>
          </svg>
        </div>
      </section>

      {/* ── INTRO / WHAT IS SMP ── */}
      <section className="py-24 px-0 sm:px-6 relative z-10">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left side text */}
            <div className="lg:col-span-7">
              <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">Precision Aesthetics</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}>
                REGAIN YOUR NATURAL LOOK WITHOUT SURGERY
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed text-[16px] mb-8">
                <p>
                  Scalp Micropigmentation (SMP) is a highly specialized, non-surgical hair loss treatment for men and women.
                  Using medical-grade precision micro-needles, we deposit custom organic pigments into the epidermis of the scalp.
                </p>
                <p>
                  This meticulously replicates the appearance of thousands of tiny, natural hair follicles, creating a dense, clean shaven look, or adding optical density to thin and parting areas.
                </p>
              </div>

              {/* Unique selling points */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-[#F894FF]/10 flex items-center justify-center border border-[#F894FF]/25">
                    <Award className="w-5 h-5 text-[#F894FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Master SMP Artists</h4>
                    <p className="text-sm text-gray-400">Treatments performed by certified artists with exceptional training and experience.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-[#F894FF]/10 flex items-center justify-center border border-[#F894FF]/25">
                    <Layers className="w-5 h-5 text-[#F894FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Custom Advanced Pigments</h4>
                    <p className="text-sm text-gray-400">Customized pigment shade mapping that guarantees color retention without blue/green shifting.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-[#F894FF]/10 flex items-center justify-center border border-[#F894FF]/25">
                    <Calendar className="w-5 h-5 text-[#F894FF]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Flexible Scheduling</h4>
                    <p className="text-sm text-gray-400">Session schedules fully customized to align with your busy lifestyle and healing times.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#F894FF]/10 rounded-2xl blur-2xl transform rotate-3 z-0" />
              <div className="relative border border-white/10 rounded-2xl overflow-hidden bg-[#121216] p-2 z-10">
                <img
                  src="/smp_treatment_close_up.png"
                  alt="Scalp Micropigmentation treatment close-up"
                  className="rounded-xl w-full object-cover aspect-[4/5] hover:scale-102 transition-all duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CORE BENEFITS ── */}
      <section className="py-20 px-0 sm:px-6 relative" style={{ background: "var(--bg-gradient)" }}>
        <div className="container max-w-6xl mx-auto text-center">
          <span className="text-sm font-bold tracking-[3px] text-[#6B7280] block mb-2 uppercase">Why SMP?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F0F12]" style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "48px" }}>
            KEY ADVANTAGES OF TREATMENT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((item, idx) => (
              <div key={idx} className="bg-white border border-black/[0.06] p-8 rounded-xl hover:border-[#F894FF]/50 hover:shadow-lg transition-all duration-300 group">
                <div className="mb-5 inline-flex p-4 rounded-lg bg-[#F894FF]/8 border border-[#F894FF]/20 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F0F12] tracking-wide" style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "5px" }}>{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE BEFORE AFTER ── */}
      <section className="py-24 px-0 sm:px-6 relative">
        <div className="container max-w-4xl mx-auto text-center">
          <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">Real Results</span>
          <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}>
            BEFORE & AFTER CASE STUDY
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-16 text-sm">
            Hover over the images or click to see the incredible transformation. Notice the perfect density and soft, natural hairline replication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group bg-[#121216]">
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-bold tracking-widest text-red-400 border border-red-500/20">BEFORE</div>
              <img
                src="/smp_before.png"
                alt="Scalp Micropigmentation before"
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#F894FF]/20 group bg-[#121216] shadow-[0_0_30px_rgba(248,148,255,0.05)]">
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-bold tracking-widest text-[#F894FF] border border-[#F894FF]/20">AFTER</div>
              <img
                src="/smp_after.png"
                alt="Scalp Micropigmentation after"
                className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE 3-SESSION JOURNEY TIMELINE ── */}
      <section className="py-24 px-0 sm:px-6 bg-[#121216]/50 border-y border-white/5 relative">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">The Process</span>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}>
              YOUR TREATMENT JOURNEY
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              We build density and depth gradually over three separate sessions. This layering technique allows custom hairline tweaks and creates a highly realistic texture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="border border-black/[0.06] shadow-sm hover:border-[#F894FF]/40 hover:shadow-lg p-8 rounded-xl relative overflow-hidden group transition-all duration-300"
                style={{ background: "linear-gradient(180deg, #ffe7e8 0%, #ffffff 50%, #ffffff 100%)" }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F894FF]/5 to-transparent rounded-bl-full z-0" />
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="text-4xl font-extrabold text-[#F894FF]/30 group-hover:text-[#343434] transition-colors duration-300">0{idx + 1}</span>
                  <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider py-1 px-2.5 rounded bg-[#F894FF]/10 border border-[#F894FF]/20 text-[#0F0F12]">
                    <Clock className="w-3.5 h-3.5 text-[#F894FF]" />
                    {step.duration}
                  </div>
                </div>

                <h3 
                  className="text-2xl font-bold tracking-wide" 
                  style={{ 
                    fontFamily: "Staatliches, sans-serif", 
                    marginBottom: "15px",
                    color: "#0F0F12"
                  }}
                >
                  {step.session}
                </h3>

                <ul className="space-y-3 relative z-10 list-none p-0 m-0">
                  {step.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex gap-2 text-sm text-[#6B7280] items-start">
                      <ChevronDown className="w-4 h-4 text-[#F894FF] shrink-0 mt-0.5 transform -rotate-90" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black/25 border border-white/5 p-6 rounded-xl max-w-3xl mx-auto text-sm text-gray-400 flex items-start gap-4">
            <Info className="w-6 h-6 text-[#F894FF] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">Need a 4th session?</span> Extreme skin conditions such as alopecia, scarring, excessively dry/flaky skin, or highly sensitive scalp layouts may necessitate an additional perfecting session. Client skin thickness dictates depth pressure, ensuring needle penetration matches the dermal layers exactly.
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING SECTION ── */}
      <section id="pricing" className="py-24 px-0 sm:px-6 relative">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">Pricing Tiers</span>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}>
              SMP PRICING GUIDE
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              We offer clear, upfront pricing based on the coverage required. Schedule a free consultation to receive a custom quote tailored to your hair loss pattern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PRICING_TIERS.map((tier, idx) => (
              <div key={idx} className="flex flex-col justify-between p-6 rounded-xl bg-[#121216]/60 border border-white/5 hover:border-[#F894FF]/20 hover:bg-[#121216] transition-all duration-300">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider" style={{ fontFamily: "Staatliches, sans-serif" }}>{tier.name}</h4>
                  <span className="text-[#F894FF] font-bold tracking-wide shrink-0 text-lg" style={{ fontFamily: "Staatliches, sans-serif" }}>{tier.price}</span>
                </div>
                <p className="text-sm text-gray-400">{tier.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-400 flex flex-col items-center gap-2">
            <p>If you have had permanent makeup done with us in the past, your touch-ups are 50% off our standard pricing.</p>
            <a
              href="https://pay.withcherry.com/thepermanentmakeupstudio?utm_source=merchant&utm_medium=website"
              target="_blank"
              rel="noreferrer"
              className="text-[#F894FF] font-bold hover:underline inline-flex items-center gap-1.5"
            >
              Learn about our financing plans through Cherry <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── MAINTENANCE SECTION ── */}
      <section className="py-20 px-0 sm:px-6 border-t border-black/5" style={{ background: "var(--bg-gradient)" }}>
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 relative">
              <div className="border border-black/[0.06] rounded-xl overflow-hidden bg-white p-8 shadow-md">
                <div className="flex gap-4 mb-4 items-center">
                  <HeartPulse className="w-10 h-10 text-[#F894FF] shrink-0" />
                  <h3 className="text-2xl font-bold tracking-wide text-[#0F0F12]" style={{ fontFamily: "Staatliches, sans-serif" }}>LONG-TERM MAINTENANCE</h3>
                </div>
                <ul className="space-y-4 list-none p-0 m-0 text-sm text-[#6B7280]">
                  <li className="flex items-start gap-2.5">
                    <ChevronDown className="w-4 h-4 text-[#F894FF] shrink-0 mt-1 -rotate-90" />
                    <span>Annual professional reviews recommended</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronDown className="w-4 h-4 text-[#F894FF] shrink-0 mt-1 -rotate-90" />
                    <span>Re-darkening touchups every 3–4 years</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronDown className="w-4 h-4 text-[#F894FF] shrink-0 mt-1 -rotate-90" />
                    <span>Fading affected by metabolism, sun, and oils</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronDown className="w-4 h-4 text-[#F894FF] shrink-0 mt-1 -rotate-90" />
                    <span>Mature and dry skin holds color longer</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-sm font-bold tracking-[3px] text-[#6B7280] block mb-2 uppercase">Caring For Your SMP</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0F0F12]" style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}>
                WHAT IS THE LONG-TERM MAINTENANCE OF SMP?
              </h2>
              <div className="text-[#6B7280] space-y-4 leading-relaxed">
                <p>
                  We suggest booking a review appointment every year so a professional can inspect your result and offer personalized advice. Typically, clients return every 3 to 4 years for a re-darkening session to refresh the pigments.
                </p>
                <p>
                  Various elements determine color longevity. Exposure to direct sunlight, high cellular metabolic rates, oily skin types, and certain hair loss medications can accelerate fading. Conversely, mature or dry skin layouts, coupled with consistent SPF application and hats, preserve target depth and density best.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-24 px-0 sm:px-6 bg-[#121216]/20 border-t border-white/5">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[3px] text-[#F894FF] block mb-2 uppercase">Questions?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "15px" }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Read through our comprehensive guides explaining the difference between body tattoos and SMP, pain tolerance, post-session care, and more.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-[#F894FF]/30 bg-black/40" : "border-white/5 bg-black/20"
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

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="py-24 px-0 sm:px-6 bg-gradient-to-r from-[#121216] via-[#343434]/40 to-[#121216] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F894FF]/2.5 blur-3xl z-0" />
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wide" style={{ fontFamily: "Staatliches, sans-serif", marginBottom: "20px" }}>
            READY TO RESTORE YOUR <span className="text-[#F894FF]">HAIRLINE</span>?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-10 text-md">
            Schedule a free, no-obligation scalp evaluation consultation today. Let our master artists help map the best solution for you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto text-center"
            >
              BOOK YOUR FREE SESSION
            </a>
            <a
              href="tel:7277713895"
              className="btn-secondary w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              CALL +1 (727) 771-3895
            </a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
