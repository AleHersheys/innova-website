import logo from "../assets/innova-blanco.webp";
import logotipo from "../assets/innova-logotipo.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterPartners = () => {
    return (
        <div className="bg-[#999A99] text-white">
            <div className="md:px-14 p-4 max-w-screen-2xl mx-auto">
                <div className="my-12 flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2 space-y-8 text-center md:text-left">
                        <Link 
                            to="/" 
                            className="text-2xl font-semibold flex justify-center md:justify-start items-center space-x-3 text-primary"
                        >
                            <img 
                                src={logo} 
                                alt="Innova Logo" 
                                className="w-10 inline-block" 
                                width="40" 
                                height="40" 
                            />
                            <span className="text-white"></span>
                            <img 
                                src={logotipo} 
                                alt="Innova Logotipo" 
                                className="w-28 inline-block" 
                                width="112" 
                                height="40" 
                            />
                            <span className="text-white"></span>
                        </Link>
                        <p className="md:w-1/2 mx-auto md:mx-0">Innovación en cada línea de código</p>
                    </div>
                    {/* NAVEGACIÓN DEL FOOTER */}
                    <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
                        <div className="space-y-4 mt-5">
                            <h3 className="text-xl">General</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link 
                                        to="/#home" 
                                        className="block hover:text-gray-300 cursor-pointer"
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/#about" 
                                        className="block hover:text-gray-300 cursor-pointer"
                                    >
                                        Sobre nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/#products" 
                                        className="block hover:text-gray-300 cursor-pointer"
                                    >
                                        Productos
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/#prices" 
                                        className="block hover:text-gray-300 cursor-pointer"
                                    >
                                        Precios
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4 mt-5">
                            <h3 className="text-xl">Ayuda</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a 
                                        href="https://innova-help.freshdesk.com/support/home" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="block hover:text-gray-300 cursor-pointer"
                                    >
                                        Innova Help Desk
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://www.innovaprosystem.com/terms-and-conditions/index.html" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="block hover:text-gray-300 cursor-pointer"
                                    >
                                        Términos y condiciones
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://www.mediafire.com/file/4uqmwlxjcnm5lhk/INN-BROCHURES.rar/file" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="block hover:text-gray-300 cursor-pointer"
                                    >
                                        Brochures
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4 mt-5">
                            <h3 className="text-xl">Contactos</h3>
                            <ul className="space-y-3">
                                <li className="hover:text-gray-300">
                                    <a 
                                        href="tel:+584146518865" 
                                        onClick={(e) => { if (!window.confirm('¿Desea llamar a este número?')) e.preventDefault(); }}
                                    >
                                        Celular: +58 414-6518865
                                    </a>
                                </li> 
                                <li className="hover:text-gray-300">
                                    <a 
                                        href="tel:+584146611188" 
                                        onClick={(e) => { if (!window.confirm('¿Desea llamar a este número?')) e.preventDefault(); }}
                                    >
                                        Soporte: +58 414-6611188
                                    </a>
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
                    <p className="text-center sm:text-left sm:flex-1">
                        Copyright © 2025 Innova ProSystem. Todos los derechos reservados.
                    </p>
                    <div className="flex justify-center sm:justify-end items-center space-x-5 sm:flex-1">
                        <FaFacebookF 
                            className="cursor-pointer hover:-translate-y-4 transition-all duration-300 text-2xl lg:text-3xl" 
                            onClick={() => window.open("https://www.facebook.com/share/14vDADVwJZ/?mibextid=LQQJ4d", "_blank")}
                        />
                        <FaXTwitter 
                            className="cursor-pointer hover:-translate-y-4 transition-all duration-300 text-2xl lg:text-4xl" 
                            onClick={() => window.open("https://x.com/innovaprosystem?s=21", "_blank")}
                        />
                        <FaInstagram 
                            className="cursor-pointer hover:-translate-y-4 transition-all duration-300 text-2xl lg:text-4xl" 
                            onClick={() => window.open("https://www.instagram.com/innovaprosystem.oficial?igsh=N3d6YW9memRidGs=", "_blank")}
                        />
                        <FaTiktok 
                            className="cursor-pointer hover:-translate-y-4 transition-all duration-300 text-2xl lg:text-3xl" 
                            onClick={() => window.open("https://www.tiktok.com/@innovaprosystem?_t=8rc6juVYrY7&_r=1", "_blank")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterPartners;