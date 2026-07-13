function ChatWidget() {
    return (
        <>
            <style>{`
                @keyframes pulseChatGlow {
                    0%   { box-shadow: 0 4px 20px rgba(197, 189, 182, 0.4); }
                    50%  { box-shadow: 0 4px 30px rgba(197, 189, 182, 0.8); }
                    100% { box-shadow: 0 4px 20px rgba(197, 189, 182, 0.4); }
                }
                .chat-widget-btn:hover {
                    transform: scale(1.1) translateY(-4px);
                    color:var(--bg-dark);
                    background-color: var(--primary-pink-hover) !important;
                    box-shadow: 0 8px 25px rgba(197, 189, 182, 0.6) !important;
                }
            `}</style>

            <a
                href="https://chat.thepermanentmakeupstudios.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Us"
                className="
                    chat-widget-btn
                    fixed right-8 bottom-8 max-md:right-5 max-md:bottom-5
                    w-14 h-14 max-md:w-12 max-md:h-12
                    flex items-center justify-center
                    rounded-xl cursor-pointer z-[9999]
                    transition-all duration-300
                "
                style={{
                    backgroundColor: "var(--primary-pink)",
                    boxShadow: "0 4px 20px rgba(197, 189, 182, 0.4)",
                    animation: "pulseChatGlow 3s infinite",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[26px] h-[26px] max-md:w-[22px] max-md:h-[22px]"
                >
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                </svg>
            </a>
        </>
    );
}

export default ChatWidget;
