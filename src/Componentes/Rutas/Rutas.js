

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PaginaPrincipal from "./PaginaPrincipal";
import Header from "../Header/index ";
import Nosotros from "./Nosotros"
import Tecnologia from "./Tecnologia"
import Celulares from "./Celulares";
import Varios from "./Varios";
import Ofertas from "./Ofertas";
import Footer from "../Footer/Footer";
import InfoBeneficios from "../InfoBeneficios/InfoBeneficios";
import Faq from "./Faq";
import Banner from "./Banner";
const Rutas = () => {
    return (
        <Router>
            <Header></Header>
            <Routes>
                <Route path="/" element={<PaginaPrincipal/>} />
                <Route path="/Celulares"  element={<Celulares/>} />
                <Route path="/Tecnologia" element={<Tecnologia/>} />
                <Route path="/Nosotros" element={<Nosotros/>} />
                <Route path="/Varios" element={<Varios/>} />
                <Route path="/Ofertas" element={<Ofertas/>} />
                <Route path="/Beneficios" element={<InfoBeneficios/>} />
                <Route path="/Preguntas-frecuentes" element={<Faq/>} />
                <Route path="/Banner" element={<Banner/>} />
            </Routes>
            <Footer></Footer>
        </Router>
    )
}

export default Rutas