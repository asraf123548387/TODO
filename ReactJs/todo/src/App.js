

import ViewTaskComponent from './components/ViewTasksComponent';
import TaskComponent from './components/TaskComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App container ">
      <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
        <div class="row m-1 p-4">
          <div class="col">
            <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <u>Task mangement</u>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column ">
          <div className="justify-content-center">
            <TaskComponent />
          </div>
          <div className=" justify-content-center">
            <ViewTaskComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
