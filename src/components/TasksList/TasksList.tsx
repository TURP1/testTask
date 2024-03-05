import { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { TaskType, useDeleteTaskMutation } from "../../redux/services/tasks";
import { TaskStatusContainer } from "./TaskStatusContainer";
import { AddTaskForm } from "../TaskForm/AddTaskForm";
import { EditTaskForm } from "../TaskForm/EditTaskForm";

import s from "./TasksList.module.css";

const TasksList = ({ tasks }: { tasks: TaskType[] }) => {
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [showChangeForm, setShowChangeForm] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<TaskType | null>(null);

  const [deleteTaskMutation] = useDeleteTaskMutation();

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteTaskMutation(id);
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const handleChangeTask = (task: TaskType) => {
    setCurrentTask(task);
    setShowChangeForm(true);
  };

  return (
    <section>
      <Fab
        className={s.createTaskBtn}
        color="success"
        aria-label="add"
        onClick={() => setShowAddForm(true)}
      >
        <AddIcon />
      </Fab>
      <div className={s.statusContainer}>
        <TaskStatusContainer
          tasks={tasks}
          handleChangeTask={handleChangeTask}
          handleDeleteTask={handleDeleteTask}
          statusTitle="new"
        />
        <TaskStatusContainer
          tasks={tasks}
          handleChangeTask={handleChangeTask}
          handleDeleteTask={handleDeleteTask}
          statusTitle="in progress"
        />
        <TaskStatusContainer
          tasks={tasks}
          handleChangeTask={handleChangeTask}
          handleDeleteTask={handleDeleteTask}
          statusTitle="completed"
        />
      </div>
      {showAddForm && <AddTaskForm onCreate={() => setShowAddForm(false)} />}
      {showChangeForm && currentTask && (
        <EditTaskForm
          task={currentTask}
          onChange={() => setShowChangeForm(false)}
        />
      )}
    </section>
  );
};

export default TasksList;
