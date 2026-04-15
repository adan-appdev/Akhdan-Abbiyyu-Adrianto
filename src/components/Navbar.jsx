export default function Navbar() {
  const links = ["home", "about", "education", "achievements", "projects", "contact"];

  return (
    <nav className="navbar">
      <div className="logo">Portofolio Adan</div>

      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}