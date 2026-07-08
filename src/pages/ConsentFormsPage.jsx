import { ExternalLink, FileText, ArrowRight } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const SPANISH_FORMS = [
  {
    name: "Formulario De Consentimiento De Maquillaje Permanente",
    url: "https://thepermanentmakeupstudios.com/formulario-de-consentimiento-para-tatuaje-cosmetico/",
    description: "Cosmetic Tattoo Consent Form",
  },
  {
    name: "Formulario De Consentimiento Para Extensiones Y Tinte De Pestañas",
    url: "https://thepermanentmakeupstudios.com/formulario-de-consentimiento-para-microblading-y-ombre-powder-brows/",
    description: "Lash Extension & Tint Consent Form",
  },
  {
    name: "Formulario De Consentimiento De Microneedling",
    url: "https://thepermanentmakeupstudios.com/formulario-de-consentimiento-para-dermaplaning/",
    description: "Microneedling Consent Form",
  },
];

const ENGLISH_FORMS = [
  {
    name: "Permanent Makeup Consent Form",
    url: "https://thepermanentmakeupstudios.com/permanent-makeup-consent-form/",
  },
  {
    name: "Lash Extension Consent Form",
    url: "https://thepermanentmakeupstudios.com/lash-extension-consent-form/",
  },
  {
    name: "Lash Lift & Tint Consent Form",
    url: "https://thepermanentmakeupstudios.com/lash-lift-tint-consent-form/",
  },
  {
    name: "Brow Lamination Consent Form",
    url: "https://thepermanentmakeupstudios.com/minor-extension-consent-form/",
  },
  {
    name: "Spray Tan Consent Form",
    url: "https://thepermanentmakeupstudios.com/spray-tan-consent-form/",
  },
  {
    name: "Microneedling Consent Form",
    url: "https://thepermanentmakeupstudios.com/microneedling-consent-form/",
  },
  {
    name: "Parent Consent Form",
    url: "https://thepermanentmakeupstudios.com/waxing-consent-form/",
  },
];

function ConsentFormsPage({ onNavigate }) {
  return (
    <div className="bg-[#070708] text-white min-h-screen font-sans selection:bg-[#F894FF] selection:text-black transition-all duration-300">
      <Header currentPage="consent-forms-page" onNavigate={onNavigate} />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-[180px] pb-20 overflow-hidden px-4 bg-[#0B0B0E] border-b border-white/[0.05]">
        {/* Glow decorations */}
        <div className="absolute inset-0 bg-[#F894FF]/[0.03] blur-3xl z-0" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial from-[#F894FF]/10 to-transparent rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-t from-[#D946EF]/5 to-transparent rounded-full blur-3xl z-0" />

        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <FileText className="w-3.5 h-3.5 text-[#F894FF]" />
            <span className="text-[10px] font-bold tracking-[3px] text-[#F894FF] uppercase">
              Required Documentation
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-white uppercase leading-none mb-6"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Consent Forms
          </h1>

          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Please complete the appropriate consent form before your scheduled appointment.
            Select your preferred language below and click the form relevant to your service.
          </p>
        </div>
      </section>

      {/* ── CONSENT FORMS SECTION (SIDE-BY-SIDE SPLIT) ── */}
      <section className="py-20 px-4 sm:px-6 relative z-10 bg-[#070708]">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* SPANISH COLUMN (col-span-5) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#F894FF]/10 flex items-center justify-center border border-[#F894FF]/20 text-xs font-bold font-mono text-[#F894FF]">
                  ES
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[2px] text-[#F894FF] uppercase block">
                    Documentos en Español
                  </span>
                  <h2
                    className="text-2xl font-bold uppercase tracking-wide text-white"
                    style={{ fontFamily: "var(--font-title)" }}
                  >
                    Spanish Forms
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {SPANISH_FORMS.map((form, index) => (
                  <a
                    key={index}
                    href={form.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-6 rounded-2xl border border-black/[0.03] hover:border-[#F894FF]/45 p-5 sm:px-6 transition-all duration-300 no-underline hover:shadow-[0_8px_30px_rgba(248,148,255,0.08)] text-left hover:scale-[1.01]"
                    style={{ background: "linear-gradient(135deg, #ffe7e8 0%, #ffffff 100%)" }}
                  >
                    <div className="flex items-center gap-5 min-w-0">
                      <span className="text-[10px] font-bold tracking-[2px] text-[#D946EF] uppercase shrink-0 font-mono">
                        ES — 0{index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-[#0F0F12] text-xs sm:text-sm font-bold uppercase tracking-[1px] leading-snug group-hover:text-[#D946EF] transition-colors duration-300"
                          style={{ fontFamily: "var(--font-accent)" }}
                        >
                          {form.name}
                        </h3>
                        <p className="text-[10px] text-gray-600 mt-1 uppercase tracking-wide font-medium font-sans">
                          {form.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-[#D946EF] shrink-0 transition-transform duration-300 transform group-hover:translate-x-1.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* DIVIDER FOR DESKTOP */}
            <div className="hidden lg:block lg:col-span-1 h-full w-[1px] bg-gradient-to-b from-white/5 via-white/10 to-transparent self-stretch mx-auto" />

            {/* ENGLISH COLUMN (col-span-6) */}
            <div className="lg:col-span-6 space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#F894FF]/10 flex items-center justify-center border border-[#F894FF]/20 text-xs font-bold font-mono text-[#F894FF]">
                  EN
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[2px] text-[#F894FF] uppercase block">
                    English Documents
                  </span>
                  <h2
                    className="text-2xl font-bold uppercase tracking-wide text-white"
                    style={{ fontFamily: "var(--font-title)" }}
                  >
                    English Forms
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {ENGLISH_FORMS.map((form, index) => (
                  <a
                    key={index}
                    href={form.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-6 rounded-2xl border border-black/[0.03] hover:border-[#F894FF]/45 p-5 sm:px-6 transition-all duration-300 no-underline hover:shadow-[0_8px_30px_rgba(248,148,255,0.08)] text-left hover:scale-[1.01]"
                    style={{ background: "linear-gradient(135deg, #ffe7e8 0%, #ffffff 100%)" }}
                  >
                    <div className="flex items-center gap-5 min-w-0">
                      <span className="text-[10px] font-bold tracking-[2px] text-[#D946EF] uppercase shrink-0 font-mono">
                        EN — 0{index + 1}
                      </span>
                      <h3 className="text-[#0F0F12] text-xs sm:text-sm font-bold uppercase tracking-[1px] leading-snug group-hover:text-[#D946EF] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        {form.name}
                      </h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-[#D946EF] shrink-0 transition-transform duration-300 transform group-hover:translate-x-1.5" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CHERRY FINANCING CARD (DARK GLASSMORPHISM, CENTERED) ── */}
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

export default ConsentFormsPage;
