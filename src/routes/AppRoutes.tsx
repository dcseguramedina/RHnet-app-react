import React from "react";
import {Routes, Route} from "react-router";
import CreateEmployee from "../features/createEmployee/CreateEmployee";
import ViewCurrentEmployees from "../features/viewCurrentEmployees/ViewCurrentEmployees.tsx";


// Define the routing structure for the React application using React Router
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<CreateEmployee/>}/>
            <Route path="/current-employees" element={<ViewCurrentEmployees/>}/>
        </Routes>
    );
};

export default AppRoutes;
