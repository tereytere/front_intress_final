import React, { useState, useEffect } from 'react';
import './selectTask.css';

function TaskAssignment() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedTask, setSelectedTask] = useState('');
  const [assignmentResult, setAssignmentResult] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/apipersonal/list')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));

    fetch('http://127.0.0.1:8000/apitasks/list')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error(error));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    // Aquí es donde se actualizan los estados en el cliente
    setAssignmentResult({ user: selectedUser, task: selectedTask });
    setSelectedUser('');
    setSelectedTask('');
  }

  return (
    <div className="table">
        <h2>Asignar Tareas</h2>
      <form  onSubmit={handleSubmit}>
        <div className='asign_task'>
        <select id="talleres" value={selectedUser} onChange={event => setSelectedUser(event.target.value)}>
          <option value="">Select a user</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}{user.surname}</option>
          ))}
        </select>
        <br />
        <select id="talleres" value={selectedTask} onChange={event => setSelectedTask(event.target.value)}>
          <option value="">Select a task</option>
          {tasks.map(task => (
            <option key={task.id} value={task.id}>{task.name}</option>
          ))}
        </select>
        </div>
        <br />
        <button className='btn_tasks' type="submit" >Asignar tarea</button>
      </form>
      {assignmentResult && (
        <div>
          Tarea asignada con éxito {assignmentResult.user}!
        </div>
      )}
    </div>
  );
}

export default TaskAssignment;
