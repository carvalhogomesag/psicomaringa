import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./Home";
import { SpecialtyPage } from "./SpecialtyPage";
import BlogPage from "./BlogPage";
import BlogPost from "./BlogPost";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/especialidade/:slug" element={<SpecialtyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Redireciona qualquer rota desconhecida para home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}