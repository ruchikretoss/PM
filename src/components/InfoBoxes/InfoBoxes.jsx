function InfoBoxes() {
    return (
        <>
            <style>{`
                .info-box:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(248,148,255,0.15) !important; border-color: rgba(248,148,255,0.4) !important; }
                .info-box:hover .info-icon-wrap { transform: scale(1.15); }
            `}</style>

            <section
                className="info-boxes-section relative w-full py-20 max-[991px]:pt-[60px] max-[991px]:pb-10 z-10"
                style={{ background: "var(--bg-gradient)" }}
            >
                <div className="container grid grid-cols-3 gap-[30px] max-[991px]:grid-cols-1 max-[991px]:gap-5">

                    {[
                        {
                            label: "LOCATION",
                            lines: ["27001 US Hwy 19 N Suite 1015,", "Clearwater, FL 33761"],
                            svg: (
                                <svg viewBox="0 0 256 256" width="36" height="36" fill="currentColor">
                                    <path d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" opacity="0.15" />
                                    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
                                </svg>
                            )
                        },
                        {
                            label: "CONTACT",
                            lines: ["(727) 771-3895", "thepermanentmakeupstudios@gmail.com"],
                            svg: (
                                <svg viewBox="0 0 256 256" width="36" height="36" fill="currentColor">
                                    <path d="M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z" opacity="0.15" />
                                    <path d="M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z" />
                                </svg>
                            )
                        },
                        {
                            label: "OPENING HOURS",
                            lines: ["Mon to Sat: 10AM - 7PM", "Sun: 12PM - 5PM"],
                            svg: (
                                <svg viewBox="0 0 256 256" width="36" height="36" fill="currentColor">
                                    <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.15" />
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                                </svg>
                            )
                        }
                    ].map(({ label, lines, svg }) => (
                        <div
                            key={label}
                            className="info-box flex flex-col items-center text-center rounded-lg px-[30px] py-10 max-[991px]:px-5 max-[991px]:py-[30px] transition-all duration-[400ms]"
                            style={{
                                backgroundColor: "var(--bg-light)",
                                border: "1px solid var(--border-light)",
                                boxShadow: "var(--shadow-light)",
                                transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                            }}
                        >
                            <div
                                className="info-icon-wrap mb-6 text-[28px] transition-transform duration-300"
                                style={{ color: "var(--primary-pink)" }}
                            >
                                {svg}
                            </div>
                            <div>
                                <h3
                                    className="text-xl mb-3 tracking-[1.5px] uppercase"
                                    style={{ fontFamily: "var(--font-title)", color: "var(--text-dark)" }}
                                >
                                    {label}
                                </h3>
                                {lines.map((line, i) => (
                                    <p
                                        key={i}
                                        className="text-[14px] my-1 leading-[1.5]"
                                        style={{ fontFamily: "var(--font-body)", color: "var(--text-muted-dark)" }}
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </>
    );
}

export default InfoBoxes;
