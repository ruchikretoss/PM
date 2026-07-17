const CERTIFICATIONS = [
    "Licensed Esthetician",
    "Salon License",
    "Triple certified permanent make up artist",
    "Certified Microblading Artist",
    "State of Florida Department of Health Tattoo Artist License",
    "Certified Bloodborne Pathogens & Communicable Diseases for Tattoo Artist"
];

function AboutUs() {
    return (
        <>
            {/* Import a premium script font for the founder's signature */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
                
                .signature-font {
                    font-family: 'Playball', 'Alex Brush', cursive;
                    font-size: 32px;
                    color: var(--primary-pink);
                    letter-spacing: 1px;
                }
                .about-img-frame {
                    transition: transform 0.5s ease;
                }
                .about-img-frame:hover {
                    transform: scale(1.02);
                }
            `}</style>

            <section
                id="about"
                className="about-section w-full py-24 border-t border-black/[0.03]"
                style={{ background: "#ffffff" }}
            >
                {/* 2-col grid → 1-col on tablet/mobile */}
                <div className="container grid grid-cols-[1.1fr_0.9fr] gap-[80px] items-center max-[991px]:grid-cols-1 max-[991px]:gap-14">

                    {/* ── Left Column: Editorial Story ── */}
                    <div className="flex flex-col items-start text-left">
                        <span 
                            className="text-[11px] font-bold tracking-[4px] mb-3 uppercase"
                            style={{ fontFamily: "var(--font-accent)", color: "var(--primary-pink)" }}
                        >
                            OUR STORY
                        </span>
                        
                        <h2 className="section-title max-[575px]:text-[36px]">About <span className="title-italic">Us</span></h2>

                        {/* Thin luxury divider line */}
                        <div
                            className="w-[50px] h-[1px] my-5"
                            style={{ backgroundColor: "var(--primary-pink)", opacity: 0.8 }}
                        />

                        {/* Est'd Label */}
                        <h3
                            className="text-lg uppercase tracking-[3px] mb-6 font-bold"
                            style={{
                                fontFamily: "var(--font-accent)",
                                color: "var(--primary-pink)",
                            }}
                        >
                            EST&apos;D 2013
                        </h3>

                        {/* Story Body Copy */}
                        <p
                            className="text-[14px] sm:text-[15px] leading-[1.8] text-neutral-600 mb-8 font-light"
                            style={{
                                fontFamily: "var(--font-body)",
                            }}
                        >
                            The Permanent Makeup Studio specializes in enhancing your already beautiful features.
                            Our team of highly skilled and experienced estheticians, lash artists, and triple-certified
                            permanent makeup artists cater to your service needs. Relax in our chic lash lounge and try
                            our Frose made fresh daily or request a glass of Prosecco or tea while waiting for your technician.
                            We also hold special events per advance notice whether you are looking for a space to hold a
                            bachelorette party or planning a baby shower ....we will handle everything so you can sit back and get pampered.
                            We can&apos;t wait to make you feel special and beautiful 💖
                        </p>

                        {/* Founder Signature Section */}
                        <div className="flex flex-col gap-1.5 mt-2 border-l-2 border-neutral-100 pl-5">
                            <span className="signature-font">
                                Christina Corrigan
                            </span>
                            <span
                                className="text-[12px] font-bold uppercase tracking-[1px]"
                                style={{
                                    fontFamily: "var(--font-accent)",
                                    color: "var(--text-muted-dark)",
                                }}
                            >
                                Founder, The Permanent Makeup Studio
                            </span>
                        </div>
                    </div>

                    {/* ── Right Column: Portrait and Qualifications Frame ── */}
                    <div className="relative w-full flex items-center justify-center max-[991px]:mt-6">
                        {/* Outer offset gold border frame */}
                        <div 
                            className="absolute -inset-4 border border-[var(--primary-pink)]/20 rounded-2xl pointer-events-none z-0 translate-x-3 translate-y-3"
                            style={{ transition: "transform 0.5s ease" }}
                        />

                        {/* Photo Collage & Frame Container */}
                        <div className="relative z-10 w-full max-w-[400px] about-img-frame">
                            <img
                                src="/Christina Corrigan.jfif"
                                alt="Christina Corrigan - Founder"
                                className="w-full h-[480px] max-[575px]:h-[380px] object-cover rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-neutral-100"
                            />

                            {/* Floating SkinCare Qualifications Card (Absolute on Desktop, flows on Mobile) */}
                            <div
                                className="md:absolute md:-bottom-8 md:-left-12 z-20 text-left rounded-2xl p-7 max-w-[330px] border border-neutral-100/80 shadow-[0_20px_40px_rgba(0,0,0,0.08)] mt-6 md:mt-0"
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                                    backdropFilter: "blur(12px)",
                                    WebkitBackdropFilter: "blur(12px)"
                                }}
                            >
                                <h4
                                    className="text-[15px] uppercase tracking-[2px] mb-3 font-black text-[#111111]"
                                    style={{
                                        fontFamily: "var(--font-accent)",
                                    }}
                                >
                                    SKINCARE QUALIFICATIONS
                                </h4>
                                
                                <p
                                    className="text-[11px] mb-4 text-neutral-500 font-light"
                                    style={{
                                        fontFamily: "var(--font-body)",
                                    }}
                                >
                                    Our beauty salon holds the following professional licenses:
                                </p>

                                <ul className="list-none p-0 m-0 flex flex-col gap-3">
                                    {CERTIFICATIONS.map((cert, index) => (
                                        <li key={index} className="flex items-start gap-2.5">
                                            <span
                                                className="text-[10px] leading-none mt-1"
                                                style={{ color: "var(--primary-pink)" }}
                                            >
                                                ✦
                                            </span>
                                            <span
                                                className="text-[11px] leading-[1.5] text-neutral-700"
                                                style={{
                                                    fontFamily: "var(--font-body)",
                                                }}
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
            </section>
        </>
    );
}

export default AboutUs;
