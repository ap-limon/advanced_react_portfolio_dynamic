import React, { useState, useEffect } from "react";
import "./../styles/components/_Navbar.scss";

const Navbar = () => {
  const [theme, setTheme] = useState("light"); //theme state
  const [activeSection, setActiveSection] = useState("home"); //track activesection to handle fade in/out
  const [isScrollingUp, setIsScrollingUP] = useState(false); //track the direction of scro
    const [isLoaded, setIsLoaded] = useState(false); //track page load state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //newstate for mobile responsive purpose

  //local theme from localstorage on mount
  useEffect(() => {
    const savedThems = localStorage.getItem("theme");
    if (savedThems) {
      setTheme(savedThems);
      document.body.className =
        savedThems === "light" ? "light-mode" : "dark-mode";
    } else {
      document.body.className = "light-mode";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme === "light" ? "light-mode" : "dark-mode"; //for Css-based theme switching
    localStorage.setItem("theme", newTheme); //save user preference in localStroage
  };

  //track scroll position, and intersectionObserver(to check if the section into view) to manage navbar show/hide
  useEffect(() => {
    document.body.className = theme === "light" ? "light-mode" : "dark-mode";

    setIsLoaded(true);

    let lastScroll = window.scrollY;

    //interationObserver for handling the active links
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { 
            console.log(entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    //observe the sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    //Navbar scroll up visibility handler
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        //scrolling down - hide navbar
        setIsScrollingUP(false);
        setIsLoaded(false);
      } else if (currentScroll < lastScroll) {
        //scrolling up - show navbar
        setIsScrollingUP(true);
      }
      lastScroll = currentScroll; // update the lastScroll to current position
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [theme]);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  //for smooth scrolling behavior
  const handleNavClick = (e, target) => {
    e.preventDefault();
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }

  return (
    <nav
      className={`navbar ${isScrollingUp ? "visible" : "hidden"} ${
        isLoaded ? "fade-in" : ""
      }`}
    >
      <div className="navbar-container">
        <div className="logo">
          <span className="letter">A</span>
          <span className="letter">P</span>
          <span className="letter">L</span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#home"
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={(e) => handleNavClick(e, "#about")}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${
                activeSection === "projects" ? "active" : ""
              }`}
              onClick={(e) => handleNavClick(e, "#projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌞" : "🌙"}
        </button>
        <div
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
