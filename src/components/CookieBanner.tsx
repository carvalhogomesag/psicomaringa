import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-zinc-900 text-white rounded-2xl shadow-2xl border border-white/10 p-6 md:flex items-center justify-between gap-8">
            <div className="flex items-start gap-4 mb-6 md:mb-0">
              <div className="bg-emerald-600/20 p-2 rounded-lg shrink-0">
                <ShieldCheck className="text-emerald-500" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Privacidade e Cookies</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. 
                  Ao continuar navegando, você concorda com nossa política de privacidade.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all text-sm"
              >
                ACEITAR
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-3 text-zinc-500 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
