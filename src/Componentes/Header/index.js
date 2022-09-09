import React from 'react'
import "./index.css"
import Logo from "../../assets/logo/Logo Header.png";
import { Link, NavLink } from 'react-router-dom';
import Carrousel from '../Carrousel';


const Header = () => {
    return (
        
        <header>     
            <NavLink  to="/"activeClassname="active">
                <div className="logo">
                    <img src={Logo} alt="" width="100"/>
                </div>
            </NavLink >                  
            <nav>                
                <ul>
<<<<<<< HEAD
                    {/* <li>
                        <img src={Logo} alt="logo" prop="logo"></img>
                    </li> */}
=======
>>>>>>> 1513f849f7e59eebe7953784cce0559020c9d95d
                    <li>
                        <NavLink to="/Celulares"activeClassname="active">Celulares</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Tecnologia"activeClassname="active">Tecnologia</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Varios"activeClassname="active">Varios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Ofertas"activeClassname="active">Ofertas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Nosotros"activeClassname="active">Nosotros</NavLink>
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