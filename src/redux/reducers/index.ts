import { tasksAPI } from "../services/tasks"

const reducers = {
  [tasksAPI.reducerPath] : tasksAPI.reducer
  //others
}
export const getReducers = () => ({ ...reducers })

