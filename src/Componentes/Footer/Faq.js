import React from 'react';
import "./Footer.css"

function Faq() {
    return (
        <div className='Faq'>
           <h2><b>PREGUNTAS FRECUENTES</b></h2> 
           <ul className='Container'>
            <li className='Preguntas'>
                <h4><b>¿Realmente necesito este producto o servicio?</b></h4>
                <p>En Tech Center ofrecemos los <b>mejores productos</b> en base a la duracion y materiales para nuestros cliente, adaptandose a sus propias necesidades. </p>
            </li>
            <li className='Preguntas'>
                <h4><b>¿Tiene garantía?</b></h4>
                <p>Todos nuestros articulos tienen <b>garantia de 6 a 12 meses</b>, dependiendo de cada producto. </p>
            </li>
            <li className='Preguntas'>
                <h4><b>¿En cuánto tiempo tendré listo mi producto?</b> </h4>
                <p>Despues de tu compra, tus productos tienen una demora aproximada de <b>15 dias habiles</b> hasta tu domicilio.</p>
            </li>
            <li className='Preguntas'>
                <h4><b>¿Cuánto dinero cuesta la adquisición de este producto?</b></h4>
                <p>El envio <b>depende de tu zona de residencia</b>, puedes consultarlo al entrar al producto que desees.</p>
            </li>
            <li className='Preguntas'>
                <h4><b>¿Cuales son nuestros metodos de pago?</b></h4>
                <p>Actualmente recibimos como forma de pago las <b>tarjetas de debito, tarjetas de credito, efectivo (o en su defecto pagofacil/rapipago) y criptomonedas.</b></p>
            </li>
            <li className='Preguntas'>
                <h4><b>¿Donde se encuentran y como contactarlos?</b></h4>
                <p>Nos encontramos en la calle <b>Av. Colon 702 Mendoza ciudad</b>, nuestro correo es <b>techcenter@gmail.com</b> y nuestros horarios son <b>lun a vie de 8 a 20 hs y sab de 10 a 14 hs.</b></p>
            </li>   
           </ul>
        </div>
    );
}

export default Faq;