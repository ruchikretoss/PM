import React from "react";

function InfoBoxes() {
    const INFO_ITEMS = [
        {
            tag: "LOCATION",
            primary: "27001 US Hwy 19 N Suite 1015",
            secondary: "Clearwater, FL 33761",
            link: "https://maps.google.com/?q=27001+US+Hwy+19+N+Suite+1015+Clearwater+FL+33761"
        },
        {
            tag: "CONTACT",
            primary: "(727) 771-3895",
            secondary: "thepermanentmakeupstudios@gmail.com",
            link: "tel:7277713895"
        },
        {
            tag: "STUDIO HOURS",
            primary: "Mon to Sat: 10AM – 7PM",
            secondary: "Sun: 12PM – 5PM"
        }
    ];

    return (
        <section className="info-boxes-section w-full py-12 relative overflow-hidden bg-[#faf8f7] text-stone-900 border-t border-b border-stone-200/60">
            <div className="container max-w-[1320px] mx-auto px-6">
                
                {/* 3-Column Editorial Accent Strip — Cardless & Minimal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                    {INFO_ITEMS.map((item, idx) => {
                        const content = (
                            <div className="flex items-center gap-4 group cursor-pointer text-left transition-all duration-300 py-1">
                                {/* Glowing Rose-Gold Vertical Accent Line */}
                                <div className="w-[3px] h-10 rounded-full bg-gradient-to-b from-[#FF99CB] to-stone-300/60 shrink-0 group-hover:h-12 group-hover:from-[#FF99CB] group-hover:to-[#FF99CB] transition-all duration-500 shadow-[0_0_8px_rgba(255,153,203,0.3)]" />

                                {/* Typography Block */}
                                <div className="flex flex-col group-hover:translate-x-1.5 transition-transform duration-300">
                                    <span 
                                        className="text-[10px] font-bold tracking-[3px] uppercase text-[#FF99CB] mb-0.5"
                                        style={{ fontFamily: "var(--font-accent)" }}
                                    >
                                        {item.tag}
                                    </span>
                                    <span 
                                        className="text-[14px] font-semibold text-stone-900 leading-snug group-hover:text-black transition-colors"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        {item.primary}
                                    </span>
                                    <span 
                                        className="text-[12px] text-stone-500 font-light"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        {item.secondary}
                                    </span>
                                </div>
                            </div>
                        );

                        return item.link ? (
                            <a key={idx} href={item.link} target="_blank" rel="noreferrer" className="no-underline block">
                                {content}
                            </a>
                        ) : (
                            <div key={idx}>
                                {content}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default InfoBoxes;


