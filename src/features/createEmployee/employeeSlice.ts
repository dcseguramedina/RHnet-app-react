import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import employeeData from '../../data/employee-data.json'

// Interfaces
interface EmployeeForm {
    id: string;
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

interface EmployeeState {
    employees: EmployeeForm[];
}

// Set up the initial state
const initialState: EmployeeState = {
    employees: employeeData as EmployeeForm[],
};

// Create an employee slice with the initial state
const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee(state, action: PayloadAction<EmployeeForm>) {
            state.employees.push(action.payload);
        },
    },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
