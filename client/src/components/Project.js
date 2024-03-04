import React from 'react';
import './project.css'; 

const Project = () => {
    return (
        <div>
            <button className="button">Add Project</button>
            <table className="project-table">
                <thead>
                    <tr>
                        <th>Project name</th>
                        <th>Deadline</th>
                        <th>Collaborators</th>
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