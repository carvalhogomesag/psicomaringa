import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Users, Brain, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { LeadForm } from './components/LeadForm';
import { SPECIALTIES, NEIGHBORHOODS } from './constants';
import { SEO } from './components/SEO';
import { FAQ } from './components/FAQ';
import { BlogList } from './components/BlogList';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <SEO 
        title="Psicólogos em Maringá - Atendimento Especializado" 
        description="Encontre psicólogos qualificados em Maringá. Atendimento para ansiedade, depressão, terapia de casal e infantil. Localizado próximo ao Centro, Zona 07 e Vila Operária."
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-emerald-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000" 
            alt="Consultório de Psicologia em Maringá"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-bold mb-6">
              ATENDIMENTO EM MARINGÁ - PR
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Psicólogo em Maringá: Sua saúde mental é nossa <span className="text-emerald-400">prioridade.</span>
            </h1>
            <p className="text-xl text-emerald-100/80 mb-10 leading-relaxed">
              Encontre o equilíbrio emocional com psicólogos especialistas em Maringá PR. Atendimento humanizado, ético e especializado em Terapia Cognitivo Comportamental para você e sua família no coração de Maringá.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contato-form" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-emerald-900/40">
                SOLICITAR CONTATO
              </a>
              <a href="#especialidades" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20">
                VER ESPECIALIDADES
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="contato-form"
          >
            <LeadForm />
          </motion.div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Clínica de Psicologia em Maringá: Nossas Especialidades</h2>
            <p className="text-zinc-600 text-lg">
              Oferecemos diversas abordagens terapêuticas, incluindo Terapia Cognitivo Comportamental (TCC), para atender às suas necessidades específicas com profissionais qualificados em Maringá.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALTIES.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-stone-50 border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {idx === 0 && <Brain size={28} />}
                  {idx === 1 && <Heart size={28} />}
                  {idx === 2 && <Users size={28} />}
                  {idx === 3 && <Users size={28} />}
                  {idx === 4 && <ShieldCheck size={28} />}
                  {idx === 5 && <Heart size={28} />}
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-zinc-600 mb-6 line-clamp-2">{s.description}</p>
                <Link to={`/especialidade/${s.slug}`} className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  SOLICITAR CONTATO <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Atendimento Psicológico em Maringá: Como Funciona?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Primeiro Contato', desc: 'Você preenche o formulário e nós entramos em contato para entender sua necessidade de psicoterapia em Maringá.' },
                  { title: 'Agendamento', desc: 'Marcamos uma sessão inicial no melhor horário para você, com opção de atendimento presencial em Maringá Centro ou Online.' },
                  { title: 'Início da Terapia', desc: 'Começamos o processo terapêutico focado em seus objetivos, com suporte de psicólogos especialistas em Maringá PR.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => document.getElementById('contato-form')?.scrollIntoView({ behavior: 'smooth' })} className="mt-12 bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all">
                SOLICITAR CONTATO
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?auto=format&fit=crop&q=80&w=1000" 
                alt="Sessão de Terapia"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-bold text-zinc-900">Atendimento 5 Estrelas</p>
                <p className="text-sm text-zinc-500">Avaliado por pacientes em Maringá</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">O que dizem nossos pacientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ana Paula S.', text: 'O atendimento em Maringá superou minhas expectativas. Me senti acolhida desde o primeiro contato.' },
              { name: 'Ricardo M.', text: 'A terapia de casal nos ajudou a reconstruir nossa comunicação. Profissionais excelentes.' },
              { name: 'Juliana F.', text: 'Minha filha adora as sessões de psicologia infantil. O ambiente é muito lúdico e seguro.' }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-stone-50 border border-black/5 italic text-zinc-600 relative">
                <div className="text-emerald-500 mb-4">
                  <Star size={24} fill="currentColor" />
                </div>
                <p className="mb-6">"{t.text}"</p>
                <p className="font-bold text-zinc-900 not-italic">— {t.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={() => document.getElementById('contato-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg"
            >
              SOLICITAR CONTATO AGORA
            </button>
          </div>
        </div>
      </section>

      {/* SEO Neighborhoods Section */}
      <section className="py-16 bg-stone-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-8">Atendemos em diversos bairros de Maringá</h4>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {NEIGHBORHOODS.map(n => (
              <span key={n} className="text-sm text-zinc-500 hover:text-emerald-600 transition-colors cursor-default">
                Psicólogo em {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <BlogList limit={3} />

      {/* Final CTA */}
      <section className="py-20 bg-emerald-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Pronto para começar sua jornada de autoconhecimento?</h2>
          <p className="text-emerald-100 text-lg mb-10">
            Não deixe sua saúde mental para depois. Agende sua primeira conversa hoje mesmo.
          </p>
          <button onClick={() => document.getElementById('contato-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-emerald-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-emerald-50 transition-all shadow-2xl">
            SOLICITAR CONTATO
          </button>
        </div>
      </section>
    </div>
  );
};
