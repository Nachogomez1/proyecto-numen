

import React from 'react'
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
    <h3>Tabla de Datos</h3>
    <table>
        <thead>
            <tr>
                <th>nombre</th>
                <th>precio</th>
                <th>Accciones</th>
            </tr>
        </thead>
        <tbody>
          {
            data.length === 0 && (
              <tr>
                <td>Sin datos</td>
              </tr>
            )
          }
          {
            data.length !== 0 && (
             data.map(producto => <CrudTableRow 
                key={producto.id}
                producto={producto} 
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
             />)
            )
          } 
        </tbody>
      </table>    
    </div>
   );
};

export default CrudTable;