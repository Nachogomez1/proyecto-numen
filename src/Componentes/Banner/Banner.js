import React from 'react';
import Uno from "../../assets/Banner/LogoA.png";
import Dos from "../../assets/Banner/Banner Wallpaper.jpg";
import Tres from "../../assets/Banner/Cielo Wallpaper.jpg";
import './Banner.css';


const Banner = () => {
  return ( 
    <div className="contenedor">

        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" style={{backgroundImage: `url("https://wallpaperboat.com/wp-content/uploads/2019/06/synthwave-03.jpg")` }} bs-interval="1000">
                    <div className="carousel-caption d-none d-sm-block">
                      <h1 style={{color: "Black" }}>El mundo en tus manos</h1>
                      <h3>telefonía, impresión, fotografía, audio, seguridad, domótica y entretenimiento</h3>
                    </div> 
              </div>
              <div className="carousel-item" style={{backgroundImage:`url("https://www.wallpaperuse.com/wallp/13-135058_m.jpg")` }} bs-interval="2000">
              </div>
              <div className="carousel-item" style={{backgroundImage: `url(${Uno})` }} bs-interval="5000">
              </div>     
            </div>
        </div>
    </div>    
        
      
  )

  }

export default Banner;