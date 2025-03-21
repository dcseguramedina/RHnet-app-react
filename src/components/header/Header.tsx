import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.css";

// Interfaces
interface LinkProps {
    icon: string;
    text: string;
    url: string;
}

// Component creation
const Header: React.FC = () => {
    const navigationLinks: LinkProps[] = [
        {
            icon: "fa fa-user",
            text: "View Current Employee",
            url: "",
        },
    ]

    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>HRnet</h1>
            <Navigation links={navigationLinks}/>
        </header>
    );
};

export default Header;
