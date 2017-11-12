import React from 'react';

class ToDoList extends React.Component{
        constructor(){
        super();
        }
	render(){
		return(
		       <ul className="list-group">{
        	        this.props.tasks.map( (task,i) =>{
                                return(
                                        <li key={i} className="list-group-item list-group-item-info">{task}<input type="submit" value="Complete" className="btn btn-warning btn-xs pull-right"/></li>
                                )
                        })
        	       }</ul>
		);
	}
}

export default ToDoList;