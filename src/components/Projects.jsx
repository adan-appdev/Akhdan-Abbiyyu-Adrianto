import { useRef } from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

export default function Projects() {
  const projects = [
    {
      image: project1,
      link: "https://jelajah-nusantara-mocha.vercel.app",
      title: "Jelajah Nusantara",
    },
    {
      image: project2,
      link: "https://mind-ease-roan.vercel.app/",
      title: "Mind Ease",
    },
    {
      image: project3,
      link: "https://portofolio-next-js-adan.vercel.app/",
      title: "Simple portofolio",
    },
    {
      image: project4,
      link: "https://travelapp-theta-drab.vercel.app/",
      title: "Aplikasi Travel",
    },
  ];

  const handleMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = (card) => {
    card.style.transform = "rotateX(0) rotateY(0)";
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title projects-title">Project</h2>

      <div className="projects-grid">
        {projects.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            onMouseMove={(e) => handleMove(e, e.currentTarget)}
            onMouseLeave={(e) => resetTilt(e.currentTarget)}
          >
            <img src={item.image} alt={item.title} />

            <div className="project-overlay">
              <h3>{item.title}</h3>
              <span>View Project</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}