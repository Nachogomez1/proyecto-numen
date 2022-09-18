import React from 'react'
import "./index.css"
import Logo from "../../assets/logo/Logo Header.png";
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (

        <header>
            <NavLink to="/" activeClassname="active">
                <div className="logo">
                    <img src={Logo} alt="" width="100" />
                </div>
            </NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/celulares" activeClassname="active">Celulares</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tecnologia" activeClassname="active">Tecnologia</NavLink>
                    </li>
                    <li>
                        <NavLink to="/varios" activeClassname="active">Varios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ofertas" activeClassname="active">Ofertas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre-nosotros" activeClassname="active">Nosotros</NavLink>
                    </li>
                    <div>
                        <button>
                            <box-icon name="cart"></box-icon>
                                <span className="item_total">
                                    <b>
                                    
                                    </b>
                                </span>
                        </button>     
                    </div>
                </ul>
                
            </nav>

        </header>

    )
}

export default Header