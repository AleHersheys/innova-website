import { useState } from "react"; 
import logo from "../assets/innova-logo.png";
import logotipo from "../assets/innova-logotipo-orange.webp"; 
import { SiGooglemaps } from "react-icons/si";
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
        { link: "Sobre nosotros", path: "about" },
        { link: "Productos", path: "products" },
        { link: "Precios", path: "prices" },
        { link: "Contactos", path: "contact" },
    ];

    return (
        <>
            <nav className="bg-white md:px-14 p-4 w-full border-b mx-auto text-primary fixed top-0 right-0 left-0 z-50">
                <div className="text-lg containter mx-auto flex justify-between items-center font-medium">
                    <div className="flex space-x-14 items-center">
                        <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                            <img src={logo} alt="Innova Logo" className="w-10 inline-block items-center" />
                            <img src={logotipo} alt="Innova Logotipo" className="w-28 inline-block" width="112" height="40" />
                        </a>
                        {/* Mostrando navItems con .map() */}
                        <ul className="md:flex space-x-12 hidden">
                            {navItems.map(({ link, path }) => (
                                <li key={link}>
                                    <Link 
                                        to={path} 
                                        activeClass="active" 
                                        spy={true} 
                                        smooth={true} 
                                        offset={-100} 
                                        className="block hover:text-gray-300 cursor-pointer"
                                        href={`#${path}`}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Idioma e Inicio de sesión */}
                    <div className="space-x-12 hidden md:flex items-center cursor-pointer">
                        <a 
                            href="https://maps.app.goo.gl/iBWaVR1TRoDHu7ko7" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hidden lg:flex items-center hover:text-tartiary"
                        >
                            <SiGooglemaps className="mr-2"/>
                            <span>Ubicación</span>
                        </a>
                        <button 
                            className="bg-orange text-white py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-primary flex items-center" 
                            onClick={() => window.open("https://wa.me/+584146611188", "_blank")}
                        >
                            <FaWhatsapp className="text-white inline-block ml-0.5 text-2xl lg:text-2xl mr-2" />
                            Contáctanos
                        </button>
                    </div>
                    {/* Menú Hamburguesa */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} 
                                className="text-white focus:outline-none focus:text-gray-300"
                                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isMenuOpen ? (
                                <FaXmark className="w-6 h-6 text-primary"/>
                            ) : (
                                <IoMenuSharp className="w-6 h-6 text-primary"/>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            {/* Ítems del Navbar para dispositivos móviles */}
            <div className={`space-y-4 px-4 pt-24 pb-5 border-b border-secondary bg-orange text-xl z-50 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                <ul className="space-y-4">
                    {navItems.map(({ link, path }) => (
                        <li key={link}>
                            <Link 
                                to={path} 
                                activeClass="active" 
                                spy={true} 
                                smooth={true} 
                                offset={-80} 
                                className="block text-white hover:text-gray-300" 
                                onClick={toggleMenu}
                                href={`#${path}`}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Navbar;