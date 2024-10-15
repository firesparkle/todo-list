import { ITaskItem } from "../../models/ITaskItem";

export const taskActions = {
  getTasks: () => {
    return async (dispatch: any) => {
      dispatch({ type: "REQUEST_TASKS" });

      try {
        const data = await fetch("/data.json");
        if (!data.ok) {
          throw new Error("Error fetching data");
        }
        const jsonData = await data.json();
        dispatch({ type: "GET_TASKS", payload: jsonData });
      } catch (err) {
        dispatch({ type: "ERROR_OCCURED" });
      }
    };
  },

  addTask: (taskItem: ITaskItem) => {
    return async (dispatch: any) => {
      dispatch({ type: "REQUEST_TASKS" });
      try {
        // const data = await fetch("/data.json");
        // if (!data.ok) {
        //   throw new Error("Error adding data");                 //stimulated if apis are provided
        // }
        // const jsonData = await data.json();
        dispatch({ type: "ADD_TASK", payload: taskItem });
      } catch (err) {
        dispatch({ type: "ERROR_OCCURED" });
      }
    };
  },

  deleteTask: (id: string) => {
    return async (dispatch: any) => {
      dispatch({ type: "REQUEST_TASKS" });
      try {
        //   const data=await fetch("/data.json");
        //   if(!data.ok){
        //     throw new Error("Error fetching data")       //stimulated if apis are provided
        //   }
        //   const jsonData=await data.json();

        dispatch({ type: "DELETE_TASK", payload: id });
      } catch (err) {
        dispatch({ type: "ERROR_OCCURED" });
      }
    };
  },

  completeTask: (id: string, isChecked: boolean) => {
    return async (dispatch: any) => {
      try {
        dispatch({ type: "REQUEST_TASKS" });

        //   const data=await fetch("/data.json");
        //   if(!data.ok){
        //     throw new Error("Error fetching data")      //stimulated if apis are provided
        //   }
        //   const jsonData=await data.json();
        dispatch({ type: "COMPLETE_TASK", payload: { id, isChecked } });
      } catch (err) {
        dispatch({ type: "ERROR_OCCURED" });
      }
    };
  },
};
