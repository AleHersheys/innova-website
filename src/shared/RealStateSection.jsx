import { motion } from "framer-motion";
import { FaComputer } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { TiPrinter } from "react-icons/ti";
import { FaFileInvoice } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { useState } from "react";

const items = [
    {count: "80+", label: "Proyectos completados satisfactoriamente", image: <FaComputer />},
    {count: "10+", label: "Años de experiencia en el mercado", image: <MdBusinessCenter />},
    {count: "98%", label: "Clientela satisfecha con nuestros servicios", image: <FaHandshake />},
    {count: "100%", label: "Compatibles con todas las impresoras fiscales del país", image: <TiPrinter />},
    {count: "100%", label: "Certificados con facturación electrónica", image: <FaFileInvoice />},
    {count: "100%", label: "Compatibles con pasarela de pago VPOS", image: <FaCreditCard />},
];

const fadeIn = (direction = "up", duration = 0.5) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 30 : -30
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
                ease: "easeInOut"
            }
        }
    };
};

const RealStateSection = () => {
    const [isInView, setIsInView] = useState(false);

    return (
        <section className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
            <div className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Parte Izquierda */}
                    <motion.div 
                        className="space-y-6"
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        variants={fadeIn()}
                        onViewportEnter={() => setIsInView(true)}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <div className="max-w-md">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-primary">Desarrollando el software del futuro</h1>
                        </div>
                        <div className="max-w-md">
                            <p className="text-tartiary">Contamos con una serie de logros que buscamos seguir expandiendo.</p>
                        </div>
                    </motion.div>

                    {/* Parte Derecha */}
                    <motion.div 
                        className="grid grid-cols-2 gap-6"
                        initial="hidden"
                        animate={isInView ? "show" : "hidden"}
                        variants={fadeIn()}
                        onViewportEnter={() => setIsInView(true)}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-orange p-6 text-start rounded-lg shadow-md"
                                variants={fadeIn("up", 0.3 + index * 0.1)}
                            >
                                <h2 className="text-lg font-bold text-white lg:text-3xl">{item.image}{item.count}</h2>
                                <p className="text-white mt-2 whitespace-pre-line">{item.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RealStateSection;
