import { COLORS } from "../styles/theme.js";

const DashboardPage = ({ setPage }) => (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 40px" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, marginBottom: 6 }}>Dashboard</h1>
        <p style={{ color: COLORS.inkMuted, marginBottom: 36 }}>Here's an overview of your swap activity.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 40 }}>
            {[["3", "Active Listings", COLORS.accent], ["2", "Pending Offers", COLORS.accentGold], ["7", "Swaps Done", COLORS.tagGreen], ["4.9", "Your Rating", COLORS.ink]].map(([v, l, c]) => (
                <div key={l} style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 12, padding: "22px 20px" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: c }}>{v}</div>
                    <div style={{ fontSize: 13, color: COLORS.inkMuted, marginTop: 4 }}>{l}</div>
                </div>
            ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 600, marginBottom: 16 }}>Recent Offers Received</div>
                {[["Elira M.", "Offering: Sony Camera", "Pending"], ["Gjon P.", "Offering: Desk Lamp", "Accepted"]].map(([n, o, s]) => (
                    <div key={n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${COLORS.border}` }}>
                        <div><div style={{ fontSize: 14, fontWeight: 500 }}>{n}</div><div style={{ fontSize: 12, color: COLORS.inkMuted }}>{o}</div></div>
                        <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: s === "Pending" ? COLORS.accentLight : COLORS.tagGreenBg, color: s === "Pending" ? COLORS.accent : COLORS.tagGreen }}>{s}</span>
                    </div>
                ))}
            </div>
            <div style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 600, marginBottom: 16 }}>Quick Actions</div>
                {[["+ List a New Item", "createitem"], ["Browse Items", "browse"], ["View My Offers", "myoffers"]].map(([l, p]) => (
                    <button key={p} onClick={() => setPage(p)} style={{ display: "block", width: "100%", padding: "12px 16px", marginBottom: 10, background: COLORS.bg, border: `1.5px solid ${COLORS.border}`, borderRadius: 8, textAlign: "left", fontSize: 14, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", fontWeight: 500, color: COLORS.ink }}>{l}</button>
                ))}
            </div>
        </div>
    </div>
);

export default DashboardPage;
