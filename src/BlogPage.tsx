import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "./constants";
import { SEO } from "./components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog | Psico Maringá — Saúde Mental & Psicologia"
        description="Artigos informativos sobre ansiedade, depressão, terapia e bem-estar emocional. Conteúdo baseado em evidências para você entender melhor a saúde mental."
      />

      {/* Hero */}
      <section
        style={{
          background: "var(--color-bark-deep)",
          padding: "6rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decoração de fundo */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(74,103,65,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <BookOpen size={14} color="var(--color-moss-light)" />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-moss-light)",
                }}
              >
                Blog & Artigos
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--color-cream)",
                lineHeight: 1.12,
                marginBottom: "1.25rem",
              }}
            >
              Saúde mental com base em evidências
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                color: "rgba(253,252,249,0.65)",
                lineHeight: 1.75,
                maxWidth: "560px",
              }}
            >
              Artigos informativos sobre psicologia, saúde emocional e bem-estar. Conteúdo responsável
              para ajudar você a entender melhor a sua mente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lista de artigos */}
      <section
        style={{
          background: "var(--color-fog)",
          padding: "4rem 1.5rem 6rem",
          minHeight: "60vh",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {BLOG_POSTS.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 0",
                color: "var(--color-mist)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Nenhum artigo publicado ainda. Volte em breve!
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {BLOG_POSTS.map((post, i) => (
                <motion.article
                  key={post.slug}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{ textDecoration: "none", display: "block", height: "100%" }}
                  >
                    <div
                      style={{
                        background: "var(--color-cream)",
                        border: "1px solid var(--color-rule)",
                        borderRadius: "4px",
                        padding: "2rem",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        transition:
                          "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "var(--color-moss-light)";
                        el.style.boxShadow = "0 8px 32px rgba(74,103,65,0.10)";
                        el.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "var(--color-rule)";
                        el.style.boxShadow = "none";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {/* Categoria */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <Tag size={11} color="var(--color-moss-mid)" />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--color-moss-mid)",
                          }}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Título */}
                      <h2
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          color: "var(--color-bark)",
                          lineHeight: 1.3,
                          margin: 0,
                          flexGrow: 1,
                        }}
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.88rem",
                          color: "var(--color-mist)",
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Rodapé */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "auto",
                          paddingTop: "1rem",
                          borderTop: "1px solid var(--color-rule)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            color: "var(--color-mist)",
                          }}
                        >
                          <Clock size={12} />
                          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem" }}>
                            {post.readTime} de leitura
                          </span>
                        </div>
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "var(--color-moss)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.3rem",
                          }}
                        >
                          Ler artigo <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}