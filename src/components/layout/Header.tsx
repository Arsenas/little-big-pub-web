import { useState } from "react";
import logo from "../../assets/little-big-pub-logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="lbp-header">
      <div className="lbp-header-inner">
        {/* LOGO (centered on mobile) */}
        <a href="#hero" className="lbp-logo">
          <img src={logo} alt="Little Big Pub logo" />
        </a>

        {/* DESKTOP NAV */}
        <nav className="lbp-nav">
          <a href="#about">Apie</a>
          <a href="#highlights">Galerija</a>
          <a href="#events">Renginiai</a>
          <a href="#visit">Apsilankyk</a>
          <a href="#contact" className="lbp-nav-cta">
            Susisiekti
          </a>
        </nav>

        {/* BURGER (mobile) */}
        <button className={`lbp-burger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`lbp-mobile-dropdown ${open ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>
          Apie
        </a>
        <a href="#highlights" onClick={() => setOpen(false)}>
          Galerija
        </a>
        <a href="#events" onClick={() => setOpen(false)}>
          Renginiai
        </a>
        <a href="#visit" onClick={() => setOpen(false)}>
          Apsilankyk
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Susisiekti
        </a>
      </div>
    </header>
  );
};

export default Header;
