import React, { Component } from 'react'
import AddTaskComponent from './AddTaskComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default class TaskComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blockno: 0,
            showDiv: false // <-- note the new property in state
        }

        this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask() {
        this.setState({
            blockno: this.state.blockno + 1,
            showDiv: true
        })
    }
    render() {
        return (
            <div>
                <div onClick={this.handleAddTask} className="flex-row">
                    <div className="d-flex justify-content-center">
                    <button class="btn btn-primary me-2" > <label><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>Add a task</label></button>
                    </div>
                    {
                        this.state.showDiv
                            ?
                            <div className="d-flex justify-content-center">
                                <AddTaskComponent />
                            </div>
                            : ''
                    }
                </div>
            </div>
        )
    }
}
