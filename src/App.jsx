import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Logo from "./components/Logo.jsx";
import { injectGlobalStyles, COLORS } from "./styles/theme.js";
import HomePage from "./pages/HomePage.jsx";
import BrowsePage from "./pages/BrowsePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import ItemDetailPage from "./pages/ItemDetailPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import MyItemsPage from "./pages/MyItemsPage.jsx";
import MyOffersPage from "./pages/MyOffersPage.jsx";
import CreateItemPage from "./pages/CreateItemPage.jsx";

injectGlobalStyles();

export default function App() {
  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage setPage={setPage} setSelectedItem={setSelectedItem} setSelectedCategory={setSelectedCategory} />;
      case "browse": return <BrowsePage setPage={setPage} setSelectedItem={setSelectedItem} />;
      case "categories": return <BrowsePage setPage={setPage} setSelectedItem={setSelectedItem} />;
      case "category": return <CategoryPage category={selectedCategory} setPage={setPage} setSelectedItem={setSelectedItem} />;
      case "item": return <ItemDetailPage item={selectedItem} setPage={setPage} loggedIn={loggedIn} />;
      case "login": return <AuthPage mode="login" setPage={setPage} setLoggedIn={setLoggedIn} />;
      case "signup": return <AuthPage mode="signup" setPage={setPage} setLoggedIn={setLoggedIn} />;
      case "dashboard": return <DashboardPage setPage={setPage} />;
      case "myitems": return <MyItemsPage setPage={setPage} />;
      case "myoffers": return <MyOffersPage />;
      case "createitem": return <CreateItemPage setPage={setPage} />;
      default: return <HomePage setPage={setPage} setSelectedItem={setSelectedItem} setSelectedCategory={setSelectedCategory} />;
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
