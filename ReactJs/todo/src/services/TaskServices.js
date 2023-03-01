import axios from "axios";
class TaskServices {
   
    savetask(tasks){
        return axios.post("http://localhost:8080/savetask",tasks);
    }
    viewTasks(){
        return axios.get("http://localhost:8080/viewtask");
    }
    deleteTask(taskid){
        return axios.post("http://localhost:8080/deletebyid/"+taskid)       
    }
    updateStatus(taskid,status){
        return axios.post("http://localhost:8080/updateStatus/"+taskid+"/"+status) 
    }
}
export default new TaskServices();