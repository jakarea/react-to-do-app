import React, { Component } from 'react';

class ToDoList extends Component{
	render(){
		return(
			<ul className="list-group">
        		<li className="list-group-item list-group-item-info"> Jakarea Parvez <input type="submit" value="Complete" className="btn btn-warning btn-xs pull-right"/></li>
        		<li className="list-group-item list-group-item-info"> Jakarea Parvez <input type="submit" value="Complete" className="btn btn-warning btn-xs pull-right"/></li>
        		<li className="list-group-item list-group-item-info"> Jakarea Parvez <input type="submit" value="Complete" className="btn btn-warning btn-xs pull-right"/></li>
        		<li className="list-group-item list-group-item-info"> Jakarea Parvez <input type="submit" value="Complete" className="btn btn-warning btn-xs pull-right"/></li>
        		<li className="list-group-item list-group-item-info"> Jakarea Parvez <input type="submit" value="Complete" className="btn btn-warning btn-xs pull-right"/></li>
        		<li className="list-group-item list-group-item-info"> Jakarea Parvez <input type="submit" value="Complete" className="btn btn-warning btn-xs pull-right"/></li>
        	</ul>
		);
	}
}

export default ToDoList;