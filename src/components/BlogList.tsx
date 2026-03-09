import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "../constants";

interface BlogListProps {
  limit?: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function BlogList({ limit }: BlogListProps) {
  const posts = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;

  return (
    <section
      style={{
        background: "var(--color-fog)",
        borderTop: "1px solid var(--color-rule)",
        padding: "5rem 6%",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "3rem" }}
        >
          <div style={{
            display: "flex", alignItems: "center", gap: "12px",
            fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--color-moss-mid)",
            marginBottom: "14px",
          }}>
            <span style={{ width: "24px", height: "1px", background: "var(--color-moss-mid)" }} />
            Blog & Artigos
          </div>
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 300,
              color: "var(--color-bark-deep)",
              lineHeight: 1.12,
              margin: 0,
            }}>
              Artigos sobre <em style={{ fontStyle: "italic", color: "var(--color-moss)" }}>saúde mental</em>
            </h2>
            <Link
              to="/blog"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 500,
                color: "var(--color-moss)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                borderBottom: "1px solid var(--color-moss-light)",
                paddingBottom: "2px",
                whiteSpace: "nowrap",
              }}
            >
              Ver todos <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>

        {/* Grid de posts */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}>
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
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
                    borderRadius: "18px",
                    padding: "28px 24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.875rem",
                    transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--color-moss-light)";
                    el.style.boxShadow = "0 8px 32px rgba(74,103,65,0.10)";
                    el.style.transform = "translateY(-4px)";
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
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.68rem", fontWeight: 600,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "var(--color-moss-mid)",
                    }}>
                      {post.category}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.15rem", fontWeight: 400,
                    color: "var(--color-bark)", lineHeight: 1.3,
                    margin: 0, flexGrow: 1,
                  }}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem", fontWeight: 300,
                    color: "var(--color-mist)", lineHeight: 1.65, margin: 0,
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Rodapé */}
                  <div style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "auto", paddingTop: "1rem",
                    borderTop: "1px solid var(--color-rule)",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--color-mist)" }}>
                      <Clock size={12} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem" }}>
                        {post.readTime} de leitura
                      </span>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-sans)", fontSize: "0.75rem",
                      fontWeight: 500, color: "var(--color-moss)",
                      display: "flex", alignItems: "center", gap: "0.3rem",
                    }}>
                      Ler artigo <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;