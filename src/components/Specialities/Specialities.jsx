const SPECIALITY_ITEMS = [
    { title: "Lip Blushing", image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/PM_Lip_Blushing.webp", link: "https://thepermanentmakeupstudios.com/services/?scrollTo=lipblushing" },
    { title: "Permanent Eyebrows", image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/PM_Powder_Brows.webp", link: "https://thepermanentmakeupstudios.com/services/?scrollTo=powderbrows" },
    { title: "Semi-Permanent Eyeliner", image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/PM_Semi-Permanent_Eyeliner.webp", link: "https://thepermanentmakeupstudios.com/services/?scrollTo=semipermanenteyeliner" },
    { title: "SCALP MICRO PIGMENTATION", image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/smp.webp", link: "https://thepermanentmakeupstudios.com/services/?scrollTo=smp" }
];

function Specialities() {
    return (
        <>
            <style>{`
                .spec-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(248,148,255,0.4) !important;
                    box-shadow: 0 10px 30px rgba(248,148,255,0.1) !important;
                }
                .spec-card:hover .spec-overlay {
                    background: linear-gradient(180deg, rgba(248,148,255,0.05) 0%, rgba(7,7,8,0.95) 100%);
                }
                .spec-card:hover .spec-btn {
                    background-color: var(--primary-pink) !important;
                    color: var(--bg-dark) !important;
                    border-color: var(--primary-pink) !important;
                    box-shadow: 0 0 15px var(--primary-pink-glow) !important;
                }
            `}</style>

            <section
                id="services"
                className="w-full py-20"
                style={{ background: "var(--bg-dark-purple)" }}
            >
                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="section-subtitle">OUR MAIN SERVICES</span>
                        <h2 className="section-title max-[575px]:text-[36px]">OUR SPECIALITIES</h2>
                        <div className="title-divider" />
                        <p
                            className="text-[28px] max-[575px]:text-[22px] mb-3 tracking-[1px]"
                            style={{
                                fontFamily: "var(--font-title)",
                                color: "var(--primary-pink)",
                                textShadow: "0 0 10px rgba(248,148,255,0.4)",
                            }}
                        >
                            VOTED TAMPA BAY&apos;S #1 PERMANENT MAKEUP ARTIST!
                        </p>
                        <p className="section-description">
                            Experience one of our luxury services inside of our beautiful salon.
                        </p>
                    </div>

                    {/* 4-col grid */}
                    <div className="grid grid-cols-4 gap-5 max-[1200px]:grid-cols-2 max-[1200px]:gap-4 max-[575px]:grid-cols-1">
                        {SPECIALITY_ITEMS.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="spec-card relative h-[420px] max-[1200px]:h-[380px] rounded-xl overflow-hidden flex items-end justify-center p-6 no-underline transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    boxShadow: "var(--shadow)",
                                    border: "1px solid rgba(255,255,255,0.04)",
                                    transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                                }}
                            >
                                {/* Dark gradient overlay */}
                                <div
                                    className="spec-overlay absolute inset-0 z-[1] transition-all duration-300"
                                    style={{
                                        background: "linear-gradient(180deg, rgba(7,7,8,0) 40%, rgba(7,7,8,0.9) 100%)",
                                    }}
                                />
                                {/* Label button */}
                                <div className="relative z-[2] w-full text-center">
                                    <span
                                        className="spec-btn block font-bold text-[11px] uppercase tracking-[0.5px] py-[14px] px-5 rounded shadow-[0_4px_10px_rgba(0,0,0,0.4)] whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 border border-white/10"
                                        style={{
                                            backgroundColor: "rgba(7,7,8,0.85)",
                                            color: "var(--text-light)",
                                            fontFamily: "var(--font-accent)",
                                            transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                                        }}
                                    >
                                        {item.title}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Specialities;
