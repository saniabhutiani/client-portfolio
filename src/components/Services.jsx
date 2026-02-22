import { useState } from "react";

import s1 from "../assets/skills/wallpaper1.jpg";
import s2 from "../assets/skills/flooring.jpg";
import s3 from "../assets/skills/falseceiling.jpg";
import s4 from "../assets/skills/blind.jpg";
import s5 from "../assets/skills/artificalgarden.jpg";
import s6 from "../assets/skills/singlehouse.jpg";
import s7 from "../assets/skills/allivation.jpg";
import s8 from "../assets/skills/bedroominterior.jpg";
import s9 from "../assets/skills/stretchceiling.jpg";

export default function Services() {

  const [active, setActive] = useState(null);

  const services = [
    { img: s1, title: "Wallpaper", desc: "Premium wall textures & designs." },
    { img: s2, title: "Flooring", desc: "Luxury wooden & vinyl flooring." },
    { img: s3, title: "Ceiling Design", desc: "Modern ceiling concepts." },
    { img: s4, title: "Blinds", desc: "Stylish window blinds solutions." },
    { img: s5, title: "Artifical Garden", desc: "Beautiful indoor greenery setup." },
    { img: s6, title: "Shingles", desc: "Elegant wooden wall panels." },
    { img: s7, title: "Allivation", desc: "Durable & aesthetic PVC work." },
    { img: s8, title: "Bedroom Interior", desc: "Creative lighting ceiling design." },
    { img: s9, title: "Stretch Ceiling", desc: "Complete luxury interior setup." },
  ];

  return (
    <section id="services" className="section light">
      <h2>Our Services</h2>

      <div className="project-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="project-card"
            onClick={() => setActive(index)}
          >
            <img src={service.img} alt={service.title} />
            <div className="overlay">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {active !== null && (
        <div className="service-detail">
          <h3>{services[active].title}</h3>
          <p>{services[active].desc}</p>
          <button onClick={() => setActive(null)}>Close</button>
        </div>
      )}
    </section>
  );
}
