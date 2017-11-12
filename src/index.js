import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';

var tasks = [];

ReactDOM.render(<ToDoApp tasks = {tasks}/>, document.getElementById('root'));

