import React from 'react';

const FormSelect = ({ label, name, value, onChange, options, errors, className }) => {
    if (!Array.isArray(options)) {
        console.error('options must be an array');
        return null; // または適切なフォールバックを表示
    }
    return (
        <div className="box py-">
            <select
                className={className}
                // 'form-control form-control-sm'
                name={name}
                value={value}
                onChange={onChange}
            >
                <option></option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default FormSelect;