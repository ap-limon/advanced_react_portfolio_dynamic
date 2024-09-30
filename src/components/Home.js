import React from "react";
import silhouetteImage from "../assets/hero_banner_slihouetteimage.png";
import "./../styles/components/_Home.scss";

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="hero-content">
        <div className="hero-image">
          <img src={silhouetteImage} alt="hero banner image" />
        </div>
        <div className="hero-text">
          <h1>Hello, I'm Anik Paul Limon</h1>
          <p>
            A Junior Insights Strategist and Web Developer. <br />
            I create interactive websites and analyze business data to deliver actionable insights.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn">Projects</a>
            <a href="#contact" className="btn">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Home;