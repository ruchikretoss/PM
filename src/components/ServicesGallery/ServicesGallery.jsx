const GALLERY_ITEMS = [
    { id: 1, title: "Eyelash Extensions",       image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/09/classic-eyelashes.png",   link: "https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services" },
    { id: 2, title: "Professional Facials",      image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/facial.webp",              link: "https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services" },
    { id: 3, title: "Lash Lift & Tint",          image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/lash_lift.webp",            link: "https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services" },
    { id: 4, title: "Brow Lamination",           image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/Training_Brow.webp",        link: "https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services" },
    { id: 5, title: "Lip Blush",                 image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/lip_blushing.webp",         link: "https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services" },
    { id: 6, title: "Sugar Waxing",              image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/sugar_waxing_3.webp",       link: "https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services" },
    { id: 7, title: "Scalp Micropigmentation",   image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/smp.webp",                  link: "https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services" },
    { id: 8, title: "Volume Eyelash Extensions", image: "https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/vol_eyelash.webp",          link: "https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services" }
];

function ServicesGallery() {
    return (
        <>
            <style>{`
                .gal-card:hover { transform: translateY(-6px); box-shadow: 0 15px 30px rgba(248,148,255,0.15) !important; }
                .gal-card:hover .gal-img { transform: scale(1.08); }
                .gal-card:hover .gal-overlay { opacity: 1; }
                .gal-card:hover .gal-title,
                .gal-card:hover .gal-btn { transform: translateY(0) !important; }
                .gal-btn:hover { background-color: var(--primary-pink) !important; color: var(--bg-dark) !important; box-shadow: 0 0 15px var(--primary-pink-glow); }
            `}</style>

            <section
                className="w-full py-[100px] max-md:py-[60px] border-t border-b border-black/5 overflow-hidden"
                style={{ background: "var(--bg-gradient)" }}
            >
                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-[50px]">
                        <span className="section-subtitle" style={{ color: "var(--text-muted-dark)" }}>VISUAL GALLERY</span>
                        <h2 className="section-title mt-[10px]" style={{ color: "var(--text-dark)" }}>SEE THE SERVICES WE OFFER</h2>
                        <div className="title-divider" />
                    </div>

                    {/* Uniform 4-col grid — no spanning, no empty gaps */}
                    <div className="grid grid-cols-4 max-[1200px]:grid-cols-3 max-[991px]:grid-cols-2 max-md:grid-cols-1 gap-6 max-[991px]:gap-5 max-md:gap-4">
                        {GALLERY_ITEMS.map((item) => (
                            <div
                                key={item.id}
                                className="gal-card relative overflow-hidden rounded-xl cursor-pointer transition-all duration-[400ms] h-[280px] max-[991px]:h-[240px] max-md:h-[280px]"
                                style={{
                                    boxShadow: "0 5px 15px rgba(0,0,0,0.04)",
                                    backgroundColor: "var(--bg-cream)",
                                    transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)",
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="gal-img absolute inset-0 w-full h-full object-cover block transition-transform duration-[600ms]"
                                    style={{ transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)" }}
                                />

                                {/* Hover overlay */}
                                <div
                                    className="gal-overlay absolute inset-0 opacity-0 flex items-end p-6 z-[2] transition-opacity duration-[400ms]"
                                    style={{
                                        background: "linear-gradient(to top, rgba(18,18,22,0.95) 0%, rgba(18,18,22,0.4) 60%, rgba(18,18,22,0.1) 100%)",
                                    }}
                                >
                                    <div className="w-full text-left">
                                        <h3
                                            className="gal-title text-[22px] max-md:text-[18px] mb-3 tracking-[0.5px] uppercase"
                                            style={{
                                                fontFamily: "var(--font-title)",
                                                color: "var(--text-white)",
                                                transform: "translateY(20px)",
                                                transition: "transform 0.4s cubic-bezier(0.2,0.8,0.2,1)",
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="gal-btn inline-block font-bold text-[11px] tracking-[1px] no-underline rounded-[30px] px-[18px] py-[6px] bg-transparent transition-all duration-300"
                                            style={{
                                                fontFamily: "var(--font-accent)",
                                                color: "var(--primary-pink)",
                                                border: "1.5px solid var(--primary-pink)",
                                                transform: "translateY(20px)",
                                                transition: "transform 0.4s cubic-bezier(0.2,0.8,0.2,1) 0.05s, background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
                                            }}
                                        >
                                            BOOK NOW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesGallery;
