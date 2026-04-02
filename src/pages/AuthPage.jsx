import { useState } from "react";
import { COLORS } from "../styles/theme.js";

const AuthPage = ({ mode, setPage, setLoggedIn }) => {
    const isLogin = mode === "login";
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handle = () => {
        setLoggedIn(true);
        setPage("dashboard");
    };

    return (
        <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
            <div style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 16, padding: "48px 44px", width: "100%", maxWidth: 420 }} className="fade-up">
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, marginBottom: 6 }}>{isLogin ? "Welcome back" : "Join SwapShop"}</h1>
                <p style={{ color: COLORS.inkMuted, fontSize: 14, marginBottom: 30 }}>{isLogin ? "Log in to manage your swaps." : "Create a free account and start trading."}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {!isLogin && <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" style={{ padding: "12px 14px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif", background: COLORS.bg, outline: "none" }} />}
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" style={{ padding: "12px 14px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif", background: COLORS.bg, outline: "none" }} />
                    <input value={pass} onChange={e => setPass(e.target.value)} placeholder="Password" type="password" style={{ padding: "12px 14px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif", background: COLORS.bg, outline: "none" }} />
                    <button onClick={handle} style={{ padding: "13px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>{isLogin ? "Log In" : "Create Account"}</button>
                </div>
                <div style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: COLORS.inkMuted }}>
                    {isLogin ? <>No account? <span onClick={() => setPage("signup")} style={{ color: COLORS.accent, cursor: "pointer" }}>Sign up</span></> : <>Have an account? <span onClick={() => setPage("login")} style={{ color: COLORS.accent, cursor: "pointer" }}>Log in</span></>}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
