export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title about-title">About Me</h2>
      <p>
       Sedikit perkenalan tentang saya, saya adalah seorang remaja yang sangat suka berexplor, saya sangat suka mencari pengalaman baru, 
       tetapi saya memiliki beberapa kekurangan salah satunya adalah saya adalah anak yang gampang bosan, jadi untuk mengatasi masalah
       ini aku selalu belajar atau mengerjakan suatu tugas dengan cara yang berbeda beda, saya mengerjakan di coffe shop, di halaman rumah,
       di taman, dan lain lain. Saya adalah anak ketiga dari tiga bersaudara, harapan saya adalah saya bisa menuju ke jalan kesuksesan melalui
       kemampuan yang sedang saya latih yaitu Rekayasa Perangkat Lunak. Saya memiliki beberapa hobi, saya sangat suka bersepeda hampir setiap
       minggu aku bersepeda bersama teman teman ku dengan rute yang lumayan panjang, selain itu saya sangat suka mendaki gunung, hampir semua 
       gunung di jawa timur sudah saya daki. Nah selanjutnya karna saya sekolah dengan jurusan RPL saya menguasai beberapa hal
       diantaranya adalah : 
      </p>

<div className="skills">
  {[
    { name: "React", level: 95 },
    { name: "Flutter", level: 90 },
    { name: "UI/UX", level: 80 },
    { name: "Graphic Design", level: 98 },
  ].map((skill, i) => (
    <div key={i} className="skill-card">
      
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percent">{skill.level}%</span>
      </div>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${skill.level}%` }}
        />
      </div>

    </div>
  ))}
</div>
    </section>
  );
}