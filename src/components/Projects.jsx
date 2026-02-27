import p1 from "../assets/projects/project1.jpg";
import p2 from "../assets/projects/project2.jpg";
import p3 from "../assets/projects/project3.jpg";
import p4 from "../assets/projects/project4.jpg";
import p5 from "../assets/projects/project5.jpg";
import p6 from "../assets/projects/project6.jpg";
import p7 from "../assets/projects/project7.jpg";
import p8 from "../assets/projects/project8.jpg";
import p9 from "../assets/projects/project9.jpg";
import p10 from "../assets/projects/project10.jpg";
import p11 from "../assets/projects/project11.jpg";
import p12 from "../assets/projects/project12.jpg";
import p13 from "../assets/projects/project13.jpg";
import p14 from "../assets/projects/project14.jpg";
import p15 from "../assets/projects/project15.jpg";


export default function Projects() {

  const projects = [
    { img: p1, title: "Project 1", desc: "Elegant modern interior concept." },
    { img: p2, title: "Project 2", desc: "Luxury bedroom transformation." },
    { img: p3, title: "Project 3", desc: "Premium modular kitchen setup." },
    { img: p4, title: "Project 4", desc: "Stylish living room decor." },
    { img: p5, title: "Project 5", desc: "Creative wall styling solution." },
    { img: p6, title: "Project 6", desc: "Contemporary office interior." },
    { img: p7, title: "Project 7", desc: "Modern ceiling design concept." },
    { img: p8, title: "Project 8", desc: "Luxury flooring installation." },
    { img: p9, title: "Project 9", desc: "Premium home styling layout." },
    { img: p10, title: "Project 10", desc: "Elegant space transformation." },
    { img: p11, title: "Project 11", desc: "Luxury wall paneling design." },
    { img: p12, title: "Project 12", desc: "Modern lighting & decor theme." },
    { img: p13, title: "Project 13", desc: "Premium finishing interiors." },
    { img: p14, title: "Project 14", desc: "Stylish kitchen remodeling." },
    { img: p15, title: "Project 15", desc: "Minimal modern home design." },

  ];

  return (
    <section id="projects" className="section light">

      <h2>Our Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            <img src={project.img} alt={project.title} />

            {/* NORMAL TITLE BAR */}
            <div className="title-bar">
              {project.title}
            </div>

            {/* HOVER OVERLAY */}
            <div className="hover-overlay">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}