import './App.css'
import About from './components/About'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Admin from './products/Admin'
import POS from './products/POS'
import Accounting from './products/Accounting'
import PayRoll from './products/PayRoll'
import Food from './products/Food'
// import Pricing from './components/Pricing'
import Footer from './shared/Footer'
import RealStateSection from './shared/RealStateSection'
import Others from './products/Others'

function App() {
  return (
    <>
      {/* IMPORTA LOS COMPONENTES */}
      <Navbar/>
      <Home/>
      <Features/>
      <RealStateSection/>
      <About/>
      <Admin/>
      <POS/>
      <Accounting/>
      <PayRoll/>
      <Food/>
      <Others/>
      {/* <Pricing/> */}
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
