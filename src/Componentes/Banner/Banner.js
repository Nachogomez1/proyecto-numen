import React from 'react';
import Uno from "../../assets/Banner/LogoA.png";
import './Banner.css';

const Banner = () => {
  return ( 
    <div className="contenedor">

        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" style={{backgroundImage: `url("https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/2400/public/media/image/2021/09/mejor-aplicacion-fondos-pantalla-animados-llegaria-android-dentro-poco-2482649.jpg?itok=5FtijmHN")` }} bs-interval="1000">
                    <div className="carousel-caption d-none d-sm-block">
                      <h1 style={{color: "Black" }}>El mundo en tus manos</h1>
                      <h3>telefonía, impresión, fotografía, audio, seguridad, domótica y entretenimiento</h3>
                    </div> 
              </div>
              <div className="carousel-item" style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMjPZSo6y30Pv4pF1T-wZ2Cu5LE6JaZ08PwxWZ03nU1Hna4TRGLUjuYAhjHmFjM5RHoQ&usqp=CAU")` }} bs-interval="2000">
              </div>
              <div className="carousel-item" style={{backgroundImage: `url(${Uno})` }} bs-interval="5000">
              </div>
              
            </div>
          
     
        </div>
    </div>    
        
      
  )

  }

export default Banner;