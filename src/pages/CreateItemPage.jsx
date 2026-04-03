import { useState } from "react";
import { CATEGORIES } from "../data.js";
import { COLORS } from "../styles/theme.js";

const CreateItemPage = ({ setPage }) => {
    const [submitted, setSubmitted] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [wants, setWants] = useState("");
    const [cat, setCat] = useState("");
    const [cond, setCond] = useState("");

    if (submitted) return (
        <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 48 }}>🎉</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700 }}>Item Listed!</h2>
            <p style={{ color: COLORS.inkMuted }}>Your item is now live and visible to other swappers.</p>
            <button onClick={() => setPage("myitems")} style={{ padding: "12px 28px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>View My Items</button>
        </div>
    );

    return (
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "clamp(30px, 8vw, 48px) clamp(20px, 5vw, 40px)" }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 6vw, 36px)", fontWeight: 700, marginBottom: 6 }}>List an Item</h1>
            <p style={{ color: COLORS.inkMuted, marginBottom: 36 }}>Tell people what you have and what you want in return.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ border: `2px dashed ${COLORS.border}`, borderRadius: 12, padding: "40px 20px", textAlign: "center", background: COLORS.bgCard, cursor: "pointer" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = COLORS.accent}
                    onMouseLeave={e => e.currentTarget.style.borderColor = COLORS.border}>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>📷</div>
                    <div style={{ fontWeight: 500, marginBottom: 4 }}>Add Photos</div>
                    <div style={{ fontSize: 13, color: COLORS.inkMuted }}>Drag & drop or click to upload up to 6 photos</div>
                </div>
                <div>
                    <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6, color: COLORS.inkMuted, letterSpacing: .5 }}>ITEM TITLE</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Trek Mountain Bike 2019" style={{ width: "100%", padding: "12px 14px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif", background: COLORS.bg, outline: "none" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                    <div>
                        <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6, color: COLORS.inkMuted, letterSpacing: .5 }}>CATEGORY</label>
                        <select value={cat} onChange={e => setCat(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, background: COLORS.bg, fontFamily: "'DM Sans', sans-serif", color: cat ? COLORS.ink : COLORS.inkMuted }}>
                            <option value="">Select category</option>
                            {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.emoji} {c.label}</option>)}
                        </select>
                    </div>
                    <div>
                        <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6, color: COLORS.inkMuted, letterSpacing: .5 }}>CONDITION</label>
                        <select value={cond} onChange={e => setCond(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, background: COLORS.bg, fontFamily: "'DM Sans', sans-serif", color: cond ? COLORS.ink : COLORS.inkMuted }}>
                            <option value="">Select condition</option>
                            {["New", "Excellent", "Very Good", "Good", "Fair"].map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6, color: COLORS.inkMuted, letterSpacing: .5 }}>DESCRIPTION</label>
                    <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Describe your item — age, size, any defects..." rows={4} style={{ width: "100%", padding: "12px 14px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif", background: COLORS.bg, resize: "none", outline: "none" }} />
                </div>
                <div>
                    <label style={{ fontSize: 12, fontWeight: 600, display: "block", marginBottom: 6, color: COLORS.inkMuted, letterSpacing: .5 }}>WHAT DO YOU WANT IN EXCHANGE?</label>
                    <input value={wants} onChange={e => setWants(e.target.value)} placeholder="e.g. A camera, laptop, or similar value item" style={{ width: "100%", padding: "12px 14px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif", background: COLORS.bg, outline: "none" }} />
                </div>
                <button onClick={() => setSubmitted(true)} style={{ padding: "14px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginTop: 6 }}>Publish Listing</button>
            </div>
        </div>
    );
};

export default CreateItemPage;
