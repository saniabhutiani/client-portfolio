import bedroom1 from "../assets/skills/bedroom1.jpg";
import bedroom2 from "../assets/skills/bedroom2.jpg";
import kitchen1 from "../assets/skills/modularkitchen1.jpg";
import kitchen2 from "../assets/skills/modularkitchen2.jpg";
import office1 from "../assets/skills/office1.jpg";
import office2 from "../assets/skills/office2.jpg";
import wallpaper from "../assets/skills/wall1.jpg";
import styling from "../assets/skills/wall2.jpg";
import expertiseImg from "../assets/skills/wall3.jpg";

export default function Skills() {

  const expertise = [
    { title: "Bedroom Design", desc: "Elegant bedroom interiors.", img: bedroom1 },
    { title: "Modern Bedroom", desc: "Premium bedroom concepts.", img: bedroom2 },
    { title: "Modular Kitchen", desc: "Functional kitchen designs.", img: kitchen1 },
    { title: "Contemporary Kitchen", desc: "Smart storage solutions.", img: kitchen2},
    { title: "Office Interior", desc: "Professional office setup.", img: office1 },
    { title: "Corporate Office", desc: "Modern workspace interiors.", img: office2 },
    { title: "Wallpaper Design", desc: "Creative wall styling.", img: wallpaper },
    { title: "Wall Styling", desc: "Premium wall textures.", img: styling },
    { title: "Luxury Interior", desc: "Premium elegant living concept.", img: expertiseImg },
  ];

 return (
  <section id="skills" className="section">

    <h2><b>Our Expertise</b></h2>

    <div className="project-grid">
      {expertise.map((item, index) => (
        <div key={index} className="project-card">

          <img src={item.img} alt={item.title} />

          {/* SAME HOVER STYLE AS PROJECTS */}
          <div className="hover-overlay">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>

          {/* BOTTOM TITLE BAR */}
          <div className="title-bar">
            {item.title}
          </div>

        </div>
      ))}
    </div>

  </section>
 );

}
