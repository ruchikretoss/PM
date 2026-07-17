import { useState, useEffect, useRef } from "react";

const SPECIALITY_ITEMS = [
    { 
        title: "Lip Blushing", 
        before: "/lip_blush_before.png", 
        after: "/lip_blush_after.png", 
        description: "Enhance your natural lips with symmetric shaping, rosy shading, and custom organic pigments.",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=lipblushing" 
    },
    { 
        title: "Permanent Eyebrows", 
        before: "/eyebrows_before.png", 
        after: "/eyebrows_after.png", 
        description: "Wake up with perfectly shaded powder brows designed to add subtle depth, fullness, and shape.",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=powderbrows" 
    },
    { 
        title: "Semi-Permanent Eyeliner", 
        before: "/eyeliner_before.png", 
        after: "/eyeliner_after.png", 
        description: "Achieve defined, smudge-proof eyes with lash line enhancement or custom winged eyeliner shading.",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=semipermanenteyeliner" 
    },
    { 
        title: "SCALP MICRO PIGMENTATION", 
        before: "/smp_before.png", 
        after: "/smp_after.png", 
        description: "Restore density, define hairlines, and camouflage surgery scars with advanced follicle shading.",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=smp" 
    },
    { 
        title: "Scar Camouflage", 
        before: "/scar_before.png", 
        after: "/scar_after.png", 
        description: "Medical-grade dermapigmentation to blend skin tone discrepancies and camouflage surgical scars.",
        link: "/scar-camouflage-tattoo" 
    },
    { 
        title: "Cheek Tint Tattoo", 
        before: "/cheek_tint_before.png", 
        after: "/cheek_tint_after.png", 
        description: "Enjoy a healthy, youthful flush of color on your cheeks every morning with soft blush shading.",
        link: "https://thepermanentmakeupstudios.com/services/?scrollTo=cheekmakeup" 
    }
];

