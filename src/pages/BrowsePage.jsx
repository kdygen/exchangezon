import { useState } from "react";
import ItemCard from "../components/ItemCard.jsx";
import { COLORS } from "../styles/theme.js";
import { CATEGORIES, ITEMS } from "../data.js";

const BrowsePage = ({ setPage, setSelectedItem }) => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const filtered = ITEMS.filter(i =>
        (filter === "all" || i.category === filter) &&
        (i.title.toLowerCase().includes(search.toLowerCase()) || i.wants.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(30px, 8vw, 48px) clamp(20px, 5vw, 40px)" }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 6vw, 40px)", fontWeight: 700, marginBottom: 6 }}>Browse Items</h1>
            <p style={{ color: COLORS.inkMuted, marginBottom: 32 }}>Find something you want, offer something you have.</p>
            <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search items..." style={{ flex: 1, minWidth: 220, padding: "11px 16px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif", background: COLORS.bgCard, outline: "none" }} />
                <select value={filter} onChange={e => setFilter(e.target.value)} style={{ padding: "11px 16px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, background: COLORS.bgCard, fontFamily: "'DM Sans', sans-serif", color: COLORS.ink, cursor: "pointer" }}>
                    <option value="all">All Categories</option>
                    {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
            </div>
            <div style={{ marginBottom: 16, fontSize: 13, color: COLORS.inkMuted }}>{filtered.length} items found</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(15px, 3vw, 20px)" }}>
                {filtered.map(item => <ItemCard key={item.id} item={item} onClick={i => { setSelectedItem(i); setPage("item"); }} />)}
            </div>
            {filtered.length === 0 && <div style={{ textAlign: "center", padding: "60px 0", color: COLORS.inkMuted }}>No items match your search.</div>}
        </div>
    );
};

export default BrowsePage;
