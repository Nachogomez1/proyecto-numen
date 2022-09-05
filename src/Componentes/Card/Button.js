import React, { } from 'react';

const Button = (props) => {
    return (
        <button style={{
            color: "white",
            backgroundColor: "darkgreen",
            padding: "10px",
            border: "border",
            borderRadius: "0.5rem",
            fontSize: "0.5rem",
            textTransform: "uppercase",
            width: "70%",
            margin: "0 auto",
            height: "10%"

        }}>
            <h1 style={{
                fontSize: "1.5rem",
            }}>{props.titulo[3]}</h1>
        </button>
    )
}

export default Button