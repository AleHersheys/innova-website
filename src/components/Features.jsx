import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Features = () => {
    const [isInView, setIsInView] = useState(false);

    return (
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="about">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div 
                    variants={fadeIn("right", 0.2)} 
                    initial="hidden" 
                    animate={isInView ? "show" : "hidden"} 
                    onViewportEnter={() => setIsInView(true)}
                    viewport={{ once: true, amount: 0.7 }}
                    className="lg:w-1/4"
                >
                    <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Nuestras especialidades</h3>
                    <p className="text-base text-tartiary">Con precios asequibles, asesoramiento ideal, actualizaciones y soportes constante, siempre estará innovando en el mercado.</p>
                </motion.div>
                {/* Tarjetas */}
                <div className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                            <div className="text-center">
                                <FaCode className="text-primary inline-block text-4xl lg:text-6xl mb-4" />
                                <h5 className="text-2xl font-semibold text-primary px-5">Tecnología de punta</h5>
                            </div>
                        </div>
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                            <div className="text-center">
                                <MdOutlineSecurity className="text-primary inline-block text-4xl lg:text-6xl mb-4" />
                                <h5 className="text-2xl font-semibold text-primary px-5">Seguridad informática</h5>
                            </div>
                        </div>
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                            <div className="text-center">
                                <MdSupportAgent className="text-primary inline-block text-4xl lg:text-6xl mb-4" />
                                <h5 className="text-2xl font-semibold text-primary px-5">Soporte instantáneo</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;