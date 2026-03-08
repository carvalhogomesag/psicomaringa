import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { LeadForm } from './components/LeadForm';
import { SPECIALTIES, NEIGHBORHOODS } from './constants';
import { SEO } from './components/SEO';

export const SpecialtyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const specialty = SPECIALTIES.find(s => s.slug === slug);

  useEffect(() => {
    if (!specialty) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [specialty, navigate]);

  if (!specialty) return null;

  return (
    <div className="bg-stone-50 min-h-screen pb-24">
      <SEO 
        title={`${specialty.title} em Maringá`} 
        description={`${specialty.description} Atendimento especializado em Maringá, PR. Próximo ao Centro, Zona 03 e Zona 07.`}
        specialty={specialty.title}
      />

      <div className="bg-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} /> Voltar para Início
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{specialty.title}</h1>
          <p className="text-xl text-emerald-100/80 max-w-3xl leading-relaxed">
            {specialty.description} Oferecemos um ambiente seguro e acolhedor para o seu tratamento em Maringá.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-10 rounded-3xl shadow-xl border border-black/5">
              <h2 className="text-3xl font-bold mb-6">Sobre o Atendimento</h2>
              <p className="text-zinc-600 leading-relaxed mb-8">
                O tratamento para <strong>{specialty.title}</strong> em nossa clínica em Maringá é pautado pela ética profissional e pelas evidências científicas mais recentes da psicologia. 
                Entendemos que cada indivíduo é único e por isso personalizamos cada sessão para garantir o melhor suporte emocional possível.
              </p>
              
              <h3 className="text-xl font-bold mb-6">Por que escolher nosso atendimento?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Profissionais com CRP Ativo',
                  'Localização central em Maringá',
                  'Ambiente sigiloso e ético',
                  'Abordagens comprovadas',
                  'Flexibilidade de horários',
                  'Atendimento Online disponível'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-700">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-emerald-50 p-10 rounded-3xl border border-emerald-100">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">Atendimento em Maringá</h2>
              <p className="text-emerald-800/80 mb-6">
                Estamos estrategicamente localizados para atender pacientes de toda a cidade, incluindo:
              </p>
              <div className="flex flex-wrap gap-3">
                {NEIGHBORHOODS.map(n => (
                  <span key={n} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-emerald-700 border border-emerald-100">
                    {n}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold mb-6 text-zinc-900">Solicitar Contato</h3>
              <LeadForm defaultSpecialty={specialty.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
