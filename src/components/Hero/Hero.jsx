function Hero() {
    return (
        <>
            <style>{`
                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes heroImgFadeIn {
                    from { opacity: 0; transform: scale(0.95) translate(20px, 20px); }
                    to   { opacity: 1; transform: scale(1) translate(0, 0); }
                }
                @keyframes neonTextPulse {
                    0%   { text-shadow: 0 0 4px rgba(197, 189, 182, 0.2), 0 0 8px rgba(197, 189, 182, 0.1); }
                    100% { text-shadow: 0 0 15px rgba(197, 189, 182, 0.8), 0 0 30px rgba(197, 189, 182, 0.4); }
                }
                @keyframes pulseBtn {
                    0% { box-shadow: 0 4px 15px rgba(197, 189, 182, 0.2); }
                    50% { box-shadow: 0 4px 25px rgba(197, 189, 182, 0.5); }
                    100% { box-shadow: 0 4px 15px rgba(197, 189, 182, 0.2); }
                }

                .hero-tagline-anim {
                    animation: slideUpFade 0.8s 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                .hero-title-anim {
                    animation: slideUpFade 0.8s 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                .hero-cta-anim {
                    animation: slideUpFade 0.8s 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                .hero-img-fadein {
                    animation: heroImgFadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                .hero-neon-pulse {
                    animation: neonTextPulse 3s ease-in-out infinite alternate;
                }
                .hero-outline-btn {
                    animation: pulseBtn 3s infinite ease-in-out;
                }

                /* Button hover — can't do CSS-var-based hover in Tailwind */
                .hero-outline-btn:hover {
                    background-color: #ffffff !important;
                    color: #202020 !important;
                    transform: translateY(-4px) !important;
                    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.25) !important;
                }
                .hero-outline-btn:hover .hero-arrow {
                    transform: translateX(6px);
                }
            `}</style>

            <section
                id="home"
                className="relative w-full h-screen overflow-hidden flex items-center justify-start text-[var(--text-light)] pt-20 max-md:pt-[120px] max-md:text-center"
                style={{ minHeight: "700px", background: "var(--bg-dark-purple)" }}
            >
                {/* Desktop overlay */}
                <div
                    className="absolute inset-0 z-[1] max-[991px]:hidden"
                    style={{
                        background: `
                            linear-gradient(90deg, rgba(11,11,14,1) 0%, rgba(11,11,14,0.9) 35%, rgba(11,11,14,0.2) 70%, rgba(11,11,14,0.7) 100%),
                            linear-gradient(0deg, rgba(32,32,32,0.9) 0%, rgba(11,11,14,0) 50%)
                        `,
                    }}
                />
                {/* Tablet overlay (≤991px, >767px) */}
                <div
                    className="absolute inset-0 z-[1] hidden max-[991px]:block max-md:hidden"
                    style={{
                        background: `
                            linear-gradient(90deg, rgba(11,11,14,0.95) 0%, rgba(11,11,14,0.9) 45%, rgba(11,11,14,0.4) 75%, rgba(11,11,14,0.9) 100%),
                            linear-gradient(0deg, rgba(32,32,32,0.7) 0%, rgba(11,11,14,0) 50%)
                        `,
                    }}
                />
                {/* Mobile overlay */}
                <div
                    className="absolute inset-0 z-[1] hidden max-md:block"
                    style={{
                        background:
                            "linear-gradient(0deg, rgba(32,32,32,0.9) 0%, rgba(11,11,14,0.95) 100%)",
                    }}
                />

                {/* Background model image — hidden on mobile */}
                <div
                    className="absolute right-0 bottom-0 w-1/2 h-full z-0 max-[991px]:w-[60%] max-md:hidden hero-img-fadein"
                    style={{
                        backgroundImage:
                            "url('https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/pm_model.webp')",
                        backgroundSize: "contain",
                        backgroundPosition: "right bottom",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                {/* Content */}
                <div className="container relative z-[2] flex items-center max-md:justify-center">
                    <div className="max-w-[650px] max-md:mx-auto">

                        {/* Tagline */}
                        <span
                            className="font-[var(--font-accent)] text-[#c5bdb6] text-[13px] font-bold tracking-[3px] uppercase mb-6 inline-block opacity-0 hero-tagline-anim"
                        >
                            THE PERMANENT MAKEUP STUDIO
                        </span>

                        {/* Main heading */}
                        <h1
                            className="text-[80px] max-[1199px]:text-[64px] max-[991px]:text-[52px] max-md:text-[40px] leading-[1.1] text-[var(--text-white)] mb-8 opacity-0 hero-title-anim"
                            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}
                        >
                            BEAUTY THAT{" "}
                            <span className="text-white hero-neon-pulse">LASTS</span>
                            <br />
                            STYLE THATS{" "}
                            <span className="text-white hero-neon-pulse">TIMELESS</span>
                        </h1>

                        {/* CTA */}
                        <div className="opacity-0 hero-cta-anim mt-[20px]">
                            <a
                                href="#services"
                                className="hero-outline-btn inline-flex items-center justify-center bg-[rgba(11,11,14,0.6)] backdrop-blur-[8px] text-white font-[var(--font-accent)] font-bold text-[12px] uppercase tracking-[1.5px] no-underline px-9 py-[10px] rounded-[30px] border-2 border-white shadow-[0_4px_15px_rgba(255,255,255,0.1)] transition-all duration-300 max-md:w-full"
                                style={{ transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
                            >
                                LEARN MORE ABOUT OUR SERVICES
                                <span className="hero-arrow ml-3 text-base inline-block transition-transform duration-300">
                                    →
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
