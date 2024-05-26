import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Places from "./pages/Places.js";
import Social from "./pages/Social.js";
import Blog from "./pages/Blog.js";
import Post1 from "./posts/Post1";
import Post2 from "./posts/Post2";
import Post3 from "./posts/Post3";
import About from "./pages/About.js";
import OrienteInfo from "./pages/OrienteInfo";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="App">
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
