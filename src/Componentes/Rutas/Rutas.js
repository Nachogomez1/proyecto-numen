

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "../Header";
import Nosotros from "./Nosotros"
import Tecnologia from "./Tecnologia"
import Celulares from "./Celulares";
import Varios from "./Varios";
import Ofertas from "./Ofertas";




const Rutas = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/"  element={<Header/>} />
                <Route path="/Celulares"  element={<Celulares/>} />
                <Route path="/Tecnologia" element={<Tecnologia/>} />    
                <Route path="/Nosotros" element={<Nosotros/>} />      
                <Route path="/Varios" element={<Varios/>} />   
                <Route path="/Ofertas" element={<Ofertas/>} />                        
            </Routes>

        </Router>
    )
}

export default Rutas