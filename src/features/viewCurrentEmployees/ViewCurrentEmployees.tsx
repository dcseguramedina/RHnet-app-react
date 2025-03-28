import React from "react";
import { Table } from "antd";
import employeeData from '../../data/employee-data.json';
import styles from "./ViewCurrentEmployees.module.css";

// Interfaces

// Component creation
const ViewCurrentEmployees: React.FC = () => {
    // React states


    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            sorter: true,
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            sorter: true,
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
            sorter: true,
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
            sorter: true,
        },
        {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            sorter: true,
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            sorter: true,
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            sorter: true,
        },
        {
            title: 'Zip Code',
            dataIndex: 'zipCode',
            key: 'zipCode',
            sorter: true,
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
            sorter: true,
        },
    ];
    return (
        <main>
            <section className={styles.content}>
                <h2>Current Employees</h2>
                <Table dataSource={employeeData} columns={columns} />
            </section>
        </main>
    );
};

export default ViewCurrentEmployees;
