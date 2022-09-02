import React from 'react'
import logo from "../../assets/logo/logo.jpg";

const Header = () => {
    return (
        <header>
            <a href="#">
                <div className="logo">
                    <img src={logo} alt="" width="150"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">PRODUCTOS</a>
                </li>
            </ul>
            <di className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item_total">0</span>
            </di>
        </header>
    )
}

export default Header