import React, { Component} from 'react';

class AddNewTask extends Component{
	render(){
		return(
			<form >
				<input type="text" className="form-control"/>
				<input type="submit" className="btn btn-primary btn-sm form-control" value="Add Task"/>
			</form>	
		);
	}
}

export default AddNewTask;
