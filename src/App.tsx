// src/App.tsx
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import AboutPub from "./components/sections/AboutPub";
import Highlights from "./components/sections/Highlights";
import Events from "./components/sections/Events";
import VisitUs from "./components/sections/VisitUs";
import Newsletter from "./components/sections/ContactUs";

const App = () => {
  return (
    <div className="lbp-root">
      <Header />
      <main>
        <Hero />
        <AboutPub />
        <Highlights />
        <Events />
        <VisitUs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
