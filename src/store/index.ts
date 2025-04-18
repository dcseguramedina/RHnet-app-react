import {configureStore} from "@reduxjs/toolkit";
import employeeReducer from '../features/createEmployee/employeeSlice.ts';

// Set up a Redux store using Redux Toolkit

/* configureStore is called to create the Redux store
   The reducer object combines multiple reducers into the root reducer:
    employee slice of the state will be managed by employeeReducer
 */

const store = configureStore({
    reducer: {
        employees: employeeReducer,
    },
});

export default store;
