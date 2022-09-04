import React, { } from 'react';

const Button = (props) => {
    return (
        <button style={{
            color: "white",
            backgroundColor: "darkgreen",
            padding: "10px",
            border: "border",
            borderRadius: ".5rem",
            fontSize: "1.5rem",
            textTransform: "uppercase",
            width: "90%",
            margin: "0 auto",
            height: "20%"

        }}>
            <h1>{props.titulo[2]}</h1>
        </button>
    )
}

export default Button