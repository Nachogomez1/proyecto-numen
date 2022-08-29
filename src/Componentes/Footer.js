import React from 'react';
import Facebook from '../images/Facebook.png';
import Instagram from '../images/Instagram.png';
import Whatsapp from '../images/Whatsapp.png';
import Call from '../images/Call.png';
import Gmail from '../images/Gmail.png';
import Location from '../images/Location.png';
import Logo from '../images/Logo Alternativo.png';

function Footer (){
    return(
            <div className='footer'>
                <div>
                <img src={Logo} alt=''  className='logoImg'/>
                    <h4>CONTACTO</h4> 
                    <li className='li'><img src={Call} alt=''  className='contactImg'/><h5>011-1234567</h5></li>
                    <li className='li'><img src={Gmail} alt='' className='contactImg'/><h5>fullcel@gmail.com</h5></li>
                    <li className='li'><img src={Location} alt='' className='contactImg'/><h5>Av. Colon 713, CP 5500</h5></li>
                </div>
                <div>
                    <h4 className='text'>ENLACES</h4>
                    <ul className='decoration'>
                        <li className='li'><h5>Inicio</h5></li>
                        <li className='li'><h5>Ofertas</h5></li>
                        <li className='li'><h5>Sobre Nosotros</h5></li>
                    </ul>
                </div>
                <div>
                    <h4>REDES SOCIALES</h4>
                    <img src={Facebook} alt=''  className='img'/>
                    <img src={Instagram} alt='' className='img'/>
                    <img src={Whatsapp} alt='' className='img'/>

                </div>
                <div>
                    <h4>ENVIANOS UN COMENTARIO</h4>
                    formulario
                </div>
            </div>
    )
}

export default Footer;