import React from 'react';
import Banner3 from "../Banner3/Banner3";
import Carrousel from"../Carrousel/Carrousel";
import ShppingCart from "../ShoppingCart/ShoppingCart";
import Banner from "../Banner/Banner";
import InfoBeneficios from "../InfoBeneficios/InfoBeneficios";
function PaginaPrincipal() {
    return (
        <div>
            <Banner3/>
            <Banner/>
            <Carrousel/>
            <ShppingCart/>
            <InfoBeneficios/>
        </div>
    );
}

export default PaginaPrincipal;