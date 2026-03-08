import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from './constants';
import { SEO } from './components/SEO';
import { LeadForm } from './components/LeadForm';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="bg-stone-50 min-h-screen pb-24">
      <SEO 
        title={post.title} 
        description={post.excerpt}
      />

      <div className="bg-emerald-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-emerald-300 hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} /> Voltar para o Blog
          </Link>
          <div className="flex items-center gap-2 text-emerald-300/60 text-xs font-bold uppercase tracking-widest mb-4">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString('pt-BR')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-black/5">
              <div className="prose prose-zinc max-w-none">
                {post.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-zinc-600 leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Compartilhar:</span>
                  <button className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="bg-emerald-600 p-8 rounded-3xl text-white shadow-xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Precisa de ajuda profissional?</h3>
                <p className="text-emerald-100 mb-8">
                  Agende uma conversa com um psicólogo qualificado em Maringá.
                </p>
                <LeadForm />
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
                <h4 className="font-bold mb-6">Outros Artigos</h4>
                <div className="space-y-6">
                  {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3).map(other => (
                    <Link key={other.slug} to={`/blog/${other.slug}`} className="group block">
                      <h5 className="font-bold text-zinc-800 group-hover:text-emerald-600 transition-colors mb-2 leading-tight">
                        {other.title}
                      </h5>
                      <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">
                        {new Date(other.date).toLocaleDateString('pt-BR')}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
