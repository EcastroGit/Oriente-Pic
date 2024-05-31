import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/TitleH2";
import { posts } from "../data/blogFeedCards";

function Blog() {
  return (
    <BlogWrap>
      <Helmet>
        <title>Blog - Oriente Pic</title>
        <meta
          name="description"
          content="Artículos sobre turismo, actualidad y lugares por descubrir en el Oriente Antioqueño."
        />
      </Helmet>

      <section>
        <Title
          title="Blog"
          description="Artículos sobre turismo, actualidad y lugares por descubrir en el Oriente Antioqueño."
        />
      </section>

      <section>
        <div id="posts">
          {posts.map((post) => (
            <div key={post.key} className="post-card">
              <Link to={`/blog/${post.slug}`}>
                <div id="post-image">
                  <img src={post.image} alt="Portada de blog" />
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
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    transition: transform 0.7s ease;
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      box-shadow: 0px 0px 7px rgba(230, 50, 0, 0.6);
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
