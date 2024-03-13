import React, { useState, useEffect } from 'react';
import './MyTask.css'; // Import MyTask.css for styling
import Comment from './Comment';

const MyTask = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // Track the selected task

  useEffect(() => {
    const fetchTasks = async () => {
      try {
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
        setTasks(responseData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleCommentClick = (task) => {
    setSelectedTask(task); // Set the selected task when the comment button is clicked
  };

  const handleUpdateClick = (taskId) => {
    // Handle update action
    console.log('Update task with ID:', taskId);
  };

  const handleDeleteClick = (taskId) => {
    // Handle delete action
    console.log('Delete task with ID:', taskId);
  };

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
            <th>Collaborator Email</th>
            <th>Comments</th>
            <th>Action</th> {/* Add a new column for actions */}
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.due_date}</td>
              <td>{task.priority}</td>
              <td>{task.progress}</td>
              <td>{task.collaborator_email}</td>
              <td>
                <button onClick={() => handleCommentClick(task)}>Comments</button>
                {selectedTask && selectedTask.id === task.id && (
                  <Comment task={selectedTask} onClose={() => setSelectedTask(null)} />
                )}
              </td>
              <td>
                <button className="update-button" onClick={() => handleUpdateClick(task.id)}>Update</button>
                <button className="delete-button" onClick={() => handleDeleteClick(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTask;
