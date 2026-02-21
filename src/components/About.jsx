import aboutImg from "../assets/about/about1.jpg";

export default function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-hero">
        <img src={aboutImg} alt="Interior Design" />

        <div className="about-overlay">
          <div className="about-text">
            <h2>About Premium Decor</h2>
            <p>
              Premium Decor is a modern interior design studio focused on 
              transforming spaces into elegant, functional, and luxurious environments.
              We specialize in wallpapers, flooring, ceiling designs, blinds,
              modular kitchens, office interiors, and complete home styling solutions.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
