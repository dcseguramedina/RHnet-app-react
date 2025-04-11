import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.css";
import {useLocation} from "react-router-dom";

// Interfaces
interface LinkProps {
    icon: string;
    text: string;
    url: string;
}

// Component creation
const Header: React.FC = () => {
    const location = useLocation();
    const isOnCurrentEmployees = location.pathname === '/current-employees';

    const navigationLinks: LinkProps[] = !isOnCurrentEmployees ? [
        {
            icon: "fa fa-user",
            text: "View Current Employee",
            url: "/current-employees",
        },
    ] : [
        {
            icon: "fa fa-home",
            text: "Home",
            url: "/",
        },
    ];


    return (
        <header className={styles.header}>
            <h1 className={styles.headerTitle}>HRnet</h1>
            <Navigation links={navigationLinks}/>
        </header>
    );
};

export default Header;
