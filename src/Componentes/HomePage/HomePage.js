import React from 'react';
import "./homePage.css";
import Shop from "../../assets/HomePage/shop.png"
import { Link, NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='containerAll'>
      <div className='cover'>
        <div className='containerCover'>
          <div className='containerInfo'>
            <h1> Tech Center</h1>
            <h4> Tienda de Celulares y Accesorios</h4>
            <NavLink to="/home"><button>Empecemos!</button></NavLink>
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