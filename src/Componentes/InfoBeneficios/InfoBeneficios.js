
import React from 'react'
import Seccion from './Seccion'


const INFO =[
    {id: 1, 
    titulo: "Promociones exclusivas",
    descripcion: "Solo en la web encontrarás descuentos exclusivos.",
  
    },
    {id:2,
    titulo: "Abierto 24hs",
    descripcion: "Acceso a compras todo el día, desde cualquier dispositivo"
    },
    {id:3,
    titulo: "Envíos Gratuitos",
    descripcion: "Envío gratuito a toda Argentina"
    },
    {id:4,
    titulo: "Garantía y Seguridad",
    descripcion: "Adquiere nuestra garantía exclusiva y recibe los mejores beneficios."
    }
]



const InfoBeneficios = () => {
  return (
   <>






   <h2 className='container' > Beneficios de comprar online</h2>
   
   <div className='box grid-responsive'>
   {
  
    INFO.map(benef=> <Seccion key={benef.id} data={benef} />)
            
   }
   </div>
   </>
  )
}

export default InfoBeneficios