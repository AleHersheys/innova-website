import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaLightbulb } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Función para avanzar al siguiente banner
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  // Función para retroceder al banner anterior
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  // Auto slide: se reinicia cada vez que currentIndex cambia
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex, banners.length]);

  const currentBanner = banners[currentIndex];

  // Maneja el clic del botón de acuerdo al banner activo
  const handleButtonClick = () => {
    if (currentIndex === 1) {
      window.open(
        "https://declaraciones.seniat.gob.ve/portal/page/portal/MANEJADOR_CONTENIDO_SENIAT/03TRIBUTOS/3-5.html",
        "_blank"
      );
    } else if (currentIndex === 2) {
      window.open("https://food.innovaprosystem.com", "_blank");
    } else {
      navigate("/partners");
    }
  };

  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 relative">
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-2xl z-10"
        aria-label="Previous Slide"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 text-white text-2xl z-10"
        aria-label="Next Slide"
      >
        <FaArrowRight />
      </button>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* Imagen con animación reiniciada en cada cambio */}
        <motion.div
          key={`img-${currentIndex}`}
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
        >
          <img
            src={currentBanner.banner}
            alt="Banner"
            className="lg:h-[386px] object-cover"
            style={{ width: "100%", height: "auto" }}
            loading="lazy"
            width="600"
            height="400"
          />
        </motion.div>
        {/* Contenido con animación reiniciada */}
        <motion.div
          key={`content-${currentIndex}`}
          className="md:w-3/5"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
        >
          <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
            {currentBanner.heading}
            {currentIndex === 0 && (
              <FaLightbulb className="text-white inline-block ml-0.5 text-2xl lg:text-4xl" />
            )}
            {currentIndex === 1 && (
              <PiCertificateFill className="text-white inline-block ml-0.5 text-2xl lg:text-4xl" />
            )}
            {currentIndex === 2 && (
              <MdRestaurant className="text-white inline-block ml-0.5 text-2xl lg:text-4xl" />
            )}
          </h2>
          <p className="text-white text-2xl mb-8">{currentBanner.subheading}</p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-5 md:space-y-0">
            <button className="btnPrimary" onClick={handleButtonClick}>
              {currentBanner.btn2}
            </button>
          </div>
        </motion.div>
      </div>
      {/* Indicadores centrados en la parte inferior */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-10">
        {banners.map((_, index) => (
          <div
            key={`indicator-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;