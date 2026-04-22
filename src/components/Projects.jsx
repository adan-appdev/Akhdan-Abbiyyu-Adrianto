import project10 from "../assets/project10.jpg";
import project8 from "../assets/project8.jpg";
import project7 from "../assets/project7.jpg";
import project9 from "../assets/project9.jpg";
import project11 from "../assets/project11.jpg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";

export default function Projects() {

  const projects = [
    {
      image: project10,
      repo: "https://github.com/adan-appdev/ui-telkomsel",
      title: "UI Telkomsel Flutter",
    },
    {
      image: project8,
      repo: "https://github.com/adan-appdev/travelapp",
      title: "Travel App UI Flutter",
    },
    {
      image: project7,
      repo: "https://github.com/adan-appdev/gojekeren",
      title: "Gojek UI Flutter",
    },
    {
      image: project9,
      repo: "https://github.com/adan-appdev/aplikasi-mahasiswa",
      title: "Aplikasi Mahasiswa Flutter",
    },
    {
      image: project11,
      repo: "https://github.com/adan-appdev/ui-telkomsel",
      title: "UI Telkomsel Flutter",
    },
    {
      image: project1,
      demo: "https://jelajah-nusantara-mocha.vercel.app",
      repo: "https://github.com/adan-appdev/Jelajah-Nusantara",
      title: "Jelajah Nusantara",
    },
    {
      image: project2,
      demo: "https://coffe-shop-kalcer-edbs.vercel.app/",
      repo: "https://github.com/adan-appdev/coffe-shop-kalcer",
      title: "Coffee Shop",
    },
    {
      image: project3,
      demo: "https://portofolio-next-js-adan.vercel.app/",
      repo: "https://github.com/adan-appdev/portofolio-next-js",
      title: "Simple Portfolio",
    },
    {
      image: project4,
      demo: "https://ui-yumit.vercel.app/",
      repo: "https://github.com/adan-appdev/UI-Yumit",
      title: "Landing Page Promosi",
    },
    {
      image: project5,
      demo: "https://bendahara-sage.vercel.app/",
      repo: "https://github.com/adan-appdev/bendahara",
      title: "Website Bendahara Kelas",
    },
    {
      image: project6,
      demo: "https://traveling-for-touris-54eq.vercel.app/",
      repo: "https://github.com/adan-appdev/travel",
      title: "Travel App UI",
    },
  ];

  const handleMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = (card) => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title projects-title">Project</h2>

      <div className="projects-grid">
        {projects.map((item, index) => (
          <div
            key={index}
            className="project-card"
            onMouseMove={(e) => handleMove(e, e.currentTarget)}
            onMouseLeave={(e) => resetTilt(e.currentTarget)}
          >
            <img src={item.image} alt={item.title} />

            <div className="project-overlay">
              <h3>{item.title}</h3>

              <div className="project-buttons">

                {item.demo && (
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-demo"
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-repo"
                >
                  View Repo
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}