function SpecialityCard({ item, isCenter }) {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
        <div
            className={`spec-card shrink-0 flex flex-col bg-[#1A1A1E] rounded-2xl overflow-hidden border transition-all duration-500 select-none ${
                isCenter 
                    ? "scale-100 opacity-100 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.45)] z-10" 
                    : "scale-[0.9] opacity-40 border-white/5 shadow-none z-0 pointer-events-none"
            }`}
            style={{
                width: "var(--spec-card-width)",
                transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
            }}
        >
            {/* Split interactive image container */}
            <div className="relative h-[260px] w-full overflow-hidden select-none bg-neutral-900">
                {/* Before Image (underneath) */}
                <img
                    src={item.before}
                    alt={`${item.title} - Before treatment`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* After Image (clipped on left based on slider position) */}
                <img
                    src={item.after}
                    alt={`${item.title} - After treatment`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                />

                {/* Divider Line */}
                <div
                    className="absolute inset-y-0 w-[2px] pointer-events-none z-10"
                    style={{
                        left: `${sliderPosition}%`,
                        transform: "translateX(-50%)",
                        background: "linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.3) 100%)",
                    }}
                >
                    {/* Floating Handle */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center shadow-md border backdrop-blur-md"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            borderColor: "rgba(255, 255, 255, 0.4)",
                        }}
                    >
                        <span className="text-[10px] font-bold select-none text-white">↔</span>
                    </div>
                </div>

                {/* Badges */}
                <span className="absolute top-3 left-3 z-[4] bg-black/60 text-white text-[9px] font-bold tracking-[1.5px] px-2 py-1 rounded uppercase">Before</span>
                <span className="absolute top-3 right-3 z-[4] bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[9px] font-bold tracking-[1.5px] px-2 py-1 rounded uppercase">After</span>

                {/* Transparent Range Input Slider */}
                {isCenter && (
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPosition}
                        onChange={(e) => setSliderPosition(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                        aria-label={`Comparison slider for ${item.title}`}
                    />
                )}
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2">
                    <h3
                        className="text-[18px] uppercase tracking-[1px] text-white"
                        style={{ fontFamily: "var(--font-accent)", fontWeight: 700 }}
                    >
                        {item.title}
                    </h3>
                    <p
                        className="text-[13px] leading-[1.6] text-[#A0A0A5]"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        {item.description}
                    </p>
                </div>

                <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center text-[11px] font-bold uppercase tracking-[1px] no-underline py-3 rounded-lg border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
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

function Specialities() {
    const N = SPECIALITY_ITEMS.length;
    // virtualItems represents pre-loop, middle, and post-loop items to ensure smooth wrap-arounds
    const virtualItems = [...SPECIALITY_ITEMS, ...SPECIALITY_ITEMS, ...SPECIALITY_ITEMS];
    
    const [activeIndex, setActiveIndex] = useState(N); // starts at N (first item of middle set)
    const [isTransitioning, setIsTransitioning] = useState(true);
    
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const trackRef = useRef(null);

    const minSwipeDistance = 50;

    const handleNext = () => {
        if (!isTransitioning) return;
        setActiveIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (!isTransitioning) return;
        setActiveIndex(prev => prev - 1);
    };

    const handleTransitionEnd = () => {
        if (activeIndex >= 2 * N) {
            setIsTransitioning(false);
            setActiveIndex(activeIndex - N);
        } else if (activeIndex < N) {
            setIsTransitioning(false);
            setActiveIndex(activeIndex + N);
        }
    };

    // Re-enable transitions on the next tick
    useEffect(() => {
        if (!isTransitioning) {
            const raf = requestAnimationFrame(() => {
                setIsTransitioning(true);
            });
            return () => cancelAnimationFrame(raf);
        }
    }, [isTransitioning]);

    // Touch Swipe Handlers
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    // Mouse Drag Handlers
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseDownX, setMouseDownX] = useState(0);
    const [mouseMoveX, setMouseMoveX] = useState(0);

    const onMouseDown = (e) => {
        // Prevent drag on range input handles, links, or navigation buttons
        if (e.target.type === "range" || e.target.closest("a") || e.target.closest("button")) {
            return;
        }
        e.preventDefault(); // Prevents image drag ghosts and selection highlights
        setIsMouseDown(true);
        setMouseDownX(e.clientX);
        setMouseMoveX(e.clientX);
    };

    const onMouseMove = (e) => {
        if (!isMouseDown) return;
        setMouseMoveX(e.clientX);
    };

    const onMouseUp = () => {
        if (!isMouseDown) return;
        setIsMouseDown(false);
        const distance = mouseDownX - mouseMoveX;
        const isLeftDrag = distance > minSwipeDistance;
        const isRightDrag = distance < -minSwipeDistance;

        if (isLeftDrag) {
            handleNext();
        } else if (isRightDrag) {
            handlePrev();
        }
    };

    const onMouseLeave = () => {
        setIsMouseDown(false);
    };

    return (
        <>
            <style>{`
                :root {
                    --spec-card-width: 380px;
                    --spec-card-gap: 30px;
                }
                @media (max-width: 768px) {
                    :root {
                        --spec-card-width: 300px;
                        --spec-card-gap: 20px;
                    }
                }
                .spec-slider-container {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    padding: 40px 0;
                    cursor: grab;
                }
                .spec-slider-container.grabbing {
                    cursor: grabbing;
                }
                .spec-slider-track {
                    display: flex;
                    gap: var(--spec-card-gap);
                    will-change: transform;
                }
                .slider-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: rgba(26, 26, 30, 0.8);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 40;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(8px);
                }
                .slider-arrow:hover {
                    background: white;
                    color: black;
                    border-color: white;
                    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
                }
                .slider-arrow.left-arrow {
                    left: 20px;
                }
                .slider-arrow.right-arrow {
                    right: 20px;
                }
                @media (max-width: 575px) {
                    .slider-arrow {
                        width: 36px;
                        height: 36px;
                    }
                    .slider-arrow.left-arrow {
                        left: 10px;
                    }
                    .slider-arrow.right-arrow {
                        right: 10px;
                    }
                }
            `}</style>

            <section
                id="services"
                className="w-full py-20 overflow-hidden"
                style={{ background: "var(--bg-dark-purple)" }}
            >
                <div className="w-full text-center">
                    {/* Header */}
                    <div className="container px-4 mb-12">
                        <span className="section-subtitle">OUR MAIN SERVICES</span>
                        <h2 className="section-title max-[575px]:text-[36px]">Our <span className="title-italic">Specialities</span></h2>
                        <div className="title-divider" style={{ backgroundColor: "#ffffff", opacity: 0.2 }} />
                        <p
                            className="text-[28px] max-[575px]:text-[22px] mb-3 tracking-[1px]"
                            style={{
                                fontFamily: "var(--font-title)",
                                color: "#ffffff",
                                textShadow: "0 0 10px rgba(197,189,182,0.4)",
                            }}
                        >
                            VOTED TAMPA BAY&apos;S #1 PERMANENT MAKEUP ARTIST!
                        </p>
                        <p className="section-description" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                            Experience one of our luxury services inside of our beautiful salon.
                        </p>
                    </div>

                    {/* Slider viewport wrapper */}
                    <div 
                        className={`spec-slider-container ${isMouseDown ? "grabbing" : ""}`}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseLeave}
                    >
                        {/* Track */}
                        <div
                            ref={trackRef}
                            className="spec-slider-track"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                            onTransitionEnd={handleTransitionEnd}
                            style={{
                                transform: `translate3d(calc(50vw - (var(--spec-card-width) + var(--spec-card-gap)) * ${activeIndex} - (var(--spec-card-width) / 2)), 0, 0)`,
                                transition: isTransitioning ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
                            }}
                        >
                            {virtualItems.map((item, index) => {
                                const isCenter = index === activeIndex;
                                return (
                                    <SpecialityCard
                                        key={index}
                                        item={item}
                                        isCenter={isCenter}
                                    />
                                );
                            })}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={handlePrev}
                            className="slider-arrow left-arrow"
                            aria-label="Previous slide"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6"/>
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="slider-arrow right-arrow"
                            aria-label="Next slide"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6"/>
                            </svg>
                        </button>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2.5 mt-8">
                        {SPECIALITY_ITEMS.map((_, idx) => {
                            const normalizedActive = ((activeIndex - N) % N + N) % N;
                            const isCurrent = normalizedActive === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        if (!isTransitioning) return;
                                        setActiveIndex(N + idx);
                                    }}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        isCurrent ? "w-7 bg-white" : "w-2.5 bg-white/20 hover:bg-white/40"
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Specialities;
