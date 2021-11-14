import React from 'react';

const Button = () => {
    const btnHandler = (e) =>{
        console.log('click', e)
    }
    return (
        <button onClick={btnHandler}>btn</button>
    );
};

export default Button;