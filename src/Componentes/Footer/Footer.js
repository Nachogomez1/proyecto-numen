import React from 'react';
import Facebook from '../../assets/Footer/Facebook.png';
import Instagram from '../../assets/Footer/Instagram.png';
import Twitter from '../../assets/Footer/Twitter.png';
import Whatsapp from "../../assets/Footer/Whatsapp.png";
import Logo from '../../assets/Footer/Logo Alternativo 2.png';
import "./Footer.css";
import { Link, NavLink } from 'react-router-dom';

function Footer (){
    return(
        <footer className='Footer'>
            <div className="grupo-1">
                <div className="box">
                    <img src={Logo} alt="logo" prop="logo" className="imgLogoFooter"></img>
                </div>
                <div className="box">
                    <ul>
                        <h3><b>SOBRE NOSOTROS</b></h3>
                        <p><b>Somos una empresa de tecnologías, nuestra mision es asesorar correctamente a nuestro clientes segun sus necesidades.</b></p>
                    </ul>
                </div>
                <ul className='box'>
                    <h3><b>INFORMACION UTIL</b></h3>
                    <li><NavLink to="/preguntas-frecuentes" className="links"><p className='resaltado'>Preguntas frecuentes</p></NavLink></li>
                    <li><NavLink to="/" className="links"><p className='resaltado'>Volver al inicio</p></NavLink></li>
                    <li><NavLink to="/home" className="links"><p className='resaltado'>Home</p></NavLink></li>
                </ul>
                <ul className='box'>
                    <h3><b>LO MAS BUSCADO</b></h3>
                    <li><Link to="/Celulares" className="links"><p className='resaltado'>Celulares</p></Link></li>
                </ul>
                <div className="box">
                        <h3><b>NUESTRAS REDES</b></h3>
                        <ul className="redSocial">
                            <li><a href="https://www.facebook.com" target="blank"><img src={Facebook} alt="facebook" prop="facebook" className="contactImg"></img></a></li>
                            <li><a href="https://api.whatsapp.com/send/?phone=5493518116031&amp;text=%20%C2%A1Hola,%20ClienteTech!" target="blank"><img src={Whatsapp} alt="Whatsapp" prop="Whatsapp" className="contactImg"></img></a></li>
                            <li><a href="https://www.instagram.com" target="blank"><img src={Instagram} alt="instagram" prop="instagram" className="contactImg"></img></a></li>
                            <li><a href="https://twitter.com/?lang=es" target="blank"><img src={Twitter} alt="twitter" prop="twitter" className="contactImg"></img></a></li>
                        </ul>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2022 Tech Center - Todos los Derechos Reservados.</small>
            </div>
    </footer>
    )
}
export default Footer;