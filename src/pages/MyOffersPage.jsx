import { COLORS } from "../styles/theme.js";

const MyOffersPage = () => (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(30px, 8vw, 48px) clamp(20px, 5vw, 40px)" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 6vw, 36px)", fontWeight: 700, marginBottom: 6 }}>My Offers</h1>
        <p style={{ color: COLORS.inkMuted, marginBottom: 32 }}>Offers you've sent and received.</p>
        <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: `2px solid ${COLORS.border}` }}>
            {["Sent", "Received"].map((t, i) => (
                <div key={t} style={{ padding: "10px 24px", fontWeight: i === 0 ? 600 : 400, color: i === 0 ? COLORS.accent : COLORS.inkMuted, borderBottom: i === 0 ? `2px solid ${COLORS.accent}` : "none", marginBottom: -2, cursor: "pointer", fontSize: 15 }}>{t}</div>
            ))}
        </div>
        {[["Sent offer on: Gibson Les Paul", "You offered: MacBook Air", "Awaiting response", COLORS.accentGold, COLORS.accentLight],
        ["Sent offer on: Herman Miller Chair", "You offered: Desk lamp + books", "Declined", COLORS.accent, COLORS.accentLight],
        ["Sent offer on: Trek Bike", "You offered: Sony Camera", "Accepted 🎉", COLORS.tagGreen, COLORS.tagGreenBg]].map(([t, o, s, sc, sbg]) => (
            <div key={t} style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 12, padding: "18px 22px", marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <div style={{ fontWeight: 500, marginBottom: 4 }}>{t}</div>
                    <div style={{ fontSize: 13, color: COLORS.inkMuted }}>{o}</div>
                </div>
                <span style={{ background: sbg, color: sc, fontSize: 12, padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap" }}>{s}</span>
            </div>
        ))}
    </div>
);

export default MyOffersPage;
