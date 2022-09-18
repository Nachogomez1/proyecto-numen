import { useEffect, useState } from 'react'



import React from 'react'

const initialForm = {
    nombre: "",
    precio: "",
    id: null

}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

    const [form, setForm] = useState(initialForm)

    useEffect(() => {
      if (dataToEdit) {
        setForm(dataToEdit)
      } else {
        setForm(initialForm)
      
      }

    }, [dataToEdit])

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!form.nombre || !form.precio) {
        alert('Datos incompletos')
        return
      }
      if (form.id === null) {
        createData(form)
      } else {
        updateData(form)
      }  
    }
       

    

    const handleReset = () => {
      setForm(initialForm)
      setDataToEdit(null)
    }


  return (
  <div> 
    <h3>Agregar</h3>
    <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value={form.name}/>
        <input type="number" name="precio" placeholder="precio" onChange={handleChange} value={form.precio}/>
        <input type="submit" value="Enviar" />
        <input type="reset" value="limpiar" onClick={handleReset} /> 
    </form>
  </div>  
  )
}

export default CrudForm;