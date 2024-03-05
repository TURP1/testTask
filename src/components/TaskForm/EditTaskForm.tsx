import { TaskType, useUpdateTaskMutation } from "../../redux/services/tasks";
import { TaskForm } from "./TaskForm";

export const EditTaskForm = ({
  task,
  onChange,
}: {
  task: TaskType;
  onChange: () => void;
}) => {
  const [updateTaskMutation] = useUpdateTaskMutation();

  const handleSubmit = async (data: TaskType) => {
    await updateTaskMutation(data);
    onChange();
  };

  return (
    <TaskForm
      defaultValues={task}
      onSubmit={handleSubmit}
      onCancel={onChange}
      variant="changeTask"
    />
  );
};
