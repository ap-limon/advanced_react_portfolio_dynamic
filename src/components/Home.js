import React from "react";
import silhouetteImage from "../assets/hero_banner_slihouetteimage.webp";
import "./../styles/components/_home.scss";

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="hero-card">
        <div className="text-content">
          <h1>Welcome to Portfolio</h1>
          <p>
            Hello, I am Anik Paul Limon, a front-end Developer, specializing in
            creating dynamic and moder web experience. I will build websites for
            you.
          </p>
          <div className="cta-buttons">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={ silhouetteImage } alt="Developer silhouette"/>
        </div>
      </div>
    </section>
  );
}


export default Home;