import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { BLOG_POSTS } from "./constants";
import { SEO } from "./components/SEO";
import { LeadForm } from "./components/LeadForm";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Formata a data para exibição
  const dateFormatted = post.date
    ? new Date(post.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      <SEO
        title={`${post.title} | Psico Maringá`}
        description={post.excerpt}
      />

      {/* Hero do post */}
      <section
        style={{
          background: "var(--color-bark-deep)",
          padding: "5rem 1.5rem 3.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse 50% 70% at 90% 50%, rgba(74,103,65,0.15) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Voltar */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/blog"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "rgba(253,252,249,0.5)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                marginBottom: "2rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(253,252,249,0.85)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(253,252,249,0.5)";
              }}
            >
              <ArrowLeft size={14} /> Voltar ao blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Metadados */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                flexWrap: "wrap",
                marginBottom: "1.25rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Tag size={11} color="var(--color-moss-light)" />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-moss-light)",
                  }}
                >
                  {post.category}
                </span>
              </div>

              {dateFormatted && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    color: "rgba(253,252,249,0.4)",
                  }}
                >
                  <Calendar size={11} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem" }}>
                    {dateFormatted}
                  </span>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "rgba(253,252,249,0.4)",
                }}
              >
                <Clock size={11} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem" }}>
                  {post.readTime} de leitura
                </span>
              </div>
            </div>

            {/* Título */}
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                fontWeight: 600,
                color: "var(--color-cream)",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                color: "rgba(253,252,249,0.6)",
                lineHeight: 1.75,
              }}
            >
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo do artigo */}
      <section
        style={{
          background: "var(--color-cream)",
          padding: "4rem 1.5rem",
          borderBottom: "1px solid var(--color-rule)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: "680px", margin: "0 auto" }}
        >
          {/* Aviso ético */}
          <div
            style={{
              background: "var(--color-moss-pale)",
              border: "1px solid var(--color-moss-light)",
              borderRadius: "4px",
              padding: "1rem 1.25rem",
              marginBottom: "2.5rem",
              display: "flex",
              gap: "0.75rem",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "1rem", lineHeight: 1.5 }}>ℹ️</span>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                color: "var(--color-bark)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Este artigo tem caráter informativo e não substitui o acompanhamento psicológico
              profissional. Em caso de sofrimento emocional, procure um psicólogo.
            </p>
          </div>

          {/* Conteúdo em HTML */}
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "var(--color-bark)",
              lineHeight: 1.85,
            }}
          />

          {/* CSS inline para o conteúdo */}
          <style>{`
            .prose-content h2 {
              font-family: var(--font-serif);
              font-size: 1.55rem;
              font-weight: 600;
              color: var(--color-bark);
              margin: 2.5rem 0 0.75rem;
              line-height: 1.2;
            }
            .prose-content p {
              margin: 0 0 1.25rem;
            }
            .prose-content ul, .prose-content ol {
              padding-left: 1.5rem;
              margin: 0 0 1.25rem;
            }
            .prose-content li {
              margin-bottom: 0.5rem;
            }
            .prose-content strong {
              color: var(--color-bark-deep);
              font-weight: 600;
            }
            .prose-content a {
              color: var(--color-moss);
              text-decoration: none;
              border-bottom: 1px solid var(--color-moss-light);
            }
          `}</style>
        </motion.div>
      </section>

      {/* CTA — Formulário */}
      <section
        style={{
          background: "var(--color-moss-pale)",
          padding: "4rem 1.5rem 5rem",
          borderTop: "1px solid var(--color-moss-light)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-moss)",
              marginBottom: "0.75rem",
            }}
          >
            Próximo passo
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 600,
              color: "var(--color-bark)",
              lineHeight: 1.2,
              marginBottom: "0.75rem",
            }}
          >
            Pronto para começar sua jornada?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "var(--color-mist)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            Entre em contato e agende sua primeira consulta. O cuidado começa com um passo.
          </p>
          <LeadForm />
        </motion.div>
      </section>
    </>
  );
}