import React from 'react';
import Banner3 from "../Banner3/Banner3";
import Carrousel from"../Carrousel/Carrousel";
import ShppingCart from "../ShoppingCart/ShoppingCart";
import InfoBeneficios from "../InfoBeneficios/InfoBeneficios";

function Home() {
    return (
        <div>
            <Banner3/>
            <ShppingCart/>
            <Carrousel/>
            <InfoBeneficios/>
        </div>
    );
}

export default Home;