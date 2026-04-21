import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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