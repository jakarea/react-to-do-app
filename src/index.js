import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';

var tasks = [];
var localTasks = localStorage.getItem('storedTasks');
if(localStorage){
	tasks = JSON.parse(localTasks);
}

ReactDOM.render(<ToDoApp tasks = {tasks}/>, document.getElementById('root'));

