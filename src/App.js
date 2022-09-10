

import React, { } from 'react';
//import Card from './Componentes/Card';
import Header from './Componentes/Header';
//import 'boxicons';
import './App.css';
<<<<<<< HEAD
import Footer from './Componentes/Footer'
import Carrousel from './Componentes/Carrousel/Carrousel'
import Banner3 from './Componentes/Banner3/Banner3'
import InfoBeneficios from './Componentes/InfoBeneficios/InfoBeneficios'
import Banner from './Componentes/Banner/Banner';
=======
import Footer from './Componentes/Footer/Footer'
import Carrousel from './Componentes/Carrousel'
import Banner3 from './Componentes/Banner3/Banner3'
import InfoBeneficios from './Componentes/InfoBeneficios/InfoBeneficios'
//import Card from './Componentes/Card/Card';
import ShoppingCart from './Componentes/ShoppingCart/ShoppingCart';
import Rutas from './Componentes/Rutas/Rutas';
>>>>>>> 934e0c97753a91d8b4697ac2a35fd1b66b20033f

function App()  {
  return (

<<<<<<< HEAD
        <>
      <div>
        <Header />
      </div>
      
      <div>
        <Banner />
      </div>
=======
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
>>>>>>> 934e0c97753a91d8b4697ac2a35fd1b66b20033f

      </div>
<<<<<<< HEAD
 
            </>
=======
    </Rutas>
      

    </>
>>>>>>> 934e0c97753a91d8b4697ac2a35fd1b66b20033f


  );
}

export default App;