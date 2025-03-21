import React, {FormEvent, useState} from "react";
import Input from "../../components/input/Input.tsx";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button.tsx";
import styles from "./CreateEmployee.module.css";
import {departments, states} from "../../data/data.ts";

// Interfaces
interface EmployeeForm {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
}

// Component creation
const CreateEmployee: React.FC = () => {
    // React states
    const [employeeForm, setEmployeeForm] = useState<EmployeeForm>({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: ""
    });

    // Update the employeeForm state
    // Uses the name attribute of the select element to dynamically update the corresponding property in the state object
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        setEmployeeForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    // Update the employeeForm state for input elements
    // Uses the id attribute of the input element to dynamically update the corresponding property in the state object.
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.target;
        setEmployeeForm(prevForm => ({
            ...prevForm,
            [id]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Get existing employees from localStorage
        const employees = JSON.parse(localStorage.getItem('employees') || '[]');

        // Add new employee
        employees.push(employeeForm);

        // Save updated employees array to localStorage
        localStorage.setItem('employees', JSON.stringify(employees));

        // TO-DO: add modal //

        // Clear form fields and clear errors
        setEmployeeForm({
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            startDate: "",
            street: "",
            city: "",
            state: "",
            zipCode: "",
            department: ""
        });
    };

    return (
        <main className={styles.bg}>
            <section className={styles.content}>
                <h2>Create Employee</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="First Name"
                        id="firstName"
                        type="text"
                        value={employeeForm.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                        aria-required="true"
                    />
                    <Input
                        label="Last Name"
                        id="lastName"
                        type="text"
                        value={employeeForm.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                        aria-required="true"
                    />
                    <Input
                        label="Date of Birth"
                        id="dateOfBirth"
                        type="text"
                        value={employeeForm.dateOfBirth}
                        onChange={handleInputChange}
                        placeholder="Date of Birth"
                        required
                        aria-required="true"
                    />
                    <Input
                        label="Stard Date"
                        id="startDate"
                        type="text"
                        value={employeeForm.startDate}
                        onChange={handleInputChange}
                        placeholder="Start Date"
                        required
                        aria-required="true"
                    />
                    <fieldset>
                        <legend>Address</legend>
                        <Input
                            label="Street"
                            id="street"
                            type="text"
                            value={employeeForm.street}
                            onChange={handleInputChange}
                            placeholder="Street"
                            required
                            aria-required="true"
                        />
                        <Input
                            label="City"
                            id="city"
                            type="text"
                            value={employeeForm.city}
                            onChange={handleInputChange}
                            placeholder="City"
                            required
                            aria-required="true"
                        />
                        <Select
                            label="State"
                            options={states.map(state => ({value: state.abbreviation, label: state.name}))}
                            value={employeeForm.state}
                            onChange={handleChange}
                            name="state"
                        />
                        <Input
                            label="Zip Code"
                            id="zipCode"
                            type="number"
                            value={employeeForm.zipCode}
                            onChange={handleInputChange}
                            placeholder="Zip Code"
                            required
                            aria-required="true"
                        />
                    </fieldset>
                    <Select
                        label="Department"
                        options={departments}
                        value={employeeForm.department}
                        onChange={handleChange}
                        name="department"
                    />
                    <Button type="submit" textContent="Save"/>
                </form>
            </section>
        </main>
    );
};

export default CreateEmployee;
