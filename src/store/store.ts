import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";

const store = configureStore({ reducer: { taskListState: taskReducer } });

export default store;
