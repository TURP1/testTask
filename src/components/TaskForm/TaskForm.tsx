import { useForm } from "react-hook-form";
import { TaskType } from "../../redux/services/tasks";

import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import s from "./TaskForm.module.css";

interface TaskFormProps {
  defaultValues?: TaskType;
  onSubmit: (data: TaskType) => Promise<void>;
  onCancel: () => void;
  variant: "createTask" | "changeTask";
}

export const TaskForm = ({
  defaultValues,
  onSubmit,
  onCancel,
  variant,
}: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const submitHandler = async (data: TaskType) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Failed to submit task:", error);
    }
  };

  return (
    <div className={s.taskFormContainer}>
      <form className={s.taskForm} onSubmit={handleSubmit(submitHandler)}>
        {variant === "createTask" ? (
          <span className={s.taskFormHeader}>Create Task</span>
        ) : (
          <span className={s.taskFormHeader}>Change Task</span>
        )}
        <FormControl fullWidth>
          <TextField
            fullWidth
            helperText={errors.title && "This field is required"}
            label="Title"
            {...register("title", { required: true })}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            fullWidth
            helperText={errors.description && "This field is required"}
            label="Description"
            multiline
            rows={4}
            {...register("description", { required: true })}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            fullWidth
            defaultValue={defaultValues?.status || ""}
            {...register("status", { required: true })}
          >
            <MenuItem value="new">New</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
          {errors.status && (
            <FormHelperText>This field is required</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Priority</InputLabel>
          <Select
            label="Priority"
            defaultValue={defaultValues?.priority || ""}
            fullWidth
            {...register("priority", { required: true })}
          >
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="mid">Mid</MenuItem>
            <MenuItem value="low">Low</MenuItem>
          </Select>
          {errors.priority && (
            <FormHelperText>This field is required</FormHelperText>
          )}
        </FormControl>
        <Button color="success" type="submit">
          Submit
        </Button>
        <Button color="error" type="button" onClick={onCancel}>
          Cancel
        </Button>
      </form>
    </div>
  );
};
