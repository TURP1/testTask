import { TaskType, useCreateTaskMutation } from "../../redux/services/tasks";
import { TaskForm } from "./TaskForm";

export const AddTaskForm = ({ onCreate }: { onCreate: () => void }) => {
    const [createTaskMutation] = useCreateTaskMutation();
  
    const handleSubmit = async (data: TaskType) => {
      await createTaskMutation(data);
      onCreate();
    };
  
    return (
      <TaskForm
        variant="createTask"
        onSubmit={handleSubmit}
        onCancel={onCreate}
      />
    );
  };
  