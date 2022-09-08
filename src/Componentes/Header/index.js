import React from 'react'
import "./index.css"
import logo from "../../assets/logo/logo.jpg";
import { Link, NavLink } from 'react-router-dom';
import Carrousel from '../Carrousel';


const Header = () => {
    return (
        
        <header>
                       
            <nav>
                
                <ul>
                    <li>
                        <NavLink to="/Celulares"activeClassname="active">Celulares</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Tecnologia">Tecnologia</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Varios">Varios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Ofertas">Ofertas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Nosotros">Nosotros</NavLink>
                    </li>
                </ul>
                {/* <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item_total">0</span>
            </div> */}

            </nav>

        </header>
        
    )
}

export default Header