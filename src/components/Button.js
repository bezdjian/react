import React from 'react'

const Button = ({bname, text}) => (
    <button
        name={bname}>
        {text}
    </button>
);

export default Button