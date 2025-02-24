import banner from "../assets/banner.svg";
import Banner from "../shared/Banner";
import { FaLightbulb } from "react-icons/fa";

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
            <Banner banner={banner} 
                    heading={<>Potencia tu empresa con nosotros <FaLightbulb className="text-white inline-block ml-0.5 text-2xl lg:text-4xl" /></>}
                    subheading="Le ofrecemos a nuestros clientes los sistemas más avanzados utilizando tecnología de última, para solucionar cualquier tipo de problema." 
                    btn2="Conviértete en Partner"
            />
        </div>
    );
}

export default Home;