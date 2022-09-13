import { Carousel } from 'bootstrap';
import React, { } from 'react';
import Button from './Button';
import CardImage from './CardImage';

const title = ["Agregar", "Comprar", "Confirmar", "Ingresar"];
const titleCard = ["Celulares", "Accesorios", "Samsung", "Motorola"];



const Card = (props) => {
    return (
        <figure style={{
            border: "solid black 2px",
            width: "200px",
            height: "250px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: ".7rem",
            background: "blue",
            
            
        }}>
            {/* <CardImage/> */}
            <figcaption>
                <h2>Celulares</h2>
                <p> Celulares Economicos</p>
            </figcaption>
            <br/>
            <Button titulo={title} />
            
           
        </figure>
    )
}

export default Card