import React, {}  from 'react';
import Button from './Button';

const title = ["Agregar","Comprar","Confirmar","Ingresar"];
const titleCard = ["Celulares","Accesorios","Samsung","Motorola"];



const Card = (props) => {
    return (
        <figure style= {{
            border: "solid black 2px",
            width:"200px",
            height:"275px",
            textAlign:"center",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            borderRadius: ".7rem",
            background:"blue",
        }}>
            <figcaption>
                <h2>uuu</h2>
                <p> Celulares Economicos</p>
            </figcaption>
            <Button titulo={title}/>
        </figure>
    )
}

export default Card