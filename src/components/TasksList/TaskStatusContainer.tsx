import { StatusType, TaskType } from "../../redux/services/tasks";
import { Card } from "../Card/Card";

import s from "./TasksList.module.css";

export const TaskStatusContainer = ({
  tasks,
  statusTitle,
  handleChangeTask,
  handleDeleteTask,
}: {
  tasks: TaskType[];
  statusTitle: StatusType;
  handleChangeTask: (task: TaskType) => void;
  handleDeleteTask: (id: string) => Promise<void>;
}) => {
  return (
    <div className={s.statusHeader}>
      <h3>{statusTitle}</h3>
      <div className={s.cardList}>
        {tasks
          .filter((el) => el.status === statusTitle)
          .map((task) => (
            <Card
              key={task.id}
              task={task}
              handleChangeTask={handleChangeTask}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
      </div>
    </div>
  );
};
