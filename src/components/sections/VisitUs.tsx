// src/components/sections/VisitUs.tsx
const VisitUs = () => {
  return (
    <section id="visit" className="lbp-section lbp-visit">
      <div className="lbp-section-inner lbp-visit-grid">
        <div>
          <h2>Apsilankyk</h2>
          <p>Vingrių g. 17, Vilnius 01141</p>
          <p>+370 610 11831</p>
          <p>Kartais ramu, kartais triukšminga – bet visada gera atmosfera ir vietos istorijoms.</p>
        </div>

        <div className="lbp-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.8122161684205!2d25.275092177553102!3d54.677733472705356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd946cac6b1da7%3A0xd4066eeb0dfbe0a2!2sLittle%20Big%20Pub!5e0!3m2!1slt!2slt!4v1764800262356!5m2!1slt!2slt"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
