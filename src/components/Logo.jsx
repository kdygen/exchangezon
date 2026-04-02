import { COLORS } from "../styles/theme.js";

const Logo = ({ onClick }) => (
    <div onClick={onClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, background: COLORS.accent, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#fff", fontSize: 18 }}>S</div>
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: COLORS.ink }}>SwapShop</span>
    </div>
);

export default Logo;
