import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { LeadForm } from './components/LeadForm';
import { SPECIALTIES, NEIGHBORHOODS } from './constants';
import { SEO } from './components/SEO';

export const SpecialtyPage: React.FC = () => {
  const { slug }    = useParams<{ slug: string }>();
  const navigate    = useNavigate();
  const specialty   = SPECIALTIES.find(s => s.slug === slug);

  useEffect(() => {
    if (!specialty) navigate('/');
    window.scrollTo(0, 0);
  }, [specialty, navigate]);

  if (!specialty) return null;

  const benefits = [
    'Profissionais com CRP ativo e verificado',
    'Indicação personalizada ao seu perfil',
    'Ambiente sigiloso e ético',
    'Abordagens baseadas em evidências',
    'Presencial em Maringá ou online',
    'Retorno em até 2 horas úteis',
  ];

  return (
    <div style={{ background: 'var(--color-fog)', minHeight: '100vh', paddingBottom: '96px' }}>
      <SEO
        title={`${specialty.title} em Maringá`}
        description={`${specialty.description} Atendimento especializado em Maringá, PR. Indicação gratuita, CRP verificado, retorno em 2h.`}
        specialty={specialty.title}
      />

      {/* ── HERO DA ESPECIALIDADE ──────────────────────────────── */}
      <div style={{
        background: 'var(--color-bark-deep)',
        padding: '100px 6% 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Fundo orgânico */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <svg style={{ position: 'absolute', width: '100%', height: '100%' }}
            viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="sgA" cx="80%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E8F0E6" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#1C261A"  stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="400" fill="url(#sgA)" />
            <ellipse cx="1200" cy="200" rx="400" ry="300"
              fill="#4A6741" fillOpacity="0.06" />
            <path d="M900,0 Q1000,150 950,400"
              stroke="#4A6741" strokeWidth="0.8" fill="none" opacity="0.08" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          {/* Voltar */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '0.78rem', fontWeight: 400,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'var(--color-moss-light)',
              textDecoration: 'none',
              marginBottom: '32px',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-moss-light)')}
            >
              <ArrowLeft size={15} /> Voltar para Início
            </Link>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              fontSize: '0.7rem', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--color-moss-light)',
              marginBottom: '16px',
            }}
          >
            <span style={{ width: '28px', height: '1px', background: 'var(--color-moss-light)' }} />
            Especialidade · Maringá, PR
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 300, lineHeight: 1.1,
              color: 'white', marginBottom: '20px',
            }}
          >
            {specialty.title}<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-moss-light)', fontWeight: 300 }}>
              em Maringá
            </em>
          </motion.h1>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            style={{
              fontSize: '1rem', fontWeight: 300, lineHeight: 1.8,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '600px',
            }}
          >
            {specialty.description} Oferecemos um ambiente seguro e acolhedor,
            com psicólogos verificados e indicação personalizada ao seu perfil.
          </motion.p>
        </div>
      </div>

      {/* ── CONTEÚDO PRINCIPAL ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto" style={{ padding: '0 6%', marginTop: '-32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '28px',
          alignItems: 'start',
        }} className="grid-specialty-mobile">

          {/* ── Coluna esquerda ─────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Card: Sobre o atendimento */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                background: 'var(--color-cream)',
                borderRadius: '20px',
                padding: '36px',
                boxShadow: '0 8px 40px rgba(44,58,40,0.10)',
              }}
            >
              {/* Kicker */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                fontSize: '0.7rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--color-moss-mid)', marginBottom: '16px',
              }}>
                <span style={{ width: '20px', height: '1px', background: 'var(--color-moss-mid)' }} />
                Sobre o atendimento
              </div>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 300, lineHeight: 1.2,
                color: 'var(--color-bark-deep)', marginBottom: '16px',
              }}>
                Como funciona o tratamento<br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-moss)' }}>
                  de {specialty.title.toLowerCase()}?
                </em>
              </h2>

              <p style={{
                fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.8,
                color: 'var(--color-mist)', marginBottom: '28px',
              }}>
                O tratamento para <strong style={{ color: 'var(--color-bark)', fontWeight: 500 }}>
                  {specialty.title}
                </strong> é pautado pela ética profissional e pelas evidências
                científicas mais recentes da psicologia. Entendemos que cada indivíduo
                é único — por isso conectamos você ao profissional com maior
                compatibilidade de abordagem, disponibilidade e localização.
              </p>

              {/* Benefícios */}
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem', fontWeight: 400,
                color: 'var(--color-bark-deep)', marginBottom: '16px',
              }}>
                Por que escolher nossa indicação?
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
              }} className="grid-benefits-mobile">
                {benefits.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    padding: '12px 14px',
                    background: 'var(--color-fog)',
                    borderRadius: '10px',
                    fontSize: '0.82rem', fontWeight: 300,
                    color: 'var(--color-bark)',
                    lineHeight: 1.5,
                  }}>
                    <span style={{
                      color: 'var(--color-moss)',
                      fontSize: '0.9rem',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Card: Bairros */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              style={{
                background: 'var(--color-moss-mist)',
                border: '1px solid var(--color-moss-light)',
                borderRadius: '20px',
                padding: '32px 36px',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                fontSize: '0.7rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--color-moss-mid)', marginBottom: '14px',
              }}>
                <span style={{ width: '20px', height: '1px', background: 'var(--color-moss-mid)' }} />
                Cobertura em Maringá
              </div>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem', fontWeight: 300,
                color: 'var(--color-bark-deep)', marginBottom: '8px',
              }}>
                Atendemos em toda <em style={{ fontStyle: 'italic', color: 'var(--color-moss)' }}>Maringá</em>
              </h2>
              <p style={{
                fontSize: '0.84rem', fontWeight: 300,
                color: 'var(--color-mist)', marginBottom: '20px', lineHeight: 1.6,
              }}>
                Profissionais presenciais nos principais bairros e opção online para qualquer localidade.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {NEIGHBORHOODS.map(n => (
                  <span key={n} style={{
                    padding: '7px 14px',
                    background: 'var(--color-cream)',
                    border: '1px solid rgba(107,143,98,0.2)',
                    borderRadius: '100px',
                    fontSize: '0.78rem', fontWeight: 400,
                    color: 'var(--color-moss)',
                  }}>
                    {n}
                  </span>
                ))}
                <span style={{
                  padding: '7px 14px',
                  background: 'var(--color-moss)',
                  borderRadius: '100px',
                  fontSize: '0.78rem', fontWeight: 500,
                  color: 'white',
                }}>
                  🖥️ Online
                </span>
              </div>
            </motion.section>
          </div>

          {/* ── Coluna direita: formulário sticky ───────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ position: 'sticky', top: '84px' }}
          >
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.3rem', fontWeight: 300,
              color: 'var(--color-bark-deep)',
              marginBottom: '16px', lineHeight: 1.3,
            }}>
              Solicitar indicação<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-moss)' }}>gratuita</em>
            </p>
            <LeadForm defaultSpecialty={specialty.title} />
          </motion.div>

        </div>
      </div>
    </div>
  );
};