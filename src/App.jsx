import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Admin from "./products/Admin";
import POS from "./products/POS";
import Accounting from "./products/Accounting";
import PayRoll from "./products/PayRoll";
import Food from "./products/Food";
// import Pricing from "./components/Pricing";
import Footer from "./shared/Footer";
import RealStateSection from "./shared/RealStateSection";
import Others from "./products/Others";

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Eliminar el '#' para obtener solo el id
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Se hace el scroll suave hacia el elemento deseado
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      {/* IMPORTA LOS COMPONENTES */}
      <Navbar />
      <Home />
      <Features />
      <RealStateSection />
      <About />
      <Admin />
      <POS />
      <Accounting />
      <PayRoll />
      <Food />
      <Others />
      {/* <Pricing /> */}
      <Newsletter />
      <Footer />
    </>
  )
}

export default App;