import { useState, useEffect } from "react";
import { Phone } from "lucide-react";


const SERVICES_DROPDOWN = [
    { name: "All", link: "/services/all" },
    { name: "Eyelash Extensions", link: "/services/eyelash-extensions" },
    { name: "Lash Lift & Tint", link: "/services/lash-lift-tint" },
    { name: "Brow Services", link: "/services/brow-services" },
    { name: "Lip Blush", link: "/services/lip-blush" },
    { name: "SMP & Facials", link: "/scalp-micropigmentation" },
    { name: "Scar Camouflage", link: "/scar-camouflage-tattoo" },
    { name: "Microneedling", link: "/microneedling" },
    { name: "Spray Tans / Waxing", link: "/services/spray-tans-waxing" },
];

const TRAINING_DROPDOWN = [
    { name: "Lash Training", link: "/training-courses#lash-training" },
    { name: "Lip Blush Training", link: "/training-courses#lipblush-training" },
    { name: "Powder Brows Training", link: "/training-courses#brows-training" },
    { name: "Semi-Permanent Eyeliner Training", link: "/training-courses#eyeliner-training" }
];

const INFO_DROPDOWN = [
    { name: "Membership Saving Programs", link: "/membership" },
    { name: "Consent Forms", link: "/consent-forms" },
    { name: "Book a Party", link: "https://thepermanentmakeupstudios.com/book-a-party/" },
    { name: "Store Policy", link: "https://thepermanentmakeupstudios.com/store-policy/" },
    { name: "FAQs", link: "#faqs" },
    { name: "Payment Plans", link: "https://thepermanentmakeupstudios.com/payment-plans/" },
    { name: "Before/After Care", link: "/before-after-care" }
];

