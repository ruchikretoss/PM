function PaymentBanner() {
    return (
        <>
            <style>{`
                .prem-card:hover {
                    transform: rotateY(-15deg) rotateX(10deg) translateY(-8px);
                }
                .prem-card:hover .card-shine::after {
                    transform: rotate(-30deg) translate(30%, 30%);
                }
                .card-shine {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #121216 0%, #343434 100%);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    overflow: hidden;
                }
                .card-shine::after {
                    content: "";
                    position: absolute;
                    top: -50%; left: -50%;
                    width: 200%; height: 200%;
                    background: linear-gradient(45deg, rgba(255,255,255,0) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 55%);
                    transform: rotate(-30deg);
                    transition: transform 0.8s ease;
                    pointer-events: none;
                }
                @keyframes cardFloat {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                    100% { transform: translateY(0px); }
                }
                .prem-card-wrapper {
                    animation: cardFloat 6s ease-in-out infinite;
                }
            `}</style>

            <section
                className="w-full py-[100px] max-[991px]:py-20 border-t border-b border-black/5 overflow-hidden"
                style={{ backgroundColor: "var(--bg-cream)" }}
            >
                <div
                    className="container flex items-center justify-between gap-[60px] max-[991px]:flex-col max-[991px]:gap-10 rounded-2xl p-[60px] max-[991px]:p-6 relative"
                    style={{
                        backgroundColor: "var(--bg-light)",
                        boxShadow: "var(--shadow-light)",
                        border: "1px solid var(--border-light)",
                    }}
                >
                    {/* Card Side */}
                    <div className="flex-1 flex justify-center items-center z-[1]" style={{ perspective: "1000px" }}>
                        <div className="prem-card-wrapper">
                            <div
                                className="prem-card w-[350px] h-[220px] max-[991px]:w-[320px] max-[991px]:h-[200px] max-[480px]:w-[290px] max-[480px]:h-[185px] cursor-pointer"
                                style={{
                                    transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div className="card-shine">
                                    {/* Top row */}
                                    <div className="flex justify-between items-center">
                                        <div
                                            className="w-10 h-[30px] rounded-[6px] relative"
                                            style={{
                                                background: "linear-gradient(135deg, #e3cfa0 0%, #b39b69 100%)",
                                                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.2)",
                                            }}
                                        />
                                        <span className="text-[16px]" style={{ color: "rgba(255,255,255,0.4)" }}>⚡</span>
                                    </div>

                                    {/* Brand image */}
                                    <div className="my-[10px] mb-[15px] flex items-center">
                                        <img
                                            src="https://thepermanentmakeupstudios.com/wp-content/uploads/2024/08/pay-with-cherry-1.png"
                                            alt="Pay with Cherry Plan"
                                            className="h-16 w-full object-contain"
                                            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
                                        />
                                    </div>

                                    {/* Card number */}
                                    <div
                                        className="font-mono text-[19px] max-[991px]:text-[17px] max-[480px]:text-[15px] tracking-[3px] max-[480px]:tracking-[2px] mb-3"
                                        style={{ color: "var(--text-white)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                                    >
                                        •••• •••• •••• 8890
                                    </div>

                                    {/* Bottom row */}
                                    <div className="flex justify-between items-end">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] tracking-[1px] mb-[2px]" style={{ color: "rgba(255,255,255,0.35)" }}>CARDHOLDER</span>
                                            <span className="font-bold text-[11px] uppercase tracking-[0.5px]" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>VALUED CLIENT</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] tracking-[1px] mb-[2px]" style={{ color: "rgba(255,255,255,0.35)" }}>EXPIRES</span>
                                            <span className="font-bold text-[11px] uppercase tracking-[0.5px]" style={{ fontFamily: "var(--font-accent)", color: "var(--text-light)" }}>12/28</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-[1.2] flex flex-col items-start text-left max-[991px]:items-center max-[991px]:text-center z-[1]">
                        <span
                            className="font-bold tracking-[2.5px] text-[13px] mb-3 inline-block"
                            style={{ fontFamily: "var(--font-accent)", color: "var(--primary-pink)" }}
                        >
                            FINANCING OPTIONS
                        </span>
                        <h2
                            className="text-[48px] max-[991px]:text-[36px] mb-4 leading-[1.1] tracking-[1px]"
                            style={{ color: "var(--text-dark)" }}
                        >
                            BUY NOW, PAY LATER
                        </h2>
                        <p
                            className="text-base leading-[1.6] mb-6"
                            style={{ fontFamily: "var(--font-body)", color: "var(--text-muted-dark)" }}
                        >
                            Get your beauty treatments today, and split the cost into simple, manageable monthly payments with Cherry.
                        </p>

                        <ul className="list-none p-0 m-0 mb-9 flex flex-col gap-[14px] max-[991px]:items-start">
                            {[
                                "Apply in seconds with no hard credit checks",
                                "Choose from 3 to 24-month flexible terms",
                                "0% APR promo plans available",
                            ].map((text) => (
                                <li key={text} className="flex items-center gap-3">
                                    <span
                                        className="text-base"
                                        style={{ color: "var(--primary-pink)", textShadow: "0 0 10px rgba(197, 189, 182, 0.4)" }}
                                    >✦</span>
                                    <span
                                        className="text-[15px]"
                                        style={{ fontFamily: "var(--font-body)", color: "var(--text-muted-dark)" }}
                                    >{text}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://pay.withcherry.com/thepermanentmakeupstudio?utm_source=merchant&utm_medium=website"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PaymentBanner;
