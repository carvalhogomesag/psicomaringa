import React, { useState } from 'react';
import { SPECIALTIES, BAIRROS } from '../constants';

interface LeadFormProps {
  defaultSpecialty?: string;
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ defaultSpecialty, onSuccess }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [phone, setPhone] = useState('');

  // ── Máscara de telefone ──────────────────────────────────────
  const maskPhone = (v: string) => {
    const d = v.replace(/\D/g, '').slice(0, 11);
    if (d.length > 7) return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
    if (d.length > 2) return `(${d.slice(0,2)}) ${d.slice(2)}`;
    if (d.length > 0) return `(${d}`;
    return d;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Validação visual
    const required = ['name', 'phone', 'neighborhood', 'specialty'];
    const newErrors: Record<string, boolean> = {};
    required.forEach(k => {
      if (!formData.get(k)) newErrors[k] = true;
    });
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setStatus('submitting');
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setStatus('success');
      onSuccess?.();
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
    }
  };

  const clearError = (field: string) =>
    setErrors(prev => ({ ...prev, [field]: false }));

  // ── Estilos de campo ─────────────────────────────────────────
  const fieldStyle = (hasError: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '11px 14px',
    background: 'var(--color-fog)',
    border: `1.5px solid ${hasError ? '#D97070' : 'transparent'}`,
    borderRadius: '10px',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.88rem',
    fontWeight: 300,
    color: 'var(--color-bark)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    appearance: 'none' as const,
  });

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.72rem',
    fontWeight: 500,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: 'var(--color-bark)',
    marginBottom: '5px',
  };

  // ── Estado de sucesso ────────────────────────────────────────
  if (status === 'success') {
    return (
      <div style={{
        background: 'var(--color-cream)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(44,58,40,0.14), 0 0 0 1px rgba(44,58,40,0.06)',
        maxWidth: '420px',
        width: '100%',
      }}>
        {/* Barra de acento */}
        <div style={{ height: '5px', background: 'linear-gradient(90deg, var(--color-moss), var(--color-moss-light), var(--color-stone-light))' }} />

        <div style={{ padding: '40px 30px', textAlign: 'center' }}>
          {/* Ícone */}
          <div style={{
            width: '72px', height: '72px',
            borderRadius: '50%',
            background: 'var(--color-moss-pale)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '1.8rem',
          }}>✓</div>

          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.6rem',
            fontWeight: 400,
            color: 'var(--color-bark-deep)',
            marginBottom: '10px',
          }}>
            Solicitação recebida
          </h3>
          <p style={{
            fontSize: '0.84rem',
            color: 'var(--color-mist)',
            lineHeight: 1.65,
            fontWeight: 300,
          }}>
            Entraremos em contato via WhatsApp em até{' '}
            <strong style={{ color: 'var(--color-bark)' }}>2 horas úteis</strong>{' '}
            com indicações de psicólogos selecionados para o seu perfil. 🌿
          </p>
        </div>
      </div>
    );
  }

  // ── Formulário ───────────────────────────────────────────────
  return (
    <div
      id="contato-form"
      style={{
        background: 'var(--color-cream)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(44,58,40,0.14), 0 0 0 1px rgba(44,58,40,0.06)',
        maxWidth: '420px',
        width: '100%',
      }}
    >
      {/* Barra de acento */}
      <div style={{ height: '5px', background: 'linear-gradient(90deg, var(--color-moss), var(--color-moss-light), var(--color-stone-light))' }} />

      <div style={{ padding: '32px 30px 28px' }}>

        {/* Kicker */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '0.7rem', fontWeight: 500,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--color-moss-mid)',
          background: 'var(--color-moss-mist)',
          padding: '5px 11px', borderRadius: '100px',
          marginBottom: '14px',
        }}>
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: 'var(--color-moss-mid)',
            animation: 'breathe 2.5s ease-in-out infinite',
          }} />
          Indicação gratuita · Sem compromisso
        </div>

        {/* Título */}
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.6rem', fontWeight: 400,
          lineHeight: 1.2, color: 'var(--color-bark-deep)',
          marginBottom: '6px',
        }}>
          Encontre o psicólogo<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-moss)' }}>certo para você</em>
        </h3>
        <p style={{
          fontSize: '0.82rem', color: 'var(--color-mist)',
          lineHeight: 1.55, marginBottom: '24px', fontWeight: 300,
        }}>
          Retornamos via WhatsApp em até 2 horas úteis.
        </p>

        {/* Form */}
        <form
          name="leads-psico-maringa"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}
        >
          <input type="hidden" name="form-name" value="leads-psico-maringa" />

          {/* Nome */}
          <div>
            <label htmlFor="name" style={labelStyle}>Nome completo</label>
            <input
              type="text" id="name" name="name"
              placeholder="Seu nome"
              style={fieldStyle(!!errors.name)}
              onChange={() => clearError('name')}
              onFocus={e => {
                e.currentTarget.style.borderColor = 'var(--color-moss-light)';
                e.currentTarget.style.background = 'var(--color-cream)';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(107,143,98,0.12)';
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = errors.name ? '#D97070' : 'transparent';
                e.currentTarget.style.background = 'var(--color-fog)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* WhatsApp + Bairro */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <label htmlFor="phone" style={labelStyle}>WhatsApp</label>
              <input
                type="tel" id="phone" name="phone"
                placeholder="(44) 9 0000-0000"
                value={phone}
                style={fieldStyle(!!errors.phone)}
                onChange={e => { setPhone(maskPhone(e.target.value)); clearError('phone'); }}
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--color-moss-light)';
                  e.currentTarget.style.background = 'var(--color-cream)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(107,143,98,0.12)';
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = errors.phone ? '#D97070' : 'transparent';
                  e.currentTarget.style.background = 'var(--color-fog)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
            <div>
              <label htmlFor="neighborhood" style={labelStyle}>Bairro</label>
              <select
                id="neighborhood" name="neighborhood"
                style={{ ...fieldStyle(!!errors.neighborhood), cursor: 'pointer' }}
                defaultValue=""
                onChange={() => clearError('neighborhood')}
              >
                <option value="" disabled>Selecione</option>
                {BAIRROS.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
          </div>

          {/* Especialidade */}
          <div>
            <label htmlFor="specialty" style={labelStyle}>Especialidade desejada</label>
            <select
              id="specialty" name="specialty"
              style={{ ...fieldStyle(!!errors.specialty), cursor: 'pointer' }}
              defaultValue={defaultSpecialty || ''}
              onChange={() => clearError('specialty')}
            >
              <option value="" disabled>O que você busca?</option>
              {SPECIALTIES.map(s => (
                <option key={s.slug} value={s.title}>{s.title}</option>
              ))}
              <option value="Outro / Não sei ainda">Outro / Não sei ainda</option>
            </select>
          </div>

          {/* Modalidade */}
          <div>
            <label htmlFor="modality" style={labelStyle}>Modalidade</label>
            <select
              id="modality" name="modality"
              style={{ ...fieldStyle(false), cursor: 'pointer' }}
              defaultValue=""
            >
              <option value="" disabled>Sua preferência</option>
              <option value="Presencial em Maringá">Presencial em Maringá</option>
              <option value="Online (videochamada)">Online (videochamada)</option>
              <option value="Sem preferência">Sem preferência</option>
            </select>
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            style={{
              width: '100%', marginTop: '4px', padding: '14px',
              background: status === 'submitting' ? 'var(--color-moss-mid)' : 'var(--color-moss)',
              color: 'var(--color-cream)',
              border: 'none', borderRadius: '100px',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem', fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 20px rgba(74,103,65,0.25)',
              transition: 'background 0.25s, transform 0.2s',
            }}
          >
            {status === 'submitting' ? 'Enviando...' : '✓ Quero minha indicação gratuita'}
          </button>

          {/* Erro genérico */}
          {status === 'error' && (
            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#D97070' }}>
              Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.
            </p>
          )}

          <p style={{
            textAlign: 'center', fontSize: '0.7rem',
            color: '#AEAAA2', marginTop: '4px',
          }}>
            🔒 Dados protegidos pela LGPD · 100% sigiloso
          </p>
        </form>
      </div>

      {/* Badges de confiança */}
      <div style={{
        padding: '13px 20px',
        background: 'var(--color-moss-mist)',
        borderTop: '1px solid rgba(107,143,98,0.12)',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: '20px',
        flexWrap: 'wrap',
      }}>
        {['🛡️ CRP Verificado', '⏱ Retorno em 2h', '✉️ Sem Spam'].map(item => (
          <span key={item} style={{
            fontSize: '0.68rem', fontWeight: 500,
            letterSpacing: '0.04em',
            color: 'var(--color-moss)',
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};