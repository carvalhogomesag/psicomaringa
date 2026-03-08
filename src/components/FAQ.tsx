import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">Dúvidas Frequentes</h2>
          <p className="text-zinc-600 text-lg mb-8">
            Informações objetivas sobre o atendimento psicológico em Maringá.
          </p>
          {!isExpanded && (
            <button 
              onClick={() => setIsExpanded(true)}
              className="bg-emerald-50 text-emerald-700 px-8 py-3 rounded-full font-bold hover:bg-emerald-100 transition-all border border-emerald-100"
            >
              VER TODAS AS DÚVIDAS
            </button>
          )}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-4"
            >
              {FAQS.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-zinc-200 rounded-2xl overflow-hidden bg-stone-50"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-100 transition-colors"
                  >
                    <span className="font-bold text-zinc-800">{faq.question}</span>
                    {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-zinc-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="text-center mt-8">
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="text-zinc-400 text-sm font-bold hover:text-zinc-600 transition-colors uppercase tracking-widest"
                >
                  Recolher Dúvidas
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
