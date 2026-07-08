import { useState } from "react";

const FAQS = [
    {
        id: "faq-1",
        question: "What Is Microblading?",
        answer: "Microblading is a form of semi-permanent makeup for your eyebrows that creates a very natural hair-like look with a tool called a microblade. A microblade is a handheld tool with very small and fine needles on the end. It is used to create strokes in the eyebrow area where pigment is then inserted, to simulate real eyebrow hairs."
    },
    {
        id: "faq-2",
        question: "How long does permanent makeup last?",
        answer: "Typically, permanent makeup lasts between 1.5 to 3 years depending on the service, skin type, lifestyle, and how well the post-treatment care instructions are followed. Annual touch-ups are recommended to maintain color vibrancy and shape."
    },
    {
        id: "faq-3",
        question: "Does the microblading process hurt?",
        answer: "A highly effective topical anesthetic cream is applied before and during the procedure to minimize discomfort. Most clients report feeling a light scratching sensation or pressure, but describe the process as very tolerable."
    }
];

const DIFFERENCES = [
    "Personalized Styling",
    "Client-Centric Approach",
    "Luxurious Salon Experience"
];

function FAQ() {
    const [openId, setOpenId] = useState("faq-1");

    const toggleFaq = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <>
            <style>{`
                .faq-item:hover {
                    border-color: rgba(248, 148, 255, 0.4) !important;
                    transform: translateY(-2px);
                }
                .faq-item.open {
                    border-color: var(--primary-pink) !important;
                    box-shadow: 0 8px 25px rgba(248, 148, 255, 0.1) !important;
                }
                .faq-toggle.open {
                    transform: rotate(-135deg) !important;
                    border-color: var(--primary-pink) !important;
                }
                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
                }
                .faq-answer.expanded {
                    max-height: 1000px;
                    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
                }
            `}</style>

            <section
                id="faqs"
                className="faq-section w-full py-20 border-t border-black/5"
                style={{ background: "var(--bg-gradient)" }}
            >
                <div className="container grid grid-cols-2 gap-[60px] items-start max-[991px]:grid-cols-1 max-[991px]:gap-10">

                    {/* ── Left column ── */}
                    <div className="flex flex-col items-start text-left">
                        <span className="section-subtitle">WHY CHOOSE OUR SALON?</span>
                        <h2 className="section-title">OUR DIFFERENCES</h2>
                        <div className="title-divider-left" />

                        <p
                            className="text-base leading-[1.6] mb-7"
                            style={{
                                fontFamily: "var(--font-body)",
                                color: "var(--text-muted-dark)",
                            }}
                        >
                            Experience our unique approach to self care – where personalized service meets skilled artistry.
                            Discover a haven where style and individuality intertwine.
                        </p>

                        {/* Differences list */}
                        <div className="flex flex-col gap-4 mb-9 max-[991px]:mb-7">
                            {DIFFERENCES.map((diff, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <span
                                        className="text-base"
                                        style={{ color: "var(--primary-pink)" }}
                                    >
                                        ✦
                                    </span>
                                    <span
                                        className="text-[15px] font-bold uppercase tracking-[1px]"
                                        style={{
                                            fontFamily: "var(--font-accent)",
                                            color: "var(--text-dark)",
                                        }}
                                    >
                                        {diff}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://thepermanentmakeupstudios.com/services/"
                            className="btn-primary text-[13px] font-bold"
                        >
                            LEARN MORE ABOUT OUR SERVICES
                            <svg className="arrow-icon" viewBox="0 0 256 256" width="20" height="20" fill="currentColor">
                                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                            </svg>
                        </a>
                    </div>

                    {/* ── Right column: accordion ── */}
                    <div className="w-full">
                        <div className="flex flex-col gap-4">
                            {FAQS.map((faq) => {
                                const isOpen = openId === faq.id;
                                return (
                                    <div
                                        key={faq.id}
                                        className={`faq-item rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? "open" : ""}`}
                                        style={{
                                            backgroundColor: "var(--bg-light)",
                                            border: "1px solid var(--border-light)",
                                            boxShadow: "var(--shadow-light)",
                                            transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                                        }}
                                    >
                                        {/* Question button */}
                                        <button
                                            className="w-full bg-transparent border-none flex items-center justify-between p-6 cursor-pointer text-left"
                                            onClick={() => toggleFaq(faq.id)}
                                            aria-expanded={isOpen}
                                        >
                                            <span
                                                className="text-xl uppercase tracking-[1px]"
                                                style={{
                                                    fontFamily: "var(--font-title)",
                                                    color: "var(--text-dark)",
                                                }}
                                            >
                                                {faq.question}
                                            </span>
                                            {/* Chevron arrow */}
                                            <span
                                                className={`faq-toggle w-[10px] h-[10px] border-r-2 border-b-2 rotate-45 transition-transform duration-300 mr-1 mb-1 shrink-0`}
                                                style={{
                                                    borderColor: "var(--text-muted-dark)",
                                                }}
                                            />
                                        </button>

                                        {/* Answer */}
                                        <div className={`faq-answer ${isOpen ? "expanded" : ""}`} style={{ backgroundColor: "#FAF9F6" }}>
                                            <div
                                                className="p-6 border-t"
                                                style={{ borderColor: "var(--border-light)" }}
                                            >
                                                <p
                                                    className="text-[15px] leading-[1.7] m-0"
                                                    style={{
                                                        fontFamily: "var(--font-body)",
                                                        color: "var(--text-dark)",
                                                    }}
                                                >
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default FAQ;
