import React from 'react';
import Facebook from '../assets/Footer/Facebook.png';
import Instagram from '../assets/Footer/Instagram.png';
import Twitter from '../assets/Footer/Twitter.png';
import Logo from '../assets/Footer/Logo Alternativo 2.png';

function Footer() {
    return (

        <div className='footer'>
            <div>
                <img src={Logo} alt='' className='logoImg' />

                <h4>CONTACTO</h4>

            </div>
            <div>
                <h4>CONTACTANOS</h4>

               
                <li className='li'><img src={Location} alt='' className='contactImg' /><h5>Av. Colon 713, CP 5500</h5></li>

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

                        <div>
                            <h4>REDES SOCIALES</h4>
                            <img src={Facebook} alt='' className='img' />
                            <img src={Instagram} alt='' className='img' />
                            


                        </div>
                        <div>
                            <h4>ENVIANOS UN COMENTARIO</h4>
                            formulario

                        </div>
                        <div>
                            <h4>PREGUNTAS FRECUENTES</h4>
                            <ul>
                                <li className='li'><h5>¿Qué beneficios tiene adquirir este producto o servicio?</h5></li>
                                <li className='li'><h5>¿Tiene garantía?</h5></li>
                                <li className='li'><h5>¿Qué métodos de pago aceptan?</h5></li>
                                <li className='li'><h5>¿En cuánto tiempo tendré listo mi producto?</h5></li>
                            </ul>


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
                    </div>
                </footer>


            </div>


        </div>

    )


}

export default Footer;