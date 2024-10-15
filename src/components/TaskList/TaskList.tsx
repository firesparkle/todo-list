import React, { useEffect, useState } from "react";
import { IState } from "../../models/IState";
import { bindActionCreators } from "redux";
import { taskActions } from "../../store/actions/taskActions";
import { connect } from "react-redux";
import { ITaskState } from "../../store/reducers/taskReducer";
import { ITaskItem } from "../../models/ITaskItem";
import TaskItem from "../TaskItem/TaskItem";
import "./taskList.css";
import FilterComponent from "../FilterComponent/FilterComponent";
import InputComponent from "../InputComponent/InputComponent";
import ListingComponent from "../ListingComponent/ListingComponent";

interface ComponentProps {
  taskState: ITaskState;
}

type CombinedProps = ComponentProps & typeof taskActions;

const TaskList: React.FC<CombinedProps> = ({
  taskState,
  addTask,
  getTasks,
  deleteTask,
  completeTask,
}) => {
  const [newTitle, SetNewTitle] = useState<string>("");

  const [filter, setFilter] = useState<string>("all");

  const [tasks, setTasks] = useState<ITaskItem[]>([]);

  const onFilterChange = (e: any) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    console.log(filter);
    const taskList = taskState.taskList;
    if (filter === "all") {
      setTasks(taskList);
    } else if (filter === "completed") {
      const completedtasks = taskList.filter((task) => !!task.isChecked);
      setTasks(completedtasks);
    } else {
      const pendingtasks = taskList.filter((task) => !task.isChecked);
      setTasks(pendingtasks);
    }
  }, [taskState, filter]);

  const onChangeTitle = (e: any) => {
    SetNewTitle(e.target.value);
  };

  const onAddTask = () => {
    if (newTitle !== "") {
      const newTask: ITaskItem = {
        id: new Date().toLocaleTimeString(),
        title: newTitle,
        isChecked: false,
      };
      addTask(newTask);
      SetNewTitle("");
    }
  };

  const onDeleteTask = (id: string) => {
    deleteTask(id);
  };

  const onCompleteTask = (id: string, isChecked: boolean) => {
    completeTask(id, isChecked);
  };

  console.log(taskState);

  if (taskState.loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <div className="input-listing-container">
        <div className="filter-input-container ">
          <InputComponent
            newTitle={newTitle}
            onChangeTitle={onChangeTitle}
            onAddTask={onAddTask}
          />
          <FilterComponent filter={filter} onFilterChange={onFilterChange} />
        </div>
        <div className="task-list-container">
          <ListingComponent
            tasks={tasks}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return { taskState: state.taskListState };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ ...taskActions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
