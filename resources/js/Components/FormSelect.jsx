import React from 'react';

const FormSelect = ({ label, name, value, onChange, options, errors }) => {
    if (!Array.isArray(options)) {
        console.error('options must be an array');
        return null; // または適切なフォールバックを表示
    }
    return (
        <div className="box py-">
            <select
                name={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default FormSelect;