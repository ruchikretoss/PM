import { MapPin, Phone, Mail, Clock } from "lucide-react";

const QUICK_LINKS = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Memberships", link: "/membership" },
    { name: "Pricing", link: "#pricing" },
    { name: "Training Courses", link: "#training-courses" },
    { name: "Book Now", link: "https://book.squareup.com/appointments/dm5kf9b233idwf/location/LTG1JPHB7YPMF/services" },
    { name: "Contact Us", link: "https://chat.thepermanentmakeupstudios.com/" }
];

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
                    background-color: #ffffff !important;
                    color: #202020 !important;
                    transform: translateY(-3px);
                }
                .footer-nav-link:hover {
                    color: #ffffff !important;
                }
            `}</style>

            <footer
                className="w-full border-t border-[rgba(197,189,182,0.2)]"
                style={{
                    backgroundColor: "var(--bg-dark)",
                    color: "rgba(255,255,255,0.7)",
                    paddingTop: "60px"
                }}
            >
                {/* ── Upper CTA ── */}
                <div
                    className="container text-center border-b border-white/[0.08] pb-[60px] mb-[60px] px-6"
                >
                    <div className="max-w-[600px] mx-auto">
                        <span
                            className="font-bold text-[14px] tracking-[2px] block mb-2"
                            style={{
                                fontFamily: "var(--font-accent)",
                                color: "var(--text-white)",
                            }}
                        >
                            GET IN TOUCH
                        </span>
                        <h2
                            className="text-[40px] mb-4"
                            style={{ color: "var(--text-white)" }}
                        >
                            Contact Us
                        </h2>
                        <p
                            className="text-[15px] leading-[1.6] mb-7 mt-3"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            Feel free to reach out to us with your inquiries through either phone or email.
                            We are here to provide you with the information you need.
                        </p>
                        <a href="https://chat.thepermanentmakeupstudios.com/" className="btn-secondary !text-white !border-white hover:!bg-white hover:!text-[#202020] transition-colors duration-300">
                            CHAT WITH US
                        </a>
                    </div>
                </div>

                {/* ── Main 4-col grid ── */}
                <div
                    className="container grid grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr] gap-12 items-start max-[991px]:grid-cols-2 max-[991px]:gap-8 max-[575px]:grid-cols-1 pb-[60px] pt-[60px]"
                >

                    {/* Col 1: Brand */}
                    <div className="flex flex-col items-start text-left">
                        <img
                            src="https://thepermanentmakeupstudios.com/wp-content/uploads/2024/04/Logo.webp"
                            alt="The Permanent Makeup Studios Logo"
                            className="h-[60px] w-auto object-contain mb-6"
                        />
                        <p
                            className="text-[14px] leading-[1.7] mb-6"
                            style={{
                                fontFamily: "var(--font-body)",
                                color: "rgba(255,255,255,0.6)",
                            }}
                        >
                            Elevating Permanent Makeup. Inspiring Style. Unleash Your Confidence at The Permanent Makeup Studio,
                            where we craft exceptional looks that reflect your individuality with a passion for style and an eye for detail.
                        </p>
                        {/* Socials */}
                        <div className="flex gap-4">
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
                                    className="footer-social-link w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300"
                                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                                >
                                    <svg viewBox={vb} width="20" height="20" fill="currentColor">
                                        <path d={path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="flex flex-col items-start text-left">
                        <h3
                            className="text-[22px] mb-6 tracking-[1px]"
                            style={{
                                fontFamily: "var(--font-title)",
                                color: "var(--white)",
                            }}
                        >
                            Quick Links
                        </h3>
                        <ul className="list-none p-0 m-0 flex flex-col gap-3">
                            {QUICK_LINKS.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.link}
                                        onClick={(e) => {
                                            if (link.link.startsWith("#") || link.link === "about") {
                                                handleQuickLinkClick(e, link.link);
                                            }
                                        }}
                                        target={link.link.startsWith("http") ? "_blank" : "_self"}
                                        rel="noreferrer"
                                        className="footer-nav-link no-underline text-[14px] transition-colors duration-300"
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            color: "rgba(255,255,255,0.6)",
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Services */}
                    <div className="flex flex-col items-start text-left">
                        <h3
                            className="text-[22px] mb-6 tracking-[1px]"
                            style={{
                                fontFamily: "var(--font-title)",
                                color: "var(--white)",
                            }}
                        >
                            Services
                        </h3>
                        <ul className="list-none p-0 m-0 flex flex-col gap-3">
                            {SERVICES_LINKS.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.link}
                                        onClick={(e) => handleQuickLinkClick(e, link.link)}
                                        className="footer-nav-link no-underline text-[14px] transition-colors duration-300"
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            color: "rgba(255,255,255,0.6)",
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div className="flex flex-col items-start text-left gap-4">
                        <h3
                            className="text-[22px] mb-6 tracking-[1px]"
                            style={{
                                fontFamily: "var(--font-title)",
                                color: "var(--white)",
                            }}
                        >
                            Contact Info
                        </h3>
                        {[
                            { icon: <MapPin size={18} className="text-white shrink-0" />, text: "27001 US Hwy N suite 1015 (Next to Dillards on the 1st floor) Clearwater, Florida 33761" },
                            { icon: <Phone size={18} className="text-white shrink-0" />, text: "727-771-3895" },
                            { icon: <Mail size={18} className="text-white shrink-0" />, text: "thepermanentmakeupstudios@gmail.com" },
                            { icon: <Clock size={18} className="text-white shrink-0" />, text: <>Mon - Sat: 10AM - 7PM<br />Sun: 12PM - 5PM</> }
                        ].map(({ icon, text }, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                {icon}
                                <p
                                    className="text-[14px] leading-[1.5] m-0"
                                    style={{
                                        fontFamily: "var(--font-body)",
                                        color: "rgba(255,255,255,0.6)",
                                    }}
                                >
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* ── Bottom bar ── */}
                <div
                    className="border-t border-white/[0.08] bg-[#0b0b0b]"
                    style={{ paddingTop: "32px", paddingBottom: "32px" }}
                >
                    <div className="container flex justify-center items-center">
                        <p
                            className="text-[13px] m-0"
                            style={{
                                fontFamily: "var(--font-body)",
                                color: "rgba(255,255,255,0.4)",
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
