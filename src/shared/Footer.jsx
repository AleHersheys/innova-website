import logo from "../assets/innova-blanco.png";
import logotipo from "../assets/innova-logotipo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="bg-[#999A99] text-white">
            <div className="md:px-14 p-4 max-w-screen-2xl mx-auto">
                <div className="my-12 flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2 space-y-8 text-center md:text-left">
                        <a className="text-2xl font-semibold flex justify-center md:justify-start items-center space-x-3 text-primary">
                            <img src={logo} alt="Innova Logo" className="w-10 inline-block" /><span className="text-white"></span>
                            <img src={logotipo} alt="Innova Logotipo" className="w-28 inline-block" /><span className="text-white"></span>
                        </a>
                        <p className="md:w-1/2 mx-auto md:mx-0">Innovación en cada línea de código</p>
                        {/* <div>
                            <input type="email" name="email" id="email" placeholder="Correo electrónico" className="bg-[#F9A451] py-2 px-4 rounded-md focus:outline-none"/>
                            <input type="submit" value="Suscribirse" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-primary hover:text-white duration-300 transition-all"/>
                        </div> */}
                    </div>
                    {/* NAVEGACIÓN DEL FOOTER */}
                    <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
                        <div className="space-y-4 mt-5">
                            <h4 className="text-xl">General</h4>
                            <ul className="space-y-3">
                                <Link to="home" smooth={true} duration={500} className="block hover:text-gray-300 cursor-pointer" href="#home">Inicio</Link>
                                <Link to="about" smooth={true} duration={500} className="block hover:text-gray-300 cursor-pointer" href="#about">Sobre nosotros</Link>
                                <Link to="products" smooth={true} duration={500} className="block hover:text-gray-300 cursor-pointer" href="#products">Productos</Link>
                                {/* <Link to="pricing" smooth={true} duration={500} className="block hover:text-gray-300 cursor-pointer" href="#pricing">Precios</Link> */}
                            </ul>
                        </div>
                        <div className="space-y-4 mt-5">
                            <h4 className="text-xl">Ayuda</h4>
                            <ul className="space-y-3">
                                <a className="block hover:text-gray-300 cursor-pointer" onClick={() => window.open("https://help.innovaprosystem.com", "_blank")}>Innova Help Desk</a>
                                <a className="block hover:text-gray-300 cursor-pointer" onClick={() => window.open("https://www.innovaprosystem.com/terms-and-conditions/index.html", "_blank")}>Términos y condiciones</a>
                                <a className="block hover:text-gray-300 cursor-pointer" onClick={() => window.open("https://drive.google.com/drive/u/1/folders/1r8bBTVna8xD-l2O0ee_eSiQe_2Jzyy_E", "_blank")}>Brochures</a>
                            </ul>
                        </div>
                        <div className="space-y-4 mt-5">
                            <h4 className="text-xl">Contactos</h4>
                            <ul className="space-y-3">
                                <li className="hover:text-gray-300">
                                    <a href="tel:+582614176501" onClick={(e) => { if (!window.confirm('¿Desea llamar a este número?')) e.preventDefault(); }}>Oficina: +58 261-4176501</a> 
                                </li>
                                <li className="hover:text-gray-300">
                                    <a href="tel:+584146518865" onClick={(e) => { if (!window.confirm('¿Desea llamar a este número?')) e.preventDefault(); }}>Celular: +58 414-6518865</a>
                                </li> 
                                <li className="hover:text-gray-300">
                                    <a href="tel:+584146611188" onClick={(e) => { if (!window.confirm('¿Desea llamar a este número?')) e.preventDefault(); }}>Soporte: +58 414-6611188</a>
                                </li>
                                <li className="hover:text-gray-300">
                                    <a href="mailto:info@innovaprosystem.com">Email: info@innovaprosystem.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
                    <p className="text-center sm:text-left sm:flex-1">Copyright © 2024 Innova ProSystem. Todos los derechos reservados.</p>
                    <div className="flex justify-center sm:justify-end items-center space-x-5 sm:flex-1">
                        <FaFacebookF className="cursor-pointer hover:-translate-y-4 transition-all duration-300 text-2xl lg:text-3xl" onClick={() => window.open("https://www.facebook.com/share/14vDADVwJZ/?mibextid=LQQJ4d", "_blank")}/>
                        <FaXTwitter className="cursor-pointer hover:-translate-y-4 transition-all duration-300 text-2xl lg:text-4xl" onClick={() => window.open("https://x.com/innovaprosystem?s=21", "_blank")}/>
                        <FaInstagram className="cursor-pointer hover:-translate-y-4 transition-all duration-300 text-2xl lg:text-4xl" onClick={() => window.open("https://www.instagram.com/innovaprosystem.oficial?igsh=N3d6YW9memRidGs=", "_blank")}/>
                        <FaTiktok className="cursor-pointer hover:-translate-y-4 transition-all duration-300 text-2xl lg:text-3xl" onClick={() => window.open("https://www.tiktok.com/@innovaprosystem?_t=8rc6juVYrY7&_r=1", "_blank")}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;