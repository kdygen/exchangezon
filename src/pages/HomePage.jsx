import ItemCard from "../components/ItemCard.jsx";
import { COLORS } from "../styles/theme.js";
import { CATEGORIES, ITEMS } from "../data.js";

const HomePage = ({ setPage, setSelectedItem, setSelectedCategory }) => (
    <div>
        <div style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 40px) clamp(30px, 6vw, 60px)", maxWidth: 900, margin: "0 auto", textAlign: "center" }} className="fade-up">
            <div style={{ display: "inline-block", background: COLORS.accentLight, color: COLORS.accent, fontSize: 12, fontWeight: 500, padding: "5px 14px", borderRadius: 20, marginBottom: 20, letterSpacing: 1 }}>NO MONEY. JUST SWAP.</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 62, lineHeight: 1.08, color: COLORS.ink, marginBottom: 22 }}>Trade what you have<br /><em style={{ color: COLORS.accent }}>for what you want.</em></h1>
            <p style={{ fontSize: 18, color: COLORS.inkMuted, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.6 }}>Browse real items from real people. Find something you want, offer something you own, and swap — no cash needed.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <button onClick={() => setPage("browse")} style={{ padding: "14px 32px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 10, fontSize: 16, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Browse Items</button>
                <button onClick={() => setPage("signup")} style={{ padding: "14px 32px", background: "transparent", color: COLORS.ink, border: `1.5px solid ${COLORS.border}`, borderRadius: 10, fontSize: 16, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>How it works</button>
            </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(20px, 5vw, 60px)", padding: "clamp(20px, 5vw, 30px) clamp(20px, 5vw, 40px)", borderTop: `1.5px solid ${COLORS.border}`, borderBottom: `1.5px solid ${COLORS.border}`, background: COLORS.bgCard, flexWrap: "wrap" }}>
            {[["12,400+", "Items listed"], ["8,200+", "Swaps completed"], ["5,100+", "Active users"], ["48", "Avg. hours to match"]].map(([n, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 28, color: COLORS.accent }}>{n}</div>
                    <div style={{ fontSize: 13, color: COLORS.inkMuted }}>{l}</div>
                </div>
            ))}
        </div>

        <div style={{ padding: "clamp(30px, 8vw, 60px) clamp(20px, 5vw, 40px)", maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, marginBottom: 28 }}>Shop by Category</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(10px, 3vw, 14px)" }}>
                {CATEGORIES.map(cat => (
                    <div key={cat.id} onClick={() => { setSelectedCategory(cat); setPage("category"); }} style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 12, padding: "20px 16px", cursor: "pointer", transition: "all .18s" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.background = COLORS.accentLight; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.background = COLORS.bgCard; }}>
                        <div style={{ fontSize: 28, marginBottom: 8 }}>{cat.emoji}</div>
                        <div style={{ fontWeight: 500, fontSize: 15 }}>{cat.label}</div>
                        <div style={{ fontSize: 12, color: COLORS.inkMuted, marginTop: 3 }}>{cat.count} items</div>
                    </div>
                ))}
            </div>
        </div>

        <div style={{ padding: "0 clamp(20px, 5vw, 40px) clamp(40px, 8vw, 80px)", maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, gap: 20, flexWrap: "wrap" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700 }}>Recent Listings</h2>
                <button onClick={() => setPage("browse")} style={{ background: "none", border: "none", color: COLORS.accent, cursor: "pointer", fontSize: 14, fontWeight: 500 }}>View all →</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(15px, 3vw, 20px)" }}>
                {ITEMS.slice(0, 3).map(item => <ItemCard key={item.id} item={item} onClick={i => { setSelectedItem(i); setPage("item"); }} />)}
            </div>
        </div>

        <div style={{ background: COLORS.ink, color: "#fff", padding: "clamp(40px, 8vw, 70px) clamp(20px, 5vw, 40px)" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, marginBottom: 48 }}>How SwapShop Works</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "clamp(25px, 5vw, 40px)" }}>
                    {[["01", "Browse & Find", "Search by category or keyword. Find the exact item you want from people near you."],
                    ["02", "Make Your Offer", "No cash — just pick something you own and send an offer photo to the item's owner."],
                    ["03", "Swap Securely", "Both sides confirm. We guide you through a safe local meetup or verified exchange."]].map(([n, t, d]) => (
                        <div key={n}>
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 900, color: COLORS.accent, opacity: .4, marginBottom: 12 }}>{n}</div>
                            <div style={{ fontWeight: 500, fontSize: 18, marginBottom: 10 }}>{t}</div>
                            <div style={{ fontSize: 14, color: "rgba(255,255,255,.55)", lineHeight: 1.6 }}>{d}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
