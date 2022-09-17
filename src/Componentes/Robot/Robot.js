


import React from 'react'
import robot from "../../assets/Robot/robot.png"
import "./robot.css"

const Robot = () => {
  return (
    <div className='robotWhats'>
        <a href="https://api.whatsapp.com/send/?phone=5493518116031&amp;text=%20%C2%A1Hola,%20ClienteTech!" target="_blank" rel="noopener noreferrer" >
            <img src= {robot}  alt="WhatsApp Techbot"  /> 

        </a>
        
     </div>
  )
}

export default Robot