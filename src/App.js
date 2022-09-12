

import React, { } from 'react';
//import Card from './Componentes/Card';
import Header from './Componentes/Header/index ';
//import 'boxicons';
import './App.css';
import Footer from './Componentes/Footer/Footer'
import Carrousel from './Componentes/Carrousel/Carrousel'
import Banner3 from './Componentes/Banner3/Banner3'
import InfoBeneficios from './Componentes/InfoBeneficios/InfoBeneficios'
import Banner from './Componentes/Banner/Banner';
//import Footer from './Componentes/Footer/Footer'
//import Carrousel from './Componentes/Carrousel'
//import Banner3 from './Componentes/Banner3/Banner3'
//import InfoBeneficios from './Componentes/InfoBeneficios/InfoBeneficios'
//import Card from './Componentes/Card/Card';
import ShoppingCart from './Componentes/ShoppingCart/ShoppingCart';
import Rutas from './Componentes/Rutas/Rutas';

function App()  {
  return (

        <>

    
    <Rutas>
        <div> 
          <Rutas/>
          <Header/>
          <Banner3 />
          <ShoppingCart />
          <Carrousel />
          <InfoBeneficios />
          <Footer />
          <Banner />
      </div>
 
      
    </Rutas>
      

    </>


  );
}

export default App;