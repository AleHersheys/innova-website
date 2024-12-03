import { useState } from "react";
import { motion } from "framer-motion";
import payroll from "../assets/product-4.jpg";
import icon from "../assets/icon-payroll.svg";

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
            <h2 className="lg:text-4xl font-bold text-gray-800">
              Sistema de nómina:<br></br>
              <span className="text-[#F0301B]">Innova PayRoll</span>
            </h2>
            <div className="mt-4 lg:mt-10 flex justify-center lg:justify-start">
              <img src={payroll} alt="Innova PayRoll" className="rounded-lg shadow-lg" />
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
              <img src={icon} alt="" />
            </div>
            {/* Característica 1 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">01</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Completamente personalizable</h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Permite realizar los recibos de pago personalizados e incluir el logo de su empresa en el recibo de pago.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Característica 2 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">02</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Perfecto para cualquier tipo de cálculo</h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Calcula las utilidades, vacaciones, liquidaciones, garantía de prestaciones e intereses. Genera la nómina para el pago de Cestaticket.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Característica 3 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">03</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Abarca todas las frecuencias de pago</h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Pago de nóminas mensual y quincenal, Cestaticket, vacaciones, utilidades, liquidación.
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
              <button className="btnPrimary" onClick={() => window.open("https://drive.google.com/drive/folders/1LnLExQtVPUiOCND__9nTVSR71WCK1EaF?usp=drive_link", "_blank")}>Descargar Demo</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Products;