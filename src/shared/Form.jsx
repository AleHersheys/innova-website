import { useState, useEffect } from "react";
import ImgForm from "../assets/ImgForm.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { MdBusinessCenter } from "react-icons/md";
import emailjs from "emailjs-com";

const Form = () => {
  // Variables formateadas:
  const [isInView, setIsInView] = useState(false);
  const [cedula, setCedula] = useState("");
  const [prefijo, setPrefijo] = useState("V");
  const [rif, setRif] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [telPrefijo, setTelPrefijo] = useState("0416");
  const [razonSocial, setRazonSocial] = useState("");
  const [rifJuridico, setRifJuridico] = useState("");
  const [emailPersonal, setEmailPersonal] = useState("");
  const [emailJuridico, setEmailJuridico] = useState("");
  const [poseeEmpresa, setPoseeEmpresa] = useState("No");
  const [areaExperticia, setAreaExperticia] = useState("");
  const [observacion, setObservacion] = useState("");
  const [charsLeft, setCharsLeft] = useState(300);
  const [direccion, setDireccion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Formato de cédula:
  const handleCedulaChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remueve caracteres que no sean numéricos.
    if (value.length <= 8) {
      setCedula(value);
    }
  };

  // Calcula RIF en base a la cédula:
  useEffect(() => {
    if (cedula.length === 8) {
      const rifWithoutCheckDigit = `${prefijo}-${cedula}`;
      const checkDigit = calculateCheckDigit(prefijo, cedula);
      setRif(`${rifWithoutCheckDigit}-${checkDigit}`);
    } else {
      setRif("");
    }
  }, [cedula, prefijo]);

  // Cálculo según prefijo de la cédula:
  const calculateCheckDigit = (prefijo, cedula) => {
    const map = { V: 1, E: 2, J: 3, P: 4, G: 5 };
    const coef = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    const digits = `${map[prefijo]}${cedula}`.split("").map(Number);
    const sum = digits.reduce((acc, digit, i) => acc + digit * coef[i], 0);
    const mod = 11 - (sum % 11);
    return mod === 11 ? 0 : mod === 10 ? 9 : mod;
  };

  // Formato de nombres y apellidos:
  const handleTextValidation = (e, setValue) => {
    const value = e.target.value;
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*$/; // Solo acepta acentos, letras y espacios.
    if (regex.test(value) && value.length <= 50) {
      setValue(value);
    }
  };

  // Formato de campo teléfono:
  const handleTelefonoChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remueve caracteres que no sean numéricos.
    if (value.length <= 7) {
      setTelefono(value);
    }
  };

  // Formateo Razón social:
  const handleRazonSocialValidation = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9\s.,-]*$/; // Acepta letras, números, espacios, puntos, comas y guiones.
    if (regex.test(value) && value.length <= 100) {
      setRazonSocial(value);
    }
  };

  // Formato RIF Jurídico:
  const handleRifJuridicoChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remueve caracteres que no sean numéricos.
    if (value.length <= 9) { // 8 dígitos más 1 dígito de verificación.
      const mainPart = value.slice(0, 8);
      const checkDigit = value.slice(8, 9);
      const formattedValue = checkDigit ? `J-${mainPart}-${checkDigit}` : `J-${mainPart}`;
      setRifJuridico(formattedValue);
    }
  };

  // Formato de Email personal y jurídicos:
  const handleEmailValidation = (e, setValue) => {
    const value = e.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato de correo.
    if (value === "" || (regex.test(value) && value.length >= 5 && value.length <= 64)) {
      setValue(value);
    } else {
      setValue(value); // Permitir la entrada, incluso si no es válida.
    }
  };

  // Formato área de experticia:
  const handleAreaExperticiaChange = (e) => {
    const value = e.target.value;
    // Ahora la regex acepta letras acentuadas, diéresis y la ñ, tanto en mayúsculas como en minúsculas.
    const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s.,-]*$/;
    if (regex.test(value) && value.length <= 100) {
      setAreaExperticia(value);
    }
  };  
  
  // Formato observación:
  const handleObservacionChange = (e) => {
    const value = e.target.value;
    if (value.length <= 300) {
      setObservacion(value);
      setCharsLeft(300 - value.length);
    }
  };

  // Lógica de validación para habilitar/deshabilitar el botón "Enviar"
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isPersonalEmailValid = emailPersonal !== "" && emailRegex.test(emailPersonal);
  const isCorporateEmailValid = poseeEmpresa === "No" || (emailJuridico !== "" && emailRegex.test(emailJuridico));

  const isFormValid =
    cedula.length === 8 &&
    rif !== "" &&
    nombres.trim() !== "" &&
    apellidos.trim() !== "" &&
    telefono.length === 7 &&
    isPersonalEmailValid &&
    (poseeEmpresa === "No" ||
      (razonSocial.trim() !== "" &&
      rifJuridico.trim() !== "" &&
      isCorporateEmailValid &&
      direccion.trim() !== ""));

  const validateFields = () => {
    const errors = {};
    if (cedula.length !== 8) {
      errors.cedula = "La cédula debe tener 8 dígitos";
    }
    if (rif === "") {
      errors.rif = "El RIF no se generó correctamente";
    }
    if (nombres.trim() === "") {
      errors.nombres = "El nombre es obligatorio";
    }
    if (apellidos.trim() === "") {
      errors.apellidos = "El apellido es obligatorio";
    }
    if (telefono.length !== 7) {
      errors.telefono = "El teléfono debe tener 7 dígitos";
    }
    if (emailPersonal.trim() === "" || !emailRegex.test(emailPersonal)) {
      errors.emailPersonal = "Ingrese un email personal válido";
    }
    if (poseeEmpresa === "Sí") {
      if (razonSocial.trim() === "") {
        errors.razonSocial = "La razón social es obligatoria";
      }
      if (rifJuridico.trim() === "") {
        errors.rifJuridico = "El RIF Jurídico es obligatorio";
      }
      if (emailJuridico.trim() === "" || !emailRegex.test(emailJuridico)) {
        errors.emailJuridico = "Ingrese un email empresarial válido";
      }
      if (direccion.trim() === "") {
        errors.direccion = "El domicilio fiscal es obligatorio";
      }
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const fieldErrors = validateFields();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);
  
    // Preparar el mensaje consolidado
    const message = `
      Cédula: ${prefijo}-${cedula}
      RIF: ${rif}
      Nombres: ${nombres}
      Apellidos: ${apellidos}
      Teléfono: ${telPrefijo}-${telefono}
      Email Personal: ${emailPersonal}
      Posee Empresa: ${poseeEmpresa}
      Razón Social: ${razonSocial}
      RIF Jurídico: ${rifJuridico}
      Email Jurídico: ${emailJuridico}
      Domicilio Fiscal: ${direccion}
      Área de Experticia: ${areaExperticia}
      Observación: ${observacion}
    `;
  
    const templateParams = {
      to_name: "Innova ProSystem", // Puedes personalizarlo o dejarlo fijo
      from_name: `${nombres} ${apellidos}`, // El remitente
      message: message,
    };
  
    emailjs
      .send(
        "service_v0kt4ux",  // Tu Service ID
        "template_e5qykdb", // Tu Template ID
        templateParams,
        "OeSqh-PhNkfeLu0u7" // Tu User/Public Key
      )
      .then((response) => {
        console.log("Correo enviado exitosamente", response.text);
        setIsSubmitting(false);
  
        // Muestra el mensaje de éxito
        setSuccessMessage("Correo enviado exitosamente.");
  
        // Limpia los campos del formulario
        resetForm();
  
        // Opcional: limpia el mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        setIsSubmitting(false);
      });
  };  

  const resetForm = () => {
    setCedula("");
    setPrefijo("V");
    setRif("");
    setNombres("");
    setApellidos("");
    setTelefono("");
    setTelPrefijo("0416");
    setRazonSocial("");
    setRifJuridico("");
    setEmailPersonal("");
    setEmailJuridico("");
    setPoseeEmpresa("No");
    setAreaExperticia("");
    setObservacion("");
    setCharsLeft(300);
    setDireccion("");
  };

  // Fuerza la animación en modo responsive
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsInView(true);
    }
  }, []);  

  return (
    <div className="gradientBg md:px-32 px-4 py-24">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* IMAGEN DEL BANNER */}
        <motion.div 
          variants={fadeIn("down", 0.2)} 
          initial="hidden" 
          animate={isInView ? "show" : "hidden"}
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true, amount: 0.7 }}
          className="w-full md:w-1/2"
        >
          <img 
            src={ImgForm} 
            alt="Banner" 
            className="object-cover w-full h-auto" 
            loading="lazy"
          />
        </motion.div>
        {/* CONTENIDO DEL BANNER */}
        <motion.div
          variants={fadeIn("up", 0.2)} 
          initial="hidden" 
          animate={isInView ? "show" : "hidden"}
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true, amount: 0.7 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-white leading-snug"><MdBusinessCenter /> REGISTRO DE PARTNERS</h2>
          <p className="text-white text-lg md:text-xl">Rellene la información requerida para la posibilidad de convertirte en uno de los Partners de los productos de Innova ProSystem.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Campo de cédula con select y validación */}
              <div className="flex items-center gap-2">
                <select 
                  value={prefijo} 
                  onChange={(e) => setPrefijo(e.target.value)} 
                  className="inputField selectField"
                >
                  <option value="V">V</option>
                  <option value="E">E</option>
                  <option value="J">J</option>
                  <option value="P">P</option>
                  <option value="G">G</option>
                </select>
                <input 
                  type="text" 
                  name="cedula" 
                  placeholder="Cédula" 
                  value={cedula} 
                  onChange={handleCedulaChange}
                  className="inputField flex-grow"
                />
              </div>
              {/* Campo de RIF con validación */}
              <input 
                type="text" 
                name="rif" 
                placeholder="RIF" 
                value={rif}
                readOnly 
                className="inputField" 
              />
              {/* Campo de nombres con validación */}
              <input 
                type="text" 
                name="nombres" 
                placeholder="Nombres" 
                value={nombres} 
                onChange={(e) => handleTextValidation(e, setNombres)} 
                className="inputField"
              />
              {/* Campo de apellidos con validación */}
              <input 
                type="text" 
                name="apellidos" 
                placeholder="Apellidos" 
                value={apellidos} 
                onChange={(e) => handleTextValidation(e, setApellidos)} 
                className="inputField"
              />
              {/* Campo de teléfono con select y validación */}
              <div className="flex items-center gap-2">
                <select 
                  value={telPrefijo} 
                  onChange={(e) => setTelPrefijo(e.target.value)} 
                  className="inputField selectField"
                >
                  <option value="0416">0416</option>
                  <option value="0426">0426</option>
                  <option value="0414">0414</option>
                  <option value="0424">0424</option>
                  <option value="0412">0412</option>
                </select>
                <input 
                  type="text" 
                  name="telefono" 
                  placeholder="Teléfono" 
                  value={telefono} 
                  onChange={handleTelefonoChange}
                  className="inputField flex-grow"
                />
              </div>
              {/* Campo de correo con validación */}
              <input 
                type="email" 
                name="email" 
                placeholder="Email personal" 
                maxLength="60"
                value={emailPersonal} 
                onChange={(e) => handleEmailValidation(e, setEmailPersonal)}
                className="inputField"
              />
              {/* Pregunta "¿Posee empresa?" */}
              <div className="flex flex-col items-center gap-2 md:col-span-2">
                <label className="text-white text-lg md:text-xl">¿Posee empresa?</label>
                <div className="flex items-center gap-4">
                  <label className="text-white">
                    <input
                      type="radio"
                      name="poseeEmpresa"
                      value="Sí"
                      checked={poseeEmpresa === "Sí"}
                      onChange={(e) => setPoseeEmpresa(e.target.value)}
                      className="mr-2"
                    />
                    Sí
                  </label>
                  <label className="text-white">
                    <input
                      type="radio"
                      name="poseeEmpresa"
                      value="No"
                      checked={poseeEmpresa === "No"}
                      onChange={(e) => setPoseeEmpresa(e.target.value)}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              {/* Campo de Razón Social */}
              <input
                type="text"
                name="empresa"
                placeholder="Razón social"
                value={razonSocial}
                onChange={handleRazonSocialValidation}
                className={`inputField ${poseeEmpresa === "No" ? "bg-gray-200 cursor-not-allowed" : ""}`}
                disabled={poseeEmpresa === "No"}
                required={poseeEmpresa === "Sí"} // Requerir el campo si "Sí" está seleccionado
              />
              {/* Campo de RIF Jurídico: */}
              <input
                type="text"
                name="rif_juridico"
                placeholder="RIF Jurídico"
                value={rifJuridico}
                onChange={handleRifJuridicoChange}
                className={`inputField ${poseeEmpresa === "No" ? "bg-gray-200 cursor-not-allowed" : ""}`}
                disabled={poseeEmpresa === "No"}
                required={poseeEmpresa === "Sí"} // Requerir el campo si "Sí" está seleccionado
              />
              {/* Campo de Email jurídico: */}
              <input
                type="email"
                name="email_empresarial"
                placeholder="Email empresarial"
                maxLength="60"
                value={emailJuridico}
                onChange={(e) => handleEmailValidation(e, setEmailJuridico)}
                className={`inputField ${poseeEmpresa === "No" ? "bg-gray-200 cursor-not-allowed" : ""}`}
                disabled={poseeEmpresa === "No"}
                required={poseeEmpresa === "Sí"} // Requerir el campo si "Sí" está seleccionado
              />
              {/* Campo de Domicilio Fiscal: */}
              <input
                type="text"
                name="direccion"
                placeholder="Domicilio Fiscal"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className={`inputField ${poseeEmpresa === "No" ? "bg-gray-200 cursor-not-allowed" : ""}`}
                disabled={poseeEmpresa === "No"}
                required={poseeEmpresa === "Sí"}
                maxLength="150"
              />
              <input
                type="text"
                name="area"
                placeholder="Área de experticia"
                value={areaExperticia}
                onChange={handleAreaExperticiaChange}
                className="inputField md:col-span-2"
              />
              <div className="relative md:col-span-2">
              <textarea
                type="text"
                name="observacion"
                placeholder="Observación"
                value={observacion}
                onChange={handleObservacionChange}
                maxLength="300"
                className="inputField"
              />
              <span className="absolute right-2 bottom-2 text-gray-500">{charsLeft} caracteres restantes</span>
            </div>
            </div>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`btnPrimary w-full ${(!isFormValid || isSubmitting) ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
            { successMessage && (
            <div className="bg-green-200 text-green-800 p-2 rounded mt-4">
              {successMessage}
            </div>
          )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Form;

const styles = `
.inputField {
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #F9A451;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
}

.inputField:focus {
  border-color: #FFA451;
}

.selectField {
  width: auto;
  padding: 12px 16px;
  border: 2px solid #F9A451;
  border-radius: 8px 0 0 8px;
  outline: none;
  transition: border-color 0.3s;
}

/* Estilos específicos para el textarea */
textarea.inputField {
  max-height: 200px; /* Limita la altura para mostrar hasta 300 caracteres; ajusta este valor si es necesario */
  resize: vertical;  /* Permite sólo el cambio de tamaño vertical */
  overflow-y: auto; /* Asegura que la barra de desplazamiento aparezca si el contenido excede la altura */
  scrollbar-color: #EF8318 transparent; /* Para Firefox: primer color para el pulgar y el segundo para el track */
}

/* Para navegadores basados en Webkit (Chrome, Edge, Safari) */
textarea.inputField::-webkit-scrollbar {
  width: 8px;
}

textarea.inputField::-webkit-scrollbar-thumb {
  background-color: #EF8318;
  border-radius: 8px;
}
`;

const addStyles = () => {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

addStyles();