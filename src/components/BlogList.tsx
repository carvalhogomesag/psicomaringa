import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';

export const BlogList: React.FC<{ limit?: number }> = ({ limit }) => {
  const posts = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;

  return (
    <section id="blog" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Blog Psico Maringá</h2>
            <p className="text-zinc-600 text-lg">
              Artigos informativos sobre a importância do acompanhamento profissional qualificado.
            </p>
          </div>
          {limit && (
            <Link to="/blog" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              VER TODOS OS ARTIGOS <ArrowRight size={20} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-black/5 overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/5 transition-all flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-zinc-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="px-8 pb-8">
                <Link to={`/blog/${post.slug}`} className="text-emerald-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  LER ARTIGO COMPLETO <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
