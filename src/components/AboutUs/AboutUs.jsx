import React from "react";
import { Sparkles, Award, ShieldCheck, CheckCircle2, Wine, Heart, Star, Users, ArrowUpRight } from "lucide-react";

const CERTIFICATIONS = [
    "Licensed Esthetician",
    "Salon License",
    "Triple Certified Permanent Makeup Artist",
    "Certified Microblading Artist",
    "State of Florida Dept. of Health Tattoo License",
    "Bloodborne Pathogens & Communicable Diseases Certified"
];

const HIGHLIGHTS = [
    { icon: <Award className="w-4 h-4 text-[#FF99CB]" />, title: "10+ Years", desc: "Master Craftsmanship" },
    { icon: <ShieldCheck className="w-4 h-4 text-[#FF99CB]" />, title: "Fully Licensed", desc: "State & DOH Certified" },
    { icon: <Wine className="w-4 h-4 text-[#FF99CB]" />, title: "Chic Lounge", desc: "Fresh Frosé & Prosecco" },
];

function AboutUs() {
    return (
        <>
            {/* Import luxury font family for signature & editorial accents */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playball&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap');
                
                .signature-font {
                    font-family: 'Playball', cursive;
                    font-size: 36px;
                    color: #1a1a1a;
                    letter-spacing: 0.5px;
                }
                
                .font-playfair {
                    font-family: 'Playfair Display', Georgia, serif;
                }

                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(1deg); }
                }

                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.05); }
                }

                .animate-float-slow {
                    animation: floatSlow 6s ease-in-out infinite;
                }

                .animate-pulse-glow {
                    animation: pulseGlow 4s ease-in-out infinite;
                }

                .glass-card-luxury {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(216, 138, 154, 0.25);
                    box-shadow: 0 20px 50px rgba(216, 138, 154, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9);
                }

                .rosegold-gradient-text {
                    background: linear-gradient(135deg, #111111 0%, #6e3944 50%, #FF99CB 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .rosegold-shimmer-border {
                    position: relative;
                }
                .rosegold-shimmer-border::before {
                    content: '';
                    position: absolute;
                    inset: -1px;
                    border-radius: inherit;
                    padding: 1px;
                    background: linear-gradient(135deg, rgba(216,138,154,0.5), rgba(255,255,255,0.4), rgba(216,138,154,0.2));
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }
            `}</style>

            <section
                id="about"
                className="about-section w-full py-28 relative overflow-hidden bg-[#faf8f7] text-stone-900 border-t border-stone-200/60"
            >
                {/* ── TOP CIRCULAR ROSE GOLD GRADIENT SHADOW & GLOW AURA ── */}
                {/* Outer Ambient Radial Spread */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[550px] md:w-[820px] h-[200px] sm:h-[290px] rounded-[100%] bg-gradient-to-b from-[#f5d0d8]/70 via-[#e08c9d]/30 to-transparent blur-[85px] pointer-events-none z-0 animate-pulse-glow"
                />

                {/* Inner Crisp Circular Shadow Spotlight (Focused Top Rose Gold Aura) */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[180px] sm:w-[280px] md:w-[420px] h-[100px] sm:h-[160px] rounded-[100%] bg-gradient-to-r from-[#e08c9d]/40 via-[#f9e2e6]/70 to-[#e08c9d]/40 blur-[35px] pointer-events-none z-0"
                />

                {/* Top Center Rose Gold Accent Bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 sm:w-64 h-[2px] bg-gradient-to-r from-transparent via-[#FF99CB]/90 to-transparent shadow-[0_0_12px_rgba(216,138,154,0.6)] z-10" />

                {/* Delicate background decorative elements */}
                <div className="absolute top-24 right-10 w-96 h-96 bg-rose-100/40 rounded-full filter blur-[100px] pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-100/30 rounded-full filter blur-[90px] pointer-events-none" />

                <div className="container relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header Pill & Section Intro */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#FF99CB]/35 shadow-[0_4px_20px_rgba(216,138,154,0.08)] backdrop-blur-md mb-4">
                            <Sparkles className="w-3.5 h-3.5 text-[#FF99CB]" />
                            <span
                                className="text-[11px] font-bold tracking-[3.5px] uppercase text-stone-700"
                                style={{ fontFamily: "var(--font-accent)" }}
                            >
                                ESTABLISHED 2013 • TAMPA BAY
                            </span>
                        </div>

                        <h2 className="section-title text-[40px] sm:text-[48px] md:text-[56px] font-playfair font-semibold tracking-tight text-stone-900 leading-[1.15] mb-3">
                            About <span className="title-italic font-playfair italic font-normal text-[#FF99CB]">Us</span>
                        </h2>

                        <div className="flex items-center justify-center gap-3 my-2">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#FF99CB]" />
                            <span className="text-[#FF99CB] text-[10px]">✦</span>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#FF99CB]" />
                        </div>
                    </div>

                    {/* Main Content 2-Column Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

                        {/* ── Left Column: Story & Experience Highlights ── */}
                        <div className="flex flex-col items-start text-left">

                            {/* Headline Sub-title */}
                            <h3 className="text-2xl sm:text-3xl font-playfair font-medium text-stone-900 leading-snug mb-6">
                                Where Exceptional Artistry Meets Your <span className="italic font-normal text-[#FF99CB]">Natural Beauty</span>
                            </h3>

                            {/* Main Body Paragraph 1 */}
                            <p
                                className="text-[15px] sm:text-[16px] leading-[1.85] text-stone-600 mb-6 font-light"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                The Permanent Makeup Studio specializes in enhancing your already beautiful features.
                                Our team of highly skilled and experienced estheticians, lash artists, and triple-certified
                                permanent makeup artists cater to your every aesthetic desire with meticulous precision and care.
                            </p>

                            {/* Luxury Hospitality & Experience Box */}
                            <div className="w-full glass-card-luxury rounded-2xl p-6 mb-8 rosegold-shimmer-border">
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fcf2f4] to-[#f5dcd3] border border-[#FF99CB]/35 flex items-center justify-center shrink-0 shadow-sm">
                                        <Wine className="w-5 h-5 text-[#FF99CB]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-semibold text-stone-900 tracking-wide uppercase mb-1.5" style={{ fontFamily: "var(--font-accent)" }}>
                                            Chic Pampering Experience
                                        </h4>
                                        <p className="text-[13px] leading-[1.7] text-stone-600 font-light">
                                            Relax in our chic lash lounge and try our <span className="font-medium text-stone-800">Frosé made fresh daily</span> or request a glass of <span className="font-medium text-stone-800">Prosecco</span> or artisanal tea while waiting for your technician. We also host private boutique events — from bachelorette celebrations to baby showers — taking care of every detail so you can sit back and get indulged.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 3 Quick Feature Cards Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
                                {HIGHLIGHTS.map((item, idx) => (
                                    <div key={idx} className="bg-white/80 border border-stone-200/70 rounded-xl p-4 shadow-sm flex flex-col items-start hover:border-[#FF99CB]/50 transition-colors">
                                        <div className="p-2 rounded-lg bg-[#fceef1] mb-2">
                                            {item.icon}
                                        </div>
                                        <span className="text-[14px] font-semibold text-stone-900">{item.title}</span>
                                        <span className="text-[12px] text-stone-500 font-light">{item.desc}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Founder Quote & Signature Block */}
                            <div className="w-full pt-4 border-t border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex flex-col">
                                    <span className="signature-font">
                                        Christina Corrigan
                                    </span>
                                    <span
                                        className="text-[11px] font-bold uppercase tracking-[2px] text-stone-500"
                                        style={{ fontFamily: "var(--font-accent)" }}
                                    >
                                        Founder & Master PMU Artist
                                    </span>
                                </div>

                                <div className="flex items-center gap-1.5 text-[12px] text-[#FF99CB] font-semibold tracking-wider uppercase">
                                    <Star className="w-3.5 h-3.5 fill-[#FF99CB]" />
                                    <Star className="w-3.5 h-3.5 fill-[#FF99CB]" />
                                    <Star className="w-3.5 h-3.5 fill-[#FF99CB]" />
                                    <Star className="w-3.5 h-3.5 fill-[#FF99CB]" />
                                    <Star className="w-3.5 h-3.5 fill-[#FF99CB]" />
                                </div>
                            </div>

                        </div>

                        {/* ── Right Column: Portrait Frame & Floating Qualifications Card ── */}
                        <div className="relative w-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0">

                            {/* Outer Ambient Glow Ring */}
                            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#FF99CB]/20 via-pink-100/40 to-[#FF99CB]/20 blur-2xl pointer-events-none" />

                            {/* Outer Offset Luxury Frame Accent */}
                            <div
                                className="absolute -inset-4 border border-[#FF99CB]/35 rounded-3xl pointer-events-none z-0 translate-x-4 translate-y-4 hidden sm:block"
                                style={{ transition: "transform 0.6s ease" }}
                            />

                            {/* Main Portrait Container */}
                            <div className="relative z-10 w-full max-w-[440px]">

                                {/* Image Container with Framing */}
                                <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(216,138,154,0.18)] border-2 border-white">
                                    <img
                                        src="/Christina Corrigan.jfif"
                                        alt="Christina Corrigan - Founder of The Permanent Makeup Studio"
                                        className="w-full h-[520px] sm:h-[560px] object-cover transition-transform duration-700 hover:scale-105"
                                    />

                                    {/* Subtle Overlay Gradient for Contrast at Bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                                    {/* Top Floating Badge on Image */}
                                    <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                        <span className="w-2 h-2 rounded-full bg-[#FF99CB] animate-ping" />
                                        <span className="text-[11px] font-semibold tracking-wider uppercase">Master Specialist</span>
                                    </div>
                                </div>

                                {/* Floating Glassmorphic Qualifications Card */}
                                <div
                                    className="sm:absolute sm:-bottom-10 sm:-left-14 z-20 text-left rounded-2xl p-6 sm:p-7 max-w-[360px] glass-card-luxury mt-6 sm:mt-0 animate-float-slow"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="w-4 h-4 text-[#FF99CB]" />
                                            <h4
                                                className="text-[13px] uppercase tracking-[2px] font-bold text-stone-900"
                                                style={{ fontFamily: "var(--font-accent)" }}
                                            >
                                                Credentials & Licenses
                                            </h4>
                                        </div>
                                        <span className="text-[10px] font-bold text-[#FF99CB] bg-[#fceef1] px-2 py-0.5 rounded border border-[#FF99CB]/35">
                                            100% VERIFIED
                                        </span>
                                    </div>

                                    <p className="text-[11px] mb-4 text-stone-500 font-light">
                                        Our studio adheres to the highest medical-grade & Florida state standards:
                                    </p>

                                    <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                                        {CERTIFICATIONS.map((cert, index) => (
                                            <li key={index} className="flex items-start gap-2.5">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF99CB] shrink-0 mt-0.5" />
                                                <span
                                                    className="text-[12px] leading-[1.4] text-stone-700 font-medium"
                                                    style={{ fontFamily: "var(--font-body)" }}
                                                >
                                                    {cert}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;


