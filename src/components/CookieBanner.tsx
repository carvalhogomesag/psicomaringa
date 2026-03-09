import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "psico_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Pequeno delay para não aparecer imediatamente
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "dismissed");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            bottom: "1.5rem",
            left: "1.5rem",
            right: "1.5rem",
            zIndex: 9999,
            maxWidth: "520px",
            margin: "0 auto",
          }}
          role="dialog"
          aria-label="Aviso de cookies"
        >
          <div
            style={{
              background: "var(--color-bark)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "6px",
              padding: "1.25rem 1.5rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              boxShadow: "0 16px 48px rgba(28,38,26,0.35)",
            }}
          >
            {/* Ícone */}
            <div
              style={{
                flexShrink: 0,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(168,194,158,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2px",
              }}
            >
              <Cookie size={16} color="var(--color-moss-light)" />
            </div>

            {/* Texto */}
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  color: "rgba(253,252,249,0.85)",
                  lineHeight: 1.6,
                  margin: "0 0 1rem 0",
                }}
              >
                Usamos cookies para melhorar sua experiência e entender como nosso site é utilizado.
                Ao continuar, você concorda com nossa{" "}
                <a
                  href="/privacidade"
                  style={{
                    color: "var(--color-moss-light)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(168,194,158,0.4)",
                  }}
                >
                  política de privacidade
                </a>
                .
              </p>

              {/* Ações */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <button
                  onClick={accept}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    background: "var(--color-moss)",
                    color: "var(--color-cream)",
                    border: "none",
                    borderRadius: "4px",
                    padding: "0.5rem 1.25rem",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--color-moss-mid)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--color-moss)";
                  }}
                >
                  Aceitar
                </button>
                <button
                  onClick={dismiss}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    background: "transparent",
                    color: "rgba(253,252,249,0.55)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "4px",
                    padding: "0.5rem 1.25rem",
                    cursor: "pointer",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.color = "rgba(253,252,249,0.8)";
                    el.style.borderColor = "rgba(255,255,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.color = "rgba(253,252,249,0.55)";
                    el.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  Recusar
                </button>
              </div>
            </div>

            {/* Fechar */}
            <button
              onClick={dismiss}
              aria-label="Fechar"
              style={{
                flexShrink: 0,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "rgba(253,252,249,0.4)",
                padding: "4px",
                marginTop: "-2px",
                borderRadius: "4px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(253,252,249,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(253,252,249,0.4)";
              }}
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}