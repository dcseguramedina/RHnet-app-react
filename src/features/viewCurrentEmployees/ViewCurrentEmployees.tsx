import React, {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/types.ts";
import {Input, Table} from "antd";
import styles from "./ViewCurrentEmployees.module.css";

// Interfaces
interface Employee {
    id?: string;
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
    const employees = useSelector((state: RootState) => state.employees.employees);
    const [filteredData, setFilteredData] = useState(employees);

    const handleSearch = (value: string) => {
        const filtered = employees.filter(employee =>
            Object.values(employee).some(val =>
                String(val).toLowerCase().includes(value.toLowerCase())
            )
        );
        setFilteredData(filtered);
    };

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });

    const handleShowSizeChange = (current: number, size: number) => {
        setPagination({
            current: 1, // Reset to first page when page size changes
            pageSize: size,
        });
    };

    const columns: Column[] = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            sorter: (a, b) => a.firstName.localeCompare(b.firstName),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            sorter: (a, b) => a.lastName.localeCompare(b.lastName),
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dateOfBirth',
            key: 'dateOfBirth',
            sorter: (a, b) => {
                const dateA = new Date(a.dateOfBirth).getTime();
                const dateB = new Date(b.dateOfBirth).getTime();
                return dateA - dateB;
            },
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
            sorter: (a, b) => {
                const dateA = new Date(a.startDate).getTime();
                const dateB = new Date(b.startDate).getTime();
                return dateA - dateB;
            },
        },
        {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            sorter: (a, b) => a.street.toLowerCase().localeCompare(b.street.toLowerCase()),
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            sorter: (a, b) => a.city.localeCompare(b.city),
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            sorter: (a, b) => a.state.localeCompare(b.state),
        },
        {
            title: 'Zip Code',
            dataIndex: 'zipCode',
            key: 'zipCode',
            sorter: (a, b) => a.zipCode.localeCompare(b.zipCode),
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
            sorter: (a, b) => a.department.localeCompare(b.department),
        },
    ];

    return (
        <main>
            <section className={styles.content}>
                <h2>Current Employees</h2>
                <Input.Search
                    placeholder="Search..."
                    allowClear
                    onChange={e => handleSearch(e.target.value)}
                    style={{marginBottom: 16}}
                />
                <Table
                    dataSource={filteredData}
                    columns={columns}
                    pagination={{
                        current: pagination.current,
                        pageSize: pagination.pageSize,
                        showSizeChanger: true,
                        pageSizeOptions: ['10', '20', '50', '100'],
                        showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        onShowSizeChange: handleShowSizeChange,
                        onChange: (page, pageSize) => setPagination({ current: page, pageSize}),
                        }}
                />
            </section>
        </main>
    );
};

export default ViewCurrentEmployees;
