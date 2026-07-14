import { useState } from "react";

const BEFORE_AFTER_ITEMS = [
    {
        id: 1,
        label: "Scalp Micropigmentation",
        before: "/smp_before.png",
        after: "/smp_after.png",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=smp",
        beforeAlt: "Before SMP treatment",
        afterAlt: "After SMP treatment — realistic hair follicle appearance"
    },
    {
        id: 2,
        label: "Lip Blushing",
        before: "/lip_blush_before.png",
        after: "/lip_blush_after.png",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=lipblushing",
        beforeAlt: "Before Lip Blushing treatment",
        afterAlt: "After Lip Blushing — natural rosy tint"
    },
    {
        id: 3,
        label: "Powder Brows",
        before: "/powder_brows_before.png",
        after: "/powder_brows_after.png",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=powderbrows",
        beforeAlt: "Before Powder Brows",
        afterAlt: "After Powder Brows — defined ombre finish"
    }
];

function BeforeAfterCard({ item }) {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
        <div
            className="ba-card rounded-2xl overflow-hidden transition-all duration-500 relative"
            style={{
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-light)",
                backgroundColor: "var(--bg-light)",
                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
            }}
        >
            {/* Split interactive image container */}
            <div className="relative h-[280px] w-full overflow-hidden select-none bg-neutral-800">
                {/* Before Image (underneath) */}
                <img
                    src={item.before}
                    alt={item.beforeAlt}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ filter: "brightness(0.95)" }}
                />

                {/* After Image (clipped on left based on slider position) */}
                <img
                    src={item.after}
                    alt={item.afterAlt}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                />

                {/* Divider Line */}
                <div
                    className="absolute inset-y-0 w-[3px] pointer-events-none z-10"
                    style={{
                        left: `${sliderPosition}%`,
                        transform: "translateX(-50%)",
                        background: "linear-gradient(180deg, var(--primary-pink) 0%, rgba(32,32,32,0.3) 100%)",
                        boxShadow: "0 0 10px rgba(32,32,32,0.4)",
                    }}
                >
                    {/* Floating Handle */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg border"
                        style={{
                            backgroundColor: "var(--primary-pink)",
                            borderColor: "#ffffff",
                        }}
                    >
                        <span className="text-[12px] font-bold select-none text-white">↔</span>
                    </div>
                </div>

                {/* Badges */}
                <span className="ba-label-before select-none">Before</span>
                <span className="ba-label-after select-none">After</span>

                {/* Transparent Range Input Slider */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    aria-label={`Comparison slider for ${item.label}`}
                />
            </div>

            {/* Footer */}
            <div className="p-5 flex items-center justify-between">
                <h3
                    className="text-[18px] uppercase tracking-[1px]"
                    style={{ fontFamily: "var(--font-title)", color: "var(--text-dark)" }}
                >
                    {item.label}
                </h3>
                <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold uppercase tracking-[1px] no-underline px-4 py-2 rounded-[20px] transition-all duration-300"
                    style={{
                        fontFamily: "var(--font-accent)",
                        color: "var(--primary-pink)",
                        border: "1.5px solid var(--primary-pink)",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = "var(--primary-pink)";
                        e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "var(--primary-pink)";
                    }}
                >
                    Book Now
                </a>
            </div>
        </div>
    );
}

function BeforeAfter() {
    return (
        <>
            <style>{`
                .ba-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(32,32,32,0.12) !important; border-color: rgba(197,189,182,0.35) !important; }
                .ba-label-before {
                    position: absolute;
                    top: 12px; left: 12px;
                    z-index: 4;
                    background: rgba(0,0,0,0.65);
                    color: #fff;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    padding: 3px 8px;
                    border-radius: 3px;
                    text-transform: uppercase;
                }
                .ba-label-after {
                    position: absolute;
                    top: 12px; right: 12px;
                    z-index: 4;
                    background: var(--primary-pink);
                    color: #ffffff;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    padding: 3px 8px;
                    border-radius: 3px;
                    text-transform: uppercase;
                }
            `}</style>

            <section
                id="before-after"
                className="w-full py-20 border-t border-black/5"
                style={{ background: "var(--bg-gradient)" }}
            >
                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <span
                            className="font-bold text-[14px] tracking-[2px] uppercase block mb-2"
                            style={{ fontFamily: "var(--font-accent)", color: "var(--text-muted-dark)" }}
                        >
                            REAL RESULTS
                        </span>
                        <h2
                            className="section-title mb-3"
                            style={{ color: "var(--text-dark)" }}
                        >
                            Before &amp; <span className="title-italic">After</span>
                        </h2>
                        <div
                            className="title-divider"
                        />
                        <p
                            className="text-base"
                            style={{ fontFamily: "var(--font-body)", color: "var(--text-muted-dark)" }}
                        >
                            See the stunning transformations our expert artists achieve every day.
                        </p>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-3 gap-8 max-[991px]:grid-cols-1 max-[991px]:max-w-[560px] max-[991px]:mx-auto">
                        {BEFORE_AFTER_ITEMS.map((item) => (
                            <BeforeAfterCard key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12">
                        <a
                            href="https://thepermanentmakeupstudios.com/gallery/"
                            className="btn-primary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            VIEW FULL GALLERY
                            <svg className="arrow-icon" viewBox="0 0 256 256" width="20" height="20" fill="currentColor">
                                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BeforeAfter;
