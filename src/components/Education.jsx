export default function Education() {
  const schools = [
    {
      name: "TK Akademika",
      desc: "TK • 2013 - 2014",
    },
    {
      name: "SD Negeri Blimbing 1 Malang",
      desc: "Sekolah Dasar • 2015 - 2021",
    },
    {
      name: "SMP Negeri 24 Malang",
      desc: "Sekolah Menengah Pertama • 2021 - 2024",
    },
    {
      name: "SMK Negeri 8 Malang",
      desc: "Rekayasa Perangkat Lunak • 2024 - ....",
    },
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-title education-title">Pendidikan</h2>

      <div className="education-grid">
        {schools.map((item, index) => (
          <div className="education-card" key={index}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}