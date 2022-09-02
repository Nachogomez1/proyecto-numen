import './App.css';
import Header from './Componentes/Header';
import Carrousel from './Componentes/Carrousel'
import Footer from './Componentes/Footer'

function App() {
  return (
    <div >
      <Carrousel/>
      
      <Header
      titulo='Prueba'/>

      <Footer/>

    </div>
  );
}

export default App;