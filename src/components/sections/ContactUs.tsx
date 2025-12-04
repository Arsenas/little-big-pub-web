import { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Rezervacijos forma dar neprijungta — integruosim vėliau 🙂");
  };

  return (
    <section id="contact" className="lbp-section lbp-contact">
      <div className="lbp-section-inner contact-grid">
        {/* LEFT COLUMN */}
        <div className="contact-left">
          <h2>Susisiekite su mumis</h2>
          <p>
            Norite rezervuoti pub'ą gimtadieniui, įmonės vakarui ar jaukiam susibūrimui? Užpildykite formą — atsakysime
            kuo greičiau.
          </p>
        </div>

        {/* RIGHT COLUMN — FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Jūsų vardas"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            aria-label="Jūsų vardas"
          />

          <input
            type="email"
            name="email"
            placeholder="El. paštas"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            aria-label="El. paštas"
          />

          <input
            type="text"
            name="phone"
            placeholder="Telefono numeris"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            aria-label="Telefono numeris"
          />

          <textarea
            name="message"
            placeholder="Trumpai parašykite, kuo galime padėti"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
            aria-label="Žinutė"
          ></textarea>

          <button type="submit" className="lbp-btn lbp-btn-primary contact-submit" aria-label="Siųsti užklausą">
            Siųsti užklausą
          </button>

          <p className="contact-note">
            Jūsų duomenys bus naudojami tik užklausos administravimui ir nebus perduodami tretiesiems asmenims.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
