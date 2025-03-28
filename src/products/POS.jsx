import { useState } from "react";
import { motion } from "framer-motion";
import pos from "../assets/product-2.webp";
import icon from "../assets/icon-pos.svg";
import InnovaPOS from "../assets/innova-pos-logo.webp";

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

const Products = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <section className="bg-white my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="max-w-screen-2xl mx-auto">
        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:py-24 gap-10 lg:gap-20">
          {/* Contenido derecha */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2 className="lg:text-4xl font-bold text-gray-800 text-center">
              Sistema de punto de venta:<br></br>
              <img 
                src={InnovaPOS} 
                alt="Innova POS Logo" 
                className="w-36 lg:w-40 mx-auto" 
                width="144" 
                height="48"             
              />
            </h2>
            <div className="mt-4 lg:mt-10 flex justify-center lg:justify-start">
              <img 
                src={pos} 
                alt="Innova POS Screenshot" 
                className="rounded-lg shadow-lg" 
                width="600" 
                height="400" 
              />
            </div>
          </motion.div>
          {/* Contenido izquierda */}
          <motion.div
            className="lg:w-1/2 order-2 lg:order-1"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, amount: 0.7 }}
          >
            {/* Vector */}
            <div className="relative flex justify-center mb-3 lg:mb-10">
              <img 
                src={icon} 
                alt="Innova POS Icon" 
                width="50" 
                height="50" 
              />
            </div>
            {/* Característica 1 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">01</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Solo lo fundamental para las ventas</h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Corre en terminales, configura la impresora fiscal, maneja múltiples categorías de productos. Todo en uno.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Característica 2 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">02</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">La mejor herramienta para tu negocio</h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Un sistema rápido, amigable y confiable. Además de ser 100% configurable.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Característica 3 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">03</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Perfecto plan de contingencia</h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  En caso de fallas eléctricas o en el equipo, el sistema restaurará la última transacción al reiniciar.
                  Permite que las transacciones sean grabadas localmente y sean llevadas a la base de datos al momento de totalizar para impedir la pérdida de datos.
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
              <button className="btnPrimary" onClick={() => window.open("https://www.mediafire.com/file/gdk0ydqxxrmklww/Innova_POS_%2528Demo%2529.rar/file", "_blank")}>Descargar Demo</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Products;