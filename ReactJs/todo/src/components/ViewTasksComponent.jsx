import react, { Component } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import TaskServices from "../services/TaskServices"




export class ViewTaskComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }

    }
    componentDidMount() {
        TaskServices.viewTasks().then((res) => {
            this.setState({ tasks: res.data });
            console.log(res);
        })

    }
    handleDeleteTask(taskid = null) {
        // console.log(taskid);
        // alert(taskid);
        console.log(JSON.stringify(taskid))
        TaskServices.deleteTask(taskid).then((res) => {
            TaskServices.viewTasks().then((res) => {
                this.setState({ tasks: res.data });
                // console.log(res);
            })
            // console.log(res);
        });

    }
    handleUpdateTaskNotCompleted(taskid) {
        console.log(taskid);
        const status = "created"
        console.log(status);
        console.log(JSON.stringify(taskid))
        TaskServices.updateStatus(taskid, status).then((res) => {
            TaskServices.viewTasks().then((res) => {
                this.setState({ tasks: res.data });
                // console.log(res);
            })
            // console.log(res);
        });

    }
    handleUpdateTaskCompleted(taskid) {
        console.log(taskid);
        const status = "completed"
        console.log(status);
        console.log(JSON.stringify(taskid))
        TaskServices.updateStatus(taskid, status).then((res) => {
            TaskServices.viewTasks().then((res) => {
                this.setState({ tasks: res.data });
                // console.log(res);
            })
            // console.log(res);
        });

    }
    render() {
        return (
            <div>
                {/* <form action=""> */}
                {
                    this.state.tasks.map(
                        t => {
                            if (t.status == "completed") {
                                return <center>
                                    <div class="row mx-1 px-5 pb-3 w-80">
                                        <div class="col mx-auto">
                                            <div class="row px-3 align-items-center todo-item rounded">
                                                <div class="col px-1 m-1 d-flex align-items-center">
                                                   <h4> <input type="checkbox" class="custom-control-input" onClick={this.handleUpdateTaskNotCompleted.bind(this, t.id)} checked /></h4>
                                                    <s>   <input type="text" class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value={t.task} title="" /></s>
                                                    {/* <input type="text" class="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="Buy groceries for next week" /> */}
                                                </div>
                                                <div class="col-auto m-1 p-0 px-3 d-none">
                                                </div>
                                                <div class="col-auto m-1 p-0 todo-actions">
                                                    <div class="row d-flex align-items-center justify-content-end">
                                                        <h5 class="m-0 p-0 px-2 pointer">
                                                            <FontAwesomeIcon icon={faTrash} onClick={this.handleDeleteTask.bind(this, t.id)}></FontAwesomeIcon>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            }
                            if (t.status == "created") {
                                return <center>
                                    <div class="row mx-1 px-5 pb-3 w-80">
                                        <div class="col mx-auto">
                                            <div class="row px-3 align-items-center todo-item rounded">
                                                <div class="col px-1 m-1 d-flex align-items-center">
                                                    <input type="checkbox"  onClick={this.handleUpdateTaskCompleted.bind(this, t.id)}  />
                                                    <input type="text" class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value={t.task} title="" />
                                                    {/* <input type="text" class="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="Buy groceries for next week" /> */}
                                                </div>
                                                <div class="col-auto m-1 p-0 px-3 d-none">
                                                </div>
                                                <div class="col-auto m-1 p-0 todo-actions">
                                                    <div class="row d-flex align-items-center justify-content-end">
                                                        <h5 class="m-0 p-0 px-2 pointer" >
                                                            <FontAwesomeIcon icon={faTrash} onClick={this.handleDeleteTask.bind(this, t.id)}    ></FontAwesomeIcon>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            }
                        }
                    )
                }
            </div >
        )
    }
}
export default ViewTaskComponent