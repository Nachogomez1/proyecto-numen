import React, {}  from 'react';
import Button from './Button';

const title = ["Agregar","Comprar","Confirmar","Ingresar"];


const Card = () => {
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
        }}>
            <figcaption>
                <h2> Celulares</h2>
                <p> Celulares Economicos</p>
            </figcaption>
            <Button titulo={title}/>
        </figure>
    )
}

export default Card