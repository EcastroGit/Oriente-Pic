import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/TitleH2";
import p1image from "../assets/posts-images/p1image.webp";
import p2image from "../assets/posts-images/p2image.webp";
import p3image from "../assets/posts-images/p3image.webp";


function Blog() {
  const posts = [
    {
      key: "Post1",
      image: p1image,
      title:
        "Explorando el Oriente Antioqueño: Un paraíso turístico por descubrir.",
      description:
        "El oriente es un lugar lleno de riqueza natural, con verdes paisajes y fuentes hídricas.",
      slug: "explorando-oriente"
    },
    {
      key: "Post2",
      image: p2image,
      title: "Descubre rutas para realizar caminatas ecológicas.",
      description:
        "En el Oriente Antioqueño encuentras múltiples municipios donde puedes practicar senderismo.",
      slug: "caminatas-ecologicas"
    },
    {
      key: "Post3",
      image: p3image,
      title: "El Oriente Antioqueño: paraíso de fuentes hídricas",
      description:
        "Descubre maravillosas fuentes hídricas, para bañarte y disfrutar aguas naturales",
      slug: "fuentes-hidricas"
    }
  ];

  return (
    <BlogWrap>
      <Helmet>
        <title>Blog - Scenery</title>
        <meta
          name="description"
          content="Encuentra artículos sobre turismo y lugares del Oriente Antioqueño."
        />
      </Helmet>


      <section>
        <Title
          title="Blog"
          description="En esta sección encuentras artículos interesantes sobre turismo y bellos lugares
        por descubrir en antioquia."
        />
      </section>

      <section>
        <div id="posts">
          {posts.map((post) => (
            <div key={post.key} className="post-card">
              <Link to={`/blog/${post.slug}`}>
                <div id="post-image">
                  <img src={post.image} alt="ejemplo" />
                </div>
                <div id="post-text">
                  <p>
                    <strong>{post.title}</strong>
                  </p>
                  <p>{post.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </BlogWrap>
  );
}

export default Blog;

const BlogWrap = styled.main`
  width: 100%;
  padding-bottom: 6rem;

  #posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    a {
      text-decoration: none;
      color: black;
    }
  }

  .post-card {
    width: 250px;
    height: 320px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.7s ease;
      &:hover {
        cursor: pointer;
        transform: scale(1.03);
      }

    #post-image {
      margin-bottom: 10px;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
    }

    #post-text {
      height: auto;
      margin-bottom: 10px; /* Agregamos margen inferior */
      text-align: left;
      p {
        margin: 5px 0;
      }
    }
  }
`;
