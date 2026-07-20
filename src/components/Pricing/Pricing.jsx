import { useState } from "react";

const ALL_SERVICES = [
    {
        id: "classic-lash",
        category: "lashes-brows",
        title: "classic lash extensions",
        price: "$60 (2 1/2 weeks)",
        desc: "Enhance your natural lashes with our Classic Lash Extensions. Each lash is individually applied for a subtle, yet stunning look that adds length and volume."
    },
    {
        id: "volume-lash",
        category: "lashes-brows",
        title: "volume lash extensions",
        price: "$90 (2 1/2 weeks)",
        desc: "Plush, multi-lash fan extensions creating a glamorous, dense, and full-bodied effect."
    },
    {
        id: "hybrid-lash",
        category: "lashes-brows",
        title: "Hybrid Lashes Extensions",
        price: "$75 (2 1/2 weeks)",
        desc: "Get the best of both worlds with our Hybrid Lash Extensions. Combining the classic and volume techniques, this option offers a perfect balance of length and fullness."
    },
    {
        id: "lash-tint",
        category: "lashes-brows",
        title: "Lash Tint",
        price: "$35",
        desc: "Define and darken your lashes with our Lash Tint service. Say goodbye to mascara and hello to effortlessly beautiful lashes."
    },
    {
        id: "lash-lift-tint",
        category: "lashes-brows",
        title: "Lash Lift & Tint",
        price: "$125",
        desc: "Open up your eyes with our Lash Lift & Tint. This treatment lifts and curls your natural lashes, giving them a longer, fuller appearance, while the tint adds depth and color."
    },
    {
        id: "lash-add-ons",
        category: "lashes-brows",
        title: "Lash Extension Add-Ons",
        price: "$50",
        desc: "Customize your lash experience with our Add-Ons. Choose from options like extra volume, colored lashes, or bottom lash extensions to achieve your desired look."
    },
    {
        id: "brow-tint",
        category: "lashes-brows",
        title: "Brow Tint",
        price: "$35",
        desc: "Frame your face with our Brow Tint service. Enhance your natural brows by darkening and defining them for a polished appearance."
    },
    {
        id: "brow-lam",
        category: "lashes-brows",
        title: "Brow Lamination",
        price: "$99",
        desc: "Achieve perfectly groomed brows with our Brow Lamination. This treatment tames unruly hairs, creating a sleek, uniform look that lasts."
    },
    {
        id: "lip-blush",
        category: "pmu-aesthetics",
        title: "Lip Blush",
        price: "$550",
        desc: "Add natural-looking color and definition to your lips with our Lip Blush service. Enhance your pout with a soft, flushed tint that complements your skin tone."
    },
    {
        id: "pm-follow-up",
        category: "pmu-aesthetics",
        title: "All Permanent Makeup Follow Up (4-6 Wk)",
        price: "$99",
        desc: "All Permanent Makeup 4-6 week follow-up appointments originally done with Christina are $99."
    },
    {
        id: "eyeliner-bottom",
        category: "pmu-aesthetics",
        title: "Permanent Eyeliner Bottom",
        price: "$300",
        desc: "Wake up to perfectly defined eyes with our Permanent Eyeliner service. Choose from bottom or top liner to enhance your natural eye shape and add lasting definition."
    },
    {
        id: "eyeliner-top",
        category: "pmu-aesthetics",
        title: "Permanent Eyeliner Top",
        price: "$450",
        desc: "Wake up to perfectly defined eyes with our Permanent Eyeliner service. Choose from bottom or top liner to enhance your natural eye shape and add lasting definition."
    },
    {
        id: "smp-price",
        category: "pmu-aesthetics",
        title: "Scalp Micro Pigmentation",
        price: "Contact Us",
        desc: "Restore your confidence with our Scalp Micropigmentation. This non-invasive procedure replicates the appearance of hair follicles, creating the illusion of a fuller head of hair."
    },
    {
        id: "spray-tan",
        category: "pmu-aesthetics",
        title: "Spray Tan Package of 5",
        price: "$125",
        desc: "Get a sun-kissed glow without the harmful UV rays with our Spray Tan service. Achieve a natural-looking tan in minutes, customized to your desired shade."
    }
];

