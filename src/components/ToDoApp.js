import React, { Component } from 'react';
import AddNewTask from './AddNewTask';
import ToDoList from './ToDoList';
import CompletedTask from './CompletedTask';
import '../assets/css/App.css';

class ToDoApp extends Component {
  constructor(props){
    super(props);
    this.state = { tasks:this.props.tasks, finish: this.props.finish};
    this.updateTasks = this.updateTasks.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.finishTask = this.finishTask.bind(this);
  }

  updateTasks(task){
    var updatedTasks = this.state.tasks;
    updatedTasks.unshift(task);
    this.setState({tasks:updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }

  removeTask(task){
    var updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(task),1);
    this.setState({tasks:updatedTasks});
    this.updateLocalStorage(updatedTasks);
    this.finishTask(task);
  }

  finishTask(task){
    var finishTasks = this.state.finish;
    finishTasks.unshift(task);
    this.setState({finish:finishTasks});
    this.finishLocalStorage(finishTasks);
    console.log(finishTasks);
  }

  updateLocalStorage(updatedTasks){
    localStorage.setItem('storedTasks',JSON.stringify(updatedTasks));
  }

  finishLocalStorage(finishTasks){
    localStorage.setItem('finishTasks',JSON.stringify(finishTasks));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do App Using ReactJs And Local Storage</h1>
        </header>

        <div className="col-md-4">
        	<h3>Add New Task</h3>
        	<AddNewTask updateTasks = {this.updateTasks}/>
        </div>	

        <div className="col-md-4">
        	<h3>To Do List</h3>
        		<ToDoList tasks = {this.state.tasks} remove= {this.removeTask} />
        </div>

        <div className="col-md-4">
        	<h3>Completed Tasks</h3>
        	<CompletedTask finishes = {this.state.finish} />
        </div>	
      </div>

    );
  }
}

export default ToDoApp;
