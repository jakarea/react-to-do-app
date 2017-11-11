import React, { Component } from 'react';
import AddNewTask from './AddNewTask';
import ToDoList from './ToDoList';
import CompletedTask from './CompletedTask';
import '../assets/css/App.css';

class ToDoApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do App Using ReactJs And Local Storage</h1>
        </header>
        <div className="col-md-4">
        	<h3>Add New Task</h3>
        	<AddNewTask />
        </div>	
        <div className="col-md-4">
        	<h3>To Do List</h3>
        		<ToDoList />
        </div>	
        <div className="col-md-4">
        	<h3>Completed Tasks</h3>
        	<CompletedTask/>
        </div>	
      </div>

    );
  }
}

export default ToDoApp;
