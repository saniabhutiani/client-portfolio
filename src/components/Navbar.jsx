export default function Navbar() {
  return (
    <div className="navbar">

      {/* LEFT — LOGO */}
      <div className="logo-section">
        <a href="#home">
          <img src="/logo.png" alt="Premium Decor Logo" />
        </a>
      </div>

      {/* CENTER — LINKS */}
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>

        <a
          href="https://www.instagram.com/premium_decor_interiors/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>

      {/* RIGHT — BUTTON */}
      <a href="#contact" className="btn">
        Get Inquiry
      </a>

    </div>
  );
}