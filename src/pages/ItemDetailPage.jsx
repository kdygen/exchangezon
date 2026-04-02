import { useState } from "react";
import { COLORS } from "../styles/theme.js";

const ItemDetailPage = ({ item, setPage, loggedIn }) => {
    const [offerSent, setOfferSent] = useState(false);
    const [offerText, setOfferText] = useState("");

    if (!item) return null;

    return (
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 40px" }}>
            <button onClick={() => setPage("browse")} style={{ background: "none", border: "none", color: COLORS.inkMuted, cursor: "pointer", fontSize: 14, marginBottom: 28 }}>← Back to Browse</button>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                <div>
                    <img src={item.img} alt={item.title} style={{ width: "100%", borderRadius: 14, border: `1.5px solid ${COLORS.border}` }} />
                </div>
                <div>
                    <div style={{ fontSize: 12, color: COLORS.inkMuted, marginBottom: 8 }}>{item.location} · {item.date}</div>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, marginBottom: 14, lineHeight: 1.2 }}>{item.title}</h1>
                    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                        <span style={{ background: COLORS.tagGreenBg, color: COLORS.tagGreen, fontSize: 12, padding: "4px 12px", borderRadius: 20 }}>{item.condition}</span>
                        <span style={{ background: COLORS.accentLight, color: COLORS.accent, fontSize: 12, padding: "4px 12px", borderRadius: 20 }}>{item.category}</span>
                    </div>
                    <div style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 10, padding: "16px 18px", marginBottom: 24 }}>
                        <div style={{ fontSize: 12, fontWeight: 500, color: COLORS.inkMuted, marginBottom: 4 }}>OWNER WANTS IN EXCHANGE</div>
                        <div style={{ fontSize: 17, fontWeight: 500, color: COLORS.accent }}>{item.wants}</div>
                    </div>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 28 }}>
                        <div style={{ width: 38, height: 38, borderRadius: "50%", background: COLORS.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>{item.owner[0]}</div>
                        <div>
                            <div style={{ fontWeight: 500 }}>{item.owner}</div>
                            <div style={{ fontSize: 12, color: COLORS.inkMuted }}>⭐ 4.8 · 12 swaps completed</div>
                        </div>
                    </div>
                    {!loggedIn ? (
                        <div style={{ background: COLORS.accentLight, borderRadius: 10, padding: "18px 20px" }}>
                            <div style={{ fontWeight: 500, marginBottom: 8 }}>Want to make an offer?</div>
                            <div style={{ fontSize: 13, color: COLORS.inkMuted, marginBottom: 14 }}>Sign in to propose a swap with this owner.</div>
                            <button onClick={() => setPage("login")} style={{ padding: "10px 24px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Log in to Offer</button>
                        </div>
                    ) : offerSent ? (
                        <div style={{ background: COLORS.tagGreenBg, borderRadius: 10, padding: "18px 20px", color: COLORS.tagGreen, fontWeight: 500 }}>✓ Offer sent! {item.owner} will review it and get back to you.</div>
                    ) : (
                        <div style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 10, padding: "18px 20px" }}>
                            <div style={{ fontWeight: 500, marginBottom: 12 }}>Make a Swap Offer</div>
                            <textarea value={offerText} onChange={e => setOfferText(e.target.value)} placeholder="Describe what you're offering in exchange (you can also attach a photo)..." style={{ width: "100%", height: 90, padding: "10px 12px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 13, fontFamily: "'DM Sans', sans-serif", resize: "none", background: COLORS.bg, outline: "none" }} />
                            <button onClick={() => setOfferSent(true)} style={{ marginTop: 10, width: "100%", padding: "12px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Send Offer 🤝</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemDetailPage;
