import { COLORS } from "../styles/theme.js";

const ItemCard = ({ item, onClick }) => (
    <div onClick={() => onClick(item)} className="fade-up" style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 14, overflow: "hidden", cursor: "pointer", transition: "transform .18s, box-shadow .18s" }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,.10)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
        <div style={{ height: 190, overflow: "hidden", position: "relative" }}>
            <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <span style={{ position: "absolute", top: 10, right: 10, background: COLORS.tagGreenBg, color: COLORS.tagGreen, fontSize: 11, fontWeight: 500, padding: "3px 9px", borderRadius: 20 }}>{item.condition}</span>
        </div>
        <div style={{ padding: "14px 16px" }}>
            <div style={{ fontSize: 11, color: COLORS.inkMuted, marginBottom: 4 }}>{item.location} · {item.date}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, marginBottom: 6, lineHeight: 1.3 }}>{item.title}</div>
            <div style={{ fontSize: 12, color: COLORS.inkMuted }}>Wants: <span style={{ color: COLORS.accent, fontWeight: 500 }}>{item.wants}</span></div>
        </div>
    </div>
);

export default ItemCard;
