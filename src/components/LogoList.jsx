import companyLogo1 from "../assets/logo1.webp";
import companyLogo2 from "../assets/logo2.webp";
import companyLogo3 from "../assets/logo3.webp";
import companyLogo4 from "../assets/logo4.webp";
import companyLogo5 from "../assets/logo5.webp";
import companyLogo6 from "../assets/logo6.webp";
import companyLogo7 from "../assets/logo7.webp";
import companyLogo8 from "../assets/logo8.webp";
import companyLogo9 from "../assets/logo9.webp";
import companyLogo10 from "../assets/logo10.webp";
import companyLogo11 from "../assets/logo11.webp";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const logos = [
  { src: companyLogo1, alt: "NetSoft Logo", width: 160, height: 160, link: "https://www.netsoft-technology.com" },
  { src: companyLogo2, alt: "The Factory HKA Logo", width: 180, height: 180, link: "https://thefactoryhka.com/ve/productos/impresoras" },
  { src: companyLogo3, alt: "ISC Bunker Ramo Logo", width: 180, height: 180, link: "https://isc-bunkerramo.com/index.html" },
  { src: companyLogo4, alt: "AEG Logo", width: 180, height: 180, link: "https://alpha-eg.com" },
  { src: companyLogo5, alt: "PNP Logo", width: 120, height: 120, link: "https://desarrollospnp.com" },
  { src: companyLogo6, alt: "Sewoo Logo", width: 180, height: 180, link: "https://www.sewoo.eu" },
  { src: companyLogo7, alt: "ELEPOS Logo", width: 130, height: 130, link: "https://www.elepos.net" },
  { src: companyLogo8, alt: "POS Venezuela Logo", width: 120, height: 120, link: "https://posvenezuela.com" },
  { src: companyLogo9, alt: "Corporación ECRS Logo", width: 180, height: 180, link: "https://corporacionecrs.net" },
  { src: companyLogo10, alt: "MegaSoft Logo", width: 180, height: 180, link: "https://megasoft.com.ve"},
  { src: companyLogo11, alt: "NOVUS Logo", width: 120, height: 120, link: "https://novusd.net" },
];

const LogoList = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-screen-2xl mx-auto my-10 p-5"
    >
      {/* Impresoras fiscales */}
      <h3 className="text-center text-3xl text-primary font-bold mb-5">Impresoras fiscales</h3>
      <p className="text-base text-center text-tartiary mb-5">Aliados de confianza para la impresión fiscal en productos de Innova.</p>
      <div className="flex flex-wrap justify-center gap-6">
        {logos.slice(0, 10).map((logo, index) => (
          <a
            key={index}
            href={logo.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: "#e6e6e6",
              width: "180px",
              height: "180px",
              borderRadius: "10px",
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
              }}
            />
          </a>
        ))}
      </div>

      {/* Imprentas digitales */}
      <h3 className="text-center text-3xl text-primary font-bold mt-20 mb-5">Imprentas digitales</h3>
      <p className="text-base text-center text-tartiary mb-5">Aliados de confianza para la facturación digital en productos de Innova.</p>
      <div className="flex justify-center">
        <a
          href={logos[10].link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
          style={{
            backgroundColor: "#e6e6e6",
            width: "180px",
            height: "180px",
            borderRadius: "10px",
          }}
        >
          <img
            src={logos[10].src}
            alt={logos[10].alt}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
            }}
          />
        </a>
      </div>
    </motion.div>
  );
};

export default LogoList;