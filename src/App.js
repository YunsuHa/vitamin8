import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">To-Do List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
