import { useState } from "react";
import { Check, ArrowRight, Sparkles, Gem, Shield, Heart, Award } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MEMBERSHIPS = [
  {
    id: "pink-opal",
    title: "Pink Opal",
    icon: Heart,
    color: "#F894FF",
    prices: [
      { type: "Classic", amount: "$105" },
      { type: "Hybrid", amount: "$115" },
      { type: "Volume", amount: "$125" }
    ],
    features: [
      "2 classic fills per month",
      "Pay fill rate only",
      "30-minute touchy fill included"
    ],
    note: "Perfect for maintaining your everyday lash look."
  },
  {
    id: "pink-sapphire",
    title: "Pink Sapphire",
    icon: Shield,
    color: "#3B82F6",
    prices: [
      { type: "Classic", amount: "$130" },
      { type: "Hybrid", amount: "$150" },
      { type: "Volume", amount: "$175" }
    ],
    features: [
      "2 classic fills per month",
      "1 Free Facial with Dermaplane",
      "1 Free Spray Tan"
    ],
    note: "Great value for monthly beauty routines & skin glow."
  },
  {
    id: "pink-diamond",
    title: "Pink Diamond",
    icon: Gem,
    color: "#10B981",
    prices: [
      { type: "Classic", amount: "$180" },
      { type: "Hybrid", amount: "$210", label: "2 Lash Fills" },
      { type: "Volume", amount: "$240", label: "2 Lash Fills" }
    ],
    features: [
      "Classic sets and fills included",
      "2 Lash Fills included for Hybrid & Volume",
      "Maximum density and lash length maintenance"
    ],
    note: "Designed for lash extension lovers who want thick, long lashes all month long."
  },
  {
    id: "pink-unicorn",
    title: "Pink Unicorn",
    icon: Award,
    color: "#EC4899",
    prices: [
      { type: "Classic", amount: "$300" },
      { type: "Hybrid", amount: "$225" },
      { type: "Volume", amount: "$200" }
    ],
    features: [
      "Premium club access & scheduling priority",
      "Special customized style consultations",
      "Maximum discount privileges across all studio services"
    ],
    note: "The ultimate beauty program for luxury and customized lash styles."
  }
];

function MembershipPage({ onNavigate }) {
  return (
    <div className="bg-[#070708] text-white min-h-screen font-sans selection:bg-[#F894FF] selection:text-black transition-all duration-300">
      <Header currentPage="membership-page" onNavigate={onNavigate} />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-[180px] pb-16 overflow-hidden px-4 bg-[#0B0B0E] border-b border-white/[0.05]">
        <div className="absolute inset-0 bg-[#F894FF]/[0.03] blur-3xl z-0" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial from-[#F894FF]/10 to-transparent rounded-full blur-3xl z-0" />

        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#F894FF]" />
            <span className="text-[10px] font-bold tracking-[3px] text-[#F894FF] uppercase">
              Exclusive Saving Plans
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-6"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Membership Saving Programs
          </h1>

          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The Permanent Makeup Studio offers club memberships designed to save you money while keeping you looking flawless. Select a program below and secure your spot today.
          </p>
        </div>
      </section>

      {/* ── CHERRY FINANCING CARD ── */}
      <section className="py-10 px-4 sm:px-6 relative z-10 bg-[#070708] border-b border-white/[0.03]">
        <div className="container max-w-5xl mx-auto">
          <div
            className="rounded-3xl p-8 text-center relative overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#F894FF]/30 flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(18,18,22,0.9) 0%, rgba(30,30,40,0.9) 100%)"
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="text-xl">🍒</span>
                <span className="text-md font-bold tracking-wider text-white font-sans">cherry</span>
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide uppercase"
                style={{ fontFamily: "var(--font-title)" }}
              >
                BUY NOW, PAY LATER
              </h2>

              <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto mb-6">
                Monthly Payments designed for you.
              </p>

              <a
                href="https://pay.withcherry.com/thepermanentmakeupstudio?utm_source=merchant&utm_medium=website"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-8 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#F894FF] text-black hover:bg-[#ff5ef1] transition-all duration-300 shadow-md hover:scale-105"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP CONTROLLER GRID ── */}
      <section className="py-20 px-4 sm:px-6 relative z-10 bg-[#070708]">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: Visual Showcase Image */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-[120px] text-left">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                <img
                  src="/classic_eyelash_extensions.png"
                  alt="Lash Extension Portrait"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Decorative text badge on image */}
                <div className="absolute bottom-8 left-8 right-8 z-20 space-y-2">
                  <span className="text-[10px] font-bold tracking-[3px] text-[#F894FF] uppercase">
                    Aesthetically Perfect
                  </span>
                  <h4 className="text-xl font-bold uppercase tracking-wider text-white font-title" style={{ fontFamily: "var(--font-title)" }}>
                    Lash Extension Memberships
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
                    Look gorgeous every day of the week with our custom saving subscriptions.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Membership Cards List */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {MEMBERSHIPS.map((membership) => {
                const IconComp = membership.icon;
                return (
                  <div
                    key={membership.id}
                    className="rounded-3xl border border-black/[0.04] p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(248,148,255,0.08)] relative overflow-hidden group"
                    style={{ background: "linear-gradient(135deg, #ffe7e8 0%, #ffffff 100%)" }}
                  >
                    {/* Decorative Gradient Background */}
                    <div
                      className="absolute -right-16 -top-16 w-36 h-36 rounded-full blur-3xl opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                      style={{ backgroundColor: membership.color }}
                    />

                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex justify-between items-center pb-4 border-b border-black/10">
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2.5 rounded-2xl bg-black/5 border border-black/5"
                            style={{ color: membership.color }}
                          >
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <h3
                              className="text-xl font-bold uppercase tracking-wider text-[#0F0F12]"
                              style={{ fontFamily: "var(--font-title)" }}
                            >
                              {membership.title}
                            </h3>
                            <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase block">
                              VIP Savings Plan
                            </span>
                          </div>
                        </div>

                        <a
                          href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 py-2.5 px-5 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-[#0F0F12] hover:bg-black text-white hover:text-white transition-all duration-300 shadow-sm"
                        >
                          Book Now <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Pricing Dot-Leader Rows */}
                      <div className="space-y-3 py-2">
                        {membership.prices.map((price, idx) => (
                          <div key={idx} className="flex justify-between items-end">
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider font-mono">
                                {price.type}
                              </span>
                              {price.label && (
                                <span className="text-[9px] font-bold text-[#D946EF] px-1.5 py-0.5 rounded bg-[#D946EF]/10 font-mono">
                                  {price.label}
                                </span>
                              )}
                            </div>
                            <div className="border-b border-dotted border-black/20 grow mx-2 h-1" />
                            <span className="text-md font-bold text-[#0F0F12] font-mono leading-none">
                              {price.amount}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Benefits Checklist */}
                      <div className="space-y-2.5 pt-4">
                        {membership.features.map((feature, idx) => (
                          <div key={idx} className="flex gap-2.5 items-start">
                            <Check className="w-4 h-4 text-[#D946EF] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-800 leading-snug">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footnote/Description */}
                    <div className="mt-8 pt-4 border-t border-black/10">
                      <p className="text-[11px] text-gray-600 italic leading-relaxed">
                        {membership.note}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default MembershipPage;
