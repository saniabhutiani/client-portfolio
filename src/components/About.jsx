import aboutImg from "../assets/about.jpg";

export default function About() {

  return (

    <section id="about" className="about-section">

      <div className="about-top">

        <div className="about-image">
          <img src={aboutImg} alt="Premium Decor Interior" />
        </div>

        <div className="about-content">
          <h2>About Premium Decor</h2>

          <div className="about-highlights">
             <div className="highlight-box">✔ 5+ Years Experience</div>
            <div className="highlight-box">✔ 500+ Happy Clients</div>
            <div className="highlight-box">✔ Premium Materials</div>
             <div className="highlight-box">✔ On-Time Delivery</div>
</div>

          <p>
            Premium Decor is a modern interior design studio dedicated to
            transforming ordinary spaces into elegant, functional, and
            luxurious environments. We specialize in wallpapers, flooring,
            ceiling designs, blinds, modular kitchens, office interiors,
            and complete home styling solutions tailored to your lifestyle.
            Our goal is to deliver premium quality, modern aesthetics, and
            long-lasting comfort in every project we create.
          </p>
        </div>

      </div>

      {/* ⭐ FEATURES BELOW */}

      <div className="about-features">

        <div className="feature">
          <span>🏆</span>
          <h4>5+ Years Experience</h4>
          <p>Delivering premium interior solutions with proven expertise.</p>
        </div>

        <div className="feature">
          <span>✨</span>
          <h4>Premium Materials</h4>
          <p>We use only high-quality finishes for long-lasting luxury.</p>
        </div>

        <div className="feature">
          <span>🎯</span>
          <h4>Customized Designs</h4>
          <p>Every project is tailored to your lifestyle and needs.</p>
        </div>

        <div className="feature">
          <span>⏱️</span>
          <h4>On-Time Delivery</h4>
          <p>We complete projects efficiently without compromising quality.</p>
        </div>

      </div>

    </section>

  );
}