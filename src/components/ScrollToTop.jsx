import { useState, useEffect } from "react";
import { COLORS } from "../styles/theme.js";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: COLORS.accent,
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.3s ease",
                    zIndex: 50,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = COLORS.accentGold;
                    e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = COLORS.accent;
                    e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="Scroll to top"
                title="Go to top"
            >
                ↑
            </button>
        )
    );
};

export default ScrollToTop;
