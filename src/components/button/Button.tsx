import React from "react";
import styles from "./Button.module.css";

// Interfaces
interface ButtonProps {
    type?: 'submit';
    textContent: string;
    onClick?: () => void;
}

// Component creation
const Button: React.FC<ButtonProps> = ({type, textContent, onClick}) => {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {textContent}
        </button>
    );
};

export default Button;
