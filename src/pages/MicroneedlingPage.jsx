import {
  Sparkles,
  Check,
  AlertCircle,
  Info,
  Clock,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Heart,
  Activity,
  UserCheck,
  CalendarCheck,
  ChevronRight
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MicroneedlingPage({ onNavigate }) {
  return (
    <div className="bg-[#070708] text-white min-h-screen font-sans selection:bg-[#F894FF] selection:text-black transition-all duration-300">
      <Header currentPage="microneedling-page" onNavigate={onNavigate} />

      {/* ── LUXURY DARK HERO BANNER (CENTERED) ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-[180px] pb-24 overflow-hidden px-4 text-center">
        {/* Background Image / Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 filter brightness-[0.4] saturate-[0.8] scale-105"
          style={{ backgroundImage: "url('/lana-graves-cvP3M-zqeO8-unsplash.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#070708] z-0" />

        <div className="container max-w-5xl mx-auto text-center relative z-10 space-y-6 flex flex-col items-center">
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-[3px] text-[#F894FF] uppercase backdrop-blur-md">
            Advanced Skin Therapy
          </span>
          <h1
            className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight uppercase max-w-4xl mx-auto text-center"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Microneedling <br />
            <span className="text-[#F894FF] drop-shadow-[0_0_15px_rgba(248,148,255,0.25)]">With PRP Treatment</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F894FF] to-transparent mx-auto rounded-full" />
        </div>
      </section>

      {/* ── CHERRY FINANCING CARD (DARK GLASSMORPHISM, CENTERED) ── */}
      <section className="pt-16 pb-8 px-4 sm:px-6 relative z-10 text-center">
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
                className="btn-primary inline-flex items-center justify-center gap-2 py-4 px-10 text-xs tracking-wider"
              >
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION (COLLAGEN INDUCTION THERAPY IN PINK & WHITE GRADIENT) ── */}
      <section className="py-12 px-4 sm:px-6 relative z-10">
        <div className="container max-w-5xl mx-auto">
          <div
            className="rounded-[32px] p-8 md:p-12 border border-black/[0.03] shadow-[0_15px_40px_-20px_rgba(248,148,255,0.06)]"
            style={{ background: "linear-gradient(135deg, #ffe7e8 0%, #ffffff 100%)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Frame Image */}
              <div className="lg:col-span-5 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F894FF] to-transparent opacity-15 rounded-3xl blur-2xl transform rotate-3 scale-95" />
                <div className="relative border-4 border-white shadow-2xl rounded-3xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="/lana-graves-cvP3M-zqeO8-unsplash.jpg"
                    alt="Microneedling session portrait"
                    className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content (Dark text on pink/white background) */}
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="flex items-center gap-2">
                  <div className="h-[2px] w-8 bg-[#F894FF]" />
                  <span className="text-xs font-bold uppercase tracking-[2.5px] text-[#F894FF]">Premium Skincare</span>
                </div>
                <h2
                  className="text-3xl md:text-5xl uppercase text-[#0F0F12] leading-tight"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  Collagen Induction Therapy
                </h2>
                <div className="h-[1px] w-full bg-black/10" />
                <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed font-semibold">
                  Microneedling also known as collagen induction therapy, is a minimally invasive treatment designed to improve skin texture, address fine lines, acne scarring and hyper-pigmentation. Combining microneedling with PRP (Platelet Rich Plasma) takes this procedure to the next level, offering faster healing and more dramatic results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BASICS & PRP SIDE-BY-SIDE CARDS (DARK GLASSMORPHISM) ── */}
      <section className="py-8 px-4 sm:px-6 relative z-10">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Basics */}
            <div className="bg-[#121216]/50 backdrop-blur-md rounded-[32px] p-8 md:p-10 border border-white/5 shadow-sm hover:border-[#F894FF]/25 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#F894FF]/10 flex items-center justify-center border border-[#F894FF]/20 mb-6">
                <Activity className="w-6 h-6 text-[#F894FF]" />
              </div>
              <h3
                className="text-2xl md:text-3xl uppercase text-white mb-4"
                style={{ fontFamily: "var(--font-title)", marginBottom: "10px" }}
              >
                Basics of Microneedling
              </h3>
              <p className="text-sm sm:text-sm text-gray-400 leading-relaxed">
                Microneedling is a cosmetic treatment that involves pricking the skin with tiny sterilized needles. The small wounds cause your body to make more collagen and elastin, which heal your skin and help you look younger. You might also hear it called collagen induction therapy. It can help with issues like acne scars, stretch marks, wrinkles, and large pores.
              </p>
            </div>

            {/* PRP */}
            <div className="bg-[#121216]/50 backdrop-blur-md rounded-[32px] p-8 md:p-10 border border-white/5 shadow-sm hover:border-[#F894FF]/25 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#F894FF]/10 flex items-center justify-center border border-[#F894FF]/20 mb-6">
                <Sparkles className="w-6 h-6 text-[#F894FF]" />
              </div>
              <h3
                className="text-2xl md:text-3xl uppercase text-white mb-4"
                style={{ fontFamily: "var(--font-title)", marginBottom: "10px" }}
              >
                PRP Synergy Treatment
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed overflow-y-auto max-h-[220px] pr-2 scrollbar-thin">
                Platelet-rich plasma (PRP) is a concentrate of platelet-rich plasma protein derived from whole blood, centrifuged to remove red blood cells. Platelets contain growth factors that play a vital role in tissue healing and regeneration. The platelets play a role in blood clotting and contains hundreds of proteins called growth factors, which are important for healing injuries. The growth factors stimulate cell growth, promote healing, and speed up recovery. PRP is a natural resource derived from your own body, making it a safe and highly effective treatment option. Combining microneedling with PRP is a powerful treatment option. Combining microneedling with PRP is a powerful treatment option. Platelet-rich plasma, or PRP, is a concentrate of platelet-rich plasma protein derived from whole blood, centrifuged to remove red blood cells. Platelets contain growth factors that play a vital role in tissue healing and regeneration. The growth factors stimulate cell growth, promote healing, and speed up recovery. PRP is a natural resource derived from your own body, making it a safe and highly effective treatment option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IDEAL CANDIDATES (PINK & WHITE GRADIENT HIGHLIGHT) ── */}
      <section className="py-8 px-4 sm:px-6 relative z-10">
        <div className="container max-w-5xl mx-auto">
          <div
            className="rounded-[32px] p-8 md:p-12 text-left shadow-xl shadow-[#F894FF]/5 border border-white/10"
            style={{ background: "linear-gradient(135deg, #ffe7e8 0%, #ffffff 100%)" }}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="max-w-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F894FF]/10 flex items-center justify-center border border-[#F894FF]/25">
                    <UserCheck className="w-5 h-5 text-[#F894FF]" />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl uppercase text-[#0F0F12] font-bold"
                    style={{ fontFamily: "var(--font-title)" }}
                  >
                    Are you the Ideal Candidate?
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-semibold">
                  Microneedling with PRP is suitable for most healthy individuals looking to improve skin texture, address signs of aging, and target issues like acne scars or hyper-pigmentation. This treatment is suitable for most healthy individuals looking to improve skin texture, address signs of aging, and target issues like acne scars or hyper-pigmentation.
                </p>
              </div>

              {/* Exclusion Box (White block with dark/pink contrast) */}
              <div className="w-full lg:max-w-sm p-6 rounded-2xl bg-white text-black shadow-lg border border-pink-100">
                <strong className="text-rose-600 block mb-3 uppercase tracking-wide text-xs font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-600" /> Exclusion Criteria
                </strong>
                <p className="text-xs text-gray-500 mb-4 font-medium">
                  You may not be a suitable candidate if you have any of the following conditions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-gray-700">
                  {["Active acne", "Active infections", "History of keloid scars", "Skin diseases (eczema, psoriasis)", "Pregnant or breastfeeding"].map((cond, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>{cond}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERTICAL GLOW TIMELINE ROADMAP ── */}
      <section className="py-12 px-4 sm:px-6 relative z-10">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[2.5px] text-[#F894FF] uppercase block mb-2">Procedure Plan</span>
            <h2
              className="text-3xl md:text-5xl uppercase text-white animate-fadeIn"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Treatment Roadmap
            </h2>
            <div className="w-16 h-1 bg-[#F894FF] mx-auto mt-3 rounded-full" />
          </div>

          <div className="relative border-l-2 border-[#F894FF]/20 ml-6 pl-8 space-y-12 py-4 text-left">
            {/* Step 1: Pre-Care (Pink & White Highlight Card) */}
            <div className="relative group">
              {/* Step indicator (Pink with white text) */}
              <div className="absolute -left-[51px] top-0 w-9 h-9 rounded-full bg-[#F894FF] border-2 border-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 z-10">
                <span className="text-xs font-bold text-white" style={{ fontFamily: "var(--font-title)" }}>01</span>
              </div>

              <div
                className="border border-black/[0.03] rounded-3xl p-6 sm:p-8 text-[#0F0F12] shadow-xl shadow-[#F894FF]/5"
                style={{ background: "linear-gradient(135deg, #ffe7e8 0%, #ffffff 100%)" }}
              >
                <span className="inline-block px-2.5 py-0.5 bg-[#F894FF]/15 border border-[#F894FF]/30 rounded-md text-[10px] font-bold text-[#F894FF] uppercase tracking-wider mb-3">
                  Pre-Care
                </span>
                <h4 className="font-bold text-[#0F0F12] text-md uppercase mb-4 tracking-wide" style={{
                  marginBottom: "10px"
                }}>Before Your Treatment</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Clean skin: wash and clean skin on the day of your appointment.",
                    "Do not wear makeup to your appointment.",
                    "Avoid direct sun exposure or tanning beds for at least 3 days prior.",
                    "Do not take blood thinning medication.",
                    "Avoid using retinoids, salicylic acid, glycolic acid, or other exfoliating products for 3 days prior.",
                    "Please note that you will be more sensitive during your menstrual cycle."
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <div className="w-4 h-4 rounded-full bg-[#F894FF]/25 flex items-center justify-center shrink-0 mt-0.5 border border-[#F894FF]/30">
                        <Check className="w-2.5 h-2.5 text-[#F894FF]" />
                      </div>
                      <span className="text-xs text-gray-700 leading-relaxed font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Session (Classic Dark Glass Card) */}
            <div className="relative group">
              {/* Step indicator */}
              <div className="absolute -left-[51px] top-0 w-9 h-9 rounded-full bg-[#070708] border border-[#F894FF]/50 flex items-center justify-center group-hover:border-[#F894FF] group-hover:bg-[#200e26] transition-colors duration-300 z-10">
                <span className="text-xs font-bold text-[#F894FF]" style={{ fontFamily: "var(--font-title)" }}>02</span>
              </div>

              <div className="bg-[#121216]/50 border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-[#F894FF]/20 transition-colors duration-300">
                <span className="inline-block px-2.5 py-0.5 bg-[#F894FF]/10 border border-[#F894FF]/25 rounded-md text-[10px] font-bold text-[#F894FF] uppercase tracking-wider mb-3">
                  Session
                </span>
                <h4 className="font-bold text-white text-md uppercase mb-4 tracking-wide"style={{
                  marginBottom: "10px"
                }}>Day of the Treatment</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                  Your skin will be numbed with a topical anesthetic to ensure your comfort during the procedure. Blood will be drawn and processed to isolate the PRP. The microneedling device will be used to create microscopic channels in the skin. The PRP will be applied to the skin during and after the microneedling process. The entire procedure takes about 60 to 90 minutes. After the treatment, your skin will look red and feel warm, similar to a sunburn. This is normal and will subside within 24 to 48 hours.
                </p>
              </div>
            </div>

            {/* Step 3: Post-Care (Pink & White Highlight Card) */}
            <div className="relative group">
              {/* Step indicator (Pink with white text) */}
              <div className="absolute -left-[51px] top-0 w-9 h-9 rounded-full bg-[#F894FF] border-2 border-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 z-10">
                <span className="text-xs font-bold text-white" style={{ fontFamily: "var(--font-title)" }}>03</span>
              </div>

              <div
                className="border border-black/[0.03] rounded-3xl p-6 sm:p-8 text-[#0F0F12] shadow-xl shadow-[#F894FF]/5"
                style={{ background: "linear-gradient(135deg, #ffe7e8 0%, #ffffff 100%)" }}
              >
                <span className="inline-block px-2.5 py-0.5 bg-[#F894FF]/15 border border-[#F894FF]/30 rounded-md text-[10px] font-bold text-[#F894FF] uppercase tracking-wider mb-3">
                  Post-Care
                </span>
                <h4 className="font-bold text-[#0F0F12] text-md uppercase mb-4 tracking-wide" style={{ marginBottom: "10px" }}>Post Treatment Instructions</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-semibold">
                  Do NOT wash your face for at least 24 hours. Resuming the procedure, avoid direct sun exposure, saunas, hot tubs, or heavy sweating for at least 3 days. Always apply sunscreen. Exfoliating products can be resumed after 3 days. Do not pick or peel any flaking skin. Keep your skin hydrated. Use a gentle cleanser and a gentle moisturizer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS PROGRESSION (DARK VIEW) ── */}
      <section className="py-12 px-4 sm:px-6 relative z-10">
        <div className="container max-w-5xl mx-auto">
          <div className="bg-[#121216]/50 backdrop-blur-md rounded-[32px] p-8 md:p-12 border border-white/5 text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#F894FF]/10 flex items-center justify-center border border-[#F894FF]/25">
                <Clock className="w-5 h-5 text-[#F894FF]" />
              </div>
              <h2
                className="text-2xl md:text-3xl uppercase text-white"
                style={{ fontFamily: "var(--font-title)" }}
              >
                When will I see Results?
              </h2>
            </div>

            <p className="text-[15px] sm:text-base text-gray-300 leading-relaxed mb-10 font-medium">
              Most clients see improvements in skin texture and tone within a few weeks. Collagen production continues to increase over the next 3 to 6 months. For optimal results, a series of 3 to 4 treatments spaced 4 to 6 weeks apart is recommended. Most clients see improvements in skin texture and tone within a few weeks. Collagen production continues to increase over the next 3 to 6 months. for optimal results, a series of 3 to 4 treatments spaced 4 to 6 weeks apart is recommended.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/5 pt-8">
              {[
                { phase: "Weeks 1-2", label: "Initial Radiance", desc: "Visible improvements in skin texture, tone, and overall complexion brightness begin to show." },
                { phase: "Months 3-6", label: "Collagen Growth", desc: "Deep structural changes occur as collagen and elastin stores rebuild, smoothing wrinkles and scars." },
                { phase: "Maintenance", label: "Optimal Outcome", desc: "A custom plan of 3-4 sessions spaced 4-6 weeks apart locks in long-lasting, youthful tissue remodeling." }
              ].map((step, idx) => (
                <div key={idx} className="space-y-2 group">
                  <div className="text-[#F894FF] font-bold text-sm tracking-[1px] uppercase flex items-center gap-1.5">
                    <span>{step.phase}</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-white text-sm uppercase">{step.label}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
              
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default MicroneedlingPage;
