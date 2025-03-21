import React from "react";
import styles from "./Input.module.css";

// Interfaces
interface InputFieldProps {
    label?: string;
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}

// Component creation
const Input: React.FC<InputFieldProps> = ({label, id, type, value, onChange, placeholder, required}) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default Input;

