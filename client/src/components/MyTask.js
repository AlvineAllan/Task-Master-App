import React, { useState, useEffect } from 'react';
import './MyTask.css'; // Import MyTask.css for styling

const MyTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Fetch tasks associated with User 2 from the backend
        const response = await fetch('/tasks/collaborator', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('JWT')}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        
        const responseData = await response.json();
        setTasks(responseData); // Update the state with fetched tasks
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array ensures useEffect runs only once when component mounts

  return (
    <div className="my-task">
      <h2>My Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Progress</th>
            {/* <th>Project</th> */}
            <th>Collaborator Email</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over tasks array and display task data */}
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.due_date}</td>
              <td>{task.priority}</td>
              <td>{task.progress}</td>
              {/* <td>{task.project}</td> */}
              <td>{task.collaborator_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTask;
