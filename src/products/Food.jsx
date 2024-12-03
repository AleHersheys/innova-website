import { useState } from "react";
import { motion } from "framer-motion";
import food from "../assets/product-5.jpg";
import icon from "../assets/icon-food.svg";

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
    <section className="bg-[#FDF3EE] my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="max-w-screen-2xl mx-auto">
        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:py-24 gap-10 lg:gap-20">
          {/* Contenido izquierda */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2 className="lg:text-4xl font-bold text-gray-800">
              Sistema de restaurantes web:<br></br>
              <span className="text-[#A2B209]">Innova Food & Drinks</span>
            </h2>
            <div className="mt-4 lg:mt-10 flex justify-center lg:justify-start">
              <img src={food} alt="Innova Accounting" className="rounded-lg shadow-lg" />
            </div>
          </motion.div>
          {/* Contenido derecha */}
          <motion.div
            className="lg:w-1/2"
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
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Sistema operativo en la nube</h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Un sistema web, que puede ser utilizado desde cualquier dispositivo y navegador. Operativo 24/7 y que hace respaldos constantes de tu información para evitar pérdidas de datos.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Característica 2 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">02</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Interfaz intuitiva y amigable</h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                  Sistema fácil de aprender a manejar, hecho con la intención de ser lo más intuitivo posible. Además de contar con un Manual de Uso integrado.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Característica 3 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3xl font-bold text-gray-800">03</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">Actualizaciones gratuitas y constantes</h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2">
                 Sistema que recibe soporte constante y se ajusta a tu negocio. Constantemente se mejora y se añaden nuevas funciones.</p>
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
              <button className="btnPrimary" onClick={() => window.open("https://food.innovaprosystem.com", "_blank")}>Probar Demo</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Products;