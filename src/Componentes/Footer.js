import React from 'react';
import Facebook from '../assets/Footer/Facebook.png';
import Instagram from '../assets/Footer/Instagram.png';
import Twitter from '../assets/Footer/Twitter.png';
import Logo from '../assets/Footer/Logo Alternativo 2.png';

function Footer (){
    return(
        <footer className='Footer'>
            <div className="grupo-1">
                    <div className="box">
                        <img src={Logo} className="imgLogoFooter"></img>
                    </div>
                <div className="box">
                    <h3>SOBRE NOSOTROS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                </div>
                <div className="box">
                    <h3>SIGUENOS</h3>
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