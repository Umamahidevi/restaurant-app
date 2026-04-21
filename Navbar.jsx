import { useState, useEffect } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);

      const sections = ["home", "about", "menu", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          window.scrollY >= element.offsetTop - 120 &&
          window.scrollY < element.offsetTop + element.offsetHeight
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${sticky ? "navbar-sticky" : ""}`}>
      <div className="nav-container">
        <h2 className="logo">
          INDIAN<span>RESTAURANT</span>
        </h2>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {["home", "about", "services", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={active === item ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
<button
  className="nav-cta"
  onClick={() => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }}
>
  Get Quote
</button>
        </nav>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;