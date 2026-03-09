import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex,  setOpenIndex]  = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="faq" style={{ padding: '90px 6%', background: 'var(--color-fog)' }}>
      <div className="max-w-4xl mx-auto">

        {/* Cabeçalho */}
        <div className="reveal" style={{ marginBottom: '40px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--color-moss-mid)',
            marginBottom: '14px',
          }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-moss-mid)' }} />
            Dúvidas
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 300, lineHeight: 1.12,
            color: 'var(--color-bark-deep)',
            marginBottom: '12px',
          }}>
            Perguntas<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-moss)' }}>frequentes</em>
          </h2>

          <p style={{
            fontSize: '0.96rem', fontWeight: 300, lineHeight: 1.75,
            color: 'var(--color-mist)', marginBottom: '24px',
          }}>
            Informações objetivas sobre o atendimento psicológico em Maringá.
          </p>

          {/* Botão para expandir */}
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--color-moss-mist)',
                color: 'var(--color-moss)',
                border: '1px solid var(--color-moss-light)',
                borderRadius: '100px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem', fontWeight: 500,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '10px 22px',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-moss-pale)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--color-moss-mist)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <span style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: 'var(--color-moss-mid)',
              }} />
              Ver todas as dúvidas
            </button>
          )}
        </div>

        {/* Lista de FAQs */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="reveal"
                  style={{
                    background: openIndex === idx
                      ? 'var(--color-cream)'
                      : 'var(--color-cream)',
                    border: `1px solid ${openIndex === idx
                      ? 'var(--color-moss-light)'
                      : 'var(--color-fog-deep)'}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: openIndex === idx
                      ? '0 2px 12px rgba(44,58,40,0.06)'
                      : 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                >
                  {/* Pergunta */}
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      fontWeight: 400,
                      color: 'var(--color-bark)',
                      textAlign: 'left',
                    }}
                  >
                    {faq.question}
                    <span style={{
                      color: 'var(--color-moss-mid)',
                      fontSize: '1.3rem',
                      lineHeight: 1,
                      flexShrink: 0,
                      transform: openIndex === idx ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.3s',
                      display: 'inline-block',
                    }}>
                      +
                    </span>
                  </button>

                  {/* Resposta */}
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          padding: '0 22px 18px',
                          paddingTop: '14px',
                          fontSize: '0.84rem',
                          fontWeight: 300,
                          color: 'var(--color-mist)',
                          lineHeight: 1.7,
                          borderTop: '1px solid var(--color-fog-deep)',
                        }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Botão recolher */}
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <button
                  onClick={() => {
                    setIsExpanded(false);
                    setOpenIndex(null);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-rule)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-mist)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-rule)')}
                >
                  Recolher dúvidas
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};