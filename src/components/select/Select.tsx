import React from 'react';
import styles from "./Select.module.css";

// Interfaces
interface SelectProps {
    label?: string;
    name: string;
    options:
        {
            value: string,
            label: string
        } []

    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
}

const Select: React.FC<SelectProps> = ({label, options, value, onChange, name}) => {
    return (
        <div className={styles.selectWrapper}>
            {label && <label>{label}</label>}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
