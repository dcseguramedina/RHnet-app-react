import React, {useState} from "react";
import {Table} from "antd";
import employeeData from '../../data/employee-data.json';
import styles from "./ViewCurrentEmployees.module.css";

// Interfaces

// Component creation
const ViewCurrentEmployees: React.FC = () => {
    // React states
    const [pagination, setPagination] = useState({
        current: 1, // Current page
        pageSize: 10, // Number of rows per page
        total: employeeData.length, // Total number of rows
    });

    const handleTableChange = (pagination) => {
        setPagination({
            ...pagination,
        });
    };

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            sorter: (a, b) => a.firstName.length - b.firstName.length,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            sorter: (a, b) => a.lastName.length - b.lastName.length,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
            sorter: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
            sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
            sortDirections: ['ascend', 'descend'],
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
            sorter: (a, b) => a.city.length - b.city.length,
            sortDirections: ['ascend', 'descend'],
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
            sorter: (a, b) => a.zipCode - b.zipCode,
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
            sorter: (a, b) => a.department.length - b.department.length,
            sortDirections: ['ascend', 'descend'],
        },
    ];
    return (
        <main>
            <section className={styles.content}>
                <h2>Current Employees</h2>
                <Table
                    dataSource={employeeData}
                    columns={columns}
                    pagination={{
                        current: pagination.current,
                        pageSize: pagination.pageSize,
                        total: pagination.total,
                        showSizeChanger: true,
                    }}
                    onChange={handleTableChange}/>
            </section>
        </main>
    );
};

export default ViewCurrentEmployees;
