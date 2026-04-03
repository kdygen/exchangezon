import { ITEMS } from "../data.js";
import { COLORS } from "../styles/theme.js";

const MyItemsPage = ({ setPage }) => (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(30px, 8vw, 48px) clamp(20px, 5vw, 40px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 6vw, 36px)", fontWeight: 700, marginBottom: 4 }}>My Items</h1>
                <p style={{ color: COLORS.inkMuted }}>Items you've listed for swap.</p>
            </div>
            <button onClick={() => setPage("createitem")} style={{ padding: "10px 22px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>+ Add Item</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {ITEMS.slice(0, 3).map(item => (
                <div key={item.id} style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 18 }}>
                    <img src={item.img} style={{ width: 70, height: 70, objectFit: "cover", borderRadius: 8 }} alt={item.title} />
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 500, fontSize: 15 }}>{item.title}</div>
                        <div style={{ fontSize: 12, color: COLORS.inkMuted, marginTop: 3 }}>Wants: {item.wants} · {item.condition}</div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                        <span style={{ background: COLORS.tagGreenBg, color: COLORS.tagGreen, fontSize: 11, padding: "3px 10px", borderRadius: 20 }}>Active</span>
                        <button style={{ padding: "6px 14px", background: "none", border: `1.5px solid ${COLORS.border}`, borderRadius: 6, fontSize: 12, cursor: "pointer", color: COLORS.inkMuted, fontFamily: "'DM Sans', sans-serif" }}>Edit</button>
                        <button style={{ padding: "6px 14px", background: "none", border: `1.5px solid #f5c0b0`, borderRadius: 6, fontSize: 12, cursor: "pointer", color: COLORS.accent, fontFamily: "'DM Sans', sans-serif" }}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default MyItemsPage;
