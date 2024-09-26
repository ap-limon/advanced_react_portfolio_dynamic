import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </>
    );
};


ReactDOM.createRoot(document.getElementById("root")).render(<App />);