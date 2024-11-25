import { useState } from "react";

const Pricing = () => {
    const [isYearly, setISYearly] = useState(false);

    const packages = [
        {
            name: "Inicial", 
            monthlyPrice: 16 + " USD", 
            yearlyPrice: 200 + " USD", 
            description: "Ideal para pequeños negocios y emprendimientos.",
            features: [
                { feature: "Sistemas en la nube operativos 24/7", available: true },
                { feature: "Actualizaciones gratuitas y constantes", available: true },
                { feature: "Sistemas multiusuarios", available: true },
                { feature: "Seguridad informática robusta", available: true },
                { feature: "Respaldo de base de datos automático", available: true },
                { feature: "Ventana de caja, devolución y nota de entrega", available: false },
                { feature: "Módulo de compras", available: false },
                { feature: "Manejo de reportes", available: false },
                { feature: "Compatibilidad con impresoras fiscales", available: false },
                { feature: "Inducción y acompañamiento al personal", available: false },
                { feature: "Priorización de requerimientos", available: false },
            ],
        },
        {
            name: "Avanzado", 
            monthlyPrice: 25 + " USD", 
            yearlyPrice: 300 + " USD", 
            description: "Ideal para empresas que busquen aprovechar nuestros servicios.",
            features: [
                { feature: "Sistemas en la nube operativos 24/7", available: true },
                { feature: "Actualizaciones gratuitas y constantes", available: true },
                { feature: "Sistemas multiusuarios", available: true },
                { feature: "Seguridad informática robusta", available: true },
                { feature: "Respaldo de base de datos automático", available: true },
                { feature: "Ventana de caja, devolución y nota de entrega", available: true },
                { feature: "Módulo de compras", available: true },
                { feature: "Manejo de reportes", available: true },
                { feature: "Compatibilidad con impresoras fiscales", available: false },
                { feature: "Inducción y acompañamiento al personal", available: false },
                { feature: "Priorización de requerimientos", available: false },
            ],
        },
        {
            name: "Premium", 
            monthlyPrice: 38 + " USD", 
            yearlyPrice: 450 + " USD", 
            description: "Ideal para empresas grandes que busquen agilizar todo.",
            features: [
                { feature: "Sistemas en la nube operativos 24/7", available: true },
                { feature: "Actualizaciones gratuitas y constantes", available: true },
                { feature: "Sistemas multiusuarios", available: true },
                { feature: "Seguridad informática robusta", available: true },
                { feature: "Respaldo de base de datos automático", available: true },
                { feature: "Ventana de caja, devolución y nota de entrega", available: true },
                { feature: "Módulo de compras", available: true },
                { feature: "Manejo de reportes", available: true },
                { feature: "Compatibilidad con impresoras fiscales", available: true },
                { feature: "Inducción y acompañamiento al personal", available: true },
                { feature: "Priorización de requerimientos", available: true },
            ],
        }
    ];
    
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="prices">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Estos son nuestros planes</h2>
                <p className="text-tartiary md:w-1/3 mx-auto px-4">Ofrecemos una gran variedad de sistemas. <br></br>Para todos nuestros sistemas en la web.</p>
                
                {/* Botón Toggle */}
                <div className="mt-16">
                    <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Mensual</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Anual</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onChange={() => setISYearly(!isYearly)}/>
                </div>
            </div>

            {/* Tarjetas de precios */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    packages.map((pkg, index) => 
                    <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                        <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                        <p className="text-tartiary text-center my-5">{pkg.description}</p>
                        <p className="mt-5 text-center text-secondary text-4xl font-bold">
                            {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`} <span className="text-base text-tartiary font-medium">/ {isYearly ? `anual` : `mensual`}</span>
                        </p>
                        <ul className="mt-4 space-y-2 px-4">
                            {
                                pkg.features.map((feature, idx) => 
                                    <li key={idx} className="flex gap-3 items-center">
                                        <img src={feature.available ? "/src/assets/green-icon.png" : "/src/assets/red-icon.png"} alt="" className="w-4 h-4"/>
                                        {feature.feature}
                                    </li>
                                )
                            }
                        </ul>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Pricing;