import React from 'react';
import Facebook from '../../assets/Footer/Facebook.png';
import Instagram from '../../assets/Footer/Instagram.png';
import Twitter from '../../assets/Footer/Twitter.png';
import Logo from '../../assets/Footer/Logo Alternativo 2.png';
import "./Footer.css";

function Footer (){
    return(
        <footer className='Footer'>
            <div className="grupo-1">
                <div className="box">
                    <img src={Logo} alt="logo" prop="logo" className="imgLogoFooter"></img>
                </div>
                <div className="box">
                    <h3><b>SOBRE NOSOTROS</b></h3>
                    <p><b>Somos una empresa de tecnologías, nuestra mision es asesorar correctamente a nuestro clientes segun sus necesidades.</b></p>
                </div>
                <div className='box'>
                    <h3><b>INFORMACION UTIL</b></h3>
                    <p className='resaltado'>Preguntas frecuentes</p>
                    <p className='resaltado'>Formas de pago</p>
                    <p className='resaltado'>Boton de arrepentimiento</p>
                    <p className='resaltado'>Nuestro Whatsapp</p>
                </div>
                <div className='box'>
                <h3><b>LO MAS BUSCADO</b></h3>
                <p className='resaltado'>Celulares</p>
                <p className='resaltado'>Cargadores</p>
                <p className='resaltado'>Fundas</p>
                <p className='resaltado'>Auriculares</p>
                </div>
                <div className="box">
                    <h3><b>SEGUINOS</b></h3>
                        <div className="redSocial">
                            <img src={Facebook} alt="facebook" prop="facebook" className="contactImg"></img>
                            <img src={Instagram} alt="instagram" prop="instagram" className="contactImg"></img>
                            <img src={Twitter} alt="twitter" prop="twitter" className="contactImg"></img>
                        </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2022 Tech Center - Todos los Derechos Reservados.</small>
            </div>
    </footer>
    )
}
export default Footer;