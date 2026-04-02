import { useState } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────
const COLORS = {
  bg: "#F5F0E8",
  bgCard: "#FDFAF4",
  ink: "#1A1208",
  inkMuted: "#6B5E4A",
  accent: "#D4522A",
  accentLight: "#F4E0D8",
  accentGold: "#C9962C",
  border: "#DDD5C4",
  tagGreen: "#2A6B3A",
  tagGreenBg: "#D8EEE0",
};

const style = document.createElement("style");
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${COLORS.bg}; font-family: 'DM Sans', sans-serif; color: ${COLORS.ink}; }
  ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(18px);} to { opacity:1; transform:translateY(0);} }
  @keyframes spin { to { transform: rotate(360deg); } }
  .fade-up { animation: fadeUp .45s ease both; }
`;
document.head.appendChild(style);

// ─── DATA ────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: "bikes", label: "Bikes", emoji: "🚲", count: 142 },
  { id: "electronics", label: "Electronics", emoji: "💻", count: 389 },
  { id: "books", label: "Books", emoji: "📚", count: 278 },
  { id: "furniture", label: "Furniture", emoji: "🪑", count: 95 },
  { id: "clothing", label: "Clothing", emoji: "👗", count: 512 },
  { id: "sports", label: "Sports", emoji: "⚽", count: 203 },
  { id: "music", label: "Music & Instruments", emoji: "🎸", count: 88 },
  { id: "garden", label: "Garden", emoji: "🌿", count: 64 },
];

const ITEMS = [
  { id: 1, title: "Vintage Trek Mountain Bike", category: "bikes", owner: "Arben K.", location: "Tirana", img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&q=80", wants: "Camera or Laptop", condition: "Good", date: "2d ago" },
  { id: 2, title: "Sony A6000 Mirrorless Camera", category: "electronics", owner: "Elira M.", location: "Durrës", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", wants: "Bicycle or Scooter", condition: "Excellent", date: "5h ago" },
  { id: 3, title: "Herman Miller Aeron Chair", category: "furniture", owner: "Gjon P.", location: "Tirana", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80", wants: "Standing Desk", condition: "Very Good", date: "1d ago" },
  { id: 4, title: "Gibson Les Paul Guitar", category: "music", owner: "Sara B.", location: "Shkodër", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80", wants: "Electronic drums or synth", condition: "Good", date: "3d ago" },
  { id: 5, title: "Complete Book Collection (50 books)", category: "books", owner: "Mikel D.", location: "Tirana", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80", wants: "Board games or vinyl records", condition: "Good", date: "1w ago" },
  { id: 6, title: "MacBook Pro 2021", category: "electronics", owner: "Lira H.", location: "Vlorë", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80", wants: "High-end camera gear", condition: "Excellent", date: "12h ago" },
  { id: 7, title: "Monstera Deliciosa Plant", category: "garden", owner: "Ina S.", location: "Fier", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80", wants: "Ceramic pots or pruning tools", condition: "Healthy", date: "6h ago" },
  { id: 8, title: "Raised Herb Planter Kit", category: "garden", owner: "Bledi R.", location: "Elbasan", img: "https://images.unsplash.com/photo-1425934384826-0a4abc2f37ff?w=400&q=80", wants: "Watering can or seed packets", condition: "Good", date: "2d ago" },
  { id: 9, title: "Succulent Starter Set", category: "garden", owner: "Erisa P.", location: "Sarandë", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80", wants: "Plant stand or garden gloves", condition: "Excellent", date: "1d ago" },
];

// ─── SHARED COMPONENTS ───────────────────────────────────────────
const Logo = ({ onClick }) => (
  <div onClick={onClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
    <div style={{ width: 36, height: 36, background: COLORS.accent, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#fff", fontSize: 18 }}>S</div>
    <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: COLORS.ink }}>SwapShop</span>
  </div>
);

const Nav = ({ page, setPage, loggedIn, setLoggedIn }) => {
  const navLinks = [
    { label: "Browse", page: "browse" },
    { label: "Categories", page: "categories" },
    loggedIn && { label: "Dashboard", page: "dashboard" },
    loggedIn && { label: "My Items", page: "myitems" },
    loggedIn && { label: "My Offers", page: "myoffers" },
  ].filter(Boolean);

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100, background: COLORS.bgCard, borderBottom: `1.5px solid ${COLORS.border}`, padding: "0 40px", display: "flex", alignItems: "center", gap: 32, height: 62 }}>
      <Logo onClick={() => setPage("home")} />
      <div style={{ display: "flex", gap: 4, flex: 1 }}>
        {navLinks.map(l => (
          <button key={l.page} onClick={() => setPage(l.page)} style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 14px", borderRadius: 6, fontSize: 14, fontFamily: "'DM Sans', sans-serif", fontWeight: page === l.page ? 500 : 400, color: page === l.page ? COLORS.accent : COLORS.inkMuted, background: page === l.page ? COLORS.accentLight : "transparent" }}>
            {l.label}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {loggedIn ? (
          <>
            <button onClick={() => setPage("createitem")} style={{ padding: "8px 18px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>+ List Item</button>
            <button onClick={() => setLoggedIn(false)} style={{ padding: "8px 14px", background: "none", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, cursor: "pointer", color: COLORS.inkMuted, fontFamily: "'DM Sans', sans-serif" }}>Log out</button>
          </>
        ) : (
          <>
            <button onClick={() => setPage("login")} style={{ padding: "8px 18px", background: "none", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, cursor: "pointer", color: COLORS.ink, fontFamily: "'DM Sans', sans-serif" }}>Log in</button>
            <button onClick={() => setPage("signup")} style={{ padding: "8px 18px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Sign up</button>
          </>
        )}
      </div>
    </nav>
  );
};

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

// ─── PAGES ───────────────────────────────────────────────────────

const Home = ({ setPage, setSelectedItem, setSelectedCategory }) => (
  <div>
    {/* HERO */}
    <div style={{ padding: "80px 40px 60px", maxWidth: 900, margin: "0 auto", textAlign: "center" }} className="fade-up">
      <div style={{ display: "inline-block", background: COLORS.accentLight, color: COLORS.accent, fontSize: 12, fontWeight: 500, padding: "5px 14px", borderRadius: 20, marginBottom: 20, letterSpacing: 1 }}>NO MONEY. JUST SWAP.</div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 62, lineHeight: 1.08, color: COLORS.ink, marginBottom: 22 }}>Trade what you have<br /><em style={{ color: COLORS.accent }}>for what you want.</em></h1>
      <p style={{ fontSize: 18, color: COLORS.inkMuted, maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.6 }}>Browse real items from real people. Find something you want, offer something you own, and swap — no cash needed.</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <button onClick={() => setPage("browse")} style={{ padding: "14px 32px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 10, fontSize: 16, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Browse Items</button>
        <button onClick={() => setPage("signup")} style={{ padding: "14px 32px", background: "transparent", color: COLORS.ink, border: `1.5px solid ${COLORS.border}`, borderRadius: 10, fontSize: 16, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>How it works</button>
      </div>
    </div>

    {/* STATS */}
    <div style={{ display: "flex", justifyContent: "center", gap: 60, padding: "30px 40px", borderTop: `1.5px solid ${COLORS.border}`, borderBottom: `1.5px solid ${COLORS.border}`, background: COLORS.bgCard }}>
      {[["12,400+", "Items listed"], ["8,200+", "Swaps completed"], ["5,100+", "Active users"], ["48", "Avg. hours to match"]].map(([n, l]) => (
        <div key={l} style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 28, color: COLORS.accent }}>{n}</div>
          <div style={{ fontSize: 13, color: COLORS.inkMuted }}>{l}</div>
        </div>
      ))}
    </div>

    {/* CATEGORIES */}
    <div style={{ padding: "60px 40px", maxWidth: 1100, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, marginBottom: 28 }}>Shop by Category</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
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

    {/* FEATURED ITEMS */}
    <div style={{ padding: "0 40px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700 }}>Recent Listings</h2>
        <button onClick={() => setPage("browse")} style={{ background: "none", border: "none", color: COLORS.accent, cursor: "pointer", fontSize: 14, fontWeight: 500 }}>View all →</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {ITEMS.slice(0, 3).map(item => <ItemCard key={item.id} item={item} onClick={i => { setSelectedItem(i); setPage("item"); }} />)}
      </div>
    </div>

    {/* HOW IT WORKS */}
    <div style={{ background: COLORS.ink, color: "#fff", padding: "70px 40px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, marginBottom: 48 }}>How SwapShop Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
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

const Browse = ({ setPage, setSelectedItem }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const filtered = ITEMS.filter(i =>
    (filter === "all" || i.category === filter) &&
    (i.title.toLowerCase().includes(search.toLowerCase()) || i.wants.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 40px" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, marginBottom: 6 }}>Browse Items</h1>
      <p style={{ color: COLORS.inkMuted, marginBottom: 32 }}>Find something you want, offer something you have.</p>
      <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search items..." style={{ flex: 1, minWidth: 220, padding: "11px 16px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif", background: COLORS.bgCard, outline: "none" }} />
        <select value={filter} onChange={e => setFilter(e.target.value)} style={{ padding: "11px 16px", border: `1.5px solid ${COLORS.border}`, borderRadius: 8, fontSize: 14, background: COLORS.bgCard, fontFamily: "'DM Sans', sans-serif", color: COLORS.ink, cursor: "pointer" }}>
          <option value="all">All Categories</option>
          {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
        </select>
      </div>
      <div style={{ marginBottom: 16, fontSize: 13, color: COLORS.inkMuted }}>{filtered.length} items found</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {filtered.map(item => <ItemCard key={item.id} item={item} onClick={i => { setSelectedItem(i); setPage("item"); }} />)}
      </div>
      {filtered.length === 0 && <div style={{ textAlign: "center", padding: "60px 0", color: COLORS.inkMuted }}>No items match your search.</div>}
    </div>
  );
};

const CategoryPage = ({ category, setPage, setSelectedItem }) => {
  const items = ITEMS.filter(i => i.category === category?.id);
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 40px" }}>
      <button onClick={() => setPage("browse")} style={{ background: "none", border: "none", color: COLORS.inkMuted, cursor: "pointer", fontSize: 14, marginBottom: 24 }}>← Back to Browse</button>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
        <span style={{ fontSize: 40 }}>{category?.emoji}</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700 }}>{category?.label}</h1>
      </div>
      <p style={{ color: COLORS.inkMuted, marginBottom: 32 }}>{category?.count} items available for swap</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {items.length > 0 ? items.map(item => <ItemCard key={item.id} item={item} onClick={i => { setSelectedItem(i); setPage("item"); }} />) : (
          ITEMS.slice(0, 3).map(item => <ItemCard key={item.id} item={item} onClick={i => { setSelectedItem(i); setPage("item"); }} />)
        )}
      </div>
    </div>
  );
};

const ItemDetail = ({ item, setPage, loggedIn }) => {
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

const AuthPage = ({ mode, setPage, setLoggedIn }) => {
  const isLogin = mode === "login";
  const [email, setEmail] = useState(""); const [pass, setPass] = useState(""); const [name, setName] = useState("");
  const handle = () => { setLoggedIn(true); setPage("dashboard"); };
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

const Dashboard = ({ setPage }) => (
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

const MyItems = ({ setPage }) => (
  <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 40px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
      <div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, marginBottom: 4 }}>My Items</h1>
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

const MyOffers = () => (
  <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, marginBottom: 6 }}>My Offers</h1>
    <p style={{ color: COLORS.inkMuted, marginBottom: 32 }}>Offers you've sent and received.</p>
    <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: `2px solid ${COLORS.border}` }}>
      {["Sent", "Received"].map((t, i) => (
        <div key={t} style={{ padding: "10px 24px", fontWeight: i === 0 ? 600 : 400, color: i === 0 ? COLORS.accent : COLORS.inkMuted, borderBottom: i === 0 ? `2px solid ${COLORS.accent}` : "none", marginBottom: -2, cursor: "pointer", fontSize: 15 }}>{t}</div>
      ))}
    </div>
    {[["Sent offer on: Gibson Les Paul", "You offered: MacBook Air", "Awaiting response", COLORS.accentGold, COLORS.accentLight],
    ["Sent offer on: Herman Miller Chair", "You offered: Desk lamp + books", "Declined", COLORS.accent, COLORS.accentLight],
    ["Sent offer on: Trek Bike", "You offered: Sony Camera", "Accepted 🎉", COLORS.tagGreen, COLORS.tagGreenBg]].map(([t, o, s, sc, sbg]) => (
      <div key={t} style={{ background: COLORS.bgCard, border: `1.5px solid ${COLORS.border}`, borderRadius: 12, padding: "18px 22px", marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>{t}</div>
          <div style={{ fontSize: 13, color: COLORS.inkMuted }}>{o}</div>
        </div>
        <span style={{ background: sbg, color: sc, fontSize: 12, padding: "4px 14px", borderRadius: 20, whiteSpace: "nowrap" }}>{s}</span>
      </div>
    ))}
  </div>
);

const CreateItem = ({ setPage }) => {
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState(""); const [desc, setDesc] = useState(""); const [wants, setWants] = useState(""); const [cat, setCat] = useState(""); const [cond, setCond] = useState("");
  if (submitted) return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
      <div style={{ fontSize: 48 }}>🎉</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700 }}>Item Listed!</h2>
      <p style={{ color: COLORS.inkMuted }}>Your item is now live and visible to other swappers.</p>
      <button onClick={() => setPage("myitems")} style={{ padding: "12px 28px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>View My Items</button>
    </div>
  );
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 40px" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, marginBottom: 6 }}>List an Item</h1>
      <p style={{ color: COLORS.inkMuted, marginBottom: 36 }}>Tell people what you have and what you want in return.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {/* Photo upload zone */}
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
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

// ─── APP SHELL ───────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderPage = () => {
    switch (page) {
      case "home": return <Home setPage={setPage} setSelectedItem={setSelectedItem} setSelectedCategory={setSelectedCategory} />;
      case "browse": return <Browse setPage={setPage} setSelectedItem={setSelectedItem} />;
      case "categories": return <Browse setPage={setPage} setSelectedItem={setSelectedItem} />;
      case "category": return <CategoryPage category={selectedCategory} setPage={setPage} setSelectedItem={setSelectedItem} />;
      case "item": return <ItemDetail item={selectedItem} setPage={setPage} loggedIn={loggedIn} />;
      case "login": return <AuthPage mode="login" setPage={setPage} setLoggedIn={setLoggedIn} />;
      case "signup": return <AuthPage mode="signup" setPage={setPage} setLoggedIn={setLoggedIn} />;
      case "dashboard": return <Dashboard setPage={setPage} />;
      case "myitems": return <MyItems setPage={setPage} />;
      case "myoffers": return <MyOffers />;
      case "createitem": return <CreateItem setPage={setPage} />;
      default: return <Home setPage={setPage} setSelectedItem={setSelectedItem} setSelectedCategory={setSelectedCategory} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg }}>
      <Nav page={page} setPage={setPage} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {renderPage()}
      <footer style={{ borderTop: `1.5px solid ${COLORS.border}`, padding: "30px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", background: COLORS.bgCard }}>
        <Logo onClick={() => setPage("home")} />
        <div style={{ fontSize: 13, color: COLORS.inkMuted }}>© 2025 SwapShop · Trade anything, buy nothing.</div>
      </footer>
    </div>
  );
}
