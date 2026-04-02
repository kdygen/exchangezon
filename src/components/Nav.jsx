import Logo from "./Logo.jsx";
import { COLORS } from "../styles/theme.js";

const Nav = ({ page, setPage, loggedIn, setLoggedIn }) => {
    const navLinks = [
        { label: "Browse", page: "browse" },
        { label: "Categories", page: "categories" },
        loggedIn && { label: "Dashboard", page: "dashboard" },
        loggedIn && { label: "My Items", page: "myitems" },
        loggedIn && { label: "My Offers", page: "myoffers" },
    ].filter(Boolean);

    return (
        <nav style={{ position: "sticky", top: 0, zIndex: 100, background: COLORS.bgCard, borderBottom: `1.5px solid ${COLORS.border}`, padding: "0 40px", display: "flex", alignItems: "center", gap: 32, height: 62 }}>
            <Logo onClick={() => setPage("home")} />
            <div style={{ display: "flex", gap: 4, flex: 1 }}>
                {navLinks.map(l => (
                    <button key={l.page} onClick={() => setPage(l.page)} style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 14px", borderRadius: 6, fontSize: 14, fontFamily: "'DM Sans', sans-serif", fontWeight: page === l.page ? 500 : 400, color: page === l.page ? COLORS.accent : COLORS.inkMuted, background: page === l.page ? COLORS.accentLight : "transparent" }}>
                        {l.label}
                    </button>
                ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
                {loggedIn ? (
                    <>
                        <button onClick={() => setPage("createitem")} style={{ padding: "8px 18px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>+ List Item</button>
                        <button onClick={() => setLoggedIn(false)} style={{ padding: "8px 14px", background: "none", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, cursor: "pointer", color: COLORS.inkMuted, fontFamily: "'DM Sans', sans-serif" }}>Log out</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setPage("login")} style={{ padding: "8px 18px", background: "none", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, cursor: "pointer", color: COLORS.ink, fontFamily: "'DM Sans', sans-serif" }}>Log in</button>
                        <button onClick={() => setPage("signup")} style={{ padding: "8px 18px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Sign up</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;
