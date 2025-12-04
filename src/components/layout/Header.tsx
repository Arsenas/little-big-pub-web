// src/components/layout/Header.tsx
import logo from "../../assets/little-big-pub-logo.png";

const Header = () => {
  return (
    <header className="lbp-header">
      <div className="lbp-header-inner">
        <a href="#hero" className="lbp-logo">
          <img src={logo} alt="Little Big Pub logo" />
        </a>

        <nav className="lbp-nav">
          <a href="#about">Apie</a>
          <a href="#highlights">Galerija</a>
          <a href="#events">Renginiai</a>
          <a href="#visit">Apsilankyk</a>
          <a href="#contact" className="lbp-nav-cta">
            Susisiekti
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
