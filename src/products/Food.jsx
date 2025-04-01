import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import food from "../assets/product-5.webp";
import food2 from "../assets/product5-2.webp";
import food3 from "../assets/product5-3.webp";
import food4 from "../assets/product5-4.webp";
import food5 from "../assets/product5-5.webp";
import icon from "../assets/icon-food.svg";
import InnovaFood from "../assets/innova-food-logo.webp";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
};

// Variante para la transición de imagen con efecto fade y scale.
const imageVariant = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const Products = () => {
  const [isInView, setIsInView] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Arreglo con las imágenes del carrusel para el sistema de restaurantes.
  // En este ejemplo se usa la misma imagen varias veces; reemplázalas si tienes más imágenes.
  const images = [food, food2, food3, food4, food5];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#FDF3EE] my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="max-w-screen-2xl mx-auto">
        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:py-24 gap-10 lg:gap-20">
          {/* Contenido izquierda: Carrusel de imágenes */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2 className="lg:text-4xl font-bold text-gray-800 text-center">
              Sistema de restaurantes web:
              <br />
              <img
                src={InnovaFood}
                alt="Innova Food Logo"
                className="w-36 lg:w-40 mx-auto"
                width="144"
                height="48"
              />
            </h2>
            {/* Carrusel de imágenes */}
            <div className="mt-4 lg:mt-10 flex justify-center lg:justify-start relative">
              {/* Flecha para imagen anterior */}
              <button
                onClick={prevImage}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 text-primary text-3xl z-10"
                aria-label="Imagen anterior"
              >
                <FaArrowAltCircleLeft />
              </button>
              {/* Imagen del carrusel con efecto fade/scale */}
              <motion.div
                key={`carousel-image-${currentImageIndex}`}
                initial="initial"
                animate="animate"
                variants={imageVariant}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Innova Food & Drinks Screenshot"
                  className="rounded-lg w-full lg:w-[600px] h-[400px] object-contain"
                  width="600"
                  height="400"
                />
              </motion.div>
              {/* Flecha para imagen siguiente */}
              <button
                onClick={nextImage}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-primary text-3xl z-10"
                aria-label="Imagen siguiente"
              >
                <FaArrowAltCircleRight />
              </button>
            </div>
          </motion.div>
          {/* Contenido derecha: Información y características */}
          <motion.div
            className="lg:w-1/2"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, amount: 0.7 }}
          >
            {/* Icono vectorial */}
            <div className="relative flex justify-center mb-3 lg:mb-10">
              <img
                src={icon}
                alt="Innova Food & Drinks Icon"
                width="50"
                height="50"
              />
            </div>
            {/* Característica 1 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">01</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  Sistema operativo en la nube
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Un sistema web accesible desde cualquier dispositivo y navegador, operativo 24/7 y con respaldos constantes para evitar pérdidas de datos.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Característica 2 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">02</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  Interfaz intuitiva y amigable
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Sistema fácil de manejar, diseñado para ser intuitivo y con un Manual de Uso integrado.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Característica 3 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">03</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  Actualizaciones gratuitas y constantes
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  El sistema recibe soporte constante, se mejora y se añaden nuevas funciones de forma gratuita.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Botón probar demo */}
            <motion.div
              className="flex justify-center mt-6 lg:mt-0"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              onViewportEnter={() => setIsInView(true)}
              viewport={{ once: true, amount: 0.7 }}
            >
              <button
                className="btnPrimary"
                onClick={() => window.open("https://food.innovaprosystem.com", "_blank")}
              >
                Probar Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;