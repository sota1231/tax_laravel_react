import React from 'react';

const FormInputField = ({ name, type, value, onChange, placeholder, error }) => {
    return (
        <>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    )
};
export default FormInputField;