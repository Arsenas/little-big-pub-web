import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lbp-footer">
      <div className="lbp-footer-main">
        {/* COLUMN 1 — LOCATION */}
        <div className="footer-col">
          <h3>Little Big Pub</h3>
          <p>Vingrių g. 17, Vilnius</p>
          <p>+370 610 11831</p>
        </div>

        {/* COLUMN 2 — HOURS */}
        <div className="footer-col">
          <h4>Darbo laikas</h4>
          <p>Pirmadienis–Ketvirtadienis: 17:00 – 01:00</p>
          <p>Penktadienis–Šeštadienis: 17:00 – 03:00</p>
          <p>Sekmadienis: pagal nuotaiką 🍻</p>
        </div>

        {/* COLUMN 3 — SOCIAL */}
        <div className="footer-col">
          <h4>Sek mus</h4>

          <ul className="lbp-footer-social">
            <li>
              <a href="https://www.facebook.com/LittleBigBaras" target="_blank" rel="noreferrer">
                <FaFacebookF /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/littlebig_pub/" target="_blank" rel="noreferrer">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g274951-d11672297-Reviews-Little_Big_Pub-Vilnius_Vilnius_County.html"
                target="_blank"
                rel="noreferrer"
              >
                <FaTripadvisor /> TripAdvisor
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="lbp-footer-bottom">
        <span>© {new Date().getFullYear()} Little Big Pub, Vilnius</span>
        <a href="https://arsenij.dev" target="_blank" rel="noreferrer" className="lbp-dev">
          arsenij.dev
        </a>
      </div>
    </footer>
  );
};

export default Footer;
