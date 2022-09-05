import React from 'react';
import Instagram from '../../assets/Footer/Instagram.png';
import Twitter from '../../assets/Footer/Twitter.png';
import Logo from '../../assets/Footer/Logo Alternativo 2.png';
import Facebook from '../../assets/Footer/Facebook.png';
import "./Footer.css";
import { Link } from 'react-router-dom';
function Footer() {
return (
    <div className='Footer'>
        <div className="grupo-1">
            <div className="box">
                <img src={Logo} className="imgLogoFooter"></img>
            </div>
            <div className="box">
                <h3><b>SOBRE NOSOTROS</b></h3>
                <p><b>Somos una empresa de tecnologías de información,  nuestra mision es asesorar acorde a las necesidades de nuestros clientes.</b></p>
            </div>
            <div className='box'>
                <h3><b>INFORMACION UTIL</b></h3>
                <p className='resaltado'>Preguntas frecuentes</p>
                <p className='resaltado'>Formas de pago</p>
                <p className='resaltado'>Boton de arrepentimiento</p>
                <p className='resaltado'>Nuestro Whatsapp</p>
            </div>
            <div className="box">
                    <h3><b>LO MAS BUSCADO</b></h3>
                        <p className='resaltado'>Celulares</p>
                        <p className='resaltado'>Cargadores</p>
                        <p className='resaltado'>Auriculares</p>
                        <p className='resaltado'>Cables</p>
                </div>
            <div className='box'>
                <h3><b>SEGUINOS</b></h3>
                    <ul className='redSocial'>
                        <li><img src={Facebook}></img></li>
                        <li><img src={Instagram}></img></li>
                        <li><img src={Twitter}></img></li>
                    </ul>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2022 <b>Tech Center</b> - Todos los Derechos Reservados.</small>
        </div>
    </div>
)
}

export default Footer;