import { useState } from "react";

const LASH_SERVICES = [
    {
        title: "CLASSIC EYELASH EXTENSIONS",
        before: "/classic_lashes_before.png",
        after: "/classic_lashes_after.png",
        description: "Meticulously applied individual lash extensions for a naturally full, elegant look.",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=classicextensions"
    },
    {
        title: "VOLUME EYELASH EXTENSIONS",
        before: "/volume_lashes_before.png",
        after: "/volume_lashes_after.png",
        description: "Plush, multi-lash fan extensions creating a glamorous, dense, and full-bodied effect.",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=volumeextensions"
    },
    {
        title: "HYBRID EYELASH EXTENSIONS",
        before: "/hybrid_lashes_before.png",
        after: "/hybrid_lashes_after.png",
        description: "A gorgeous texturizing blend combining classic and volume lash techniques.",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=hybridextensions"
    },
    {
        title: "LASH LIFT & TINT",
        before: "/lash_lift_before.png",
        after: "/lash_lift_after.png",
        description: "Lifts, curls, and deepens natural lashes for a stunning mascara-free look.",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=lashliftandtint"
    }
];

function EyelashCard({ item }) {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
        <div
            className="lash-card relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[var(--border-light)] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-black/10 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
            style={{
                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
            }}
        >
            {/* Split interactive image container */}
            <div className="relative h-[260px] w-full overflow-hidden select-none bg-neutral-100">
                {/* Before Image (underneath) */}
                <img
                    src={item.before}
                    alt={`${item.title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* After Image (clipped on left based on slider position) */}
                <img
                    src={item.after}
                    alt={`${item.title} - After`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                />

                {/* Divider Line */}
                <div
                    className="absolute inset-y-0 w-[2px] pointer-events-none z-10"
                    style={{
                        left: `${sliderPosition}%`,
                        transform: "translateX(-50%)",
                        background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.4) 100%)",
                    }}
                >
                    {/* Floating Handle */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center shadow-md border backdrop-blur-md"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.25)",
                            borderColor: "rgba(255,255,255,0.5)",
                        }}
                    >
                        <span className="text-[10px] font-bold select-none text-white">↔</span>
                    </div>
                </div>

                {/* Badges */}
                <span className="absolute top-3 left-3 z-[4] bg-black/60 text-white text-[9px] font-bold tracking-[1.5px] px-2 py-1 rounded uppercase">Before</span>
                <span className="absolute top-3 right-3 z-[4] bg-black/40 backdrop-blur-sm border border-white/20 text-white text-[9px] font-bold tracking-[1.5px] px-2 py-1 rounded uppercase">After</span>

                {/* Transparent Range Input Slider */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    aria-label={`Comparison slider for ${item.title}`}
                />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1 justify-between gap-4 bg-white text-[var(--text-dark)]">
                <div className="space-y-2">
                    <h3
                        className="text-[16px] font-bold uppercase tracking-[0.5px] text-[var(--text-dark)]"
                        style={{ fontFamily: "var(--font-accent)" }}
                    >
                        {item.title}
                    </h3>
                    <p
                        className="text-[13px] leading-[1.6] text-[var(--text-muted-dark)]"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        {item.description}
                    </p>
                </div>

                <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center text-[11px] font-bold uppercase tracking-[1px] no-underline py-3 rounded-lg border border-[rgba(0,0,0,0.08)] bg-black/5 text-[var(--text-dark)] transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    style={{
                        fontFamily: "var(--font-accent)"
                    }}
                >
                    Book Now
                </a>
            </div>
        </div>
    );
}

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
                <div className="container px-4">
                    {/* Header */}
                    <div className="text-center mb-[60px]">
                        <span className="section-subtitle">OUR MAIN SERVICES</span>
                        <h2 className="section-title">For <span className="title-italic">Eyelashes</span></h2>
                        <div className="title-divider" />
                        <p className="section-description">
                            Experience one of our luxury services inside of our beautiful salon.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="lash-grid grid grid-cols-4 gap-[30px] items-stretch max-[1200px]:grid-cols-2 max-[1200px]:gap-5 max-[575px]:grid-cols-1">
                        {LASH_SERVICES.map((item, index) => (
                            <EyelashCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default EyelashServices;
