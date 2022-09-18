
import React from 'react'

const CrudTableRow = ({producto, setDataToEdit, deleteData}) => {
    const {nombre, precio, id} = producto;
  return (
     <tr>
        <td>{nombre}</td>
        <td>{precio}</td>
        <td>
            <button onClick={() => setDataToEdit(producto)}>Editar</button>
            <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>

     </tr>
    )
}

export default CrudTableRow;