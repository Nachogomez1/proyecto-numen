import './App.css';
import Header from './Componentes/Header';
import Carrousel from './Componentes/Carrousel'
import Footer from './Componentes/Footer'
import Banner3 from './Componentes/Banner3';
import InfoBeneficios from './Componentes/InfoBeneficios';

function App() {
  return (
    <div > 
      
      <Banner3/>
      <InfoBeneficios/>
      <Carrousel/>
      
      <Header
      titulo='Prueba'/>
    

      <Footer/>

    </div>
  );
}

export default App;