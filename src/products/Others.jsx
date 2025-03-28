import Img1 from "../assets/BarberShop.webp";
import Img2 from "../assets/Service.webp";
import Img3 from "../assets/CarWash.webp";
import { FaScissors } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Others = () => {
    const [isInView, setIsInView] = useState(false);

  return (
    <section className="bg-white my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
        <motion.div 
            variants={fadeIn("up", 0.2)} 
            initial="hidden" 
            animate={isInView ? "show" : "hidden"} 
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-screen-2xl container mx-auto px-5"
        >
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Nuestros sistemas web más recientes <span className="text-orange">para ti</span></h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Nos adaptamos a todo tipo de negocios, sin importar el dónde ni cuándo.</p>
            </div>
            {/* Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Tarjeta 1 */}
                <div className="border rounded-lg relative overflow-hidden shadow-lg hover:scale-105 transition-all duration-200 ease-in cursor-pointer" onClick={() => window.open("https://barber.innovaprosystem.com", "_blank")}>
                    <img src={Img1} alt="Innova Barber Shop" className="w-full h-48 md:h-52 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-[#D91F5D] text-[23px] font-semibold mb-3"><FaScissors />Innova Barber Shop</h3>
                        <p className="text-sm text-[#2D2D2D] mb-2">El sistema Innova Barber Shop está diseñado para elevar la experiencia en peluquerías y barberías. Ofrece una interfaz fácil de usar que permite controlar inventarios y realizar ventas de manera eficiente. Con herramientas avanzadas, los estilistas pueden personalizar servicios para cada cliente, desde cortes de cabello hasta tratamientos de cuidado personal.</p>
                    </div>
                </div>
                {/* Tarjeta 2 */}
                <div className="lg:mt-14 lg:-mb-14 border rounded-lg relative overflow-hidden shadow-lg hover:scale-105 transition-all duration-200 ease-in cursor-pointer" onClick={() => window.open("https://service.innovaprosystem.com", "_blank")}>
                    <img src={Img2} alt="Innova Service" className="w-full h-48 md:h-52 object-cover"/>
                    <div className="p-4">
                    <h3 className="text-[#006080] text-[23px] font-semibold mb-3"><FaRegPaperPlane />Innova Service</h3>
                        <p className="text-sm text-[#2D2D2D] mb-2">Innova Service es un sistema web integral diseñado para la venta de repuestos y servicios en general. Ofrece una plataforma intuitiva y fácil de usar que permite a los usuarios gestionar y realizar compras de repuestos con eficiencia. Con características avanzadas de gestión de inventario y control de ventas, Innova Service optimiza las operaciones comerciales y mejora la experiencia del cliente.</p>
                    </div>
                </div>
                {/* Tarjeta 3 */}
                <div className="border rounded-lg relative overflow-hidden shadow-lg hover:scale-105 transition-all duration-200 ease-in cursor-pointer" onClick={() => window.open("https://carwash.innovaprosystem.com", "_blank")}>
                    <img src={Img3} alt="Innova Car Wash" className="w-full h-48 md:h-52 object-cover"/>
                    <div className="p-4">
                    <h3 className="text-[#0E4D92] text-[23px] font-semibold mb-3"><FaCar />Innova Car Wash</h3>
                        <p className="text-sm text-[#2D2D2D] mb-2">El sistema de autolavado Innova Car Wash ofrece una limpieza automotriz completa y eficiente con tecnología de vanguardia. Con sus programas personalizables, permite seleccionar desde un lavado básico hasta uno premium que incluye encerado y pulido</p>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Others;