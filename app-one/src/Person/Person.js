import React from 'react';

const person = (props) => {
    return (
        <div>
            <h1>Mam na imie {props.name}. Mam {props.age} lat</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default person