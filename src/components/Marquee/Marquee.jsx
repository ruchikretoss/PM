const MARQUEE_ITEMS = [
    "Eyelash Extensions",
    "Eyebrow Lamination",
    "Lip Blush",
    "Lash Lift & Tint",
    "Scalp Micro Pigmentation",
    "Air Brush Spray Tans",
    "Facials",
    "Microblading & Shading"
];

function Marquee() {
    const doubleItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

    return (
        <>
            <style>{`
                @keyframes marqueeScroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    animation: marqueeScroll 50s linear infinite;
                }
            `}</style>

            <section
                className="w-full py-8 max-md:py-5 overflow-hidden border-t border-b flex items-center"
                style={{
                    background: "var(--bg-dark-purple)",
                    borderColor: "rgba(255,255,255,0.04)",
                }}
            >
                <div className="flex w-full">
                    <div className="marquee-track flex whitespace-nowrap gap-[30px]">
                        {doubleItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-[30px]">
                                <span
                                    className="text-[28px] max-md:text-[20px] tracking-[2px] uppercase"
                                    style={{
                                        fontFamily: "var(--font-title)",
                                        color: "var(--white)",
                                        textShadow: "0 0 8px rgba(248,148,255,0.3)",
                                    }}
                                >
                                    {item}
                                </span>
                                <img
                                    src="https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/sparkle.png"
                                    alt="sparkle"
                                    className="h-6 max-md:h-[18px] w-auto opacity-80"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Marquee;
