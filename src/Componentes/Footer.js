import React from 'react';
import Facebook from '../assets/Footer/Facebook.png';
import Instagram from '../assets/Footer/Instagram.png';
import Twitter from '../assets/Footer/Twitter.png';
import Logo from '../assets/Footer/Logo Alternativo 2.png';

function Footer (){
    return(
        <footer className='Footer'>
            <div className='grupo-0'>
                <p><b>LO MAS BUSCADO</b></p>
                <p><b>CELULARES</b></p>
                <p><b>CARGADORES</b></p>
                <p><b>FUNDAS</b></p>
                <p><b>AURICULARES</b></p>
            </div>
            <div className="grupo-1">
                <div className="box">
                    <img src={Logo} className="imgLogoFooter"></img>
                </div>
                <div className="box">
                    <h3>SOBRE NOSOTROS</h3>
                    <p>Somos una empresa de tecnologías de información,  nuestra mision es asesorar acorde a las necesidades de nuestros clientes.</p>
                </div>
                <div className='box'>
                    <h3>INFORMACION UTIL</h3>
                    <p>Preguntas frecuentes</p>
                    <p>Formas de pago</p>
                    <p>Boton de arrepentimiento</p>
                    <p>Nuestro Whatsapp</p>
                </div>
                <div className="box">
                    <h3>SEGUINOS EN NUESTRAS REDES</h3>
                        <div className="redSocial">
                            <img src={Facebook} className="contactImg"></img>
                            <img src={Instagram} className="contactImg"></img>
                            <img src={Twitter} className="contactImg"></img>
                        </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2022 <b>Tech Center</b> - Todos los Derechos Reservados.</small>
            </div>
    </footer>
    )
}

export default Footer;