import React from 'react'
import "./index.css"
import logo from "../../assets/logo/logo.jpg";

const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={logo} alt="" width= "100" />
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">Celulares</a>
                </li>
                <li>
                    <a href="#">Tecnologia</a>
                </li>
                <li>
                    <a href="#">Varios</a>
                </li>
                <li>
                    <a href="#">Ofertas</a>
                </li>
                <li>
                    <a href="#">Sobre Nosotros</a>
                </li>
            </ul>
            {/* <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item_total">0</span>
            </div> */}
        </header>
    )
}

export default Header