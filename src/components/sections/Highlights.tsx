import { useState, useEffect } from "react";

import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import img7 from "../../assets/gallery/img7.jpg";
import img8 from "../../assets/gallery/img8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Highlights = () => {
  const [index, setIndex] = useState<number | null>(null);

  // ESC closes modal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight" && index !== null) setIndex((i) => (i! + 1) % images.length);
      if (e.key === "ArrowLeft" && index !== null) setIndex((i) => (i! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index]);

  useEffect(() => {
    if (index !== null) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [index]);

  useEffect(() => {
    const body = document.body;

    if (index !== null) {
      body.classList.add("no-scroll", "lightbox-open-global");
    } else {
      body.classList.remove("no-scroll", "lightbox-open-global");
    }

    return () => body.classList.remove("no-scroll", "lightbox-open-global");
  }, [index]);

  return (
    <section id="highlights" className={`lbp-section lbp-highlights ${index !== null ? "lightbox-open" : ""}`}>
      <div className="lbp-section-inner">
        <div className="section-title-line">
          <span>Iš Pub'o Gyvenimo</span>
        </div>

        <div className="gallery-grid">
          {images.map((src, i) => (
            <div key={i} className="gallery-item" onClick={() => setIndex(i)}>
              <img src={src} alt={`Gallery ${i}`} />
            </div>
          ))}
        </div>
      </div>
      {/* LIGHTBOX MODAL */}
      {index !== null && (
        <div className="lightbox-overlay" onClick={() => setIndex(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setIndex(null)}>
              ✕
            </button>

            <button
              className="lightbox-arrow left"
              onClick={() => setIndex((index - 1 + images.length) % images.length)}
            >
              ❮
            </button>

            <img src={images[index]} className="lightbox-image" />

            <button className="lightbox-arrow right" onClick={() => setIndex((index + 1) % images.length)}>
              ❯
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Highlights;
