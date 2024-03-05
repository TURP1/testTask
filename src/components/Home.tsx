import { useGetTasksQuery } from "../redux/services/tasks";
import TasksList from "./TasksList/TasksList";

const Home = (): JSX.Element => {
  const { data: tasks, error, isLoading } = useGetTasksQuery();

  return (
    <section>
      {error && <p>Error</p>}
      {isLoading && <p>Loading users...</p>}
      {tasks && <TasksList tasks={tasks} />}
    </section>
  );
};

export default Home;
