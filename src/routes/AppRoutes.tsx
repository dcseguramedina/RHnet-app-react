import React from "react";
import {Routes, Route} from "react-router";
import CreateEmployee from "../features/createEmployee/CreateEmployee";

// Define the routing structure for the React application using React Router
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<CreateEmployee/>}/>
        </Routes>
    );
};

export default AppRoutes;
