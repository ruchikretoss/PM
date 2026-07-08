import { useState } from "react";

const COLUMN_1_SERVICES = [
    { id: "classic-lash", title: "classic lash extensions", price: "60$ (2 1/2 weeks)", desc: "Enhance your natural lashes with our Classic Lash Extensions. Each lash is individually applied for a subtle, yet stunning look that adds length and volume." },
    { id: "volume-lash", title: "volume lash extensions", price: "90$ (2 1/2 weeks)", desc: "Enhance your natural lashes with our Classic Lash Extensions. Each lash is individually applied for a subtle, yet stunning look that adds length and volume." },
    { id: "hybrid-lash", title: "Hybrid Lashes Extensions", price: "75$ (2 1/2 weeks)", desc: "Get the best of both worlds with our Hybrid Lash Extensions. Combining the classic and volume techniques, this option offers a perfect balance of length and fullness." },
    { id: "lash-tint", title: "Lash Tint", price: "35$", desc: "Define and darken your lashes with our Lash Tint service. Say goodbye to mascara and hello to effortlessly beautiful lashes." },
    { id: "lash-lift-tint", title: "Lash Lift & Tint", price: "125$", desc: "Open up your eyes with our Lash Lift & Tint. This treatment lifts and curls your natural lashes, giving them a longer, fuller appearance, while the tint adds depth and color." },
    { id: "lash-add-ons", title: "Lash Extension Add-Ons", price: "50$", desc: "Customize your lash experience with our Add-Ons. Choose from options like extra volume, colored lashes, or bottom lash extensions to achieve your desired look." },
    { id: "brow-tint", title: "Brow Tint", price: "35$", desc: "Frame your face with our Brow Tint service. Enhance your natural brows by darkening and defining them for a polished appearance." }
];

const COLUMN_2_SERVICES = [
    { id: "brow-lam", title: "Brow Lamination", price: "99$", desc: "Achieve perfectly groomed brows with our Brow Lamination. This treatment tames unruly hairs, creating a sleek, uniform look that lasts." },
    { id: "lip-blush", title: "Lip Blush", price: "550$", desc: "Add natural-looking color and definition to your lips with our Lip Blush service. Enhance your pout with a soft, flushed tint that complements your skin tone." },
    { id: "pm-follow-up", title: "All Permanent Makeup Follow Up by Christina (4 to 6-Week)", price: "99$", desc: "All Permanent Makeup 4-6 week follow-up appointments originally done with Christina are $99." },
    { id: "eyeliner-bottom", title: "Permanent Eyeliner Bottom", price: "300$", desc: "Wake up to perfectly defined eyes with our Permanent Eyeliner service. Choose from bottom or top liner to enhance your natural eye shape and add lasting definition." },
    { id: "eyeliner-top", title: "Permanent Eyeliner Top", price: "450$", desc: "Wake up to perfectly defined eyes with our Permanent Eyeliner service. Choose from bottom or top liner to enhance your natural eye shape and add lasting definition." },
    { id: "smp-price", title: "Scalp Micro Pigmentation (Prices Vary on Size of Area)", price: "Contact Us", desc: "Restore your confidence with our Scalp Micropigmentation. This non-invasive procedure replicates the appearance of hair follicles, creating the illusion of a fuller head of hair." },
    { id: "spray-tan", title: "Spray Tan Package of 5", price: "125$", desc: "Get a sun-kissed glow without the harmful UV rays with our Spray Tan service. Achieve a natural-looking tan in minutes, customized to your desired shade." }
];

