import ItemCard from "../components/ItemCard.jsx";
import { COLORS } from "../styles/theme.js";
import { ITEMS } from "../data.js";

const CategoryPage = ({ category, setPage, setSelectedItem }) => {
    const items = ITEMS.filter(i => i.category === category?.id);

    return (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(30px, 8vw, 48px) clamp(20px, 5vw, 40px)" }}>
            <button onClick={() => setPage("browse")} style={{ background: "none", border: "none", color: COLORS.inkMuted, cursor: "pointer", fontSize: 14, marginBottom: 24 }}>← Back to Browse</button>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 40 }}>{category?.emoji}</span>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 6vw, 38px)", fontWeight: 700 }}>{category?.label}</h1>
            </div>
            <p style={{ color: COLORS.inkMuted, marginBottom: 32 }}>{category?.count} items available for swap</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(15px, 3vw, 20px)" }}>
                {items.length > 0 ? items.map(item => <ItemCard key={item.id} item={item} onClick={i => { setSelectedItem(i); setPage("item"); }} />) : (
                    ITEMS.slice(0, 3).map(item => <ItemCard key={item.id} item={item} onClick={i => { setSelectedItem(i); setPage("item"); }} />)
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
