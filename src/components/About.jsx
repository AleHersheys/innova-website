import { useState } from "react";
import aboutImg1 from "../assets/about-1.svg";
import aboutImg2 from "../assets/about-2.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
    const [isInView, setIsInView] = useState(false);

    return (
        <div className="md:px-14 px-4 py-9 max-w-full mx-auto space-y-10 overflow-hidden">
            {/* Contenido Sobre nosotros (Parte 1) */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    onViewportEnter={() => setIsInView(true)}
                    viewport={{ once: true, amount: 0.7 }}
                    className="md:w-1/2"
                >
                    <img 
                        src={aboutImg1} 
                        alt="Sobre nosotros 1" 
                        width="600" 
                        height="400" 
                    />
                </motion.div>
                <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    onViewportEnter={() => setIsInView(true)}
                    viewport={{ once: true, amount: 0.7 }}
                    className="md:w-2/5"
                >
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">¿Tienes ganas de emprender?</h2>
                    <p className="text-tartiary text-lg mb-7">Descubre la herramienta perfecta para impulsar tu negocio hacia el éxito. Incrementa tu emprendimiento con nuestras soluciones de software diseñadas específicamente para optimizar tus procesos, aumentar tu productividad y brindarte una ventaja competitiva.</p>
                    {/*<button className="btnPrimary">Iniciar</button>*/}
                </motion.div>
            </div>
            {/* Contenido Sobre nosotros (Parte 2) */}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                <motion.div
                    className="md:w-1/2"
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    onViewportEnter={() => setIsInView(true)}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <img 
                        src={aboutImg2} 
                        alt="Sobre nosotros 2" 
                        width="600" 
                        height="400" 
                    />
                </motion.div>
                <motion.div
                    className="md:w-2/5 flex flex-col items-center md:items-start"
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    onViewportEnter={() => setIsInView(true)}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">¡Descarga las demos de nuestros sistemas!</h2>
                    <p className="text-tartiary text-lg mb-7">Siéntase libre de probar los sistemas de Innova en sus versiones más actualizadas. Consulte los Manuales de Uso que vienen incluidos en la descarga de las demos.</p>
                </motion.div>
            </div>
        </div>
    );
}

export default About;