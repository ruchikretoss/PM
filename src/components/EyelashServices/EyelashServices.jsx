const LASH_SERVICES = [
    {
        title: "CLASSIC EYELASH EXTENSIONS",
        image: "/classic_eyelash_extensions.png",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=hybridextensions"
    },
    {
        title: "VOLUME EYELASH EXTENSIONS",
        image: "/volume_eyelash_extensions.png",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=volumeextensions"
    },
    {
        title: "HYBRID EYELASH EXTENSIONS",
        image: "/hybrid_eyelash_extensions.png",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=hybridextensions"
    },
    {
        title: "LASH LIFT & TINT",
        image: "/lana-graves-cvP3M-zqeO8-unsplash.jpg",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=lashliftandtint"
    }
];

function EyelashServices() {
    return (
        <>
            <style>{`
                /* Offset: even cards shifted down on desktop */
                .lash-grid > .lash-card:nth-child(even) {
                    transform: translateY(30px);
                }
                /* Hover: even cards maintain offset */
                .lash-grid > .lash-card:nth-child(even):hover {
                    transform: translateY(22px);
                }
                /* Hover states */
                .lash-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(248, 148, 255, 0.4) !important;
                    box-shadow: 0 15px 35px rgba(248, 148, 255, 0.15) !important;
                }
                .lash-card:hover .lash-overlay {
                    background: linear-gradient(180deg, rgba(248,148,255,0.05) 0%, rgba(11,11,14,0.9) 100%);
                }
                .lash-card:hover .lash-btn {
                    background-color: var(--bg-dark) !important;
                    color: var(--primary-pink-hover) !important;
                    border-color: var(--primary-pink) !important;
                    box-shadow: 0 0 15px var(--primary-pink-glow) !important;
                }
                /* ≤1200px: disable offset, 2-col grid */
                @media (max-width: 1200px) {
                    .lash-grid > .lash-card:nth-child(even) {
                        transform: none;
                    }
                    .lash-grid > .lash-card:nth-child(even):hover {
                        transform: translateY(-8px);
                    }
                }
            `}</style>

            <section
                className="eyelash-services-section w-full pt-[100px] pb-[140px] border-t border-black/5 max-[1200px]:py-20"
                style={{ background: "var(--bg-gradient)" }}
            >
                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-[60px]">
                        <span className="section-subtitle">OUR MAIN SERVICES</span>
                        <h2 className="section-title">FOR EYELASHES</h2>
                        <div className="title-divider" />
                        <p className="section-description">
                            Experience one of our luxury services inside of our beautiful salon.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="lash-grid grid grid-cols-4 gap-[30px] items-start max-[1200px]:grid-cols-2 max-[1200px]:gap-5 max-[575px]:grid-cols-1">
                        {LASH_SERVICES.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="lash-card relative h-[420px] max-[1200px]:h-[380px] rounded-xl overflow-hidden flex items-end justify-center p-6 no-underline transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    boxShadow: "var(--shadow-light)",
                                    border: "1px solid var(--border-light)",
                                    transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                                }}
                            >
                                {/* Dark gradient overlay */}
                                <div
                                    className="lash-overlay absolute inset-0 z-[1] transition-all duration-300"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(11,11,14,0) 40%, rgba(11,11,14,0.8) 100%)",
                                    }}
                                />
                                {/* Button label */}
                                <div className="relative z-[2] w-full text-center">
                                    <span
                                        className="lash-btn block bg-white/95 font-bold text-[11px] uppercase tracking-[0.5px] py-[14px] px-5 rounded-[30px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis border border-black/5"
                                        style={{
                                            fontFamily: "var(--font-accent)",
                                            color: "var(--text-dark)",
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

export default EyelashServices;
