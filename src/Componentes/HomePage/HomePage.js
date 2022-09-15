

import React from 'react';
import "./homePage.css";
import Shop from "../../assets/HomePage/Shop.png"


const HomePage = () => {
  return (
    <div className='containerAll'>
    <div className='cover'>
    <div className='containerCover'>
    <div className='containerInfo'>
        <h1> Tech Center</h1>
        <h4> Tienda de Celulares y Accesorios</h4>
        <button >Get Started</button>
    </div>
    <div className='containerVector'>
        <img src={Shop} alt='shop' prop="shop" className='imgShopLogo'  ></img>
    </div>

    </div>
    </div>

</div>
  )
}

export default HomePage