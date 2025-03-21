import React, {FormEvent, useState} from "react";
import Input from "../../components/input/Input.tsx";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button.tsx";
import styles from "./CreateEmployee.module.css";

// Interfaces


// Component creation
const CreateEmployee: React.FC = () => {
    // React states
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [zipCode, setZipCode] = useState<string>("");

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const options = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
    ];

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                        value={firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="First Name"
                        required
                    />
                    <Input
                        label="Last Name"
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Last Name"
                        required
                    />
                    <Input
                        label="Date of Birth"
                        id="dateOfBirth"
                        type="text"
                        value={dateOfBirth}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setDateOfBirth(e.target.value)
                        }
                        placeholder="Date of Birth"
                        required
                    />
                    <Input
                        label="Stard Date"
                        id="startDate"
                        type="text"
                        value={startDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setStartDate(e.target.value)
                        }
                        placeholder="Start Date"
                        required
                    />
                    <fieldset className="address">
                        <legend>Address</legend>
                        <Input
                            label="Street"
                            id="street"
                            type="text"
                            value={street}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setStreet(e.target.value)
                            }
                            placeholder="Street"
                            required
                        />
                        <Input
                            label="City"
                            id="city"
                            type="text"
                            value={city}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setCity(e.target.value)
                            }
                            placeholder="City"
                            required
                        />
                        <Input
                            label="State"
                            id="state"
                            type="text"
                            value={state}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setState(e.target.value)
                            }
                            placeholder="State"
                            required
                        />
                        <Input
                            label="Zip Code"
                            id="zipCode"
                            type="number"
                            value={zipCode}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setZipCode(e.target.value)
                            }
                            placeholder="Zip Code"
                            required
                        />
                    </fieldset>
                    <Select
                        label="Department"
                        options={options}
                        value={selectedValue}
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
