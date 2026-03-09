import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Users, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { LeadForm } from './components/LeadForm';
import { SPECIALTIES, NEIGHBORHOODS, DEPOIMENTOS, STATS, TRUST_ITEMS } from './constants';
import { SEO } from './components/SEO';
import { FAQ } from './components/FAQ';
import { BlogList } from './components/BlogList';

// ── Ícones por especialidade ───────────────────────────────────
const SPEC_ICONS = [
  <Brain size={20} />,
  <Heart size={20} />,
  <Users size={20} />,
  <Sparkles size={20} />,
  <ShieldCheck size={20} />,
  <Zap size={20} />,
];

export const Home: React.FC = () => {

  // ── Scroll reveal ────────────────────────────────────────────
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollToForm = () =>
    document.getElementById('contato-form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{ overflow: 'hidden' }}>
      <SEO
        title="Psicólogos em Maringá — Atendimento Especializado | Psico Maringá"
        description="Conectamos você ao psicólogo ideal em Maringá. CRP verificado, retorno em 2h, indicação gratuita. Ansiedade, depressão, terapia de casal, infantil e mais."
      />

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-fog)',
      }}
        className="flex-col-mobile"
      >
        {/* Fundo orgânico */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <svg
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="gA" cx="70%" cy="30%" r="55%">
                <stop offset="0%" stopColor="#E8F0E6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F7F5F0" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="gB" cx="15%" cy="85%" r="40%">
                <stop offset="0%" stopColor="#F5EFE6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F7F5F0" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#gA)" />
            <rect width="1440" height="900" fill="url(#gB)" />
            <ellipse cx="1100" cy="180" rx="340" ry="260" fill="#A8C29E" fillOpacity="0.08" />
            <ellipse cx="900" cy="650" rx="280" ry="200" fill="#C4AA8A" fillOpacity="0.05" />
            <path d="M820,0 Q960,200 880,400 Q800,600 920,900"
              stroke="#4A6741" strokeWidth="0.6" fill="none" opacity="0.06" />
            <path d="M1100,0 Q1200,300 1100,600 Q1000,750 1100,900"
              stroke="#4A6741" strokeWidth="0.4" fill="none" opacity="0.04" />
          </svg>
        </div>

        {/* ── Coluna esquerda: copy ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', zIndex: 1, padding: '120px 6% 80px' }}
        >
          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            marginBottom: '32px',
          }}>
            <span style={{ width: '36px', height: '1px', background: 'var(--color-moss-mid)' }} />
            <span style={{
              fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--color-moss-mid)',
            }}>
              Psicólogos em Maringá · PR
            </span>
          </div>

          {/* Título */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.6rem, 4.8vw, 4.2rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: 'var(--color-bark-deep)',
            marginBottom: '28px',
          }}>
            Um espaço seguro<br />
            para <em style={{ fontStyle: 'italic', color: 'var(--color-moss)' }}>cuidar</em> do que<br />
            <strong style={{ fontWeight: 500 }}>realmente importa</strong>
          </h1>

          {/* Subtítulo */}
          <p style={{
            fontSize: '1rem', fontWeight: 300, lineHeight: 1.8,
            color: 'var(--color-mist)',
            maxWidth: '420px', marginBottom: '44px',
          }}>
            Conectamos você a psicólogos especializados em Maringá com sigilo
            absoluto, metodologias baseadas em evidências e atenção
            personalizada ao seu momento de vida.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <button onClick={scrollToForm} className="btn-primary">
              Encontrar meu psicólogo
            </button>
            <a href="#processo" style={{
              fontSize: '0.82rem', fontWeight: 400,
              color: 'var(--color-moss)', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'gap 0.2s',
            }}>
              Como funciona <ArrowRight size={14} />
            </a>
          </div>

          {/* Prova social */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '20px',
            marginTop: '52px', paddingTop: '36px',
            borderTop: '1px solid var(--color-rule)',
          }}>
            <div style={{ display: 'flex' }}>
              {['AM', 'LF', 'RS', 'GP'].map((initials, i) => (
                <div key={initials} style={{
                  width: '34px', height: '34px', borderRadius: '50%',
                  border: '2px solid var(--color-fog)',
                  marginLeft: i === 0 ? '0' : '-9px',
                  background: 'var(--color-moss)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.62rem', fontWeight: 600, color: 'white',
                }}>
                  {initials}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-mist)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--color-bark)', display: 'block' }}>
                +850 pessoas atendidas em Maringá
              </strong>
              avaliação média de 4.9 ★ nos últimos 12 meses
            </div>
          </div>
        </motion.div>

        {/* ── Coluna direita: formulário ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative', zIndex: 1,
            padding: '120px 6% 80px 2%',
            display: 'flex', alignItems: 'center',
          }}
        >
          <LeadForm />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TRUST BAR
      ══════════════════════════════════════════════════════════ */}
      <div style={{
        background: 'var(--color-bark-deep)',
        padding: '16px 6%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        flexWrap: 'wrap',
      }}>
        {TRUST_ITEMS.map((item, i) => (
          <React.Fragment key={item.label}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '8px 28px',
              color: 'rgba(255,255,255,0.55)',
              fontSize: '0.78rem', fontWeight: 300,
            }}>
              <span style={{ fontSize: '1rem' }}>{item.icon}</span>
              <span>
                <strong style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 500 }}>
                  {item.label}
                </strong>
                {' '}— {item.detail}
              </span>
            </div>
            {i < TRUST_ITEMS.length - 1 && (
              <div style={{
                width: '1px', height: '24px',
                background: 'rgba(255,255,255,0.1)',
              }} className="hide-mobile" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════
          POR QUE NÓS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '90px 6%', background: 'var(--color-fog-deep)' }}>
        <div className="max-w-7xl mx-auto">

          <div className="reveal" style={{ marginBottom: '52px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--color-moss-mid)',
              marginBottom: '14px',
            }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--color-moss-mid)' }} />
              Por que escolher
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 300, lineHeight: 1.12,
              color: 'var(--color-bark-deep)',
              marginBottom: '12px',
            }}>
              O cuidado que você merece<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-moss)' }}>começa pela escolha certa</em>
            </h2>
            <p style={{
              fontSize: '0.96rem', fontWeight: 300, lineHeight: 1.75,
              color: 'var(--color-mist)', maxWidth: '500px',
            }}>
              Nossa curadoria rigorosa garante que cada profissional indicado seja
              ética e tecnicamente preparado para acolher você.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }} className="grid-mobile">

            {/* Itens numerados */}
            <div>
              {[
                { title: 'Profissionais verificados, não apenas cadastrados', desc: 'Verificamos CRP, formação, abordagem e histórico profissional de cada psicólogo antes de integrá-lo à nossa rede.' },
                { title: 'Indicação personalizada ao seu perfil', desc: 'Analisamos seu relato e conectamos com o profissional com maior compatibilidade de abordagem e disponibilidade.' },
                { title: 'Presencial em Maringá ou online — você escolhe', desc: 'Profissionais nos principais bairros da cidade, com opção de atendimento remoto via videochamada segura.' },
                { title: 'Ética e sigilo como princípios inegociáveis', desc: 'Seus dados são tratados com máxima responsabilidade. Nenhuma informação é compartilhada sem sua autorização expressa.' },
              ].map((item, i) => (
                <div key={i} className="reveal" style={{
                  display: 'flex', gap: '20px',
                  padding: '22px 0',
                  borderBottom: '1px solid var(--color-rule)',
                  borderTop: i === 0 ? '1px solid var(--color-rule)' : 'none',
                  transition: 'padding-left 0.25s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.paddingLeft = '8px')}
                  onMouseLeave={e => (e.currentTarget.style.paddingLeft = '0')}
                >
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.6rem', fontWeight: 300,
                    color: 'var(--color-moss-pale)',
                    lineHeight: 1, flexShrink: 0,
                    width: '44px', textAlign: 'right',
                    transition: 'color 0.25s',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 style={{
                      fontSize: '0.92rem', fontWeight: 500,
                      color: 'var(--color-bark)', marginBottom: '5px',
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: '0.83rem', fontWeight: 300,
                      color: 'var(--color-mist)', lineHeight: 1.65,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cards de stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              className="hide-mobile">
              {STATS.slice(0, 2).map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  style={{
                    background: i === 1 ? 'var(--color-bark-deep)' : 'var(--color-cream)',
                    borderRadius: '20px',
                    padding: '28px',
                    boxShadow: '0 8px 40px rgba(44,58,40,0.10)',
                    marginLeft: i === 1 ? '28px' : '0',
                    transition: 'transform 0.3s',
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '3.4rem', fontWeight: 300,
                    color: i === 1 ? 'var(--color-moss-light)' : 'var(--color-moss)',
                    lineHeight: 1, letterSpacing: '-0.03em',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.8rem', lineHeight: 1.5, marginTop: '6px',
                    color: i === 1 ? 'rgba(255,255,255,0.4)' : 'var(--color-mist)',
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ESPECIALIDADES
      ══════════════════════════════════════════════════════════ */}
      <section id="especialidades" style={{ padding: '90px 6%', background: 'var(--color-fog)' }}>
        <div className="max-w-7xl mx-auto">

          <div className="reveal" style={{ marginBottom: '52px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--color-moss-mid)',
              marginBottom: '14px',
            }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--color-moss-mid)' }} />
              Especialidades
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 300, lineHeight: 1.12,
              color: 'var(--color-bark-deep)', marginBottom: '12px',
            }}>
              Cuidamos de diferentes<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-moss)' }}>momentos da vida</em>
            </h2>
            <p style={{
              fontSize: '0.96rem', fontWeight: 300,
              lineHeight: 1.75, color: 'var(--color-mist)', maxWidth: '480px',
            }}>
              Profissionais com formação específica em cada área da saúde mental.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
          }} className="grid-spec-mobile">
            {SPECIALTIES.map((s, idx) => (
              <motion.div
                key={s.id}
                className="reveal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                style={{
                  background: 'var(--color-cream)',
                  borderRadius: '18px',
                  padding: '28px 24px 24px',
                  border: '1px solid var(--color-fog-deep)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'border-color 0.25s, box-shadow 0.3s, transform 0.3s',
                  cursor: 'default',
                }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 8px 40px rgba(44,58,40,0.10)',
                }}
              >
                {/* Ícone */}
                <div style={{
                  width: '46px', height: '46px',
                  borderRadius: '14px',
                  background: 'var(--color-moss-mist)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-moss)',
                  marginBottom: '16px',
                }}>
                  {SPEC_ICONS[idx]}
                </div>

                <h3 style={{
                  fontSize: '0.92rem', fontWeight: 500,
                  color: 'var(--color-bark)', marginBottom: '6px',
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: '0.8rem', fontWeight: 300,
                  color: 'var(--color-mist)', lineHeight: 1.65,
                  marginBottom: '14px',
                }}>
                  {s.description}
                </p>
                <Link
                  to={`/especialidade/${s.slug}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.04em',
                    color: 'var(--color-moss-mid)', textDecoration: 'none',
                    transition: 'gap 0.2s',
                  }}
                >
                  Solicitar indicação <ArrowRight size={11} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PROCESSO
      ══════════════════════════════════════════════════════════ */}
      <section id="processo" style={{
        padding: '90px 6%',
        background: 'var(--color-bark-deep)',
      }}>
        <div className="max-w-7xl mx-auto">

          <div className="reveal" style={{ marginBottom: '60px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--color-moss-light)',
              marginBottom: '14px',
            }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--color-moss-light)' }} />
              Processo
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 300, lineHeight: 1.12, color: 'white',
              marginBottom: '12px',
            }}>
              Da solicitação à sua{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-moss-light)' }}>
                primeira sessão
              </em>
            </h2>
            <p style={{
              fontSize: '0.96rem', fontWeight: 300, lineHeight: 1.75,
              color: 'rgba(255,255,255,0.45)', maxWidth: '420px',
            }}>
              Cuidamos de tudo para que você só precise dar um passo.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            position: 'relative',
          }} className="grid-process-mobile">

            {/* Linha conectora */}
            <div style={{
              position: 'absolute',
              top: '32px', left: '8%', right: '8%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(107,143,98,0.3), transparent)',
            }} className="hide-mobile" />

            {[
              { icon: '✏️', title: 'Preencha o formulário', desc: 'Nome, WhatsApp, bairro e a especialidade que busca. Menos de 2 minutos.' },
              { icon: '🔍', title: 'Análise do perfil', desc: 'Nossa equipe seleciona os profissionais com maior compatibilidade com você.' },
              { icon: '📲', title: 'Indicação via WhatsApp', desc: 'Retornamos em até 2h úteis com 2–3 opções com perfil, disponibilidade e valores.' },
              { icon: '💚', title: 'Inicie sua terapia', desc: 'Escolha o profissional preferido e agende sua primeira sessão diretamente com ele.' },
            ].map((step, i) => (
              <div key={i} className="reveal" style={{
                textAlign: 'center',
                padding: '0 20px',
              }}>
                <div style={{
                  width: '64px', height: '64px',
                  borderRadius: '50%',
                  border: '1px solid rgba(107,143,98,0.25)',
                  background: 'rgba(107,143,98,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 22px',
                  fontSize: '1.4rem',
                  position: 'relative', zIndex: 1,
                  transition: 'border-color 0.3s, background 0.3s',
                }}>
                  {step.icon}
                </div>
                <h4 style={{
                  fontSize: '0.88rem', fontWeight: 500,
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '8px', letterSpacing: '0.01em',
                }}>
                  {step.title}
                </h4>
                <p style={{
                  fontSize: '0.78rem', fontWeight: 300,
                  color: 'rgba(255,255,255,0.38)', lineHeight: 1.65,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DEPOIMENTOS
      ══════════════════════════════════════════════════════════ */}
      <section id="depoimentos" style={{ padding: '90px 6%', background: 'var(--color-fog-deep)' }}>
        <div className="max-w-7xl mx-auto">

          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px',
            marginBottom: '48px',
          }}>
            <div className="reveal">
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--color-moss-mid)',
                marginBottom: '14px',
              }}>
                <span style={{ width: '24px', height: '1px', background: 'var(--color-moss-mid)' }} />
                Depoimentos
              </div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: 300, lineHeight: 1.12,
                color: 'var(--color-bark-deep)',
              }}>
                Histórias reais de<br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-moss)' }}>
                  quem já deu o passo
                </em>
              </h2>
            </div>

            {/* Rating badge */}
            <div className="reveal" style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: 'var(--color-cream)',
              padding: '11px 18px', borderRadius: '100px',
              boxShadow: '0 2px 12px rgba(44,58,40,0.06)',
              fontSize: '0.82rem', color: 'var(--color-bark)', fontWeight: 500,
            }}>
              <span style={{ fontSize: '1rem' }}>★</span>
              4.9
              <span style={{ fontWeight: 300, color: 'var(--color-mist)' }}>
                média de avaliação
              </span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
          }} className="grid-mobile">
            {DEPOIMENTOS.map((d, i) => (
              <motion.div
                key={d.id}
                className="reveal"
                whileHover={{ y: d.featured ? -4 : -4 }}
                style={{
                  background: d.featured ? 'var(--color-bark-deep)' : 'var(--color-cream)',
                  borderRadius: '18px',
                  padding: '28px',
                  boxShadow: '0 2px 12px rgba(44,58,40,0.06)',
                  position: 'relative',
                  transform: d.featured ? 'scale(1.03)' : 'none',
                  transition: 'box-shadow 0.3s',
                }}
              >
                {/* Verified badge */}
                <div style={{
                  position: 'absolute', top: '22px', right: '22px',
                  fontSize: '0.65rem', fontWeight: 500,
                  letterSpacing: '0.05em', textTransform: 'uppercase',
                  color: d.featured ? 'var(--color-moss-light)' : 'var(--color-moss-mid)',
                  background: d.featured ? 'rgba(107,143,98,0.15)' : 'var(--color-moss-mist)',
                  padding: '3px 8px', borderRadius: '100px',
                }}>
                  ✓ Verificado
                </div>

                {/* Quote mark */}
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '3.5rem', fontWeight: 300,
                  color: d.featured ? 'rgba(107,143,98,0.2)' : 'var(--color-moss-pale)',
                  lineHeight: 0.7, marginBottom: '16px',
                }}>
                  "
                </div>

                <p style={{
                  fontSize: '0.86rem', fontWeight: 300,
                  lineHeight: 1.75, fontStyle: 'italic',
                  color: d.featured ? 'rgba(255,255,255,0.55)' : 'var(--color-mist)',
                  marginBottom: '22px',
                }}>
                  {d.text}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-moss-light), var(--color-moss))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.72rem', fontWeight: 600, color: 'white',
                    flexShrink: 0,
                  }}>
                    {d.initials}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.84rem', fontWeight: 500,
                      color: d.featured ? 'rgba(255,255,255,0.85)' : 'var(--color-bark)',
                    }}>
                      {d.name}
                    </div>
                    <div style={{
                      fontSize: '0.74rem', fontWeight: 300,
                      color: d.featured ? 'rgba(255,255,255,0.3)' : 'var(--color-mist)',
                      marginTop: '1px',
                    }}>
                      {d.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BAIRROS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '70px 6%', background: 'var(--color-fog)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="reveal" style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--color-moss-mid)',
              marginBottom: '14px',
            }}>
              <span style={{ width: '24px', height: '1px', background: 'var(--color-moss-mid)' }} />
              Cobertura
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
              fontWeight: 300, color: 'var(--color-bark-deep)',
              marginBottom: '8px', lineHeight: 1.12,
            }}>
              Psicólogos em toda <em style={{ fontStyle: 'italic', color: 'var(--color-moss)' }}>Maringá</em>
            </h2>
            <p style={{
              fontSize: '0.9rem', fontWeight: 300,
              color: 'var(--color-mist)', lineHeight: 1.65,
            }}>
              Profissionais nos principais bairros. Prefere online? Atendemos todo o Brasil.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {NEIGHBORHOODS.map(n => (
              <div key={n} className="reveal" style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                padding: '9px 16px',
                background: 'var(--color-cream)',
                border: '1px solid var(--color-rule)',
                borderRadius: '100px',
                fontSize: '0.8rem', fontWeight: 400,
                color: 'var(--color-bark)',
                cursor: 'default',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-moss-mid)';
                  e.currentTarget.style.color = 'var(--color-moss)';
                  e.currentTarget.style.background = 'var(--color-moss-mist)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-rule)';
                  e.currentTarget.style.color = 'var(--color-bark)';
                  e.currentTarget.style.background = 'var(--color-cream)';
                }}
              >
                <span style={{ fontSize: '0.65rem', color: 'var(--color-moss-light)' }}>📍</span>
                {n}
              </div>
            ))}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              padding: '9px 16px',
              background: 'var(--color-moss-pale)',
              border: '1px solid var(--color-moss-light)',
              borderRadius: '100px',
              fontSize: '0.8rem', fontWeight: 500,
              color: 'var(--color-moss)',
            }}>
              🖥️ Online · Todo o Brasil
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Blog */}
      <BlogList limit={3} />

      {/* ══════════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════════ */}
      <section style={{
        padding: '100px 6%',
        background: 'linear-gradient(160deg, var(--color-bark-deep) 0%, var(--color-bark) 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Gradiente radial de fundo */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
        }}>
          <div style={{
            position: 'absolute',
            width: '800px', height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(107,143,98,0.1) 0%, transparent 65%)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }} className="max-w-2xl mx-auto">
          <div className="reveal" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '12px',
            fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--color-moss-light)',
            marginBottom: '20px',
          }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--color-moss-light)' }} />
            O próximo passo é seu
            <span style={{ width: '24px', height: '1px', background: 'var(--color-moss-light)' }} />
          </div>

          <h2 className="reveal" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300, lineHeight: 1.1,
            color: 'white', marginBottom: '16px',
          }}>
            Dar o primeiro passo<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-moss-light)' }}>
              é o mais difícil
            </em>
          </h2>

          <p className="reveal" style={{
            fontSize: '1rem', fontWeight: 300, lineHeight: 1.75,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '440px', margin: '0 auto 44px',
          }}>
            Cuidar da sua saúde mental é um ato de coragem e respeito por você mesmo.
            Estamos prontos para facilitar esse caminho.
          </p>

          <motion.button
            className="reveal"
            onClick={scrollToForm}
            whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(0,0,0,0.25)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'var(--color-cream)',
              color: 'var(--color-bark-deep)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem', fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '16px 36px', borderRadius: '100px',
              border: 'none', cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              transition: 'background 0.25s',
            }}
          >
            Solicitar indicação gratuita
          </motion.button>

          <p className="reveal" style={{
            marginTop: '18px',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.22)',
            letterSpacing: '0.04em',
          }}>
            Gratuito · Sem compromisso · Retorno em até 2h úteis
          </p>
        </div>
      </section>

    </div>
  );
};