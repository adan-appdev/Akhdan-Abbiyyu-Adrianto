import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Background Effects */}
      <div className="bg-effects">
        <div className="bg-blob blob1"></div>
        <div className="bg-blob blob2"></div>
        <div className="bg-blob blob3"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />

      {/* Scroll To Top Button */}
      <button
        className={`scroll-top ${showTop ? "show" : ""}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </>
  );
}

export default App;