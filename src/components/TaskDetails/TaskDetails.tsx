import { useParams, useNavigate } from "react-router-dom";
import { useGetTaskQuery } from "../../redux/services/tasks";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import s from "./TaskDetails.module.css";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: task, error, isLoading } = useGetTaskQuery(id || "1");

  return (
    <section className={s.container}>
      <div className={s.goBackContainer} onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </div>
      {isLoading && <p>Loading task details...</p>}
      {error && <p>Error</p>}
      {task && (
        <div className={s.details}>
          <h1>Task Details</h1>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <div className={s.statusPriority}>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TaskDetails;
