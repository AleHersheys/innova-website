import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import admin1 from "../assets/product-1.webp";
import admin2 from "../assets/product1-2.webp";
import admin3 from "../assets/product1-3.webp";
import admin4 from "../assets/product1-4.webp";
import admin5 from "../assets/product1-5.webp";
import icon from "../assets/icon-admin.svg";
import InnovaAdmin from "../assets/innova-admin.webp";

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

  // Array con las 5 imágenes del carrusel.
  const images = [admin1, admin2, admin3, admin4, admin5];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="bg-[#FDF3EE] my-24 md:px-14 px-4 max-w-screen-2xl mx-auto"
      id="products"
    >
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
              Sistema administrativo local:
              <br />
              <img
                src={InnovaAdmin}
                alt="Innova Admin Logo"
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
                  alt="Innova Admin Screenshot"
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
                alt="Innova Admin 2.1 Icon"
                width="50"
                height="50"
              />
            </div>
            {/* Característica 1 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">01</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  ¡Todo lo que necesitas en un mismo sistema!
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Además de todas las herramientas administrativas, Innova Admin
                  cuenta con centro de impresión de informes, asignación de
                  controles, módulo de cuentas por cobrar y cuentas por pagar.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Característica 2 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">02</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  La mayor de las seguridades
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Posee una gran barrera de seguridad al contar con un control de
                  acceso por usuario, además de recuperación y respaldo de datos en
                  caso de emergencia.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Característica 3 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">03</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  Múltiples tareas, todas al mismo tiempo
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Este sistema permite la realización de distintas tareas ya que
                  permite la apertura de varios módulos a la vez, lo que agiliza su
                  uso.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Botón descargar demo */}
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
                onClick={() =>
                  window.open(
                    "https://www.mediafire.com/file/kmyqq74rai5j9cj/Innova_Admin_2.1_%2528Demo%2529.rar/file",
                    "_blank"
                  )
                }
              >
                Descargar Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;