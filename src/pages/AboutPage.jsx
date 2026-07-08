import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ChatWidget from "../components/ChatWidget/ChatWidget";
import { ShieldCheck, Award, Star, Clock, Heart, ArrowRight, Sparkles, Store, Feather, FileText, Droplet, Wine } from "lucide-react";

function AboutPage({ onNavigate }) {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <style>{`
                /* High-End Custom Keyframes */
                @keyframes pageIntro {
                    0% { opacity: 0; transform: translateY(40px) scale(0.98); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes floatOrb {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                    100% { transform: translateY(0px) rotate(360deg); }
                }
                @keyframes pinkGlow {
                    0% { box-shadow: 0 0 10px rgba(248, 148, 255, 0.15); }
                    50% { box-shadow: 0 0 25px rgba(248, 148, 255, 0.35); }
                    100% { box-shadow: 0 0 10px rgba(248, 148, 255, 0.15); }
                }
                
                .intro-anim {
                    animation: pageIntro 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                /* Luxury Custom Utilities using Site Theme */
                .text-luxury-pink {
                    background: linear-gradient(135deg, #ffffff 0%, var(--primary-pink) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .bg-luxury-pink-grad {
                    background: linear-gradient(135deg, var(--primary-pink) 0%, #ffffff 100%);
                }
                .border-luxury-pink {
                    border-color: rgba(248, 148, 255, 0.25);
                }
                .glow-pink-pulse {
                    animation: pinkGlow 4s infinite ease-in-out;
                }

                /* Arch framing for cosmetic mirror look */
                .cosmetic-arch {
                    border-top-left-radius: 180px;
                    border-top-right-radius: 180px;
                }

                /* Watermark style */
                .text-watermark {
                    font-size: 350px;
                    line-height: 1;
                    color: rgba(248, 148, 255, 0.03);
                    font-family: 'Playfair Display', serif;
                    pointer-events: none;
                    user-select: none;
                }

                /* Parallax overlap elements */
                @media (min-width: 992px) {
                    .magazine-card-offset {
                        transform: translate(25px, 25px);
                        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
                    }
                    .magazine-container:hover .magazine-card-offset {
                        transform: translate(0px, 0px);
                        border-color: var(--primary-pink);
                    }
                }
                /* Sticky Parallax Banner */
                .parallax-banner {
                    background-image: url("/about_parallax_bg.png");
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                    height: 480px;
                }
                @media (max-width: 768px) {
                    .parallax-banner {
                        height: 320px;
                    }
                }
            `}</style>

            <Header currentPage="about" onNavigate={onNavigate} />

            {/* ── SECTION 1: EDITORIAL HERO ── */}
            <section
                className="w-full pt-[220px] pb-[120px] max-md:pt-[150px] max-md:pb-[70px] relative overflow-hidden"
                style={{ background: "var(--bg-dark-purple)" }}
            >
                {/* Floating blur orbs */}
                <div
                    className="absolute w-[600px] h-[600px] bg-[rgba(248,148,255,0.06)] rounded-full filter blur-[130px] -top-80 -left-60 pointer-events-none"
                    style={{ animation: "floatOrb 15s infinite linear" }}
                />
                <div
                    className="absolute w-[500px] h-[500px] bg-[rgba(248,148,255,0.04)] rounded-full filter blur-[120px] bottom-0 right-0 pointer-events-none"
                    style={{ animation: "floatOrb 12s infinite linear alternate" }}
                />

                <div className="container relative z-10 px-6 intro-anim">
                    <div className="grid grid-cols-[1.2fr_0.8fr] gap-12 items-center max-[991px]:grid-cols-1">

                        {/* Hero Text */}
                        <div className="text-left flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="h-[1px] w-12 bg-luxury-pink-grad" />
                                <span className="text-[12px] uppercase font-bold tracking-[4px] text-luxury-pink" style={{ fontFamily: "var(--font-accent)" }}>
                                    THE STUDIO CONCEPT
                                </span>
                            </div>

                            <h1
                                className="text-[90px] max-lg:text-[70px] max-md:text-[45px] uppercase font-light tracking-[4px] leading-[0.9] mb-8 text-[var(--text-white)]"
                                style={{ fontFamily: "var(--font-title)" }}
                            >
                                THE <br />
                                <span className="text-luxury-pink font-normal">STUDIO</span>
                            </h1>

                            <p
                                className="text-[18px] max-w-[580px] leading-[1.7] text-white/80 font-light"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                The Permanent Makeup Studio specializes in enhancing your already beautiful features. Our team of highly skilled and experienced estheticians, lash artists, and triple-certified permanent makeup artists cater to your service needs.
                            </p>

                            <div className="mt-8 flex gap-4 max-sm:flex-col max-sm:w-full">
                                <a
                                    href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 rounded text-black font-bold uppercase text-[12px] tracking-[2px] transition-transform duration-300 hover:scale-105 inline-flex items-center gap-2"
                                    style={{ boxShadow: "0 4px 15px var(--primary-pink-glow)", backgroundColor: "var(--primary-pink)" }}
                                >
                                    BOOK CONSULTATION <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Asymmetrical Right: Overlapping Glass Card */}
                        <div className="relative flex justify-center max-[991px]:mt-10 h-full items-center">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary-pink)] to-[#ffffff] rounded-3xl blur opacity-20 animate-pulse"></div>
                            <div className="relative w-[340px] h-[340px] rounded-3xl bg-black/60 backdrop-blur-[20px] border border-luxury-pink p-8 flex flex-col justify-between text-left shadow-2xl">
                                <div>
                                    <Wine size={36} className="text-[var(--primary-pink)] mb-4" />
                                    <h3 className="text-[24px] text-white uppercase tracking-[1px] mb-3" style={{ fontFamily: "var(--font-accent)" }}>
                                        Complimentary Refreshments
                                    </h3>
                                    <p className="text-[13px] text-white/60 leading-[1.6]">
                                        Relax in our chic lash lounge and try our Frose made fresh daily, or request a glass of Prosecco or tea while waiting for your technician.
                                    </p>
                                </div>
                                <span className="text-[11px] tracking-[2px] text-luxury-pink uppercase font-bold">
                                    PAMPERED EXPERIENCE
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SECTION 2: FOUNDER IMMERSIVE ARTISTRY (Christina) ── */}
            <section className="w-full py-[120px] max-md:pt-[30px] max-md:pb-[60px] relative overflow-hidden bg-white text-black">
                {/* Large watermark letter C */}
                <div className="absolute left-[35%] top-[10%] text-watermark select-none">
                    C
                </div>

                <div className="container relative z-10 px-6">
                    <div className="grid grid-cols-[0.9fr_1.1fr] gap-[80px] items-center max-[991px]:grid-cols-1 max-[991px]:gap-12">

                        {/* Left: Pink Outlined Cosmetic Arch Picture */}
                        <div className="flex justify-center relative">
                            {/* Pink outer border ring */}
                            <div className="absolute -inset-3 border border-luxury-pink cosmetic-arch opacity-60"></div>

                            {/* Img Container */}
                            <div className="relative w-full max-w-[360px] aspect-[10/13] cosmetic-arch overflow-hidden shadow-2xl border-2 border-white">
                                <img
                                    src="/Christina Corrigan.jfif"
                                    alt="Christina Corrigan - Founder of The Permanent Makeup Studio"
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Right: Immersive Editorial Quote & Content */}
                        <div className="text-left flex flex-col items-start">
                            <span className="font-bold text-[13px] tracking-[4px] text-[var(--primary-pink)] uppercase block mb-3">
                                CREATIVE FOUNDER
                            </span>
                            <h2
                                className="text-[54px] max-md:text-[38px] leading-[1.0] uppercase font-light mb-8 text-black"
                                style={{ fontFamily: "var(--font-title)" }}
                            >
                                Hello! <br />
                                <span className="font-bold text-[var(--primary-pink)]">I'M CHRISTINA</span>
                            </h2>

                            <div className="flex flex-col gap-6 text-[15px] leading-[1.8] text-black/80 font-light" style={{ fontFamily: "var(--font-body)" }}>
                                <p className="text-[20px] leading-[1.6] text-black/90 font-medium italic border-l-4 border-[var(--primary-pink)] pl-6 py-2 my-2">
                                    "I'm a triple-certified permanent makeup artist in the Tampa Bay area, creating soft, natural results that let you see yourself in a whole new light!"
                                </p>
                                <p>
                                    Your journey with us is personal. We understand that every client is unique, and that's why our services are tailored to suit your preferences and lifestyle. Whether you're looking for a spray tan, a rejuvenating facial treatment, or the perfect set of eye lash extensions, we've got you covered.
                                </p>
                                <p>
                                    At The Permanent Makeup Studio, we're dedicated to enhancing your natural beauty. Our team of expert estheticians, lash artists, and triple-certified permanent makeup professionals provide personalized services tailored to your needs.
                                </p>
                                <p>
                                    We create a celebratory atmosphere for those special moments, from bachelorette parties to baby showers, ensuring a pampering and memorable experience. We're excited to make you feel cherished and radiantly beautiful.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-col items-start">
                                <span className="font-bold text-[var(--primary-pink)] tracking-[1px] text-[18px]" style={{ fontFamily: "var(--font-accent)" }}>
                                    Christina Corrigan
                                </span>
                                <span className="text-[12px] text-black/45 tracking-[2px] uppercase font-medium mt-1">
                                    Founder, The Permanent Makeup Studio
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── STICKY PARALLAX BANNER SECTION ── */}
            <div className="parallax-banner flex items-center justify-center relative w-full overflow-hidden">
                {/* Translucent premium gradient overlay */}
                <div 
                    className="absolute inset-0 z-0 bg-gradient-to-r from-black/85 via-black/40 to-black/85" 
                    style={{ backdropFilter: "blur(0.5px)" }}
                />
                <div className="container relative z-10 px-6 text-center">
                    <h2 
                        className="text-[52px] max-md:text-[32px] uppercase tracking-[3px] text-white leading-tight font-light"
                        style={{ fontFamily: "var(--font-title)", textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
                    >
                        THE ART OF PERMANENT <span className="font-bold text-[var(--primary-pink)]">PERFECTION</span>
                    </h2>
                    <p 
                        className="text-[12px] tracking-[4px] uppercase font-bold text-white/70 mt-4"
                        style={{ fontFamily: "var(--font-accent)" }}
                    >
                        Clearwater's Premier Esthetics & Permanent Cosmetics Salon
                    </p>
                </div>
            </div>

            {/* ── SECTION 3: OVERLAPPING LEGACY PARALLAX SPREAD ── */}
            <section
                className="w-full py-[120px] text-[var(--text-light)] relative overflow-hidden"
                style={{ background: "var(--bg-dark-purple)" }}
            >
                <div className="container relative z-10 px-6">
                    <div className="grid grid-cols-[1.1fr_0.9fr] gap-[80px] items-center max-[991px]:grid-cols-1 max-[991px]:gap-12">

                        {/* Left: Asymmetrical text */}
                        <div className="text-left flex flex-col items-start">
                            <span className="font-bold text-[12px] tracking-[4px] text-[var(--primary-pink)] uppercase block mb-3">
                                ESTABLISHED VISION
                            </span>
                            <h2
                                className="text-[54px] max-md:text-[38px] leading-[1.0] uppercase font-light mb-8 text-white"
                                style={{ fontFamily: "var(--font-title)" }}
                            >
                                OUR LEGACY & <br />
                                <span className="font-bold text-[var(--primary-pink)]">EXCELLENCE</span>
                            </h2>
                            <p
                                className="text-[15px] leading-[1.8] text-white/70 font-light mb-6"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Founded in the heart of Clearwater, Florida, The Permanent Makeup Studios has established itself as a beacon of beauty innovation and excellence. Our journey began with a passion for enhancing natural beauty and a vision to create lasting, effortless elegance for our clients.
                            </p>
                            <p
                                className="text-[15px] leading-[1.8] text-white/70 font-light"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                As we look to the future, The Permanent Makeup Studios remains dedicated to inspiring confidence and enhancing beauty, one personalized treatment at a time.
                            </p>
                        </div>

                        {/* Right: Overlapping magazine style cards */}
                        <div className="magazine-container relative flex items-center justify-center h-[460px] max-[991px]:h-auto max-[991px]:flex max-[991px]:flex-col max-[991px]:gap-6">
                            {/* Card 1: Our Legacy (Main background block) */}
                            <div className="absolute top-0 left-0 w-[85%] max-[991px]:relative max-[991px]:w-full bg-[#121216]/65 backdrop-blur-[20px] p-8 rounded-2xl border border-white/5 shadow-2xl text-left z-10">
                                <h3 className="text-[20px] text-white uppercase tracking-[2px] mb-3" style={{ fontFamily: "var(--font-accent)" }}>
                                    THE ANCESTRY
                                </h3>
                                <p className="text-[13px] text-white/60 leading-[1.7] m-0">
                                    Each service we provide is meticulously crafted to meet the unique desires and needs of our clients, ensuring personalized results that resonate with their individual beauty.
                                </p>
                            </div>

                            {/* Card 2: Space of Excellence (Foreground overlay offset block) */}
                            <div className="magazine-card-offset absolute bottom-0 right-0 w-[80%] max-[991px]:relative max-[991px]:w-full bg-[#16161c] p-8 rounded-2xl border border-luxury-pink glow-pink-pulse shadow-2xl text-left z-20">
                                <span className="text-[var(--primary-pink)] text-xs font-bold tracking-[3px] uppercase block mb-2">
                                    SPA EXPERIENCE
                                </span>
                                <h3 className="text-[22px] text-white uppercase tracking-[1px] mb-4" style={{ fontFamily: "var(--font-accent)" }}>
                                    A Space of Excellence
                                </h3>
                                <p className="text-[13px] text-white/65 leading-[1.7] m-0">
                                    Our spa environment is designed to evoke tranquility and relaxation. Every detail, from the plush comfort of our treatment rooms to the ambient lighting, is curated to ensure each visit is a retreat.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SECTION 4: LUXURY CERTIFICATE SHELF ── */}
            <section className="w-full py-[120px] bg-white text-black relative">
                <div className="container px-6">

                    <div className="text-center mb-20">
                        <span className="font-bold text-[12px] tracking-[4px] text-[var(--primary-pink)] uppercase block mb-3">
                            STANDARDS & LICENSE
                        </span>
                        <h2
                            className="text-[54px] max-md:text-[38px] leading-[1.1] uppercase font-light text-black"
                            style={{ fontFamily: "var(--font-title)" }}
                        >
                            STUDIO <span className="font-bold text-[var(--primary-pink)]">CREDENTIALS</span>
                        </h2>
                        <div className="w-16 h-[2px] bg-luxury-pink-grad mx-auto mt-6" />
                    </div>

                    <div className="grid grid-cols-3 gap-8 max-[1024px]:grid-cols-2 max-sm:grid-cols-1">
                        {[
                            { title: "Licensed Esthetician", text: "State of Florida Licensed Esthetician qualifications.", icon: <Sparkles size={20} className="text-black" /> },
                            { title: "Salon License", text: "Regulated state cosmetology salon establishment permissions.", icon: <Store size={20} className="text-black" /> },
                            { title: "Triple Certified PMU", text: "Accredited master qualifications across Lips, Brows, and Eyeliner.", icon: <Award size={20} className="text-black" /> },
                            { title: "Certified Microblader", text: "Specialized eyebrow hair stroke microblading certifications.", icon: <Feather size={20} className="text-black" /> },
                            { title: "Department of Health Tattoo License", text: "Certified Florida DOH tattoo artist establishment permit.", icon: <FileText size={20} className="text-black" /> },
                            { title: "Bloodborne Pathogens Certified", text: "Pathogen control & sanitary standards certification.", icon: <Droplet size={20} className="text-black" /> }
                        ].map((badge, idx) => (
                            <div
                                key={idx}
                                className="group p-8 bg-[#faf5ea]/50 border border-black/[0.05] rounded-2xl text-center flex flex-col items-center justify-between transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2"
                            >
                                {/* Pink Certificate Seal Ring */}
                                <div className="w-16 h-16 rounded-full border border-luxury-pink flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-12 h-12 rounded-full bg-[var(--primary-pink)] flex items-center justify-center text-black font-bold text-[10px]">
                                        {badge.icon}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[14px] font-bold text-black uppercase mb-2 tracking-[0px]" style={{ fontFamily: "var(--font-accent)" }}>
                                        {badge.title}
                                    </h4>
                                    <p className="text-[12px] text-black/60 leading-[1.6] m-0" style={{ fontFamily: "var(--font-body)" }}>
                                        {badge.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── SECTION 5: MINIMAL CATALOGUE STATS SHOWCASE ── */}
            <section
                className="w-full py-[100px] text-[var(--text-light)] relative overflow-hidden"
                style={{ background: "var(--bg-dark-purple)" }}
            >
                <div className="container px-6">
                    <div className="border-t border-b border-luxury-pink py-12">
                        <div className="grid grid-cols-4 gap-8 max-[991px]:grid-cols-2 max-sm:grid-cols-1 text-center">
                            {[
                                { num: "10+", label: "Years of Experience" },
                                { num: "4.9", label: "Average Reviews" },
                                { num: "7", label: "Prestigious Awards" },
                                { num: "3K+", label: "Satisfied Clients" }
                            ].map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center border-r border-white/5 last:border-r-0 max-[991px]:border-r-0 max-[991px]:mb-6 last:mb-0"
                                >
                                    <span className="text-[64px] font-light leading-none mb-3 text-[var(--primary-pink)]" style={{ fontFamily: "var(--font-title)" }}>
                                        {stat.num}
                                    </span>
                                    <span className="text-[10px] tracking-[4px] uppercase font-bold text-white/50" style={{ fontFamily: "var(--font-accent)" }}>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer onNavigate={onNavigate} />
            <ChatWidget />
        </>
    );
}

export default AboutPage;
