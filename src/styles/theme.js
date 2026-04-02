export const COLORS = {
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

export const injectGlobalStyles = () => {
    if (document.getElementById("swapshop-global-styles")) return;

    const style = document.createElement("style");
    style.id = "swapshop-global-styles";
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
};
