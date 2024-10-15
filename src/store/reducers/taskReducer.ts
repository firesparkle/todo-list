import { error } from "console";
import { ITaskItem } from "../../models/ITaskItem";

export interface ITaskState {
  taskList: ITaskItem[];
  loading: boolean;
  error: boolean;
}

const initialState: ITaskState = {
  taskList: [],
  loading: false,
  error: false,
};

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "REQUEST_TASKS": {
      return { ...state, loading: true, error: false };
    }

    case "ADD_TASK": {
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
        loading: false,
        error: false,
      };
    }

    case "DELETE_TASK": {
      return {
        ...state,
        taskList: [
          ...state.taskList.filter((task) => task.id !== action.payload),
        ],
        loading: false,
        error: false,
      };
    }

    case "COMPLETE_TASK": {
      return {
        ...state,
        taskList: [
          ...state.taskList.map((task) => {
            if (task.id === action.payload.id) {
              return { ...task, isChecked: action.payload.isChecked };
            }
            return task;
          }),
        ],
        loading: false,
      };
    }

    case "GET_TASKS": {
      return { ...state, taskList: action.payload, loading: false };
    }

    case "ERROR_OCCURED": {
      return { ...state, loading: false, error: true };
    }

    default: {
      return state;
    }
  }
};

export default taskReducer;
