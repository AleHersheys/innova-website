import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
    const [isInView, setIsInView] = useState(false);

    return (
        <div className="gradientBg rounded-xl rounded-bl-[90px] md:p-9 px-4 py-9">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                {/* IMAGEN DEL BANNER */}
                <motion.div 
                    variants={fadeIn("down", 0.2)} 
                    initial="hidden" 
                    animate={isInView ? "show" : "hidden"} 
                    onViewportEnter={() => setIsInView(true)}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <img src={banner} alt="" className="lg:h-[386px]" />
                </motion.div>
                {/* CONTENIDO DEL BANNER */}
                <motion.div 
                    className="md:w-3/5" 
                    variants={fadeIn("up", 0.2)} 
                    initial="hidden" 
                    animate={isInView ? "show" : "hidden"} 
                    onViewportEnter={() => setIsInView(true)}
                    viewport={{ once: true, amount: 0.7 }}
                >
                    <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">{heading}</h2>
                    <p className="text-white text-2xl mb-8">{subheading}</p>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-5 md:space-y-0">
                        <button className="btnPrimary" onClick={() => window.open("https://help.innovaprosystem.com", "_blank")}>{btn1}</button>
                        <button className="btnPrimary" onClick={() => window.location.href = "/terms-and-conditions/index.html"}>{btn2}</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Banner;