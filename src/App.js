

import React, { } from 'react';
//import Card from './Componentes/Card';
import Header from './Componentes/Header';
import 'boxicons';
import './App.css';
import Footer from './Componentes/Footer'
import Carrousel from './Componentes/Carrousel'
import Banner3 from './Componentes/Banner3/Banner3'
import InfoBeneficios from './Componentes/InfoBeneficios/InfoBeneficios'


function App() {
  return (

    <>
      <div>
        <Header />
      </div>

      <div>
        <Banner3 />
      </div>

      <div>
        <InfoBeneficios />
      </div>

      <div>
        <Carrousel />
      </div>

      <div>
        <Footer />
      </div>

    </>


  );
}

export default App;