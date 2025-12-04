// src/components/sections/Hero.tsx
import { useEffect, useState } from "react";
import hero from "../../assets/hero.jpg";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

const images = [hero, hero1, hero2, hero3];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="hero" className="lbp-hero">
      <img key={prevIndex + "-old"} src={images[prevIndex]} className="lbp-hero-bg hero-exit" alt="Background" />

      <img key={index + "-new"} src={images[index]} className="lbp-hero-bg hero-enter" alt="Background" />

      <div className="lbp-hero-overlay" />

      <div className="lbp-hero-content">
        <p className="lbp-hero-kicker">Vilniaus senamiesčio pub'as</p>
        <h1>LITTLE BIG PUB</h1>
        <p className="lbp-hero-subtitle">
          Mažas iš išorės, didelis viduje: židinys, muzika, stalo futbolas ir draugai iki ryto.
        </p>

        <div className="lbp-hero-actions">
          <a href="#contact" className="lbp-btn lbp-btn-primary">
            Susisiekite su mumis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
