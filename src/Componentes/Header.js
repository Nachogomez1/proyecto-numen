import React from 'react';



function Header ({titulo}){
    return(
        <nav>
            <div className="nav-inicio">
                <a href="#!" className="logo">{titulo}</a>
            </div>
        </nav>
    )
}

export default Header;
