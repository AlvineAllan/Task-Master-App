import React from 'react';
import './MyTask.css'; // Import MyTask.css for styling

const MyTask = () => {
  return (
    <div className="my-task">
      <h2>My Tasks</h2>
      <button className="add-task-button">Add Tasks</button> {/* Add the button */}
      <table>
        <thead>
          <tr>
            <th>Task name</th>
            <th>Deadline</th>
            <th>Projects</th>
            <th>Collaborators</th>
            <th>Priority</th>
            <th>Progress</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows will be populated with data dynamically */}
        </tbody>
      </table>
    </div>
  );
};

export default MyTask;