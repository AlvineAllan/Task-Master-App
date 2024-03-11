import React, { useState } from 'react';
import './project.css';

const Project = () => {
    const [showForm, setShowForm] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        project_name: '',
        deadline: ''
    });

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log("Input changed:", name, value);

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.project_name.trim() === '') {
            console.error('Project name cannot be empty.');
            return;
        }

        fetch("http://127.0.0.1:5555/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('JWT')}` 
            },
            body: JSON.stringify(formData)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log("Success:", data);
            setSuccessMessage(data.Message);
            
            setFormData({
                project_name: '',
                deadline: ''
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            setSuccessMessage("Error occurred while submitting the form.");
        });
    };

    return (
        <div>
            <button className="button" onClick={toggleForm}>Add Project</button>
            {showForm && (
                <form className="project-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="project_name"
                        placeholder="Project name"
                        value={formData.project_name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="date"
                        name="deadline"
                        placeholder="Deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}

            {successMessage && <div className="success-message">{successMessage}</div>}

            <table className="project-table">
                <thead>
                    <tr>
                        <th>Project name</th>
                        <th>Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Table rows will be populated with data dynamically */}
                </tbody>
            </table>
        </div>
    );
}

export default Project;