function Header({ currentPage, onNavigate }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSection, setActiveMobileSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleMobileSection = (section) =>
        setActiveMobileSection(activeMobileSection === section ? null : section);

    const handleNavClick = (e, targetLink) => {
        if (!onNavigate) return;
        e.preventDefault();

        if (targetLink === "/about") {
            onNavigate("about");
        } else if (targetLink === "/services") {
            onNavigate("services");
        } else if (targetLink === "/scalp-micropigmentation" || targetLink === "/smp") {
            onNavigate("smp-page");
        } else if (targetLink === "/scar-camouflage-tattoo" || targetLink === "/scar-camouflage") {
            onNavigate("scar-camouflage-page");
        } else if (targetLink === "/before-after-care") {
            onNavigate("before-after-care-page");
        } else if (targetLink === "/microneedling") {
            onNavigate("microneedling-page");
        } else if (targetLink === "/gallery") {
            onNavigate("gallery-page");
        } else if (targetLink === "/consent-forms") {
            onNavigate("consent-forms-page");
        } else if (targetLink === "/membership") {
            onNavigate("membership-page");
        } else if (targetLink === "/training-courses" || targetLink.startsWith("/training-courses#")) {
            const anchor = targetLink.includes("#") ? targetLink.split("#")[1] : "";
            onNavigate("training-page", anchor);
        } else if (targetLink.startsWith("/services/")) {
            const anchor = targetLink.replace("/services/", "");
            onNavigate("services", anchor);
        } else {
            // home page section scroll — keep # for in-page anchors
            onNavigate("home", targetLink);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <style>{`
                /* Announcement bar slide-hide on scroll */
                .hdr-announcement { transition: transform 0.3s ease, height 0.3s ease, padding 0.3s ease; }
                .hdr-scrolled .hdr-announcement {
                    transform: translateY(-100%);
                    height: 0 !important;
                    padding: 0 !important;
                    overflow: hidden;
                    border: none !important;
                }
                .hdr-scrolled .hdr-navbar { padding-top: 12px !important; padding-bottom: 12px !important; box-shadow: 0 4px 20px rgba(0,0,0,0.4); }

                /* Announcement btn hover */
                .hdr-ann-btn:hover { background-color: var(--primary-pink-hover) !important; box-shadow: 0 0 10px var(--primary-pink-glow); }

                /* Desktop nav link hover */
                .hdr-nav-link:hover { color: var(--primary-pink-hover) !important; }

                /* Dropdown arrow */
                .hdr-has-arrow::after { content: "▾"; font-size: 10px; color: var(--text-muted-light); transition: transform 0.3s ease; margin-left: 4px; }
                .hdr-dropdown-parent:hover .hdr-has-arrow::after { transform: rotate(180deg); color: var(--primary-pink); }

                /* Dropdown panel */
                .hdr-dropdown-panel {
                    position: absolute; top: 100%; left: 50%;
                    transform: translateX(-50%) translateY(15px);
                    width: 250px;
                    background-color: rgba(18,18,22,0.95);
                    backdrop-filter: blur(16px);
                    border: 1px solid rgba(197,189,182,0.15);
                    border-radius: 6px;
                    padding: 16px 0;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    opacity: 0; visibility: hidden;
                    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1), visibility 0.3s;
                    z-index: 1005;
                }
                .hdr-dropdown-parent:hover .hdr-dropdown-panel { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }

                /* Dropdown links */
                .hdr-dropdown-link { display: block; font-size: 13px; font-weight: 500; color: var(--text-light); padding: 8px 24px; transition: all 0.2s ease; text-decoration: none; text-align: left; }
                .hdr-dropdown-link:hover { background-color: rgba(255,255,255,0.07); color: #ffffff !important; padding-left: 28px; }

                /* Financing btn hover */
                .hdr-financing-btn:hover { background-color: #ffffff !important; color: #202020 !important; box-shadow: 0 0 12px rgba(255, 255, 255, 0.2); }

                /* Phone card hover */
                .hdr-phone-card:hover { border-color: var(--primary-pink-hover) !important; background:var(--primary-pink-hover); color: var(--bg-dark) !important; }

                /* Mobile hamburger bars */
                .hdr-bar { width: 100%; height: 2px; border-radius: 1px; transition: all 0.3s ease; }
                .hdr-hamburger.active .hdr-bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
                .hdr-hamburger.active .hdr-bar:nth-child(2) { opacity: 0; }
                .hdr-hamburger.active .hdr-bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

                /* Mobile drawer */
                .hdr-drawer { position: fixed; top: 0; right: -100%; width: 300px; height: 100vh; background-color: var(--bg-dark); border-left: 1px solid rgba(197,189,182,0.1); padding: 80px 24px 40px; z-index: 999; overflow-y: auto; transition: right 0.4s cubic-bezier(0.4,0,0.2,1); box-shadow: -10px 0 30px rgba(0,0,0,0.5); }
                .hdr-drawer.open { right: 0; }

                /* Mobile nav links hover */
                .hdr-mob-link:hover { color: var(--primary-pink) !important; }

                /* Mobile accordion submenu */
                .hdr-mob-submenu { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
                .hdr-mob-accordion.open .hdr-mob-submenu { max-height: 500px; margin-top: 8px; margin-bottom: 8px; }
            `}</style>

            <header
                className={`fixed top-0 left-0 w-full z-[1000] flex flex-col transition-all duration-300 hdr-wrapper ${isScrolled ? "hdr-scrolled" : ""}`}
                style={{ transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
            >
                {/* ── Announcement Bar ── */}
                <div
                    className="hdr-announcement py-2 border-b z-[1002]"
                    style={{
                        backgroundColor: "var(--bg-dark)",
                        borderColor: "rgba(255,255,255,0.05)",
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        color: "var(--text-light)",
                    }}
                >
                    <div className="container flex justify-center items-center gap-4">
                        <span className="font-medium tracking-[0.5px]">
                            Book your free consultation Today
                        </span>
                        <a
                            href="https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services"
                            target="_blank"
                            rel="noreferrer"
                            className="hdr-ann-btn font-bold uppercase text-[11px] px-3 py-1 rounded no-underline transition-all duration-300"
                            style={{ backgroundColor: "var(--primary-pink-hover)", color: "#000000", letterSpacing: "0.5px" }}
                        >
                            Book Now
                        </a>
                    </div>
                </div>

                {/* ── Main Navbar ── */}
                <div
                    className="hdr-navbar py-[18px] border-b transition-all duration-300 backdrop-blur-[12px] p-6"
                    style={{
                        backgroundColor: "rgba(7,7,8,0.9)",
                        borderColor: "rgba(255,255,255,0.05)",
                    }}
                >
                    <div className="container flex items-center justify-between gap-[30px]">

                        {/* Logo */}
                        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center no-underline shrink-0">
                            <img
                                src="https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/Logo.webp"
                                alt="The Permanent Makeup Studios Logo"
                                className="h-[70px] max-[1000px]:h-[42px] w-auto object-contain transition-all duration-300"
                            />
                        </a>

                        {/* Desktop nav */}
                        <nav className="flex justify-center items-center grow max-[991px]:hidden">
                            <ul className="list-none p-0 m-0 flex items-center gap-6 max-[1199px]:gap-4">
                                <li><a href="/" onClick={(e) => handleNavClick(e, "/")} className="hdr-nav-link no-underline font-bold text-[12px] max-[1199px]:text-[11px] tracking-[1px] whitespace-nowrap cursor-pointer flex items-center gap-1 py-[10px] transition-colors duration-300" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>HOME</a></li>
                                <li><a href="/about" onClick={(e) => handleNavClick(e, "/about")} className="hdr-nav-link no-underline font-bold text-[12px] max-[1199px]:text-[11px] tracking-[1px] whitespace-nowrap cursor-pointer flex items-center gap-1 py-[10px] transition-colors duration-300" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>ABOUT</a></li>

                                {/* Dropdown: Services */}
                                <li className="hdr-dropdown-parent relative">
                                    <span onClick={(e) => handleNavClick(e, "/services")} className="hdr-nav-link hdr-has-arrow no-underline font-bold text-[12px] max-[1199px]:text-[11px] tracking-[1px] whitespace-nowrap cursor-pointer flex items-center py-[10px] transition-colors duration-300" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>SERVICES</span>
                                    <div className="hdr-dropdown-panel">
                                        <ul className="list-none p-0 m-0 flex flex-col gap-[2px]">
                                            {SERVICES_DROPDOWN.map((item, idx) => (
                                                <li key={idx}><a href={item.link} onClick={(e) => handleNavClick(e, item.link)} className="hdr-dropdown-link" style={{ fontFamily: "var(--font-body)" }}>{item.name}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <a
                                        href="/training-courses"
                                        onClick={(e) => handleNavClick(e, "/training-courses")}
                                        className="hdr-nav-link no-underline font-bold text-[12px] max-[1199px]:text-[11px] tracking-[1px] whitespace-nowrap cursor-pointer flex items-center gap-1 py-[10px] transition-colors duration-300"
                                        style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}
                                    >
                                        TRAINING
                                    </a>
                                </li>

                                {/* Dropdown: More Info */}
                                <li className="hdr-dropdown-parent relative">
                                    <span className="hdr-nav-link hdr-has-arrow no-underline font-bold text-[12px] max-[1199px]:text-[11px] tracking-[1px] whitespace-nowrap cursor-pointer flex items-center py-[10px] transition-colors duration-300" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>MORE INFO</span>
                                    <div className="hdr-dropdown-panel">
                                        <ul className="list-none p-0 m-0 flex flex-col gap-[2px]">
                                            {INFO_DROPDOWN.map((item, idx) => (
                                                <li key={idx}><a href={item.link} onClick={(e) => { if (item.link.startsWith("#")) handleNavClick(e, item.link); }} className="hdr-dropdown-link" style={{ fontFamily: "var(--font-body)" }}>{item.name}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>

                                <li><a href="/gallery" onClick={(e) => handleNavClick(e, "/gallery")} className="hdr-nav-link no-underline font-bold text-[12px] max-[1199px]:text-[11px] tracking-[1px] whitespace-nowrap cursor-pointer flex items-center gap-1 py-[10px] transition-colors duration-300" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>GALLERY</a></li>
                                <li><a href="/membership" onClick={(e) => handleNavClick(e, "/membership")} className="hdr-nav-link no-underline font-bold text-[12px] max-[1199px]:text-[11px] tracking-[1px] whitespace-nowrap cursor-pointer flex items-center gap-1 py-[10px] transition-colors duration-300" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>MEMBERSHIPS</a></li>
                                <li><a href="https://chat.thepermanentmakeupstudios.com/" className="hdr-nav-link no-underline font-bold text-[12px] max-[1199px]:text-[11px] tracking-[1px] whitespace-nowrap cursor-pointer flex items-center gap-1 py-[10px] transition-colors duration-300" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>CONTACT US</a></li>
                            </ul>
                        </nav>

                        {/* Desktop CTA buttons */}
                        <div className="flex items-center gap-4 max-[1199px]:gap-[10px] shrink-0 max-[991px]:hidden">
                            <a
                                href="https://pay.withcherry.com/thepermanentmakeupstudio?utm_source=merchant&utm_medium=website"
                                target="_blank"
                                rel="noreferrer"
                                className="hdr-financing-btn no-underline font-bold text-[11px] tracking-[0.5px] px-[18px] max-[1199px]:px-3 py-[10px] max-[1199px]:py-2 rounded whitespace-nowrap transition-all duration-300"
                                style={{ backgroundColor: "var(--primary-pink-hover)", color: "var(--primary-pink)", fontFamily: "var(--font-accent)" }}
                            >
                                WE OFFER FINANCING!
                            </a>
                            <a
                                href="tel:7277713895"
                                className="hdr-phone-card flex items-center gap-2 border border-white px-[14px] max-[1199px]:px-[10px] py-2 max-[1199px]:py-[6px] rounded no-underline font-bold text-[12px] whitespace-nowrap transition-all duration-300"
                                style={{ fontFamily: "var(--font-accent)", color: "var(--primary-pink-hover)" }}
                            >
                                <Phone size={14} className="" />
                                <span>+1 (727) 771-3895</span>
                            </a>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className={`hdr-hamburger hidden max-[991px]:flex flex-col justify-between w-6 h-[18px] bg-transparent border-none cursor-pointer p-0 z-[1001] ${isMobileMenuOpen ? "active" : ""}`}
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            <span className="hdr-bar" style={{ backgroundColor: "var(--text-light)" }} />
                            <span className="hdr-bar" style={{ backgroundColor: "var(--text-light)" }} />
                            <span className="hdr-bar" style={{ backgroundColor: "var(--text-light)" }} />
                        </button>
                    </div>
                </div>

                {/* ── Mobile Drawer ── */}
                <div className={`hdr-drawer ${isMobileMenuOpen ? "open" : ""}`}>
                    <nav>
                        <ul className="list-none p-0 m-0 flex flex-col gap-4">
                            <li><a href="/" onClick={(e) => handleNavClick(e, "/")} className="hdr-mob-link no-underline font-bold text-[14px] block py-1 transition-colors duration-200" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>HOME</a></li>
                            <li><a href="/about" onClick={(e) => handleNavClick(e, "/about")} className="hdr-mob-link no-underline font-bold text-[14px] block py-1 transition-colors duration-200" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>ABOUT</a></li>
                            <li><a href="/training-courses" onClick={(e) => handleNavClick(e, "/training-courses")} className="hdr-mob-link no-underline font-bold text-[14px] block py-1 transition-colors duration-200" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>TRAINING</a></li>
                            <li><a href="/services" onClick={(e) => handleNavClick(e, "/services")} className="hdr-mob-link no-underline font-bold text-[14px] block py-1 transition-colors duration-200" style={{ fontFamily: "var(--font-accent)", color: "var(--primary-pink)" }}>SERVICES</a></li>

                            {/* Mobile accordion: Services */}
                            {[
                                { key: "services", label: "SERVICES", items: SERVICES_DROPDOWN },
                                { key: "info", label: "MORE INFO", items: INFO_DROPDOWN },
                            ].map(({ key, label, items }) => (
                                <li key={key} className={`hdr-mob-accordion ${activeMobileSection === key ? "open" : ""}`}>
                                    <button
                                        className="w-full bg-transparent border-none flex justify-between items-center py-2 font-bold text-[14px] cursor-pointer text-left"
                                        style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}
                                        onClick={() => toggleMobileSection(key)}
                                    >
                                        {label}
                                        <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "var(--primary-pink)" }}>
                                            {activeMobileSection === key ? "−" : "+"}
                                        </span>
                                    </button>
                                    <ul className="hdr-mob-submenu list-none p-0 m-0 flex flex-col gap-2 pl-4">
                                        {items.map((item, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href={item.link}
                                                    onClick={(e) => handleNavClick(e, item.link)}
                                                    className="hdr-mob-link no-underline font-medium text-[13px] transition-colors duration-200"
                                                    style={{ fontFamily: "var(--font-body)", color: "var(--text-muted-light)" }}
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}


                            <li><a href="/gallery" onClick={(e) => handleNavClick(e, "/gallery")} className="hdr-mob-link no-underline font-bold text-[14px] block py-1 transition-colors duration-200" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>GALLERY</a></li>
                            <li><a href="/membership" onClick={(e) => handleNavClick(e, "/membership")} className="hdr-mob-link no-underline font-bold text-[14px] block py-1 transition-colors duration-200" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>MEMBERSHIPS</a></li>
                            <li><a href="https://chat.thepermanentmakeupstudios.com/" onClick={() => setIsMobileMenuOpen(false)} className="hdr-mob-link no-underline font-bold text-[14px] block py-1 transition-colors duration-200" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>CONTACT US</a></li>

                            <li className="h-px my-[10px]" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

                            <li className="mt-2">
                                <a
                                    href="https://pay.withcherry.com/thepermanentmakeupstudio?utm_source=merchant&utm_medium=website"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hdr-financing-btn block text-center w-full p-3 rounded font-bold text-[11px] no-underline transition-all duration-300"
                                    style={{ backgroundColor: "var(--primary-pink)", color: "#ffffff", fontFamily: "var(--font-accent)" }}
                                >
                                    WE OFFER FINANCING!
                                </a>
                            </li>
                            <li className="mt-2">
                                <a
                                    href="tel:7277713895"
                                    className="hdr-phone-card flex justify-center items-center gap-2 border border-white/15 w-full p-3 rounded no-underline font-bold text-[12px] transition-all duration-300"
                                    style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}
                                >
                                    <Phone size={14} className="text-[var(--primary-pink)]" />
                                    <span>+1 (727) 771-3895</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;