import Banner from "../shared/Banner-help";
import BannerImg from "../assets/help.svg";
import { FaWrench } from "react-icons/fa";

const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12" id="contact">
            {/* Banner */}
            <Banner banner={BannerImg} 
            heading={<>¿Necesitas de nuestra ayuda? <FaWrench className="text-white inline-block ml-0.5 text-2xl lg:text-5xl" /></>}
            subheading="Contáctate con nuestro soporte técnico para ayudarte a resolver cualquier inquietud que tengas." 
            btn1="Crear ticket" btn2="Términos y condiciones"/>
        </div>
    );
}

export default Newsletter;