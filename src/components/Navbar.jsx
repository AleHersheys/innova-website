import { useState } from "react";
import logo from "../assets/innova-logo.png";
import { GrLanguage } from "react-icons/gr";
import { IoMenuSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        {link: "Inicio", path: "home"},
        {link: "Sobre nosotros", path: "about"},
        {link: "Precios", path: "prices"},
        {link: "Contactos", path: "contact"},
    ]
    return (
        <>
            <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
                <div className="text-lg containter mx-auto flex justify-between items-center font-medium">
                    <div className="flex space-x-14 items-center">
                        <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                            <img src={logo} alt="" className="w-10 inline-block items-center" /><span>Innova ProSystem</span>
                        </a>
                        {/* Mostrando navItems con .map() */}
                        <ul className="md:flex space-x-12 hidden">
                            {
                                navItems.map(({link, path}) => <Link activeClass="active" spy={true} smooth={true} offset={-100} key={link} to={path} className="block hover:text-gray-300 cursor-pointer">{link}</Link>)
                            }
                        </ul>
                    </div>
                    {/* Idioma e Inicio de sesión */}
                    <div className="space-x-12 hidden md:flex items-center">
                        <a className="hidden lg:flex items-center hover:text-tartiary" onClick={() => window.open("https://maps.app.goo.gl/iBWaVR1TRoDHu7ko7", "_blank")}><GrLanguage className="mr-2"/><span>Dirección</span></a>
                        <button className="bg-orange text-white py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-primary flex items-center" onClick={() => window.open("https://wa.me/+584146611188", "_blank")}><FaWhatsapp className="text-white inline-block ml-0.5 text-2xl lg:text-2xl mr-2" />Contáctanos</button>
                    </div>
                    {/* Menú Hamburguesa */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                            {
                                isMenuOpen ? (<FaXmark className="w-6 h-6 text-primary"/>) : (<IoMenuSharp className="w-6 h-6 text-primary"/>)
                            }
                        </button>
                    </div>
                </div>
            </nav>
            {/* Ítems del Navbar para dispositivos móviles */}
            <div className={`space-y-4 px-4 pt-24 pb-5 bg-orange text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link, path}) => <Link activeClass="active" spy={true} smooth={true} offset={-80} key={link} to={path} className="block text-white hover:text-gray-300" onClick={toggleMenu}>{link}</Link>)
                }
            </div>
        </>
    );
}

export default Navbar;
