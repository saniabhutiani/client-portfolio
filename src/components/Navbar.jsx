import { useState } from "react";
import logo from "../assets/logo/logo.png";

export default function Navbar() {

  const [active, setActive] = useState("about");

  return (
    <div className="navbar">

      <div className="logo-section">
        <img src={logo} alt="Premium Decor Logo" />
        <h2>Premium Decor</h2>
      </div>

      <div className="nav-links">
        <a
          href="#about"
          className={active === "about" ? "active" : ""}
          onClick={() => setActive("about")}
        >
          About
        </a>

        <a
          href="#services"
          className={active === "services" ? "active" : ""}
          onClick={() => setActive("services")}
        >
          Services
        </a>

        <a
          href="#projects"
          className={active === "projects" ? "active" : ""}
          onClick={() => setActive("projects")}
        >
          Projects
        </a>

        <a
          href="#skills"
          className={active === "skills" ? "active" : ""}
          onClick={() => setActive("skills")}
        >
          Skills
        </a>

        <a
          href="#contact"
          className={active === "contact" ? "active" : ""}
          onClick={() => setActive("contact")}
        >
          Contact
        </a>

        <a
          href="https://www.instagram.com/premium_decor_interiors/"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-link"
        >
          Instagram
        </a>
      </div>

      <a href="#contact" className="btn">Get Inquiry</a>

    </div>
  );
}
