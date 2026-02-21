import { useState } from "react";

import s1 from "../assets/skills/service1.jpg";
import s2 from "../assets/skills/service2.jpg";
import s3 from "../assets/skills/wall1.jpg";
import s4 from "../assets/skills/wall2.jpg";
import s5 from "../assets/skills/bedroom1.jpg";
import s6 from "../assets/skills/modularkitchen1.jpg";
import s7 from "../assets/skills/office1.jpg";
import s8 from "../assets/skills/bedroom2.jpg";
import s9 from "../assets/skills/modularkitchen2.jpg";

export default function Services() {

  const [active, setActive] = useState(null);

  const services = [
    { img: s1, title: "Wallpaper", desc: "Premium wall textures & designs." },
    { img: s2, title: "Flooring", desc: "Luxury wooden & vinyl flooring." },
    { img: s3, title: "Ceiling Design", desc: "Modern ceiling concepts." },
    { img: s4, title: "Blinds", desc: "Stylish window blinds solutions." },
    { img: s5, title: "Artificial Garden", desc: "Beautiful indoor greenery setup." },
    { img: s6, title: "Wood Paneling", desc: "Elegant wooden wall panels." },
    { img: s7, title: "PVC Panels", desc: "Durable & aesthetic PVC work." },
    { img: s8, title: "Star Ceiling", desc: "Creative lighting ceiling design." },
    { img: s9, title: "Interior Styling", desc: "Complete luxury interior setup." },
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
