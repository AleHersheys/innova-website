import { useState } from "react"; 
import { HashLink } from "react-router-hash-link"; // Usamos HashLink para mantener el scroll suave
import logo from "../assets/innova-logo.png"; 
import { SiGooglemaps } from "react-icons/si";
import { IoMenuSharp } from "react-icons/io5"; 
import { FaXmark } from "react-icons/fa6"; 
import { FaWhatsapp } from "react-icons/fa"; 

const NavbarPartners = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Definimos una función para aplicar un offset al hacer scroll.
    // Aquí se utiliza un offset de 100px para desktop y 80px para mobile.
    const scrollWithOffset = (el) => {
        const offset = window.innerWidth < 768 ? 80 : 100;
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: yCoordinate, behavior: "smooth" });
    };

    const navItems = [
        { link: "Inicio", path: "home" },
        { link: "Sobre nosotros", path: "about" },
        { link: "Productos", path: "products" },
        // { link: "Precios", path: "prices" },
    ];

    return (
        <>
            <nav className="bg-white md:px-14 p-4 w-full border-b mx-auto text-primary fixed top-0 right-0 left-0">
                <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                    <div className="flex space-x-14 items-center">
                        <HashLink smooth to="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                            <img src={logo} alt="Innova Logo" className="w-10 inline-block items-center" />
                            <span>Innova ProSystem</span>
                        </HashLink>
                        {/* Mostrando navItems con .map() */}
                        <ul className="md:flex space-x-12 hidden">
                            {navItems.map(({ link, path }) => (
                                <li key={link}>
                                    <HashLink 
                                        smooth 
                                        to={`/#${path}`} 
                                        scroll={scrollWithOffset}
                                        className="block hover:text-gray-300 cursor-pointer"
                                    >
                                        {link}
                                    </HashLink>
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
                        <button 
                            onClick={toggleMenu} 
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
            <div className={`space-y-4 px-4 pt-24 pb-5 bg-orange text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                <ul className="space-y-4">
                    {navItems.map(({ link, path }) => (
                        <li key={link}>
                            <HashLink 
                                smooth 
                                to={`/#${path}`} 
                                scroll={scrollWithOffset}
                                className="block text-white hover:text-gray-300" 
                                onClick={toggleMenu}
                            >
                                {link}
                            </HashLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default NavbarPartners;