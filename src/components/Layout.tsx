import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, CheckCircle2, Star, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('contato-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-zinc-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-bottom border-black/5">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-emerald-800 tracking-tight">
            Psico<span className="text-emerald-600">Maringá</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">Início</Link>
            <a href="#especialidades" className="text-sm font-medium hover:text-emerald-600 transition-colors">Especialidades</a>
            <Link to="/blog" className="text-sm font-medium hover:text-emerald-600 transition-colors">Blog</Link>
            <a href="#faq" className="text-sm font-medium hover:text-emerald-600 transition-colors">FAQ</a>
            <button 
              onClick={scrollToForm}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-100"
            >
              SOLICITAR CONTATO
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-t border-black/5 p-4 space-y-4 shadow-xl"
            >
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 font-medium">Início</Link>
              <a href="#especialidades" onClick={() => setIsMenuOpen(false)} className="block py-2 font-medium">Especialidades</a>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block py-2 font-medium">Blog</Link>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block py-2 font-medium">FAQ</a>
              <button 
                onClick={scrollToForm}
                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold"
              >
                SOLICITAR CONTATO
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Psico Maringá</h3>
            <p className="text-sm leading-relaxed mb-6">
              Referência em atendimento psicológico humanizado em Maringá e região. 
              Nossa missão é promover saúde mental com ética e acolhimento.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <Star size={20} className="text-white" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Atendimento em Maringá</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                <span>CRP Ativo e Regularizado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Página Inicial</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Nossas Especialidades</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
              <li><button onClick={scrollToForm} className="hover:text-white transition-colors text-left">Solicitar Contato</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-xs">
          <p>© {new Date().getFullYear()} Psico Maringá. Todos os direitos reservados. Desenvolvido para Maringá-PR.</p>
        </div>
      </footer>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToForm}
        className="fixed bottom-6 right-6 bg-emerald-600 text-white p-3 md:p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 group border border-white/20"
      >
        <MessageCircle size={20} className="md:w-6 md:h-6" />
        <span className="text-[10px] md:text-sm font-bold whitespace-nowrap">
          SOLICITAR CONTATO
        </span>
      </motion.button>
    </div>
  );
};
