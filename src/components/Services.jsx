import s1 from "../assets/skills/wallpaper2.jpg";
import s2 from "../assets/skills/flooring.jpg";
import s3 from "../assets/skills/falseceiling.jpg";
import s4 from "../assets/skills/blind.jpg";
import s5 from "../assets/skills/artificalgarden.jpg";
import s6 from "../assets/skills/singlehouse.jpg";
import s7 from "../assets/skills/allivation.jpg";
import s8 from "../assets/skills/bedroominterior.jpg";
import s9 from "../assets/skills/stretchceiling.jpg";

export default function Services() {

  const services = [
    { img: s1, title: "Wallpaper" },
    { img: s2, title: "Flooring" },
    { img: s3, title: "Ceiling Design" },
    { img: s4, title: "Blinds" },
    { img: s5, title: "Artificial Garden" },
    { img: s6, title: "Shingles" },
    { img: s7, title: "Allivation" },
    { img: s8, title: "Bedroom Interior" },
    { img: s9, title: "Stretch Ceiling" },
  ];

  return (
    <section id="services" className="section light">
      <h2><b>Our Services</b></h2>

      <div className="cards-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">

            <img src={service.img} alt={service.title} />

            <div className="service-caption">
              {service.title}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}