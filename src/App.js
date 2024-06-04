import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/SiteHeader";
import Footer from "./components/SiteFooter";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Social from "./pages/Social";
import Blog from "./pages/Blog";
import Post1 from "./posts/Post1";
import Post2 from "./posts/Post2";
import Post3 from "./posts/Post3";
import About from "./pages/About";
import OrienteInfo from "./pages/OrienteInfo";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const theme = useSelector((state) => state.theme.themeMode);

  return (
    <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/social" element={<Social />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/explorando-oriente" element={<Post1 />} />
        <Route path="/blog/caminatas-ecologicas" element={<Post2 />} />
        <Route path="/blog/fuentes-hidricas" element={<Post3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/oriente-antioqueño" element={<OrienteInfo />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
