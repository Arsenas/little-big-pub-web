import pubImg from "../../assets/pub.jpg";

const AboutPub = () => {
  return (
    <section id="about" className="lbp-section about-section">
      <div className="lbp-section-inner about-flex">
        <div className="about-content">
          <h2>Apie Little Big Pub</h2>
          <p>
            Little Big Pub – vieta, kur susitinka židinys, pintos ir istorijos. Vieni vakarai čia jaukūs ir tylūs, kiti
            – pilni juoko, muzikos ir stalo futbolo kovų.
          </p>
          <p>
            Turime židinį, draugišką komandą, senamiesčio kiemelį ir jaukią atmosferą, kuri priverčia sugrįžti dar ne
            kartą.
          </p>

          <ul className="about-bullets">
            <li>🔥 Židinys ir jaukumas</li>
            <li>🍺 Gėrimai kiekvieno skoniui</li>
            <li>🎲 Stalo futbolas ir žaidimai</li>
            <li>🎵 Muzika ir renginiai</li>
          </ul>
        </div>

        <div className="about-photo">
          <img src={pubImg} alt="Pub interior" />
        </div>
      </div>
    </section>
  );
};

export default AboutPub;
