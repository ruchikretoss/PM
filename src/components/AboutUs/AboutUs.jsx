const CERTIFICATIONS = [
    "Licensed Esthetician",
    "Salon License",
    "Triple certified permanent make up artist",
    "Certified Microblading Artist",
    "State of Florida Department of Health Tattoo Artist License",
    "Certified Bloodborne Pathogens & Communicable Diseases for Tattoo Artist"
];

function AboutUs() {
    return (
        <section
            id="about"
            className="about-section w-full py-20 border-t border-black/5"
            style={{ background: "var(--bg-gradient)" }}
        >
            {/* 2-col grid → 1-col on tablet/mobile */}
            <div className="container grid grid-cols-[1.2fr_0.8fr] gap-[60px] items-start max-[991px]:grid-cols-1 max-[991px]:gap-10">

                {/* ── Left: text column ── */}
                <div className="flex flex-col items-start text-left">
                    <span className="section-subtitle">OUR STORY</span>
                    <h2 className="section-title">ABOUT US</h2>

                    {/* Pink divider */}
                    <div
                        className="w-[60px] h-[3px] my-4"
                        style={{ backgroundColor: "var(--primary-pink)" }}
                    />

                    {/* Est'd label */}
                    <h3
                        className="text-2xl mb-5 tracking-[1px]"
                        style={{
                            fontFamily: "var(--font-title)",
                            color: "var(--primary-pink)",
                        }}
                    >
                        EST&apos;D 2013
                    </h3>

                    {/* Body copy */}
                    <p
                        className="text-base leading-[1.8] mb-7"
                        style={{
                            fontFamily: "var(--font-body)",
                            color: "var(--text-dark)",
                        }}
                    >
                        The Permanent Makeup Studio specializes in enhancing your already beautiful features.
                        Our team of highly skilled and experienced estheticians, lash artists, and triple-certified
                        permanent makeup artists cater to your service needs. Relax in our chic lash lounge and try
                        our Frose made fresh daily or request a glass of Prosecco or tea while waiting for your technician.
                        We also hold special events per advance notice whether you are looking for a space to hold a
                        bachelorette party or planning a baby shower ....we will handle everything so you can sit back and get pampered.
                        We can&apos;t wait to make you feel special and beautiful 💜
                    </p>

                    {/* Founder */}
                    <div className="flex flex-col gap-1">
                        <span
                            className="text-2xl tracking-[0.5px]"
                            style={{
                                fontFamily: "var(--font-title)",
                                color: "var(--primary-pink)",
                            }}
                        >
                            - Christina Corrigan
                        </span>
                        <span
                            className="text-sm font-medium"
                            style={{
                                fontFamily: "var(--font-body)",
                                color: "var(--text-muted-dark)",
                            }}
                        >
                            - Founder, The Permanent Makeup Studio
                        </span>
                    </div>
                </div>

                {/* ── Right: certifications card ── */}
                <div
                    className="text-left rounded-lg p-10 max-[991px]:p-[30px]"
                    style={{
                        backgroundColor: "var(--bg-light)",
                        border: "1px solid var(--border-light)",
                        boxShadow: "var(--shadow-light)",
                    }}
                >
                    <h4
                        className="text-2xl mb-2 tracking-[1px]"
                        style={{
                            fontFamily: "var(--font-title)",
                            color: "var(--text-dark)",
                        }}
                    >
                        SKINCARE QUALIFICATIONS
                    </h4>
                    <p
                        className="text-sm mb-6"
                        style={{
                            fontFamily: "var(--font-body)",
                            color: "var(--text-muted-dark)",
                        }}
                    >
                        Our beauty salon has the following certifications:
                    </p>

                    <ul className="list-none p-0 m-0 flex flex-col gap-4">
                        {CERTIFICATIONS.map((cert, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span
                                    className="text-base leading-none mt-1"
                                    style={{ color: "var(--primary-pink)" }}
                                >
                                    ✦
                                </span>
                                <span
                                    className="text-sm leading-[1.4]"
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        color: "var(--text-dark)",
                                    }}
                                >
                                    {cert}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default AboutUs;
