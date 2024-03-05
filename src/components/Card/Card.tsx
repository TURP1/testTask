import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { TaskType } from "../../redux/services/tasks";
import { MainButton } from "../MainButton";
import { PriorityList } from "./PriorityList";
import { ROUTES } from "../../constants/routes";

import s from "./Card.module.css";

type CardProps = {
  task: TaskType;
  handleChangeTask: (task: TaskType) => void;
  handleDeleteTask: (id: string) => void;
};

export const Card = ({
  task,
  handleChangeTask,
  handleDeleteTask,
}: CardProps) => {
  return (
    <div className={s.card}>
      <Link className={s.linkBox} to={`${ROUTES.TASKS}/${task.id}`}>
        <PriorityList priority={task.priority} />
        <div className={s.title}>{task.title}</div>
        <div className={s.description}>{task.description}</div>
      </Link>
      <div className={s.buttonsBlock}>
        <MainButton
          icon={<ChangeCircleIcon />}
          text="Change"
          onClick={() => handleChangeTask(task)}
        />
        <MainButton
          color="error"
          icon={<DeleteIcon />}
          text="Delete"
          onClick={() => handleDeleteTask(task.id)}
        />
      </div>
    </div>
  );
};
