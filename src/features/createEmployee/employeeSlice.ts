import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface EmployeeState {
    employees: EmployeeForm[];
}

// Set up the initial state
const initialState: EmployeeState = {
    employees:  [],
};

// Create an employee slice with the initial state
const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee(state, action: PayloadAction<EmployeeForm>) {
            state.employees.push(action.payload);
        },
        setEmployees(state, action: PayloadAction<EmployeeForm[]>) {
            state.employees = action.payload;
        },
    },
});

export const { addEmployee, setEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
