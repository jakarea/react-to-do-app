import React from 'react';

class ToDoList extends React.Component{
        constructor(){
        super();
        this.complete = this.complete.bind(this);
        }

        complete(elm){
            var value= elm.target.parentNode.querySelector('span').innerText;
            this.props.remove(value);
        }
	render(){
		return(
		       <ul className="list-group">{
        	        this.props.tasks.map( (task,i) =>{
                            return(
                                <li key={i} className="list-group-item list-group-item-info">
                                    <span>{task}</span>
                                    <input type="submit" value="Complete" 
                                    onClick={this.complete}
                                    className="btn btn-warning btn-xs pull-right"/>
                                </li>
                            )
                        })
        	       }</ul>
		);
	}
}

export default ToDoList;