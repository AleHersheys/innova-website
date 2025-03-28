import { useState } from "react";
import greenIcon from "../assets/green.png";
import redIcon from "../assets/red.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { IoBusiness } from "react-icons/io5";
import { IoStorefrontSharp } from "react-icons/io5";

const Pricing = () => {
    const [isYearly, setISYearly] = useState(false);
    const [isInView, setIsInView] = useState(false);

    const packages = [
        {
            emoji: <IoStorefrontSharp />,
            name: "Inicial", 
            monthlyPrice: 38,
            yearlyPrice: 450,
            description: "Ideal para pequeños negocios y emprendimientos.",
            features: [
                { feature: "Sistemas en la nube operativos 24/7", available: true },
                { feature: "Actualizaciones gratuitas y constantes", available: true },
                { feature: "Límite de 4 usuarios", available: true },
                { feature: "Seguridad informática robusta", available: true },
                { feature: "Respaldo de base de datos automático", available: true },
                { feature: "Módulo de ventas y compras", available: true },
                { feature: "Manejo de reportes en PDF y otros formatos", available: true },
                { feature: "Compatibilidad con impresoras fiscales y facturación digital (*)", available: true },
                { feature: "Función de lector de código de barras", available: false },
                { feature: "Función de Cuentas por Cobrar", available: false },
                { feature: "Módulo de Formas de Pago", available: false },
                { feature: "Módulo de Caja", available: false },
                { feature: "Priorización de requerimientos y solicitudes", available: false },
            ],
        },
        {
            emoji: <IoBusiness />,
            name: "Avanzado", 
            monthlyPrice: 50,
            yearlyPrice: 600,
            description: "Ideal para empresas grandes que aprovecharán todos nuestros servicios.",
            features: [
                { feature: "Sistemas en la nube operativos 24/7", available: true },
                { feature: "Actualizaciones gratuitas y constantes", available: true },
                { feature: "Límite de 8 usuarios", available: true },
                { feature: "Seguridad informática robusta", available: true },
                { feature: "Respaldo de base de datos automático", available: true },
                { feature: "Módulo de ventas y compras", available: true },
                { feature: "Manejo de reportes en PDF y otros formatos", available: true },
                { feature: "Compatibilidad con impresoras fiscales y facturación digital (*)", available: true },
                { feature: "Función de lector de código de barras", available: true },
                { feature: "Función de Cuentas por Cobrar", available: true },
                { feature: "Módulo de Formas de Pago", available: true },
                { feature: "Módulo de Caja", available: true },
                { feature: "Priorización de requerimientos y solicitudes", available: true },
            ],
        },
    ];
    
    return (
        <motion.div 
            variants={fadeIn("up", 0.2)} 
            initial="hidden" 
            animate={isInView ? "show" : "hidden"} 
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, amount: 0.5 }}
            className="md:px-14 p-4 max-w-screen-xl mx-auto py-10" id="prices"
        >
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Estos son nuestros planes</h2>
                <p className="text-tartiary mx-auto px-4">Válido para todos nuestros sistemas en la web.<br/>(Estos precios no contemplan honorarios ni factura digital)</p>
                
                {/* Botón Toggle */}
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Mensual</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Anual</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setISYearly(!isYearly)}/>
                </div>
            </div>

            {/* Contenedor de tarjetas - Solución definitiva */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(350px,max-content))] justify-center gap-10 mt-20 px-4 md:px-8 mx-auto">
                {packages.map((pkg, index) => (
                    <div 
                        key={index} 
                        className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl mx-auto w-full max-w-[350px]"
                    >
                        <h3 className="text-3xl font-bold text-center text-primary flex justify-center items-center">{pkg.emoji}</h3>
                        <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                        <p className="text-tartiary text-center my-5">{pkg.description}</p>
                        <p className="mt-5 text-center text-secondary text-4xl font-bold">
                            ${isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                            <span className="text-base text-tartiary font-medium"> USD / {isYearly ? "anual" : "mensual"} + IVA</span>
                        </p>
                        <ul className="mt-4 space-y-2 px-4">
                            {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex gap-3 items-center">
                                    <img 
                                        src={feature.available ? greenIcon : redIcon} 
                                        alt={feature.available ? "Disponible" : "No disponible"} 
                                        className="w-4 h-4"
                                    />
                                    {feature.feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Pricing;