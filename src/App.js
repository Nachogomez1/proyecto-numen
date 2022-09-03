import './App.css';
import Header from './Componentes/Header';
import Carrousel from './Componentes/Carrousel'
import Footer from './Componentes/Footer'
import Banner3 from './Componentes/Banner3';
import InfoBeneficios from './Componentes/InfoBeneficios';

function App() {
  return (
    <div > 
      <Header
      titulo='Prueba'/>
      <Banner3/>
      <InfoBeneficios/>
      <Carrousel/>
      <Footer/>
    </div>
  );
}

export default App;