import React from 'react';
import { BlogList } from './components/BlogList';
import { SEO } from './components/SEO';

export const BlogPage: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <SEO 
        title="Blog - Psico Maringá" 
        description="Artigos sobre saúde mental e a importância do acompanhamento profissional qualificado em Maringá."
      />
      
      <div className="bg-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-emerald-100/80 max-w-3xl leading-relaxed">
            Conteúdo informativo focado na importância da saúde mental e do suporte profissional qualificado.
          </p>
        </div>
      </div>

      <BlogList />
    </div>
  );
};