function Pricing() {
    const [activeId, setActiveId] = useState(null);
    const [activeTab, setActiveTab] = useState("all");

    const toggleAccordion = (id) => setActiveId(activeId === id ? null : id);

    const filteredServices = ALL_SERVICES.filter(service => {
        if (activeTab === "all") return true;
        return service.category === activeTab;
    });

    // Distribute services into two columns dynamically to balance heights
    const col1 = [];
    const col2 = [];
    filteredServices.forEach((service, idx) => {
        if (idx % 2 === 0) {
            col1.push(service);
        } else {
            col2.push(service);
        }
    });

    const renderItem = (service) => {
        const isOpen = activeId === service.id;
        return (
            <div
                key={service.id}
                className={`luxury-menu-card rounded-2xl border transition-all duration-500 overflow-hidden ${isOpen ? "luxury-menu-card-open shadow-[0_15px_30px_rgba(0,0,0,0.05)]" : "shadow-none"
                    }`}
                style={{
                    backgroundColor: "#ffffff",
                    borderColor: isOpen ? "var(--primary-pink)" : "rgba(32,32,32,0.06)",
                    transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)"
                }}
            >
                <button
                    className="w-full bg-transparent border-none flex flex-col px-7 py-6 cursor-pointer text-left gap-1"
                    onClick={() => toggleAccordion(service.id)}
                    aria-expanded={isOpen}
                >
                    {/* Title */}
                    <span
                        className="text-sm uppercase tracking-[1.5px] leading-tight font-extrabold text-[#111111]"
                        style={{ fontFamily: "var(--font-accent)" }}
                    >
                        {service.title}
                    </span>

                    {/* Price and Action Row */}
                    <div className="flex items-center w-full gap-3 mt-1.5">
                        <span className="grow border-b border-dashed border-[#111111]/10" />
                        <span
                            className="text-base font-bold shrink-0 text-[#111111]"
                            style={{
                                fontFamily: "var(--font-accent)"
                            }}
                        >
                            {service.price}
                        </span>

                        {/* Elegant luxury down/up arrow */}
                        <svg
                            className={`w-3.5 h-3.5 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180 text-[var(--primary-pink)]" : "text-neutral-400"}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </button>

                {/* Smooth Expansion Area */}
                <div
                    className="acc-body overflow-hidden transition-all duration-500"
                    style={{
                        maxHeight: isOpen ? "400px" : "0",
                        transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)"
                    }}
                >
                    <div className="px-7 pb-6">
                        <p
                            className="text-[13px] leading-[1.7] text-neutral-500 mb-5 font-light"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            {service.desc}
                        </p>

                        <a
                            href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
                            target="_blank"
                            rel="noreferrer"
                            className="no-underline text-[10px] font-bold tracking-[1.5px] px-6 py-2.5 rounded-full border border-black text-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white inline-block uppercase"
                            style={{ fontFamily: "var(--font-accent)" }}
                        >
                            Book Treatment
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <style>{`
                .luxury-menu-card:hover {
                    transform: translateY(-2px);
                    border-color: var(--primary-pink) !important;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.03);
                }
                .luxury-menu-card-open {
                    border-color: var(--primary-pink) !important;
                }
                .pricing-tab-btn {
                    transition: all 0.3s ease;
                }
            `}</style>

            <section
                id="pricing"
                className="pricing-section w-full py-24 border-t border-black/[0.03]"
                style={{ background: "#FAF8F6" }}
            >
                <div className="container">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="section-subtitle">OUR SALON MENU</span>
                        <h2 className="section-title max-[575px]:text-[36px]">Our <span className="title-italic">Prices</span></h2>
                        <div className="title-divider" style={{ backgroundColor: "#202020", opacity: 0.1 }} />
                        <p className="section-description text-neutral-500 max-w-xl mx-auto font-light">
                            Discover our premium cosmetic treatments and transparent, value-aligned pricing catalog. Customize your luxury beauty experience.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center mb-10">
                        <div className="inline-flex items-center gap-0.5 p-0.5 bg-neutral-100/90 border border-neutral-200/60 rounded-full max-w-fit">
                            {[
                                { id: "all", label: "All" },
                                { id: "lashes-brows", label: "Lashes & Brows" },
                                { id: "pmu-aesthetics", label: "PMU & Aesthetics" }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveTab(tab.id);
                                        setActiveId(null); // collapse accordions on tab change
                                    }}
                                    className={`pricing-tab-btn px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-tight border cursor-pointer transition-all duration-300 ${activeTab === tab.id
                                            ? "bg-black text-white border-black shadow-sm"
                                            : "bg-transparent text-neutral-500 border-transparent hover:text-black"
                                        }`}
                                    style={{ fontFamily: "var(--font-accent)" }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 2-Column Balanced Grid */}
                    <div className="grid grid-cols-2 gap-8 items-start max-[991px]:grid-cols-1 max-[991px]:gap-4">
                        <div className="flex flex-col gap-4 transition-all duration-500">
                            {col1.map(renderItem)}
                        </div>
                        <div className="flex flex-col gap-4 transition-all duration-500">
                            {col2.map(renderItem)}
                        </div>
                    </div>

                    {/* Pricing CTA */}
                    <div className="text-center mt-16">
                        <a href="https://chat.thepermanentmakeupstudios.com/" className="btn-primary">
                            LEARN MORE ABOUT OUR SERVICES
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

export default Pricing;
