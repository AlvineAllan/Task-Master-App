# TaskMaster App

TaskMaster is a cutting-edge task management system designed to enhance organization-wide task tracking, assignment, and completion. It offers a user-friendly interface, robust features, and efficient communication channels, revolutionizing productivity and clarity among team members.

## Problem Statement

TaskMaster is a comprehensive task management system designed to streamline and optimize task tracking, assignment, and completion within organizations. The existing systems often lack user-friendly interfaces, robust features, and efficient communication channels, leading to decreased productivity and increased confusion among team members. TaskMaster aims to address these shortcomings by providing a user-friendly and feature-rich solution.

## MVP Features

### React Frontend:

#### User Registration and Authentication 
- Develop Registration and Login forms with fields for username, email, and password.
- Implement client-side validation for form inputs.
- Integrate with backend API endpoints for user registration and authentication.

#### Dashboard Overview 
- Upon successful login, display an overview dashboard showcasing task lists, deadlines, and progress.
- Include basic stats such as total tasks completed, overdue tasks, and upcoming deadlines.
- Utilize React components to visualize data in an informative and visually appealing manner.

#### Task Lists (Joses Wasike)
- Enable users to create, view, edit, and delete task lists.
- Include options for organizing tasks by project, priority, or due date.
- Implement drag-and-drop functionality for easy task list reordering.

#### Task Creation and Assignment 
- Develop forms for creating new tasks with fields for title, description, due date, priority, and assignment.
- Allow users to assign tasks to team members and set deadlines.
- Provide autocomplete suggestions for assigning tasks based on user input.

#### Task Details and Comments 
- Allow users to view detailed information for each task, including description, due date, priority, and comments.
- Enable users to add comments to tasks, facilitating communication and collaboration among team members.

#### Progress Tracking 
- Display visual indicators of task progress, such as completion percentage and status labels.
- Allow users to mark tasks as complete, update status, and track changes over time.


### Python Backend

#### User Management:
- Develop API endpoints for user registration, login, and authentication using Flask routes.
- Implement JWT/session authentication for securing endpoints and validating user sessions.

#### Database Integration:
- Set up a relational database (e.g., PostgreSQL) to store user information, task data, and comments.
- Utilize SQLAlchemy ORM for interacting with the database within Flask applications.

#### Task Management API:
- Create API endpoints for CRUD operations on tasks, task lists, and comments.
- Implement endpoints for creating, updating, deleting tasks, assigning tasks, and adding comments.

#### Pagination:
- Implement pagination for large datasets to improve performance and manage resource usage.
- Provide options for limiting the number of tasks displayed per page and navigating through pages.

#### Error Handling:
- Develop error-handling mechanisms to provide informative error messages and ensure a smooth user experience.
- Handle edge cases such as invalid input, database errors, and authentication failures gracefully.

#### Authentication Middleware:
- Develop middleware for securing API endpoints and validating user authentication using JWT tokens.
- Apply decorators to Flask routes to enforce authentication requirements for accessing protected resources.

#### Logging and Monitoring:
- Implement logging of critical events and monitoring of system health to identify and resolve issues proactively.
- Log user actions, API requests, and errors to track system activity and troubleshoot problems.

#### Security Measures:
- Implement security measures such as data encryption, input validation, and role-based access control to protect user data and prevent unauthorized access.

## Endpoints

- `/login`: Login
- `/check-session`: CheckSession
- `/signup`: Signup
- `/logout`: Logout
- `/users`: Users
- `/users/<int:user_id>`: UsersByID
- `/projects`: Projects
- `/projects/<int:project_id>`: ProjectsByID
- `/tasks`: Tasks
- `/tasks/<int:task_id>`: TasksByID
- `/comments`: Comments
- `/comments/<int:comment_id>`: CommentByID

## Contributors

- Joses Wasike (Frontend)
- Moreen Wanjugu (Frontend)
- Sheila Chebii (Backend)
- Alvine Allan (Backend)

Feel free to reach out to any of the contributors for further information or collaboration!
