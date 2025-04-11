import React, {useState} from "react";
import {Input, Table} from "antd";
import styles from "./ViewCurrentEmployees.module.css";
import {RootState} from "../../store/types.ts";
import {useSelector} from "react-redux";

// Interfaces
interface Employee {
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

interface Column {
    title: string;
    dataIndex: keyof Employee;
    key: string;
    sorter?: boolean | ((a: Employee, b: Employee) => number);
    sortDirections?: ('ascend' | 'descend')[];
}

// Component creation
const ViewCurrentEmployees: React.FC = () => {
    // Redux states
    const employees = useSelector((state: RootState) => state.employees.employees);
    console.log(employees)

    // React states
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(employees);
    const handleSearch = (value) => {
        setSearchTerm(value);
        const filtered = employees.filter(employee =>
            Object.values(employee).some(val =>
                String(val).toLowerCase().includes(value.toLowerCase())
            )
        );
        setFilteredData(filtered);
        setPagination(prev => ({...prev, total: filtered.length, current: 1}));
    };
    const [pagination, setPagination] = useState({
        current: 1, // Current page
        pageSize: 10, // Number of rows per page
        total: employees.length, // Total number of rows
    });

    const columns: Column[] = [
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
            sorter: (a, b) => a.street.toLowerCase().localeCompare(b.street.toLowerCase()),
            sortDirections: ['ascend', 'descend'],
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
            sorter: (a, b) => a.state.localeCompare(b.state),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Zip Code',
            dataIndex: 'zipCode',
            key: 'zipCode',
            sorter: (a, b) => a.zipCode - b.zipCode,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
            sorter: (a, b) => a.department.length - b.department.length,
            sortDirections: ['ascend', 'descend'],
        },
    ];

    const handleTableChange = (newPagination) => {
        setPagination({
            ...newPagination,
            total: filteredData.length  // Keep total in sync with filtered data
        });
    };

    return (
        <main>
            <section className={styles.content}>
                <h2>Current Employees</h2>
                <Input.Search
                    placeholder="Search..."
                    allowClear
                    onChange={e => handleSearch(e.target.value)}
                    style={{ marginBottom: 16 }}
                />
                <Table
                    dataSource={filteredData}  // Changed from employees
                    columns={columns}
                    pagination={{
                        current: pagination.current,
                        pageSize: pagination.pageSize,
                        total: pagination.total,
                        showSizeChanger: true,
                    }}
                    onChange={handleTableChange}
                />
            </section>
        </main>
    );
};

export default ViewCurrentEmployees;
