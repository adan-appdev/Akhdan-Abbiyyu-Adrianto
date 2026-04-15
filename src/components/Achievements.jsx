import cert1 from "../assets/achievements/cert1.jpg";
import cert2 from "../assets/achievements/cert2.jpg";
import cert3 from "../assets/achievements/cert3.jpg";
import cert4 from "../assets/achievements/cert4.jpg";
import cert5 from "../assets/achievements/cert5.jpg";
import cert6 from "../assets/achievements/cert6.jpg";

export default function Achievements() {
  const achievements = [
    {
      image: cert1,
      title: "Juara utama 1 lkbb masfest Se Malang Raya",
    },
    {
      image: cert2,
      title: "Juara Madya 3 lkbb Prasasti Se Malang Raya",
    },
    {
      image: cert3,
      title: "Juara Madya 1 lkbb Poltekad Se Jawa Timur",
    },
    {
      image: cert4,
      title: "Juara Caraka 2 lkbb Antareja Se Jawa Timur",
    },
    {
      image: cert5,
      title: "Juara Mula 3 lkbb juragan Se Malang Raya",
    },
    {
      image: cert6,
      title: "BERHASIL MENCAPAI PUNCAK GN RAUNG DALAM WAKTU 5 JAM ",
    },
  ];

  return (
    <section id="achievements" className="section">
     <h2 className="section-title education-title">Achievements</h2>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-img">
              <img src={item.image} alt={item.title} />
            </div>
            <p className="achievement-title">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}