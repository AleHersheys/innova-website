import Banner from "../shared/Banner";
import banner1 from "../assets/banner.svg";
//import banner2 from "../assets/banner2.svg";
import banner3 from "../assets/banner3.svg";

const Home = () => {
  const banners = [
    {
      banner: banner1,
      heading: <>Potencia tus ventas con nosotros </>,
      subheading:
        "Tenemos un buen programa para partners, comienza hoy mismo en conjunto con Innova.",
      btn2: "Conviértete en Partner",
    },
    // {
    //   banner: banner2,
    //   heading: "Homologados en la facturación digital ",
    //   subheading:
    //     "Los sistemas de Innova están autorizados para la emisión de facturas y otros documentos fiscales por el SENIAT.",
    //   btn2: "Descubre más",
    // },
    {
      banner: banner3,
      heading: "Agiliza las comandas y facturas ",
      subheading:
        "Garantizamos el crecimiento de tu restaurante con nuestro intuitivo sistema en la nube.",
      btn2: "Probar demo",
    },
  ];

  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner banners={banners} />
    </div>
  );
};

export default Home;