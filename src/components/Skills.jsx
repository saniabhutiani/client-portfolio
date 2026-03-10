import bedroom1 from "../assets/skills/bedroom1.jpg";
import bedroom2 from "../assets/skills/lobbydesign.jpg";
import bedroom3 from "../assets/skills/bedroom3.jpg";
import bedroom4 from "../assets/skills/bedroom4.jpg";
import office1 from "../assets/skills/bedroom5.jpg";
import office2 from "../assets/skills/bedroom6.jpg";
import wallpaper from "../assets/skills/cupboard.jpg";
import styling from "../assets/skills/bedroom8.jpg";
import expertiseImg from "../assets/skills/bedroom9.jpg";
import Office from "../assets/skills/office1.jpg";

export default function Skills() {

  const expertise = [
  { title: "Bedroom Design", desc: "Elegant bedroom interiors.", img: bedroom1 },
  { title: "Premium Design", desc: "Premium design concepts.", img: bedroom2 },
  { title: "Bedroom Interior Design", desc: "Functional bedroom designs.", img: bedroom3 },
  { title: "Bedroom Interior", desc: "Professional bedroom setup.", img: office1 },
  { title: "Bedroom Design", desc: "Modern workspace interiors.", img: office2 },
  { title: "Cupboard Design", desc: "Creative styling.", img: wallpaper },
  { title: "Wall Styling", desc: "Premium wall styling textures.", img: styling },
  { title: "Interior Design", desc: "Premium elegant concept.", img: expertiseImg },
  { title: "Office Design", desc: "Modern office storage solutions.", img: Office},
];

  return (
    <section id="skills" className="section">

      <h2><b>Our Expertise</b></h2>

      <div className="project-grid">
        {expertise.map((item, index) => (
          <div key={index} className="project-card">

            <img src={item.img} alt={item.title} />

            <div className="hover-overlay">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

            <div className="title-bar">
              {item.title}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}