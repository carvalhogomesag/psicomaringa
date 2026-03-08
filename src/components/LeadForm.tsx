import React, { useState } from 'react';
import { SPECIALTIES } from '../constants';

interface LeadFormProps {
  defaultSpecialty?: string;
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ defaultSpecialty, onSuccess }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setStatus('success');
      onSuccess?.();
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-emerald-900 mb-2">Solicitação Enviada!</h3>
        <p className="text-emerald-700">Em breve um de nossos especialistas entrará em contato com você.</p>
      </div>
    );
  }

  return (
    <form 
      name="leads-psico-maringa" 
      method="POST" 
      data-netlify="true" 
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl border border-black/5"
    >
      <input type="hidden" name="form-name" value="leads-psico-maringa" />
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">Nome Completo</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-zinc-900 bg-white"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 mb-2">Telefone / WhatsApp</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            placeholder="(44) 99999-9999"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-zinc-900 bg-white"
          />
        </div>

        <div>
          <label htmlFor="specialty" className="block text-sm font-semibold text-zinc-700 mb-2">Tipo de Terapia</label>
          <select 
            id="specialty" 
            name="specialty" 
            required 
            defaultValue={defaultSpecialty || ""}
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none bg-white text-zinc-900"
          >
            <option value="" disabled className="text-zinc-400">Selecione uma opção</option>
            {SPECIALTIES.map(s => (
              <option key={s.id} value={s.title} className="text-zinc-900">{s.title}</option>
            ))}
            <option value="Outros" className="text-zinc-900">Outros / Não sei ainda</option>
          </select>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-200 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Enviando...' : 'SOLICITAR CONTATO'}
        </button>
        
        <p className="text-center text-xs text-zinc-400 mt-4">
          Seus dados estão seguros e serão usados apenas para o primeiro contato.
        </p>
      </div>
    </form>
  );
};
