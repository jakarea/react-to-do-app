import React, { Component} from 'react';

class AddNewTask extends Component{
	constructor(props) {
    super(props);
    //this.state = {task: ''};
    this.handleNewTask = this.handleNewTask.bind(this);
  }

	handleNewTask(e){
		e.preventDefault();
		this.setState({task: this.refs.task.value});
		this.props.updateTasks(this.refs.task.value);
		this.refs.task.value= '';
	}

	render(){
		return(
			<form onSubmit={this.handleNewTask} >
				<input type="text" className="form-control" ref="task" />
				<input type="submit" className="btn btn-primary btn-sm form-control" value="Add Task" />
			</form>	
		);
	}
}

export default AddNewTask;
