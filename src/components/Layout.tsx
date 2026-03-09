import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LeafIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 28C16 28 4 20 4 12C4 7.58 7.58 4 12 4C13.86 4 15.56 4.66 16.9 5.76C17.4 4.68 18.28 3.82 19.36 3.32C22.54 1.82 26.26 3.18 27.76 6.36C28.9 8.78 28.54 11.58 27 13.62L16 28Z"
      fill="#4A6741" opacity="0.2"
    />
    <path
      d="M16 24C16 24 7 17 7 11C7 8.24 9.24 6 12 6C13.66 6 15.14 6.82 16.06 8.08C17.06 6.78 18.64 5.92 20.42 5.92C23.52 5.92 26.04 8.44 26.04 11.54C26.04 13.6 24.94 15.4 23.3 16.48L16 24Z"
      fill="#4A6741" opacity="0.6"
    />
    <path
      d="M16 21C16 21 9.5 15.5 9.5 11C9.5 8.79 11.29 7 13.5 7C14.76 7 15.88 7.6 16.58 8.54C17.36 7.56 18.56 6.92 19.92 6.92C22.3 6.92 24.24 8.86 24.24 11.24C24.24 13.06 23.14 14.62 21.56 15.36L16 21Z"
      fill="#4A6741"
    />
  </svg>
);

const NAV_LINKS = [
  { label: 'Especialidades', href: '/#especialidades' },
  { label: 'Como Funciona',  href: '/#processo' },
  { label: 'Depoimentos',    href: '/#depoimentos' },
  { label: 'Blog',           href: '/blog' },
  { label: 'FAQ',            href: '/#faq' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowFloat(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contato-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans" style={{ background: 'var(--color-fog)' }}>

      {/* ── HEADER ──────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: '64px',
          background: scrolled ? 'rgba(247,245,240,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(44,58,40,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" style={{ textDecoration: 'none' }}>
            <LeafIcon />
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.2rem',
              fontWeight: 500,
              color: 'var(--color-bark)',
              letterSpacing: '0.02em',
            }}>
              Psico<span style={{ color: 'var(--color-moss-mid)' }}>Maringá</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 400,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: 'var(--color-mist)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-bark)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-mist)')}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={scrollToForm}
              className="btn-primary"
              style={{ fontSize: '0.75rem', padding: '9px 18px' }}
            >
              Solicitar Indicação
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            style={{ color: 'var(--color-bark)', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="md:hidden"
              style={{
                background: 'var(--color-cream)',
                borderTop: '1px solid var(--color-rule)',
                padding: '20px 24px 24px',
              }}
            >
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: 'var(--color-bark)',
                      textDecoration: 'none',
                      paddingBottom: '12px',
                      borderBottom: '1px solid var(--color-rule)',
                    }}
                  >
                    {l.label}
                  </a>
                ))}
                <button
                  onClick={scrollToForm}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                >
                  Solicitar Indicação
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── CONTEÚDO ──────────────────────────────────────────── */}
      <main className="pt-16">
        {children}
      </main>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer style={{ background: 'var(--color-bark-deep)', padding: '40px 6% 28px' }}>
        <div
          className="max-w-7xl mx-auto"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '24px',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.1rem',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.8)',
          }}>
            Psico<span style={{ color: 'var(--color-moss-light)' }}>Maringá</span>
          </span>

          <ul className="flex flex-wrap gap-6" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.35)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2"
          style={{ paddingTop: '18px' }}
        >
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} Psico Maringá · Todos os direitos reservados
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>
            Maringá, PR · LGPD Compliant · Serviço de indicação
          </p>
        </div>
      </footer>

      {/* ── BOTÃO FLUTUANTE ───────────────────────────────────── */}
      <AnimatePresence>
        {showFloat && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToForm}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
            style={{
              background: 'var(--color-moss)',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '13px 22px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 28px rgba(74,103,65,0.38)',
            }}
          >
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#7CF5A0',
              flexShrink: 0,
            }} />
            <MessageCircle size={15} />
            Solicitar Contato
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};