import React, { Component } from 'react';

class CompletedTask extends Component{
        constructor(){
                super();
        }
	render(){
		return(
			<ul className="list-group">{
                        this.props.finishes.map( (task,i) =>{
                            return(
                                <li key={i} className="list-group-item list-group-item-success">
                                    <span>{task}</span>
                                </li>
                            )
                        })
                       }</ul>
		);
	}
}

export default CompletedTask;