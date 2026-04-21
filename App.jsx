import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Offers from "./Offers";
import Reviews from "./Reviews";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Offers />
      <Reviews />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
