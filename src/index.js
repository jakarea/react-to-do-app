import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';

var tasks = [];
var localTasks = localStorage.getItem('storedTasks');
if(localTasks){
	tasks = JSON.parse(localTasks);
}

var competedTasks = [];
var completedLocalTasks = localStorage.getItem('finishTasks');
if(completedLocalTasks){
	competedTasks = JSON.parse(completedLocalTasks);
}

ReactDOM.render(<ToDoApp tasks = {tasks} finish = {competedTasks}/>, document.getElementById('root'));

