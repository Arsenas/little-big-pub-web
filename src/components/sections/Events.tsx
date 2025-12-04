const Events = () => {
  return (
    <section id="events" className="lbp-section lbp-events">
      <div className="lbp-section-inner">
        <div className="events-clean-grid">
          {/* LEFT */}
          <div className="events-clean-left">
            <h2>Renginiai ir vakarai</h2>
            <p>
              Naujausi renginiai, koncertai, teminiai vakarai ir stalo futbolo turnyrai visada skelbiami mūsų Facebook
              puslapyje.
            </p>
          </div>

          {/* RIGHT */}
          <div className="events-clean-right">
            <p>Žiūrėk, kas vyksta artimiausiu metu:</p>
            <a
              href="https://www.facebook.com/LittleBigBaras/events"
              target="_blank"
              rel="noreferrer"
              className="lbp-btn lbp-btn-primary"
            >
              Atidaryti Facebook renginius
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
