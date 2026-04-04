import { useState } from "react";
import Logo from "./Logo.jsx";
import { COLORS } from "../styles/theme.js";

const Nav = ({ page, setPage, loggedIn, setLoggedIn }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const navLinks = [
        { label: "Browse", page: "browse" },
        { label: "Categories", page: "categories" },
        loggedIn && { label: "Dashboard", page: "dashboard" },
        loggedIn && { label: "My Items", page: "myitems" },
        loggedIn && { label: "My Offers", page: "myoffers" },
    ].filter(Boolean);

    const handleNavClick = (pageToSet) => {
        setPage(pageToSet);
        setMobileMenuOpen(false);
    };

    return (
        <nav style={{ position: "sticky", top: 0, zIndex: 100, background: COLORS.bgCard, borderBottom: `1.5px solid ${COLORS.border}`, padding: "0 clamp(15px, 5%, 30px)", display: "flex", alignItems: "center", gap: "max(20px, 2%)", minHeight: 62, justifyContent: "space-between" }}>
            <Logo onClick={() => handleNavClick("home")} />
            
            {/* Desktop Menu */}
            <div style={{ display: "none" }} className="desktop-menu">
                <div style={{ display: "flex", gap: 4, flex: 1 }}>
                    {navLinks.map(l => (
                        <button key={l.page} onClick={() => handleNavClick(l.page)} style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 14px", borderRadius: 6, fontSize: 14, fontFamily: "'DM Sans', sans-serif", fontWeight: page === l.page ? 500 : 400, color: page === l.page ? COLORS.accent : COLORS.inkMuted, background: page === l.page ? COLORS.accentLight : "transparent" }}>
                            {l.label}
                        </button>
                    ))}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                    {loggedIn ? (
                        <>
                            <button onClick={() => handleNavClick("createitem")} style={{ padding: "8px 18px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>+ List Item</button>
                            <button onClick={() => setLoggedIn(false)} style={{ padding: "8px 14px", background: "none", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, cursor: "pointer", color: COLORS.inkMuted, fontFamily: "'DM Sans', sans-serif" }}>Log out</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => handleNavClick("login")} style={{ padding: "8px 18px", background: "none", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, cursor: "pointer", color: COLORS.ink, fontFamily: "'DM Sans', sans-serif" }}>Log in</button>
                            <button onClick={() => handleNavClick("signup")} style={{ padding: "8px 18px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Sign up</button>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                    display: "none",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 24,
                    padding: "8px",
                    color: COLORS.ink
                }}
                className="mobile-menu-btn"
            >
                ☰
            </button>

            <style>{`
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block !important;
                    }
                    .desktop-menu {
                        display: none !important;
                    }
                }
                @media (min-width: 769px) {
                    .desktop-menu {
                        display: flex !important;
                        flex: 1;
                        gap: 20px;
                        align-items: center;
                    }
                }
            `}</style>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div style={{
                    position: "absolute",
                    top: 62,
                    left: 0,
                    right: 0,
                    background: COLORS.bgCard,
                    borderBottom: `1.5px solid ${COLORS.border}`,
                    padding: "12px 15px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    zIndex: 99
                }}>
                    {navLinks.map(l => (
                        <button key={l.page} onClick={() => handleNavClick(l.page)} style={{ background: "none", border: "none", cursor: "pointer", padding: "10px 12px", borderRadius: 6, fontSize: 14, fontFamily: "'DM Sans', sans-serif", fontWeight: page === l.page ? 500 : 400, color: page === l.page ? COLORS.accent : COLORS.inkMuted, background: page === l.page ? COLORS.accentLight : "transparent", textAlign: "left" }}>
                            {l.label}
                        </button>
                    ))}
                    <div style={{ height: 1, background: COLORS.border, margin: "8px 0" }}></div>
                    {loggedIn ? (
                        <>
                            <button onClick={() => handleNavClick("createitem")} style={{ padding: "10px 12px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 6, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", width: "100%", textAlign: "center" }}>+ List Item</button>
                            <button onClick={() => { setLoggedIn(false); setMobileMenuOpen(false); }} style={{ padding: "10px 12px", background: "none", border: `1.5px solid ${COLORS.border}`, borderRadius: 6, fontSize: 14, cursor: "pointer", color: COLORS.inkMuted, fontFamily: "'DM Sans', sans-serif", width: "100%" }}>Log out</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => handleNavClick("login")} style={{ padding: "10px 12px", background: "none", border: `1.5px solid ${COLORS.border}`, borderRadius: 6, fontSize: 14, cursor: "pointer", color: COLORS.ink, fontFamily: "'DM Sans', sans-serif", width: "100%" }}>Log in</button>
                            <button onClick={() => handleNavClick("signup")} style={{ padding: "10px 12px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 6, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", width: "100%" }}>Sign up</button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Nav;
