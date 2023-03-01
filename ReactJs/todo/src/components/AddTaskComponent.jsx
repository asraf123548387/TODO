
import react, { Component } from "react";
import TaskServices from "../services/TaskServices"
export class AddTaskComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // tasks: [],
            task: "",
            status: "created"
        }
        this.handleTask = this.handleTask.bind(this);
        
    }
    handleTask = (event) => {
        this.setState({
            task: event.target.value,
           
        })
    }
    // handleStatus = (event) =>{
    //     this.setState({
    //         status:0
    //     })
    // }
    handleChange = (event) => {
        console.log("success");
        let tasks = {
            task: this.state.task,
            status: this.state.status
        }
        console.log(JSON.stringify(tasks))
        TaskServices.savetask(tasks).then((res) => {
            console.log(res);
        });
    }

    render() {
        return (
            <div>
                <form>
                    {/* <div className="flex-row ">
                    <input type="text" class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" placeholder="what do you want to do?" value={this.state.task} onChange={this.handleTask} />
                    <button onClick={this.handleChange} className="justify-content-center">Add Task</button>
                    </div> */}
               



                <div class="row m-1 p-3">
        <div class="col col-11 mx-auto">
            <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div class="col">
                    <input class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .." value={this.state.task} onChange={this.handleTask}/>
                </div>
                <div class="col-auto px-0 mx-0 mr-2">
                    <button onClick={this.handleChange}  class="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>

    </form>


            </div>
        )
    }
}
export default AddTaskComponent