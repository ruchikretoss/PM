const SERVICES_LINKS = [
    { name: "All Services", link: "/services/all" },
    { name: "Eyelash Extensions", link: "/services/eyelash-extensions" },
    { name: "Lash Lift & Tint", link: "/services/lash-lift-tint" },
    { name: "Brow Services", link: "/services/brow-services" },
    { name: "Lip Blush", link: "/services/lip-blush" },
    { name: "SMP & Facials", link: "/scalp-micropigmentation" },
    { name: "Scar Camouflage", link: "/scar-camouflage-tattoo" },
    { name: "Microneedling", link: "/microneedling" },
    { name: "Spray Tans / Waxing", link: "/services/spray-tans-waxing" }
];

function Footer({ onNavigate }) {
    const handleQuickLinkClick = (e, link) => {
        if (!onNavigate) return;

        // Skip external URLs
        if (link.startsWith("http")) return;

        e.preventDefault();

        if (link === "/" || link === "") {
            onNavigate("home");
        } else if (link === "/about") {
            onNavigate("about");
        } else if (link === "/services") {
            onNavigate("services");
        } else if (link === "/membership") {
            onNavigate("membership-page");
        } else if (link === "/scalp-micropigmentation" || link === "/smp") {
            onNavigate("smp-page");
        } else if (link === "/scar-camouflage-tattoo" || link === "/scar-camouflage") {
            onNavigate("scar-camouflage-page");
        } else if (link === "/before-after-care") {
            onNavigate("before-after-care-page");
        } else if (link === "/microneedling") {
            onNavigate("microneedling-page");
        } else if (link === "/gallery") {
            onNavigate("gallery-page");
        } else if (link.startsWith("/services/")) {
            const anchor = link.replace("/services/", "");
            onNavigate("services", anchor);
        } else if (link.startsWith("#")) {
            // In-page section anchor on home page
            onNavigate("home", link);
        }
    };

    return (
        <>
            <style>{`
                .footer-social-link:hover {
                    background-color: rgba(255, 255, 255, 0.15) !important;
                    color: #ffffff !important;
                    transform: translateY(-2px);
                }
                .footer-nav-link {
                    transition: color 0.3s ease;
                }
                .footer-nav-link:hover {
                    color: #ffffff !important;
                }
            `}</style>

            <footer
                className="w-full border-t border-white/[0.05]"
                style={{
                    backgroundColor: "var(--bg-dark)",
                    color: "rgba(255,255,255,0.6)",
                    paddingTop: "60px",
                    paddingBottom: "40px"
                }}
            >
                <div className="w-full px-6 flex flex-col items-center text-center">
                    
                    {/* Services Menu */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 max-w-[1400px] mx-auto">
                        {SERVICES_LINKS.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.link}
                                onClick={(e) => handleQuickLinkClick(e, link.link)}
                                className="footer-nav-link no-underline text-[12px] uppercase tracking-[1.5px] font-medium"
                                style={{
                                    fontFamily: "var(--font-accent)",
                                    color: "rgba(239, 237, 235, 0.6)",
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-4 mb-8">
                        {[
                            {
                                label: "Facebook",
                                href: "https://www.facebook.com/thepermanentmakeupstudios",
                                path: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
                                vb: "0 0 512 512"
                            },
                            {
                                label: "Instagram",
                                href: "https://www.instagram.com/thepermanentmakeupstudio/",
                                path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
                                vb: "0 0 448 512"
                            },
                            {
                                label: "TikTok",
                                href: "https://www.tiktok.com/@permanentmakeupstudios",
                                path: "M22.465 9.866a9.809 9.809 0 0 1-5.74-1.846v8.385c0 4.188-3.407 7.594-7.594 7.594a7.548 7.548 0 0 1-4.352-1.376 7.59 7.59 0 0 1-3.242-6.218c0-4.188 3.407-7.595 7.595-7.595.348 0 .688.029 1.023.074v4.212a3.426 3.426 0 0 0-1.023-.16 3.472 3.472 0 0 0-3.468 3.469 3.47 3.47 0 0 0 3.469 3.468 3.47 3.47 0 0 0 3.462-3.338L12.598 0h4.126a5.752 5.752 0 0 0 5.74 5.741v4.125z",
                                vb: "0 0 24 24"
                            }
                        ].map(({ label, href, path, vb }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="footer-social-link w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300"
                                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                            >
                                <svg viewBox={vb} width="16" height="16" fill="currentColor">
                                    <path d={path} />
                                </svg>
                            </a>
                        ))}
                    </div>

                    {/* Logo (spans full width of the screen / viewport) */}
                    <div className="w-full mb-10">
                        <img
                            src="/logo.svg"
                            alt="The Permanent Makeup Studios Logo"
                            className="w-full h-auto object-contain brightness-0 invert opacity-90 mx-auto"
                        />
                    </div>

                    {/* Copyright */}
                    <div className="w-full mt-4">
                        <p
                            className="text-[12px] m-0"
                            style={{
                                fontFamily: "var(--font-body)",
                                color: "rgba(255,255,255,0.35)",
                                }}
                            >
                                © {new Date().getFullYear()} The Permanent Makeup Studio. All Rights Reserved.
                            </p>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;
