import { useEffect, useRef, useState } from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {
  const roles = [
    "Web Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "Graphic Designer",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState("typing");

  const heroRef = useRef(null);
  const imageRef = useRef(null);

  /* ===============================
     CINEMATIC TYPING
  =============================== */
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (phase === "typing") {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setPhase("fadeOut"), 1500);
        }
      }, 80);
    } else if (phase === "fadeOut") {
      timeout = setTimeout(() => {
        setText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setPhase("typing");
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex]);

  /* ===============================
     PARALLAX + 3D TILT
  =============================== */
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageRef.current || !heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 40;
      const rotateY = (centerX - x) / 40;

      imageRef.current.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="particles"></div>

      <div className="hero-content">
        <h1 className="hero-title reveal">
          Akhdan Abbiyyu Adrianto
        </h1>

        <h2 className={`typing ${phase === "fadeOut" ? "fade-out" : ""}`}>
          {text}
          <span className="cursor"></span>
        </h2>
      </div>

      <div className="hero-img-wrapper">
        <div className="hero-img" ref={imageRef}>
          <img src={profile} alt="Akhdan" />
        </div>
      </div>

      <div className="scroll-indicator"></div>
    </section>
  );
}