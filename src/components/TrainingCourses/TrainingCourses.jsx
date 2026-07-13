const COURSES = [
    {
        title: "Lash Training",
        image: "/lash_training_single.png",
        link: "https://thepermanentmakeupstudios.com/training-courses/?scrollTo=lash_training"
    },
    {
        title: "Lip Blush Training",
        image: "/lip_blush_training_single.png",
        link: "https://thepermanentmakeupstudios.com/training-courses/?scrollTo=lip-blush_training"
    },
    {
        title: "Powder Brows Training",
        image: "/powder_brows_training_single.png",
        link: "https://thepermanentmakeupstudios.com/training-courses/?scrollTo=powder-brows_training"
    },
    {
        title: "Semi-Permanent Eyeliner Training",
        image: "/eyeliner_training_single.png",
        link: "https://thepermanentmakeupstudios.com/training-courses/?scrollTo=sp-eyeliner_training"
    }
];

function TrainingCourses() {
    return (
        <>
            <style>{`
                .tr-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(197, 189, 182, 0.4) !important;
                    box-shadow: 0 10px 30px rgba(197, 189, 182, 0.1) !important;
                }
                .tr-card:hover .tr-overlay {
                    background: linear-gradient(180deg, rgba(197,189,182,0.05) 0%, rgba(7,7,8,0.95) 100%);
                }
                .tr-card:hover .tr-btn {
                    background-color: var(--primary-pink-hover) !important;
                    color: var(--primary-pink) !important;
                    border-color: var(--primary-pink) !important;
                    box-shadow: 0 0 15px var(--primary-pink-glow) !important;
                }
            `}</style>

            <section
                id="training-courses"
                className="w-full py-20 border-t border-white/5"
                style={{ background: "var(--bg-dark-purple)" }}
            >
                <div className="container">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="section-subtitle">CERTIFIED TRAINING COURSES</span>
                        <h2 className="section-title">OUR TRAINING COURSES</h2>
                        <div className="title-divider" />
                        <p className="section-description">
                            Experience Excellent Training in the following Courses:
                        </p>
                    </div>

                    {/* 4-col grid → 2-col → 1-col */}
                    <div className="grid grid-cols-4 gap-5 mb-12 max-[1200px]:grid-cols-2 max-[1200px]:gap-4 max-[575px]:grid-cols-1">
                        {COURSES.map((course, index) => (
                            <a
                                key={index}
                                href={course.link}
                                className="tr-card relative h-[420px] max-[1200px]:h-[380px] rounded-xl overflow-hidden flex items-end justify-center p-6 no-underline transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${course.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    boxShadow: "var(--shadow)",
                                    border: "1px solid rgba(255,255,255,0.04)",
                                    transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                                }}
                            >
                                {/* Dark gradient overlay */}
                                <div
                                    className="tr-overlay absolute inset-0 z-[1] transition-all duration-300"
                                    style={{
                                        background: "linear-gradient(180deg, rgba(7,7,8,0) 40%, rgba(7,7,8,0.9) 100%)",
                                    }}
                                />
                                {/* Label button */}
                                <div className="relative z-[2] w-full text-center">
                                    <span
                                        className="tr-btn block font-bold text-[11px] uppercase tracking-[0.5px] py-[14px] px-5 rounded shadow-[0_4px_10px_rgba(0,0,0,0.4)] whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 border border-white/10"
                                        style={{
                                            backgroundColor: "rgba(7,7,8,0.85)",
                                            color: "var(--text-light)",
                                            fontFamily: "var(--font-accent)",
                                            transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                                        }}
                                    >
                                        {course.title}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="text-center">
                        <a href="https://thepermanentmakeupstudios.com/training-courses/" className="btn-primary" style={{ backgroundColor: "#fff", color: "#070708" }}>
                            BROWSE ALL COURSES
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

export default TrainingCourses;
