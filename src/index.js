import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';

var Tasks = ['THis is task 1','THis is task 2','This is task 3','Is It Task 4?','Yes, It is task 5'];

ReactDOM.render(<ToDoApp tasks = {Tasks}/>, document.getElementById('root'));

