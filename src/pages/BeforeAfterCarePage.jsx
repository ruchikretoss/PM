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
  Eye,
  Award
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function BeforeAfterCarePage({ onNavigate }) {
  return (
    <div className="bg-[var(--bg-cream)] text-[var(--text-dark)] min-h-screen font-sans selection:bg-[var(--primary-pink)] selection:text-black">
      <Header currentPage="before-after-care-page" onNavigate={onNavigate} />

      {/* ── CHERRY FINANCING BANNER (Pink gradient banner) ── */}
      <section className="pt-[180px] pb-8 sm:px-6 relative z-10">
        <div className="container max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm border border-[#F894FF]/20 transition-all duration-500 hover:shadow-md hover:scale-[1.01]"
            style={{ background: "linear-gradient(135deg, #ffe7e8 0%, #ffffff 100%)" }}
          >
            <div className="relative z-10 flex flex-col items-center">
              {/* Cherry Logo */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍒</span>
                <span className="text-xl font-bold tracking-wider text-[#E11D48] font-sans">cherry</span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold text-[#0F0F12] mb-3 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-title)" }}
              >
                BUY NOW, PAY LATER
              </h2>

              <p className="text-sm md:text-base text-gray-500 max-w-md mx-auto mb-6">
                Monthly Payments designed for you.
              </p>

              <a
                href="https://pay.withcherry.com/thepermanentmakeupstudio?utm_source=merchant&utm_medium=website"
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 py-3 px-8 text-sm"
              >
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE AFTER CARE HEADING ── */}
      <section className="py-6 px-4 sm:px-6">
        <div className="container max-w-4xl mx-auto text-left">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0F0F12] uppercase mb-2"
            style={{ fontFamily: "var(--font-title)" }}
          >
            BEFORE AFTER CARE
          </h1>
          <div className="w-20 h-1 bg-[var(--primary-pink)] rounded-full mb-8" />
        </div>
      </section>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <section className="pb-24 px-0 sm:px-6 relative z-10">
        <div className="container max-w-4xl mx-auto space-y-16">

          {/* ── 1. BEFORE YOUR TREATMENT ── */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-black/[0.04] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--primary-pink)]/10 flex items-center justify-center border border-[var(--primary-pink)]/25">
                <Sparkles className="w-5 h-5 text-[var(--primary-pink)]" />
              </div>
              <h2
                className="text-3xl md:text-4xl uppercase text-[#0F0F12]"
                style={{ fontFamily: "var(--font-title)" }}
              >
                Before Your Treatment
              </h2>
            </div>

            <p className="text-[15px] text-gray-700 leading-relaxed mb-6">
              Before your permanent makeup appointment at The Permanent Makeup Studio, please read the pre-care guidelines below. Preparing in the right way ensures the best color retention and healing, so you are part of the decision-making process.
            </p>

            <div className="bg-[var(--bg-cream)] border border-black/[0.04] rounded-2xl p-5 mb-6 text-sm text-gray-600 flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--primary-pink)] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Permanent cosmetic procedures require a careful application process. To achieve the best results, you will be required to return for at least one control procedure 6-8 weeks after the first application.
              </p>
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-5 mb-8 text-sm text-gray-600 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Be prepared for the color intensity to look initially sharper and darker immediately after the procedure. This will subside and become softer as the skin heals. This process takes up to 10 days.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-black/[0.04]">
              {[
                "Clean skin: wash and clean skin on the day of your appointment.",
                "Please wear your normal makeup to your appointment.",
                "Do not take aspirin or ibuprofen 2 days prior to and after your appointment.",
                "Do not perform Botox, fillers, or chemical peels in the immediate area for 2 weeks prior to and after your procedure.",
                "Do not drink alcohol or caffeine 24 hours prior to the procedure.",
                "Do not take blood thinning medication.",
                "Do not take Advil, Motrin, Vitamin E, or Fish Oil within 24 hours before the procedure.",
                "No brow waxing, tinting, or threading for 1 week prior.",
                "No tanning or sunburn 3 days before.",
                "Please note that you will be more sensitive during your menstrual cycle."
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start p-1">
                  <div className="w-5 h-5 rounded-full bg-[var(--primary-pink)]/10 flex items-center justify-center shrink-0 mt-0.5 border border-[var(--primary-pink)]/30">
                    <Check className="w-3 h-3 text-[var(--primary-pink)]" />
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 2. AFTER CARE FOR EYELASH EXTENSIONS ── */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-black/[0.04] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[var(--primary-pink)]/10 flex items-center justify-center border border-[var(--primary-pink)]/25">
                <Eye className="w-5 h-5 text-[var(--primary-pink)]" />
              </div>
              <h2
                className="text-3xl md:text-4xl uppercase text-[#0F0F12]"
                style={{ fontFamily: "var(--font-title)" }}
              >
                After Care for Eyelash Extensions
              </h2>
            </div>

            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed">
              <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6 mb-2">
                <strong className="text-red-700 block mb-1 uppercase tracking-wide text-xs font-bold">Critical 24-Hour Rule</strong>
                Do NOT get your lashes wet for at least 24 hours after application. This gives the glue time to fully cure. After 24 hours, it is okay to shower and wash your face, but avoid rubbing your eyes or pulling on your eyelashes.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-[var(--bg-cream)] border border-black/[0.04] rounded-2xl">
                  <strong className="text-[#0F0F12] block mb-2 font-bold">Adhesive Care</strong>
                  Please note that activities such as hot yoga, saunas, heavy sweating, or swimming can weaken the adhesive. Causing premature lash shedding.
                </div>

                <div className="p-6 bg-[var(--bg-cream)] border border-black/[0.04] rounded-2xl">
                  <strong className="text-[#0F0F12] block mb-2 font-bold">Styling & Handling</strong>
                  When styling the eyelashes, be careful not to pull the extension. Do not pick or pull; doing so can damage your natural lashes, and the lash line will require time to build back.
                </div>

                <div className="p-6 bg-[var(--bg-cream)] border border-black/[0.04] rounded-2xl">
                  <strong className="text-[#0F0F12] block mb-2 font-bold">Sleep Position</strong>
                  Sleep on your back. Sleeping on your stomach or side can cause the extensions to fall out prematurely or become tangled.
                </div>

                <div className="p-6 bg-[var(--bg-cream)] border border-black/[0.04] rounded-2xl">
                  <strong className="text-[#0F0F12] block mb-2 font-bold">Daily Maintenance</strong>
                  To maintain your lashes, brush your lashes daily with a clean mascara wand. A simple 5-10 second sweep through your lashes in the morning will keep them in place.
                </div>
              </div>
            </div>
          </div>

          {/* ── 3. AFTERCARE FOR BROWS ── */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-black/[0.04] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--primary-pink)]/10 flex items-center justify-center border border-[var(--primary-pink)]/25">
                <Award className="w-5 h-5 text-[var(--primary-pink)]" />
              </div>
              <h2
                className="text-3xl md:text-4xl uppercase text-[#0F0F12]"
                style={{ fontFamily: "var(--font-title)" }}
              >
                Aftercare for Brows
              </h2>
            </div>

            <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed">
              <p>
                Proper care following the procedure is necessary to achieve the best results. Keep in mind that in many cases, some unevenness of color can be corrected during the control appointment.
              </p>

              <div className="p-6 bg-[var(--bg-cream)] border-l-4 border-[var(--primary-pink)] rounded-r-2xl shadow-sm">
                <p className="font-bold text-[#0F0F12] mb-1 uppercase tracking-wide text-xs">Daily Brow Care Instructions</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  For at least 10 days to the brows: do not perform exercise or sweat. For the day of your appointment, you will clean the brow area every hour. During 2-3 times of it have simple water flow from the tap and run on the pigment address when exposure to oxygen. Days 3-7 the brow area is dry and will fall by color and peel if you care the flaking. Clean of the area can prevent the pigment 10 days and 2-3 brows will be lighter is odor and color.
                </p>
              </div>
            </div>
          </div>

          {/* ── 4. AFTERCARE FOR LIP BLUSHING ── */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-black/[0.04] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--primary-pink)]/10 flex items-center justify-center border border-[var(--primary-pink)]/25">
                <Heart className="w-5 h-5 text-[var(--primary-pink)]" />
              </div>
              <h2
                className="text-3xl md:text-4xl uppercase text-[#0F0F12]"
                style={{ fontFamily: "var(--font-title)" }}
              >
                Aftercare for Lip Blushing
              </h2>
            </div>

            <p className="text-[15px] text-gray-700 leading-relaxed mb-6">
              Immediately following the procedure, lips will feel dry, chapped, tight, and tender to the touch. They may appear swollen and bright in color. No kissing, scratching, or picking in the treated area.
            </p>

            <div className="bg-[var(--bg-cream)] border border-black/[0.04] rounded-2xl p-5 mb-8 text-sm text-gray-600 flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--primary-pink)] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0F0F12] block mb-1">First Hour Protocol</strong>
                After 1 hour, start applying a thin layer of Aquaphor as needed to keep the lips constantly moist.
              </div>
            </div>

            {/* Timeline */}
            <h3
              className="text-lg font-bold text-[#0F0F12] uppercase tracking-wider mb-6 border-b border-black/[0.04] pb-2"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Healing Progression Timeline
            </h3>

            <div className="relative border-l border-[var(--primary-pink)]/30 ml-4 pl-6 space-y-8 py-5">
              <div className="relative">
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[var(--primary-pink)] border-2 border-white" />
                <h4
                  className="font-bold text-[#0F0F12] text-sm uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  Days 2-3
                </h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Keep moisturizing. Lips will start to peel. Avoid spicy, salty, and highly seasoned food. Drink with a straw. After every meal, wash lips with cool water and dry thoroughly. Reapply Aquaphor.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[var(--primary-pink)] border-2 border-white" />
                <h4
                  className="font-bold text-[#0F0F12] text-sm uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  Days 4-7
                </h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Keep moisturizing. Lips will finish the process of peeling, and color will lighten by 40-50%. The pigment will continue to settle over the next few weeks. Continue keeping your lips moist.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[var(--primary-pink)] border-2 border-white" />
                <h4
                  className="font-bold text-[#0F0F12] text-sm uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  Week 2
                </h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  The lips will look faded, color might look patchy. The color will slowly return over the next 4-6 weeks. Every week the color will return. It is important to remember that this is a process and part of the healing phase.
                </p>
              </div>
            </div>

            {/* Avoid items list */}
            <div className="mt-10 p-6 rounded-2xl bg-rose-500/5 border border-rose-500/10">
              <h4
                className="text-md font-bold text-red-700 uppercase tracking-wider mb-4"
                style={{ fontFamily: "var(--font-title)", marginBottom: "10px" }}
              >
                What to avoid during initial 10-14 days
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-600">
                {[
                  "Physical exertion",
                  "Practicing sports",
                  "Swimming",
                  "Hot tubs or saunas",
                  "Sunbathing or tanning",
                  "Exposure to UV/UVA Rays or chemicals as they lead to loss of color and premature fading",
                  "Touching of the treated area except when applying post care ointment with clean swab",
                  "Laser or chemical treatments, peelings, or acid creams (glycolic or lactic)",
                  "Picking, peeling, or scratching of the micro-pigment area to avoid scarring and removal of the pigment",
                  "Drinking alcohol in excess, as this lead to slow healing of wounds"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default BeforeAfterCarePage;