function Pricing() {
    const [activeId, setActiveId] = useState(null);
    const toggleAccordion = (id) => setActiveId(activeId === id ? null : id);

    const renderItem = (service) => {
        const isOpen = activeId === service.id;
        return (
            <div
                key={service.id}
                className={`acc-item rounded-[6px] overflow-hidden transition-all duration-300 ${isOpen ? "acc-open" : ""}`}
                style={{
                    backgroundColor: "var(--bg-light)",
                    border: "1px solid var(--border-light)",
                    boxShadow: "var(--shadow-light)",
                    transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                }}
            >
                <button
                    className="w-full bg-transparent border-none flex flex-col px-6 py-5 max-[575px]:px-4 max-[575px]:py-4 cursor-pointer text-left gap-1 transition-colors duration-300"
                    onClick={() => toggleAccordion(service.id)}
                    aria-expanded={isOpen}
                >
                    {/* Title row */}
                    <span
                        className="text-xl max-[575px]:text-lg uppercase tracking-[0.5px] leading-tight"
                        style={{ fontFamily: "var(--font-title)", color: "var(--text-dark)" }}
                    >
                        {service.title}
                    </span>
                    {/* Dots + Price + Arrow row */}
                    <div className="flex items-center w-full gap-2 mt-1">
                        <span className="grow border-b-2 border-dashed border-black/[0.08]" />
                        <span
                            className="text-base font-bold shrink-0"
                            style={{
                                fontFamily: "var(--font-accent)",
                                color: "var(--primary-pink)",
                                textShadow: "0 0 1px rgba(248,148,255,0.1)",
                            }}
                        >
                            {service.price}
                        </span>
                        <span
                            className="w-[10px] h-[10px] border-r-2 border-b-2 shrink-0 transition-transform duration-300"
                            style={{
                                borderColor: isOpen ? "var(--primary-pink)" : "var(--text-muted-dark)",
                                transform: isOpen ? "rotate(-135deg)" : "rotate(45deg)",
                            }}
                        />
                    </div>
                </button>

                <div
                    className="acc-body overflow-hidden"
                    style={{
                        maxHeight: isOpen ? "1000px" : "0",
                        transition: isOpen
                            ? "max-height 0.3s cubic-bezier(1,0,1,0)"
                            : "max-height 0.3s cubic-bezier(0,1,0,1)",
                        backgroundColor: "#FAF9F6",
                    }}
                >
                    <div
                        className="px-6 pt-4 pb-6 border-t"
                        style={{ borderColor: "var(--border-light)" }}
                    >
                        <p
                            className="text-[14px] leading-[1.6] mb-4"
                            style={{ fontFamily: "var(--font-body)", color: "var(--text-muted-dark)" }}
                        >
                            {service.desc}
                        </p>
                        <a
                            href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[12px] font-bold underline tracking-[1px] transition-colors duration-300"
                            style={{ fontFamily: "var(--font-accent)", color: "var(--primary-pink)" }}
                            onMouseEnter={e => e.currentTarget.style.color = "var(--primary-pink-hover)"}
                            onMouseLeave={e => e.currentTarget.style.color = "var(--primary-pink)"}
                        >
                            BOOK NOW
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <style>{`
                .acc-item:hover { border-color: rgba(248,148,255,0.4) !important; transform: translateY(-2px); }
                .acc-item.acc-open { border-color: var(--primary-pink) !important; box-shadow: 0 8px 25px rgba(248,148,255,0.1) !important; }
            `}</style>

            <section
                id="pricing"
                className="pricing-section w-full py-20 border-t border-black/5"
                style={{ background: "var(--bg-gradient)" }}
            >
                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <span className="section-subtitle">WHAT WE OFFER</span>
                        <h2 className="section-title">OUR PRICES</h2>
                        <div className="title-divider" />
                        <p className="section-description">
                            Experience our luxury Salon with our diverse services designed just for you.
                            Discover clear pricing aligned with the value you get.
                        </p>
                    </div>

                    {/* 2-col accordion grid */}
                    <div className="grid grid-cols-2 gap-10 items-start max-[991px]:grid-cols-1 max-[991px]:gap-4">
                        <div className="flex flex-col gap-3">{COLUMN_1_SERVICES.map(renderItem)}</div>
                        <div className="flex flex-col gap-3">{COLUMN_2_SERVICES.map(renderItem)}</div>
                    </div>

                    {/* Footer CTA */}
                    <div className="text-center mt-14">
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
