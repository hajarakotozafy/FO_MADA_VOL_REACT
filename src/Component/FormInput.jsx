import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
    const { label, onChange, id, errorMessage, ...inputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = e => {
        setFocused(true);
    }

    return (
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
            <span className="span">{errorMessage}</span>
        </div>
    )
}

export default FormInput 