

import React, { useState } from 'react';
//import Card from './Componentes/Card';
import Header from './Componentes/Header';
import 'boxicons';
import './App.css';
import Footer from './Componentes/Footer/Footer'
import Carrousel from './Componentes/Carrousel'
import Banner3 from './Componentes/Banner3/Banner3'
import InfoBeneficios from './Componentes/InfoBeneficios/InfoBeneficios'
//import Card from './Componentes/Card/Card';
import ShoppingCart from './Componentes/ShoppingCart/ShoppingCart';
import Rutas from './Componentes/Rutas/Rutas';
import { useEffect } from 'react';
// import Quote from './Componentes/Quote';
import Loader from './Componentes/Loader';
import axios from 'axios';
import CrudForm from './Componentes/CrudForm';
import CrudTable from './Componentes/CrudTable';
import CrudTableRow from './Componentes/CrudTableRow';
// const initialQuote = {
//   text: 'Cite',
//   author: 'Autor'
// }

// const App = () => {
//   const [quote, setQuote] = useState(initialQuote)
//   const [loading, setloading] = useState(false)

//   const updateQuote  = async () => {
//     setloading(true)
      
    

//     const url = "https://www.breakingadapi.com/api/quote/randow"
//     const res = await axios.get(url)
//     const [newQuote] = await res.data
//     const {quote: text, author} = newQuote;

//     setQuote({
//       text,
//       author
//     })

//     setloading(false)

//   }
//   useEffect(() => {
//     updateQuote()
//   }, []) 
// }

const initialDb = []

function App() {

  const [db, setDb] = useState(initialDb)
  const [dataToEdit, setDataToEdit] = useState(null)

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/products"),
      json = await res.data 
      
      setDb(json)
  }

  useEffect(() => {
   getData() 
  
  }, [])
  

  const createData = async (data) => {
    data.id = Date.now()

    const options = {
      method: "POST",
      headers: { "content-type": "application/json"},
      data: JSON.stringify(data)
    }

  const [db, setDb] = useState(initialDb)
    const res = await axios ("http://localhost:5000/products", options),

    producto = await res.data

    setDb([...db, producto])
  }

  const updateData =  async (data) => {

    let ENDPOINT = `http://localhost:5000/products/${data.id}`
    const options = {
      method: "PUT",
      headers: { "content-type": "application/json"},
      data: JSON.stringify(data)
    }
    const res = await axios (ENDPOINT, options),

    producto = await res.data

    setDb([...db, producto])
  }

  const deleteData = async (id) => {
    let isDelete = window.confirm(`Estas seguro de eliminar id ${id}`)

    if (isDelete) {
      let ENDPOINT = `http://localhost:5000/products/${id}`
      
    const options = {
      method: "DELETE",
      headers: { "content-type": "application/json"},
     }
    const res = await axios (ENDPOINT, options),

    producto = await res.data
      setDb([...db, producto])
    } else {
      return
    }
  }



  return (

    <>
      {/* <div style={{
        display: "flex",
        flexDirection: "column",
        width: "300px"
      }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOZEqkMowNbjtcWIkTsdz6R91eQw6QCxj0A&usqp=CAU" alt="Br" width="300" />
        <button onClick={() => updateQuote()}>Obtener otra cita</button>

         { loading && <Loader />}
         
         { !loading && <Quote quote={quote}/>} */}

        
      {/* </></div>  */}
      <div>
        <h2>CRUD</h2>
        <CrudForm 
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        <CrudTable
         data={db} 
         deleteData={deleteData}
         setDataToEdit={setDataToEdit}
        />
      </div>
        
    <Rutas>
        <div> 
          <Rutas/>
          <Header/>
          <Banner3 />
          <ShoppingCart />
          <Carrousel />
          <InfoBeneficios />
          <Footer />

      </div>
    </Rutas>
      

    </>


  );
}

export default App;