

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "../Header";
import Nosotros from "./Nosotros"
import Tecnologia from "./Tecnologia"
import Celulares from "./Celulares";
import Varios from "./Varios";
import Ofertas from "./Ofertas";
import Footer from "../Footer/Footer";
import InfoBeneficios from "../InfoBeneficios/InfoBeneficios";
import Carrousel from "../Carrousel";
import Banner3 from "../Banner3/Banner3";
import ShoppingCart from "../ShoppingCart/ShoppingCart";


const Rutas = () => {
    return (
        <Router>
            <Header></Header>
            <Routes>
                <Route path="/" element={[<Banner3/>,<Carrousel/>, <ShoppingCart/>, <InfoBeneficios/>]} />
                <Route path="/Celulares"  element={<Celulares/>} />
                <Route path="/Tecnologia" element={<Tecnologia/>} />    
                <Route path="/Nosotros" element={<Nosotros/>} />      
                <Route path="/Varios" element={<Varios/>} />   
                <Route path="/Ofertas" element={<Ofertas/>} />    
                <Route path="/Beneficios" element={<InfoBeneficios/>} />                        
            </Routes>
            <Footer></Footer>
        </Router>
    )
}

export default Rutas